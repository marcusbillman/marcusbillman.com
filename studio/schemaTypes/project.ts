import {
  orderRankField,
  orderRankOrdering,
} from '@sanity/orderable-document-list';
import { Rule, SanityDocument, SlugValidationContext } from 'sanity';

export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  groups: [
    {
      name: 'main',
      title: 'Main info',
    },
    {
      name: 'meta',
      title: 'Metadata',
    },
  ],
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'Short, descriptive project name — just a few words',
      group: 'main',
      validation: (Rule: Rule) => Rule.required().max(50),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'Used for generating URLs, based on the name',
      options: {
        source: 'name',
        maxLength: 64,
        isUnique: isUniqueForLanguage,
      },
      group: 'meta',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'headline',
      title: 'Headline',
      type: 'string',
      description: 'Impactful, attention-grabbing statement — one sentence',
      group: 'main',
      validation: (Rule: Rule) => Rule.required().max(100),
    },
    {
      name: 'preamble',
      title: 'Preamble',
      type: 'text',
      description:
        'Introductory paragraph summarizing the project — a few sentences',
      rows: 4,
      group: 'main',
    },
    {
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      description: 'Show this project on the Home page',
      group: 'meta',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'date',
      title: 'Date',
      type: 'string',
      description: "E.g. '2021' or 'Nov 2020–Feb 2021'",
      group: 'meta',
      validation: (Rule: Rule) => Rule.max(25),
    },
    {
      name: 'coverImage',
      title: 'Cover image',
      type: 'imageWithAlt',
      group: 'main',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: [
          { title: 'Case study', value: 'CASE_STUDY' },
          { title: 'Side project', value: 'SIDE_PROJECT' },
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
      group: 'main',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'caseStudyBlocks',
      title: 'Case study blocks',
      type: 'array',
      of: [
        { type: 'textBlock' },
        { type: 'galleryBlock' },
        { type: 'metadataBlock' },
      ],
      group: 'main',
      hidden: ({ document }: { document: SanityDocument }) =>
        document?.type !== 'CASE_STUDY',
    },
    {
      name: 'linkUrl',
      title: 'Link URL',
      type: 'url',
      description: 'URL to the live app, project repository, etc.',
      group: 'main',
      hidden: ({ document }: { document: SanityDocument }) =>
        document?.type !== 'SIDE_PROJECT',
    },
    {
      name: 'language',
      type: 'string',
      readOnly: true,
      hidden: true,
    },
    orderRankField({ type: 'category' }),
  ],
  initialValue: () => ({
    featured: true,
    type: 'CASE_STUDY',
  }),
  orderings: [orderRankOrdering],
  preview: {
    select: {
      name: 'name',
      headline: 'headline',
      coverImage: 'coverImage',
      language: 'language',
    },
    prepare({
      name,
      headline,
      coverImage,
      language,
    }: {
      name: string;
      headline: string;
      coverImage: unknown;
      language: string;
    }) {
      return {
        title: name + (language ? ` (${language.toUpperCase()})` : ''),
        subtitle: headline,
        media: coverImage,
      };
    },
  },
};

/**
 * Checks that the slug is unique among documents of the same type and the same language.
 * In other words, the same slug can be used for documents in different languages.
 * @see https://github.com/justacodename/sanity-document-internationalization/blob/main/docs/05-allowing-the-same-slug-for-translations.md
 */
export async function isUniqueForLanguage(
  slug: string,
  context: SlugValidationContext,
) {
  const { document, getClient } = context;
  if (!document?.language) return true;

  const client = getClient({ apiVersion: '2024-07-27' });
  const id = document._id.replace(/^drafts\./, '');
  const params = {
    draft: `drafts.${id}`,
    published: id,
    language: document.language,
    slug,
  };
  const query = `!defined(*[
    !(_id in [$draft, $published]) &&
    slug.current == $slug &&
    language == $language
  ][0]._id)`;

  const result = await client.fetch(query, params);

  return result;
}
