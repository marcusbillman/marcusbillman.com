import { sanityImageUrl } from '@/util/sanity';
import {
  PortableText,
  type PortableTextComponentProps,
} from '@portabletext/react';
import type {
  TextBlock,
  GalleryBlock,
  RichText,
  ImageWithAlt,
} from '@studio/sanity.types';

export function TextBlockComponent({
  value,
}: PortableTextComponentProps<TextBlock>) {
  return (
    <div className="px-4 lg:px-16">
      <RichTextComponent richText={value.text!} />
    </div>
  );
}

export function GalleryBlockComponent({
  value,
}: PortableTextComponentProps<GalleryBlock>) {
  return (
    <div className="flex flex-wrap justify-stretch gap-4 px-4 lg:gap-8 lg:px-16">
      {value.images!.map((image) => (
        <ImageWithAltComponent imageWithAlt={image} />
      ))}
    </div>
  );
}

interface RichTextComponentProps {
  richText: RichText;
}

export function RichTextComponent({ richText }: RichTextComponentProps) {
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

export function ImageWithAltComponent({
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
