import {Rule} from 'sanity'
import {orderRankField, orderRankOrdering} from '@sanity/orderable-document-list'

export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  groups: [
    {
      name: 'caseStudy',
      title: 'Case study',
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
      group: 'caseStudy',
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
      group: 'caseStudy',
      validation: (Rule: Rule) => Rule.required().max(100),
    },
    {
      name: 'preamble',
      title: 'Preamble',
      type: 'text',
      description: 'Introductory paragraph summarizing the project — a few sentences',
      rows: 4,
      group: 'caseStudy',
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
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'string'}],
      group: 'meta',
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
      group: 'caseStudy',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'caseStudyBlocks',
      title: 'Case study blocks',
      type: 'array',
      group: 'caseStudy',
      of: [{type: 'textBlock'}, {type: 'galleryBlock'}],
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      description: 'Only for internal use, not shown on the website',
      group: 'meta',
      validation: (Rule: Rule) => Rule.required(),
    },
    orderRankField({type: 'category'}),
  ],
  initialValue: () => ({
    featured: true,
    publishedAt: new Date().toISOString(),
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
