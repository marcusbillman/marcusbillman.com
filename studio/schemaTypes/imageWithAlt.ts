import { Rule } from 'sanity';

export default {
  name: 'imageWithAlt',
  title: 'Image',
  type: 'image',
  options: {
    hotspot: true,
  },
  fields: [
    {
      name: 'alt',
      type: 'string',
      title: 'Alt text',
      description: 'Descriptive text that works in place of the image',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'caption',
      type: 'string',
      title: 'Caption',
      description: 'Supportive text that provides additional context',
    },
  ],
};
