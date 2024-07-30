import type { DribbbleShot } from '@/utils/dribbble';
import type { PortfolioItem } from '@/utils/portfolio-item';
import type { Icon } from '@phosphor-icons/react/dist/lib/types';
import type {
  Project as PortfolioItemCard,
  Project,
} from '@studio/sanity.types';

import { useEffect, useState } from 'react';
import {
  DribbbleLogo,
  EyeClosed,
  Flask,
  Images,
} from '@phosphor-icons/react/dist/ssr';
import { motion, useReducedMotion } from 'framer-motion';

import Switch from '@/components/Switch';
import { isExternalUrl } from '@/utils';
import t from '@/utils/i18n';
import { sanityImageUrl } from '@/utils/sanity';
import { TIMING_FUNCTIONS } from '@/utils/tailwind';

interface PortfolioItemsSectionProps {
  portfolioItems: PortfolioItem[];
}

export default function PortfolioItemsSection({
  portfolioItems,
}: PortfolioItemsSectionProps) {
  const [filterOptions, setFilterOptions] = useState({
    caseStudies: true,
    sideProjects: true,
    dribbbleShots: false,
  });

  const filteredPortfolioItems = portfolioItems.filter((portfolioItem) => {
    if (portfolioItem.type === 'CASE_STUDY') {
      return filterOptions.caseStudies;
    }
    if (portfolioItem.type === 'SIDE_PROJECT') {
      return filterOptions.sideProjects;
    }
    if (portfolioItem.type === 'DRIBBBLE_SHOT') {
      return filterOptions.dribbbleShots;
    }
    return false;
  });

  // Set filter options based on 'type' URL parameter
  // Example URL: '/portfolio?type=CASE_STUDY&type=SIDE_PROJECT'
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const types = urlParams.getAll('type');
    if (types.length === 0) return;

    setFilterOptions((prevOptions) => ({
      ...prevOptions,
      caseStudies: types.includes('CASE_STUDY'),
      sideProjects: types.includes('SIDE_PROJECT'),
      dribbbleShots: types.includes('DRIBBBLE_SHOT'),
    }));
  }, []);

  return (
    <section className="px-4 py-16 lg:px-16">
      <div className="flex flex-col gap-8 2xl:flex-row 2xl:items-center 2xl:justify-between">
        <h2 className="text-4xl font-medium lg:text-6xl">
          {t('portfolio.myWork')}
        </h2>
        <div className="flex flex-col gap-4 overflow-hidden rounded-2xl lg:flex-row lg:gap-0 lg:divide-x lg:border">
          <FilterOption
            label={t('portfolio.caseStudies')}
            icon={Images}
            isEnabled={filterOptions.caseStudies}
            onChange={() => {
              setFilterOptions((prevOptions) => ({
                ...prevOptions,
                caseStudies: !prevOptions.caseStudies,
              }));
              navigator.vibrate(100);
            }}
          />
          <FilterOption
            label={t('portfolio.sideProjects')}
            icon={Flask}
            isEnabled={filterOptions.sideProjects}
            onChange={() => {
              setFilterOptions((prevOptions) => ({
                ...prevOptions,
                sideProjects: !prevOptions.sideProjects,
              }));
              navigator.vibrate(100);
            }}
          />
          <FilterOption
            label={t('portfolio.dribbbleShots')}
            icon={DribbbleLogo}
            isEnabled={filterOptions.dribbbleShots}
            onChange={() => {
              setFilterOptions((prevOptions) => ({
                ...prevOptions,
                dribbbleShots: !prevOptions.dribbbleShots,
              }));
              navigator.vibrate(100);
            }}
          />
        </div>
      </div>
      <ul className="mt-16 grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-y-32">
        {filteredPortfolioItems.map((portfolioItem) => (
          <PortfolioItemCard
            key={portfolioItem.id}
            portfolioItem={portfolioItem}
          />
        ))}
        {filteredPortfolioItems.length === 0 && (
          <motion.div
            className="flex flex-col items-center gap-4 rounded-2xl border px-4 py-16 lg:col-span-2 lg:gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <EyeClosed size={32} className="text-subtle lg:hidden" />
            <EyeClosed size={64} className="hidden text-subtle lg:block" />
            <div className="flex flex-col gap-2 lg:gap-4">
              <p className="text-center text-xl font-medium lg:text-3xl">
                {t('portfolio.emptyState.heading')}
              </p>
              <p className="text-center text-subtle lg:text-xl">
                {t('portfolio.emptyState.text')}
              </p>
            </div>
          </motion.div>
        )}
      </ul>
    </section>
  );
}

