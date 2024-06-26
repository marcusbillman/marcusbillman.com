import Switch from '@/components/Switch';
import { DribbbleLogo, Flask, Images } from '@phosphor-icons/react/dist/ssr';
import { useState } from 'react';
import type { Icon } from '@phosphor-icons/react/dist/lib/types';
import type { Project } from '@studio/sanity.types';
import { isExternalUrl, sanityImageUrl } from '@/util';

interface ProjectsProps {
  projects: Project[];
}

export default function Projects({ projects }: ProjectsProps) {
  return (
    <section className="px-4 py-16 lg:px-16">
      <div className="flex flex-col gap-8 xl:flex-row xl:items-center xl:justify-between">
        <h2 className="text-4xl font-medium xl:text-6xl">My work</h2>
        <div className="flex flex-col gap-4 overflow-hidden rounded-2xl xl:flex-row xl:gap-0 xl:border xl:border-default">
          <FilterOption label="Case studies" icon={Images} />
          <FilterOption label="Side projects" icon={Flask} />
          <FilterOption
            label="Dribbble shots"
            icon={DribbbleLogo}
            defaultEnabled={false}
          />
        </div>
      </div>
      <ul className="mt-16 grid grid-cols-1 gap-16 lg:grid-cols-2">
        {projects.map((project) => (
          <Project key={project._id} project={project} />
        ))}
      </ul>
    </section>
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

  return (
    <div
      className={`${isEnabled ? 'font-bold text-default' : 'text-subtle'} flex cursor-pointer items-center gap-2 transition-all xl:border-l xl:border-l-default xl:p-6`}
      onClick={handleClick}
    >
      <IconComponent size={24} weight={isEnabled ? 'fill' : 'regular'} />
      <span className="flex-grow text-xl xl:text-2xl">{label}</span>
      <Switch size="small" checked={isEnabled} />
    </div>
  );
}

interface ProjectProps {
  project: Project;
}

function Project({ project }: ProjectProps) {
  const href = project.linkUrl || '/portfolio/' + project.slug?.current;

  function ProjectTagComponent() {
    if (project.type === 'CASE_STUDY') {
      return <ProjectTag label="Case study" icon={Images} />;
    }
    if (project.type === 'SIDE_PROJECT') {
      return <ProjectTag label="Side project" icon={Flask} />;
    }
  }

  return (
    <li className="group">
      <a
        href={href}
        target={isExternalUrl(href) ? '_blank' : '_self'}
        className="block h-full"
      >
        <img
          src={sanityImageUrl(project.coverImage?.asset!).width(1200).url()}
          className="h-96 w-full rounded-2xl object-cover transition-transform duration-500 ease-smooth group-hover:rotate-3 group-hover:scale-105 group-hover:shadow-lg lg:h-[30vw] 2xl:rounded-4xl"
        />
        <div className="mt-6 flex flex-col gap-3">
          <div className="flex items-center">
            <div className="flex flex-grow items-center gap-4">
              <h3 className="font-serif text-xl font-medium text-primary lg:text-2xl 2xl:text-3xl">
                {project.name}
              </h3>
              <div className="hidden lg:block">
                <ProjectTagComponent />
              </div>
            </div>
            <span className="hidden text-subtle lg:inline 2xl:text-2xl">
              {project.date}
            </span>
          </div>
          <p className="text-balance text-3xl lg:text-4xl 2xl:text-6xl">
            {project.headline}
          </p>
          <div className="flex items-center gap-3 lg:hidden">
            <ProjectTagComponent />
            <span className="text-subtle">{project.date}</span>
          </div>
        </div>
      </a>
    </li>
  );
}

interface ProjectTagProps {
  label: string;
  icon: Icon;
  className?: string;
}

function ProjectTag({ label, icon, className }: ProjectTagProps) {
  const IconComponent = icon;

  return (
    <div
      className={`flex items-center gap-1 rounded-lg border border-default px-2 py-1 text-subtle 2xl:px-3 2xl:py-2 ${className}`}
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
