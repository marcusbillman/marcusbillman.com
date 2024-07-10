import {ImageIcon} from '@sanity/icons'

export default {
  title: 'Gallery block',
  name: 'galleryBlock',
  type: 'object',
  icon: ImageIcon,
  fields: [
    {
      name: 'title',
      title: 'Block name',
      type: 'string',
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        {
          type: 'imageWithAlt',
        },
      ],
      options: {
        layout: 'grid',
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
        subtitle: 'Gallery block',
      }
    },
  },
}
