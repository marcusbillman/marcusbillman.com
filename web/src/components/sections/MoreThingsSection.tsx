import {
  ArrowRight,
  ArrowUpRight,
  Flask,
} from '@phosphor-icons/react/dist/ssr';
import { Dribbble, GitHub, LinkedIn, SoundCloud } from '@/components/icons';
import { isExternalUrl } from '@/util';
import type React from 'react';
import type { Icon as PhosphorIcon } from '@phosphor-icons/react/dist/lib/types';
import type { CustomIcon } from '@/components/icons';
import DotGrid from '@/components/DotGrid';
import { ButtonClick, CodeBlock, Phone } from '@/components/illustrations';

export default function MoreThingsSection() {
  return (
    <section className="px-4 lg:px-16">
      <h2 className="text-4xl font-medium lg:text-6xl">
        More things made by me 🍱
      </h2>
      <ul className="mt-12 grid gap-6 md:grid-cols-6 md:grid-rows-[repeat(4,max(10vw,12rem))] lg:mt-16 lg:gap-8">
        <BentoCard
          title="Side projects"
          description="Web apps and experiments"
          icon={Flask}
          href="portfolio"
          className="h-[50vh] bg-gradient-to-b from-[#bfcaf1] to-[#889ef1] text-black md:col-span-3 md:row-span-2 md:h-auto xl:col-span-4"
        >
          <img
            src="/assets/images/screenshot-soundboard.jpg"
            alt="App screenshot"
            className="absolute left-[20%] top-[0%] h-48 rotate-[30deg] rounded-2xl shadow-xl"
            aria-hidden
          />
          <img
            src="/assets/images/screenshot-cooldownload.jpg"
            alt="App screenshot"
            className="absolute bottom-[0%] left-[35%] h-48 rotate-[30deg] rounded-2xl shadow-xl"
            aria-hidden
          />
          <ButtonClick className="absolute left-[90%] top-[0%] rotate-[30deg] drop-shadow-xl" />
          <Phone className="absolute left-[80%] top-[15%] rotate-[30deg] drop-shadow-xl" />
          <CodeBlock className="absolute left-[90%] top-[60%] rotate-[30deg] drop-shadow-xl" />
          <DotGrid />
        </BentoCard>
        <BentoCard
          title="Dribbble"
          description="Design explorations"
          icon={Dribbble}
          href="https://m-b.me/dribbble"
          className="h-[50vh] bg-[url('/assets/images/designer-desk.jpg')] bg-cover bg-center md:col-span-3 md:row-span-2 md:h-auto xl:col-span-2"
        >
          <DotGrid dim="strong" />
        </BentoCard>
        <BentoCard
          title="SoundCloud"
          description="Music"
          icon={SoundCloud}
          href="https://m-b.me/soundcloud"
          className="h-[50vh] bg-[url('/assets/images/music-flatlay.jpg')] bg-cover bg-center text-white md:col-span-3 md:row-span-2 md:h-auto"
        >
          <div className="absolute inset-0 isolate bg-gradient-to-b from-[#FF5722CC] to-[#FF5722]">
            <DotGrid />
          </div>
        </BentoCard>
        <BentoCard
          title="GitHub"
          description="Code"
          icon={GitHub}
          href="https://m-b.me/github"
          className="border border-transparent hover:border-default hover:bg-default md:col-span-3 md:h-auto"
        />
        <BentoCard
          title="LinkedIn"
          description="Networking"
          icon={LinkedIn}
          href="https://m-b.me/linkedin"
          className="border border-transparent hover:border hover:bg-default md:col-span-3 md:h-auto"
        />
      </ul>
    </section>
  );
}

interface BentoCardProps {
  title: string;
  description: string;
  icon?: PhosphorIcon | CustomIcon;
  href: string;
  className?: string;
  children?: React.ReactNode;
}

function BentoCard({
  title,
  description,
  icon,
  href,
  className,
  children,
}: BentoCardProps) {
  const LeftIconComponent = icon;
  const RightIconComponent = isExternalUrl(href) ? ArrowUpRight : ArrowRight;

  return (
    <li
      className={`${className} group relative isolate overflow-hidden rounded-2xl bg-subtle transition-all focus-within:z-10 focus-within:scale-105 focus-within:ring hover:z-10 hover:shadow-lg motion-safe:duration-500 motion-safe:ease-smooth motion-safe:hover:scale-105`}
    >
      <a href={href} className="flex h-full flex-col justify-between gap-3 p-4">
        <div className="flex w-fit origin-top-left items-center gap-2 rounded-2xl bg-default p-4 transition-all duration-500 ease-smooth motion-safe:group-hover:scale-95">
          {LeftIconComponent && <LeftIconComponent className="text-primary" />}
          <h3 className="text-default">{title}</h3>
          <RightIconComponent className="text-subtle" />
        </div>
        <div className="-z-10">{children}</div>
        <p className="max-w-[15ch] origin-bottom-left text-3xl transition-transform duration-500 ease-smooth motion-safe:group-hover:scale-95 lg:mb-3 lg:ml-3 lg:text-5xl">
          {description}
        </p>
      </a>
    </li>
  );
}
