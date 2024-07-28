import { LinkIcon } from '@sanity/icons';
import { Rule } from 'sanity';

export default {
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
    prepare({ text, url }: { text: string; url: string }) {
      return {
        title: text,
        subtitle: url,
      };
    },
  },
};
