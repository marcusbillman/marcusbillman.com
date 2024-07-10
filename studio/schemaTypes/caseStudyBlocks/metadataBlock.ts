import {Rule} from 'sanity'
import {UlistIcon} from '@sanity/icons'

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
      name: 'metadataItems',
      title: 'Items',
      type: 'array',
      description:
        'Arbitrary key-value pairs for tech stack, skills used, etc. The project year is automatically added by the front-end.',
      of: [
        {
          name: 'metadataItem',
          title: 'Item',
          type: 'object',
          fields: [
            {
              name: 'key',
              title: 'Key',
              type: 'string',
              validation: (Rule: Rule) => Rule.required(),
            },
            {
              name: 'value',
              title: 'Value(s)',
              type: 'array',
              of: [{type: 'string'}],
              options: {
                layout: 'tags',
              },
            },
          ],
          preview: {
            select: {
              key: 'key',
              value: 'value',
            },
            prepare({key, value}: {key: string; value: string[]}) {
              return {
                title: key,
                subtitle: value.join(' • '),
              }
            },
          },
        },
      ],
      options: {
        layout: 'list',
        modal: 'popover',
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
