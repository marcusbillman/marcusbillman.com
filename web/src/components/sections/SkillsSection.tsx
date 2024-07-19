import {
  ChatsCircle,
  CubeFocus,
  Heart,
  Lightning,
} from '@phosphor-icons/react/dist/ssr';

import DotGrid from '@/components/DotGrid';
import Glow from '@/components/Glow';

export default function SkillsSection() {
  return (
    <section className="flex flex-col gap-16 px-4 pt-24 lg:px-16 lg:pt-32">
      <h1 className="text-4xl font-medium lg:text-6xl">
        A happy part of a great team 👏
      </h1>
      <p className="max-w-prose text-xl">
        My best work is done in tight-knit teams of skilled people that also
        love what they do. The most inspiring environment is open, honest and
        one where everyone learns from each other.
      </p>
      <ul className="grid gap-6 lg:grid-cols-2 lg:gap-8 2xl:grid-cols-4">
        <li className="relative isolate flex h-96 flex-col justify-between gap-4 overflow-hidden rounded-2xl border bg-subtle p-4 lg:p-6">
          <div className="w-fit rounded-full border bg-default p-3">
            <CubeFocus size={24} className="lg:hidden" />
            <CubeFocus size={32} className="hidden lg:inline" />
          </div>
          <p className="text-xl font-medium lg:text-2xl">
            Systemic thinker with high{' '}
            <span className="font-serif italic text-primary">
              attention to detail.
            </span>
          </p>
          <DotGrid />
          <Glow
            color="blueberry"
            className="left-0 top-0 h-[250%] -translate-x-1/2 -translate-y-1/2"
          />
        </li>
        <li className="relative isolate flex h-96 flex-col justify-between gap-4 overflow-hidden rounded-2xl border bg-subtle p-4 lg:p-6">
          <div className="w-fit rounded-full border bg-default p-3">
            <Lightning size={24} className="lg:hidden" />
            <Lightning size={32} className="hidden lg:inline" />
          </div>
          <p className="text-xl font-medium lg:text-2xl">
            <span className="font-serif italic text-primary">Fast learner</span>{' '}
            of new tools and domains.
          </p>
          <DotGrid />
          <Glow
            color="blueberry"
            className="bottom-0 right-0 h-[250%] translate-x-1/2 translate-y-1/2"
          />
        </li>
        <li className="relative isolate flex h-96 flex-col justify-between gap-4 overflow-hidden rounded-2xl border bg-subtle p-4 lg:p-6">
          <div className="w-fit rounded-full border bg-default p-3">
            <ChatsCircle size={24} className="lg:hidden" />
            <ChatsCircle size={32} className="hidden lg:inline" />
          </div>
          <p className="text-xl font-medium lg:text-2xl">
            Approachable and open to{' '}
            <span className="font-serif italic text-primary">
              discuss and rethink.
            </span>
          </p>
          <DotGrid />
          <Glow
            color="orange"
            className="bottom-0 left-0 h-[250%] -translate-x-1/2 translate-y-1/2"
          />
        </li>
        <li className="relative isolate flex h-96 flex-col justify-between gap-4 overflow-hidden rounded-2xl border bg-subtle p-4 lg:p-6">
          <div className="w-fit rounded-full border bg-default p-3">
            <Heart size={24} className="lg:hidden" />
            <Heart size={32} className="hidden lg:inline" />
          </div>
          <p className="text-xl font-medium lg:text-2xl">
            Enthusiastic and{' '}
            <span className="font-serif italic text-primary">
              eager to share
            </span>{' '}
            knowledge.
          </p>
          <DotGrid />
          <Glow
            color="orange"
            className="right-0 top-0 h-[250%] -translate-y-1/2 translate-x-1/2"
          />
        </li>
        <li className="relative isolate h-96 overflow-hidden rounded-2xl border bg-subtle lg:col-span-2">
          <div className="absolute bottom-0 left-0 right-0 flex h-1/2 flex-col justify-end bg-gradient-to-b from-white/0 to-white p-4 lg:p-6 dark:from-black/0 dark:to-black">
            <p className="text-xl font-medium lg:text-2xl">
              <span className="font-serif italic text-primary">
                Experienced with technologies
              </span>{' '}
              such as React, TypeScript, Git and Bash.
            </p>
          </div>
          <DotGrid />
          <img
            src="/assets/images/tech-logos.png"
            alt="Grid of web technology logos"
            className="absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 rotate-[30deg]"
          />
        </li>
        {/* TODO: Background image of me giving a presentation */}
        <li className="relative isolate h-96 overflow-hidden rounded-2xl border bg-black lg:col-span-2">
          <div className="absolute bottom-0 left-0 right-0 flex h-1/2 flex-col justify-end bg-gradient-to-b from-black/0 to-black p-4 lg:p-6">
            <p className="text-xl font-medium text-white lg:text-2xl">
              <span className="font-serif italic text-blueberry-300">
                Public speaker
              </span>{' '}
              with engaging visual storytelling.
            </p>
          </div>
        </li>
      </ul>
    </section>
  );
}
