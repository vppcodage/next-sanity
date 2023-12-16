export default {
  name: 'image_title_array',
  title: 'image Title Array',
  type: 'object',
  fields: [
    {
      name: 'our_process_image',
      title: 'Our Process Image',
      type: 'custom_image',
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
  ],
  preview: {
    prepare: () => {
      return {
        title: 'image Title Array',
      }
    },
  },
}
