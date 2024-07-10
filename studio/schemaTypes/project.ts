import {Rule} from 'sanity'
import {orderRankField, orderRankOrdering} from '@sanity/orderable-document-list'

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
      description: 'Introductory paragraph summarizing the project — a few sentences',
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
          {title: 'Case study', value: 'CASE_STUDY'},
          {title: 'Side project', value: 'SIDE_PROJECT'},
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
      of: [{type: 'textBlock'}, {type: 'galleryBlock'}, {type: 'metadataBlock'}],
      group: 'main',
      hidden: ({document}: {document: any}) => document?.type !== 'CASE_STUDY',
    },
    {
      name: 'linkUrl',
      title: 'Link URL',
      type: 'url',
      description: 'URL to the live app, project repository, etc.',
      group: 'main',
      hidden: ({document}: {document: any}) => document?.type !== 'SIDE_PROJECT',
    },
    orderRankField({type: 'category'}),
  ],
  initialValue: () => ({
    featured: true,
    type: 'CASE_STUDY',
  }),
  orderings: [orderRankOrdering],
  preview: {
    select: {
      title: 'name',
      subtitle: 'headline',
      media: 'coverImage',
    },
  },
}
