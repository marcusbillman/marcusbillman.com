import {Rule} from 'sanity'

export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  groups: [
    {
      name: 'meta',
      title: 'Meta information',
    },
    {
      name: 'caseStudy',
      title: 'Case study',
    },
  ],
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'Short name for the project, e.g. "My cool project"',
      group: 'caseStudy',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'Used for generating the URL of the project page',
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
      description:
        'Impactful statement, preferrably in present tense, e.g. "Reinventing life, one cinnamon roll at a time"',
      group: 'caseStudy',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'preamble',
      title: 'Preamble',
      type: 'string',
      description:
        'Introductory paragraph, e.g. "A collaboration with a local bakery to create a modern website that showcases their products and services"',
      group: 'caseStudy',
    },
    {
      name: 'sortingIndex',
      title: 'Sorting index',
      type: 'number',
      description:
        'Number used for sorting the projects on the front-end and in the Studio. 1 comes before 2, etc.',
      group: 'meta',
      validation: (Rule: Rule) => Rule.required(),
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
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'date',
      title: 'Date',
      type: 'string',
      description: "E.g. '2021' or 'Nov 2020–Feb 2021'",
      group: 'meta',
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
      description: 'Only for internal use, not shown on the front-end',
      group: 'meta',
      validation: (Rule: Rule) => Rule.required(),
    },
  ],
  initialValue: () => ({
    featured: true,
    publishedAt: new Date().toISOString(),
  }),
  orderings: [
    {
      title: 'Sorting index',
      name: 'sortingIndex',
      by: [{field: 'sortingIndex', direction: 'asc'}],
    },
    {
      title: 'Title',
      name: 'title',
      by: [{field: 'title', direction: 'asc'}],
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'headline',
      media: 'coverImage',
    },
  },
}