interface PortfolioItemCardProps {
  portfolioItem: PortfolioItem;
}

function PortfolioItemCard({ portfolioItem }: PortfolioItemCardProps) {
  function href() {
    if (portfolioItem.type === 'CASE_STUDY') {
      return `/portfolio/${(portfolioItem.data as Project).slug?.current}`;
    }
    if (portfolioItem.type === 'SIDE_PROJECT') {
      return (portfolioItem.data as Project).linkUrl;
    }
    if (portfolioItem.type === 'DRIBBBLE_SHOT') {
      return (portfolioItem.data as DribbbleShot).html_url;
    }
  }

  function imageUrl() {
    if (
      portfolioItem.type === 'CASE_STUDY' ||
      portfolioItem.type === 'SIDE_PROJECT'
    ) {
      const project = portfolioItem.data as Project;
      if (!project.coverImage?.asset) return '';
      return sanityImageUrl(project.coverImage?.asset).width(1200).url();
    }
    if (portfolioItem.type === 'DRIBBBLE_SHOT') {
      return (portfolioItem.data as DribbbleShot).images.hidpi;
    }
  }

  function imageAlt() {
    if (
      portfolioItem.type === 'CASE_STUDY' ||
      portfolioItem.type === 'SIDE_PROJECT'
    ) {
      const project = portfolioItem.data as Project;
      return project.coverImage?.alt || project.name;
    }
    if (portfolioItem.type === 'DRIBBBLE_SHOT') {
      return (portfolioItem.data as DribbbleShot).title;
    }
  }

  function name() {
    if (
      portfolioItem.type === 'CASE_STUDY' ||
      portfolioItem.type === 'SIDE_PROJECT'
    ) {
      return (portfolioItem.data as Project).name;
    }
    if (portfolioItem.type === 'DRIBBBLE_SHOT') {
      return undefined;
    }
  }

  function date() {
    if (
      portfolioItem.type === 'CASE_STUDY' ||
      portfolioItem.type === 'SIDE_PROJECT'
    ) {
      return (portfolioItem.data as Project).date;
    }
    if (portfolioItem.type === 'DRIBBBLE_SHOT') {
      return (
        portfolioItem.data as DribbbleShot
      ).published_at.toLocaleDateString('en-GB', {
        year: 'numeric',
        month: 'short',
      });
    }
  }

  function headline() {
    if (
      portfolioItem.type === 'CASE_STUDY' ||
      portfolioItem.type === 'SIDE_PROJECT'
    ) {
      return (portfolioItem.data as Project).headline;
    }
    if (portfolioItem.type === 'DRIBBBLE_SHOT') {
      return (portfolioItem.data as DribbbleShot).title;
    }
  }

  function PortfolioItemTagComponent() {
    if (portfolioItem.type === 'CASE_STUDY') {
      return (
        <PortfolioItemTag label={t('portfolio.caseStudy')} icon={Images} />
      );
    }
    if (portfolioItem.type === 'SIDE_PROJECT') {
      return (
        <PortfolioItemTag label={t('portfolio.sideProject')} icon={Flask} />
      );
    }
    if (portfolioItem.type === 'DRIBBBLE_SHOT') {
      return (
        <PortfolioItemTag
          label={t('portfolio.dribbbleShot')}
          icon={DribbbleLogo}
        />
      );
    }
  }

  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.li
      key={portfolioItem.id}
      lang={(portfolioItem.data as Project).language || 'en'}
      layout={!shouldReduceMotion}
      initial={{
        opacity: 0,
        y: shouldReduceMotion ? 0 : 200,
        rotate: shouldReduceMotion ? 0 : 15,
      }}
      animate={{
        opacity: 1,
        y: 0,
        rotate: 0,
      }}
      transition={{ duration: 0.5, ease: TIMING_FUNCTIONS.SMOOTH }}
      className="group"
    >
      <a
        href={href()}
        target={isExternalUrl(href() || '') ? '_blank' : '_self'}
        className="block h-full"
      >
        <img
          src={imageUrl()}
          alt={imageAlt()}
          loading="lazy"
          className="aspect-photo w-full rounded-2xl object-cover transition-all group-focus-within:shadow-lg group-hover:shadow-lg motion-safe:duration-500 motion-safe:ease-smooth motion-safe:group-focus-within:scale-105 motion-safe:group-hover:rotate-3 motion-safe:group-hover:scale-105 2xl:rounded-4xl motion-safe:2xl:group-hover:rotate-1"
        />
        <div className="mt-6 flex flex-col gap-3">
          <div
            className={`${!name() ? 'hidden lg:flex' : 'flex'} items-center`}
          >
            <div className="flex flex-grow items-center gap-4">
              {name() && (
                <h3 className="font-serif text-xl font-medium text-primary lg:text-2xl 2xl:text-3xl">
                  {name()}
                </h3>
              )}
              <div className="hidden lg:block">
                <PortfolioItemTagComponent />
              </div>
            </div>
            <span className="hidden text-subtle lg:inline 2xl:text-2xl">
              {date()}
            </span>
          </div>
          <p className="text-balance text-3xl lg:text-4xl 2xl:text-5xl">
            {headline()}
          </p>
          <div className="flex items-center gap-3 lg:hidden">
            <PortfolioItemTagComponent />
            <span className="text-subtle">{date()}</span>
          </div>
        </div>
      </a>
    </motion.li>
  );
}

