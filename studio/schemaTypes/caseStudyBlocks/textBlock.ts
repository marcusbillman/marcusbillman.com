import {BlockContentIcon} from '@sanity/icons'

export default {
  title: 'Text block',
  name: 'textBlock',
  type: 'object',
  icon: BlockContentIcon,
  fields: [
    {
      name: 'title',
      title: 'Block name',
      type: 'string',
    },
    {
      name: 'text',
      title: 'Text',
      type: 'richText',
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({title}: {title: string}) {
      return {
        title: title,
        subtitle: 'Text block',
      }
    },
  },
}
