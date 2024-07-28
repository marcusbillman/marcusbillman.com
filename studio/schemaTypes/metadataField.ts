import { TagIcon } from '@sanity/icons';
import { Rule } from 'sanity';

export default {
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
      of: [{ type: 'string' }],
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
    prepare({ key, values }: { key: string; values: string[] }) {
      return {
        title: key,
        subtitle: values.join(' • '),
      };
    },
  },
};
