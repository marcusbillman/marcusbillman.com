import { sanityImageUrl } from '@/util/sanity';
import { ArrowLeft } from '@phosphor-icons/react/dist/ssr';
import {
  PortableText,
  type PortableTextComponentProps,
} from '@portabletext/react';
import type {
  TextBlock,
  GalleryBlock,
  MetadataBlock,
  RichText,
  ImageWithAlt,
  Project,
} from '@studio/sanity.types';
import Button from '@/components/Button';
import DotGrid from '@/components/DotGrid';

interface CaseStudyBlocksSectionProps {
  project: Project;
}

export default function CaseStudyBlocksSection({
  project,
}: CaseStudyBlocksSectionProps) {
  return (
    <article className="space-y-16 lg:space-y-24">
      <img
        src={sanityImageUrl(project.coverImage?.asset!).url()}
        alt={project.coverImage?.alt}
        className="block min-h-[50vh] w-full rounded-4xl object-cover object-center lg:rounded-6xl"
      />
      <PortableText
        value={project.caseStudyBlocks!}
        components={{
          types: {
            textBlock: TextBlockComponent,
            galleryBlock: GalleryBlockComponent,
            metadataBlock: (props) => (
              <MetadataBlockComponent {...props} projectDate={project.date} />
            ),
          },
        }}
      />
      <div className="flex flex-col items-center px-4 lg:px-16">
        <Button
          text="All projects"
          icon={ArrowLeft}
          iconSide="left"
          href="/portfolio"
        />
      </div>
    </article>
  );
}

function TextBlockComponent({ value }: PortableTextComponentProps<TextBlock>) {
  return (
    <div className="px-4 lg:px-16">
      <RichTextComponent richText={value.text!} />
    </div>
  );
}

function GalleryBlockComponent({
  value,
}: PortableTextComponentProps<GalleryBlock>) {
  return (
    <div className="flex flex-wrap justify-stretch gap-4 px-4 lg:gap-8 lg:px-16">
      {value.images!.map((image) => (
        <ImageWithAltComponent key={image._key} imageWithAlt={image} />
      ))}
    </div>
  );
}

interface MetadataBlockComponentProps
  extends PortableTextComponentProps<MetadataBlock> {
  projectDate?: string;
}

function MetadataBlockComponent({
  value,
  projectDate,
}: MetadataBlockComponentProps) {
  return (
    <div className="space-y-6 px-4 lg:space-y-8 lg:px-16">
      <dl className="mx-auto max-w-4xl divide-y rounded-2xl border">
        {projectDate && (
          <div className="flex gap-4 p-4">
            <dt className="block w-32 max-w-[25vw] flex-shrink-0 font-serif font-medium italic text-subtle">
              Date
            </dt>
            <dd className="flex-grow">{projectDate}</dd>
          </div>
        )}
        {value.metadataFields?.map((field) => (
          <div key={field.key} className="flex gap-4 p-4">
            <dt className="block w-32 max-w-[25vw] flex-shrink-0 font-serif font-medium italic text-subtle">
              {field.key}
            </dt>
            <dd className="flex-grow">
              <ul className="">
                {field.values?.map((value, index) => (
                  <li key={value} className="inline">
                    {value}
                    {index < field.values?.length! - 1 && ' • '}
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
      {value.metadataLinks && (
        <div className="relative isolate mx-auto flex max-w-4xl flex-wrap justify-center gap-4 rounded-2xl border p-8 lg:p-16">
          {value.metadataLinks.map((link, index) => (
            <Button
              key={link.url}
              text={link.text!}
              href={link.url}
              style={index === 0 ? 'default' : 'subtle'}
            />
          ))}
          <DotGrid />
        </div>
      )}
    </div>
  );
}

interface RichTextComponentProps {
  richText: RichText;
}

function RichTextComponent({ richText }: RichTextComponentProps) {
  return (
    <PortableText
      value={richText}
      components={{
        block: {
          normal: ({ children }) => (
            <p className="mx-auto mb-6 max-w-4xl text-xl lg:mb-8">{children}</p>
          ),
          h1: ({ children }) => (
            <h2 className="mx-auto mb-6 max-w-4xl text-balance text-4xl font-medium lg:mb-8 lg:text-6xl">
              {children}
            </h2>
          ),
          h2: ({ children }) => (
            <h3 className="mx-auto mb-6 max-w-4xl text-balance text-2xl font-medium lg:mb-8 lg:text-4xl">
              {children}
            </h3>
          ),
        },
        list: {
          bullet: ({ children }) => (
            <ul className="mx-auto max-w-4xl list-disc space-y-2 pl-12 text-xl marker:text-primary">
              {children}
            </ul>
          ),
        },
        marks: {
          strong: ({ children }) => <strong>{children}</strong>,
          em: ({ children }) => <em className="font-serif">{children}</em>,
        },
        types: {
          imageWithAlt: ({ value }) => (
            <ImageWithAltComponent
              imageWithAlt={value}
              className="mx-auto my-6 max-w-7xl lg:my-8"
            />
          ),
        },
      }}
    />
  );
}

interface ImageWithAltComponentProps {
  imageWithAlt: ImageWithAlt;
  className?: string;
}

function ImageWithAltComponent({
  imageWithAlt,
  className,
}: ImageWithAltComponentProps) {
  return (
    <div
      className={`${className} relative max-h-screen flex-grow basis-96 flex-col overflow-hidden rounded-2xl lg:rounded-4xl`}
    >
      <img
        key={imageWithAlt.asset?._ref}
        src={sanityImageUrl(imageWithAlt.asset!).url()}
        alt={imageWithAlt.alt}
        className="h-full w-full object-cover"
      />
      {imageWithAlt.caption && (
        <div className="absolute inset-0 top-auto bg-gradient-to-b from-black/0 to-black/50 p-4 lg:p-6">
          <p className="font-serif italic text-white">{imageWithAlt.caption}</p>
        </div>
      )}
    </div>
  );
}
