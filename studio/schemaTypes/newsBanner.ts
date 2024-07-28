import { Rule, SanityDocument, ValidationContext } from 'sanity';

export default {
  name: 'newsBanner',
  title: 'News Banner',
  type: 'document',
  fields: [
    {
      name: 'enabled',
      title: 'Enabled',
      type: 'boolean',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'text',
      title: 'Text',
      type: 'string',
      validation: (Rule: Rule) =>
        // Equivalent to Rule.required().max(50), but always passes if the banner is disabled
        Rule.custom((text: string | undefined, context: ValidationContext) => {
          if (!(context.parent as SanityDocument).enabled) {
            return true;
          }
          if (!text) {
            return 'Required';
          }
          if (text.length > 50) {
            return 'Must be at most 50 characters long';
          }
          return true;
        }),
      hidden: ({ document }: { document: SanityDocument }) => !document.enabled,
    },
    {
      name: 'linkUrl',
      title: 'Link URL',
      type: 'url',
      description:
        'Absolute or relative URL to visit when the banner is clicked',
      validation: (Rule: Rule) => Rule.uri({ allowRelative: true }),
      hidden: ({ document }: { document: SanityDocument }) => !document.enabled,
    },
    {
      name: 'language',
      title: 'Language',
      type: 'string',
      hidden: true,
    },
  ],
};