interface PortfolioItemTagProps {
  label: string;
  icon: Icon;
  className?: string;
}

function PortfolioItemTag({ label, icon, className }: PortfolioItemTagProps) {
  const IconComponent = icon;

  return (
    <div
      className={`${className} flex items-center gap-1 rounded-lg border px-2 py-1 text-subtle 2xl:px-3 2xl:py-2`}
    >
      <span className="2xl:hidden">
        <IconComponent size={16} />
      </span>
      <span className="hidden 2xl:inline">
        <IconComponent size={24} />
      </span>
      <span className="2xl:text-2xl">{label}</span>
    </div>
  );
}

interface FilterOptionProps {
  label: string;
  icon: Icon;
  isEnabled: boolean;
  onChange: () => void;
}

function FilterOption({ label, icon, isEnabled, onChange }: FilterOptionProps) {
  const IconComponent = icon;

  const id = `filter-${label.toLowerCase().replace(' ', '-')}`;

  return (
    <div
      className={`${isEnabled ? 'font-bold text-default' : 'text-subtle'} flex flex-grow cursor-pointer items-center gap-4 transition-all active:opacity-50 motion-safe:active:scale-90 lg:p-6`}
      onClick={onChange}
    >
      <div className="flex flex-grow items-center gap-2">
        <IconComponent size={24} weight={isEnabled ? 'fill' : 'regular'} />
        <label
          htmlFor={id}
          className="pointer-events-none text-xl 2xl:text-2xl"
        >
          {label}
        </label>
      </div>
      <Switch id={id} size="small" checked={isEnabled} />
    </div>
  );
}
