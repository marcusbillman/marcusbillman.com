import {Rule} from 'sanity'
import {LinkIcon, TagIcon, UlistIcon} from '@sanity/icons'

export default {
  title: 'Metadata block',
  name: 'metadataBlock',
  type: 'object',
  icon: UlistIcon,
  fields: [
    {
      name: 'title',
      title: 'Block name',
      type: 'string',
    },
    {
      name: 'metadataFields',
      title: 'Fields',
      type: 'array',
      description:
        'Arbitrary key-value pairs for tech stack, skills used, etc. The project year is automatically added by the front-end.',
      of: [
        {
          name: 'metadataField',
          title: 'Field',
          type: 'object',
          icon: TagIcon,
          fields: [
            {
              name: 'key',
              title: 'Key',
              type: 'string',
              validation: (Rule: Rule) => Rule.required(),
            },
            {
              name: 'values',
              title: 'Value(s)',
              type: 'array',
              of: [{type: 'string'}],
              options: {
                layout: 'tags',
              },
              validation: (Rule: Rule) => Rule.required(),
            },
          ],
          preview: {
            select: {
              key: 'key',
              values: 'values',
            },
            prepare({key, values}: {key: string; values: string[]}) {
              return {
                title: key,
                subtitle: values.join(' • '),
              }
            },
          },
        },
      ],
      options: {
        layout: 'list',
      },
    },
    {
      name: 'metadataLinks',
      title: 'Links',
      type: 'array',
      description:
        'Links to project-related resources like the live app, project repository, etc. Displayed in the front-end as buttons separated from fields.',
      of: [
        {
          name: 'metadataLink',
          title: 'Link',
          type: 'object',
          icon: LinkIcon,
          fields: [
            {
              name: 'text',
              title: 'Text',
              type: 'string',
              validation: (Rule: Rule) => Rule.required(),
            },
            {
              name: 'url',
              title: 'URL',
              type: 'url',
              validation: (Rule: Rule) => Rule.required(),
            },
          ],
          preview: {
            select: {
              text: 'text',
              url: 'url',
            },
            prepare({text, url}: {text: string; url: string}) {
              return {
                title: text,
                subtitle: url,
              }
            },
          },
        },
      ],
      options: {
        layout: 'list',
      },
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({title}: {title: string}) {
      return {
        title: title,
        subtitle: 'Metadata block',
      }
    },
  },
}
