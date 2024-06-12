export default {
  title: 'Text block',
  name: 'textBlock',
  type: 'object',
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
  initialValue: () => ({
    title: 'Text block',
  }),
}
