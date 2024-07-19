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
    },
    {
      name: 'caption',
      type: 'string',
      title: 'Caption',
    },
  ],
};
