export default {
  name: 'open-graph',
  title: 'Open Graph',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'custom_image',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },
  ],
}
