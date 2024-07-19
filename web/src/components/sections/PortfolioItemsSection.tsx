import type { Icon } from '@phosphor-icons/react/dist/lib/types';
import type {
  Project as PortfolioItemCard,
  Project,
} from '@studio/sanity.types';
import type { DribbbleShot } from '@/util/dribbble';
import type { PortfolioItem } from '@/util/portfolioItem';

import { useState } from 'react';
import {
  DribbbleLogo,
  EyeClosed,
  Flask,
  Images,
} from '@phosphor-icons/react/dist/ssr';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';

import Switch from '@/components/Switch';
import { isExternalUrl } from '@/util';
import { sanityImageUrl } from '@/util/sanity';

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

  const shouldReduceMotion = useReducedMotion();

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

  return (
    <section className="px-4 py-16 lg:px-16">
      <div className="flex flex-col gap-8 2xl:flex-row 2xl:items-center 2xl:justify-between">
        <h2 className="text-4xl font-medium lg:text-6xl">My work</h2>
        <div className="flex flex-col gap-4 overflow-hidden rounded-2xl lg:flex-row lg:gap-0 lg:divide-x lg:border">
          <FilterOption
            label="Case studies"
            icon={Images}
            defaultEnabled={filterOptions.caseStudies}
            onChange={(isEnabled) => {
              setFilterOptions({ ...filterOptions, caseStudies: isEnabled });
            }}
          />
          <FilterOption
            label="Side projects"
            icon={Flask}
            defaultEnabled={filterOptions.sideProjects}
            onChange={(isEnabled) => {
              setFilterOptions({ ...filterOptions, sideProjects: isEnabled });
            }}
          />
          <FilterOption
            label="Dribbble shots"
            icon={DribbbleLogo}
            defaultEnabled={filterOptions.dribbbleShots}
            onChange={(isEnabled) => {
              setFilterOptions({ ...filterOptions, dribbbleShots: isEnabled });
            }}
          />
        </div>
      </div>
      <ul className="mt-16 grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-y-32">
        <AnimatePresence>
          {filteredPortfolioItems.map((portfolioItem) => (
            <PortfolioItemCard
              key={portfolioItem.id}
              portfolioItem={portfolioItem}
            />
          ))}
          {filteredPortfolioItems.length === 0 && (
            <motion.div
              layout={!shouldReduceMotion}
              className="flex flex-col items-center gap-4 rounded-2xl border px-4 py-16 lg:col-span-2 lg:gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <EyeClosed size={32} className="text-subtle lg:hidden" />
              <EyeClosed size={64} className="hidden text-subtle lg:block" />
              <div className="flex flex-col gap-2 lg:gap-4">
                <p className="text-center text-xl font-medium lg:text-3xl">
                  Everyone's hiding!
                </p>
                <p className="text-center text-subtle lg:text-xl">
                  Use the filters above to show my work.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
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
      return <PortfolioItemTag label="Case study" icon={Images} />;
    }
    if (portfolioItem.type === 'SIDE_PROJECT') {
      return <PortfolioItemTag label="Side project" icon={Flask} />;
    }
    if (portfolioItem.type === 'DRIBBBLE_SHOT') {
      return <PortfolioItemTag label="Dribbble shot" icon={DribbbleLogo} />;
    }
  }

  const shouldReduceMotion = useReducedMotion();

  const outProperties = {
    opacity: 0,
    y: shouldReduceMotion ? 0 : 200,
    rotate: shouldReduceMotion ? 0 : 15,
  };

  return (
    <motion.li
      key={portfolioItem.id}
      layout={!shouldReduceMotion}
      initial={outProperties}
      animate={{
        opacity: 1,
        y: 0,
        rotate: 0,
      }}
      exit={outProperties}
      transition={{ duration: 0.5, ease: [0.2, 0, 0, 1] }}
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
  defaultEnabled?: boolean;
  onChange?: (isEnabled: boolean) => void;
}

function FilterOption({
  label,
  icon,
  defaultEnabled = true,
  onChange,
}: FilterOptionProps) {
  const [isEnabled, setIsEnabled] = useState(defaultEnabled);

  const handleClick = () => {
    const newValue = !isEnabled;
    setIsEnabled(newValue);
    if (onChange) onChange(newValue);
  };

  const IconComponent = icon;

  const id = `filter-${label.toLowerCase().replace(' ', '-')}`;

  return (
    <div
      className={`${isEnabled ? 'font-bold text-default' : 'text-subtle'} flex flex-grow cursor-pointer items-center gap-4 transition-all active:scale-90 active:opacity-50 lg:p-6`}
      onClick={handleClick}
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
