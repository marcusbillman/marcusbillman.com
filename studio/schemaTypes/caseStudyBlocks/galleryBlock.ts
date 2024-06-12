export default {
  title: 'Gallery block',
  name: 'galleryBlock',
  type: 'object',
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
    },
  ],
  initialValue: () => ({
    title: 'Gallery block',
  }),
}
