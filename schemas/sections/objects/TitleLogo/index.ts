export default {
  name: 'title_logo_array',
  title: 'Title Logo Array',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'logo_array',
      title: 'Logo Array',
      type: 'array',
      of: [{type: 'custom_image'}],
    },
  ],
  preview: {
    prepare: () => {
      return {
        title: 'Title Logo Array',
      }
    },
  },
}
