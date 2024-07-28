import { UlistIcon } from '@sanity/icons';

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
      of: [{ type: 'metadataField' }],
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
      of: [{ type: 'metadataLink' }],
      options: {
        layout: 'list',
      },
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }: { title: string }) {
      return {
        title: title,
        subtitle: 'Metadata block',
      };
    },
  },
};
