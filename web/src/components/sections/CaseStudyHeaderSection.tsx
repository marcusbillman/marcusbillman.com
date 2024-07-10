import type { Project } from '@studio/sanity.types';
import DotGrid from '@/components/DotGrid';
import Glow from '@/components/Glow';
import Button from '@/components/Button';
import { ArrowLeft } from '@phosphor-icons/react/dist/ssr';

interface Props {
  project: Project;
}

export default function CaseStudyHeaderSection({ project }: Props) {
  return (
    <header className="sticky top-0 flex flex-col overflow-hidden px-4 py-32 lg:min-h-[75vh] lg:px-16 lg:py-64">
      <div className="mx-auto w-full max-w-7xl space-y-6 lg:space-y-12">
        <div className="flex items-center gap-4">
          <Button
            text="Portfolio"
            icon={ArrowLeft}
            iconSide="left"
            size="small"
            href="/portfolio"
            className="hidden sm:block"
          />
          <p className="font-serif text-xl font-medium italic text-primary lg:text-2xl">
            {project.name}
          </p>
        </div>
        <h1 className="max-w-prose text-balance text-4xl md:text-7xl lg:text-8xl">
          {project.headline}
        </h1>
        <p className="max-w-prose text-balance text-xl lg:ml-[50%] lg:text-2xl">
          {project.preamble}
        </p>
      </div>

      {/* Backgrounds */}
      <DotGrid dim="default" />
      <Glow
        color="orange"
        className="left-[10%] top-[10%] w-full -translate-x-1/2 -translate-y-1/2"
      />
      <Glow
        color="blueberry"
        className="bottom-[10%] right-[10%] w-full translate-x-1/2 translate-y-1/2"
      />
    </header>
  );
}
