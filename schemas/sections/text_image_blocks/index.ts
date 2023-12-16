export default {
  name: 'text_image_blocks',
  title: 'Text Image Blocks',
  type: 'object',
  fields: [
    {
      name: 'section_title',
      title: 'Section Title',
      type: 'title',
    },

    {
      name: 'blocks',
      title: 'Blocks',
      type: 'array',
      of: [{type: 'text_image_block'}],
    },
  ],
  preview: {
    select: {
      title: 'section_title.title',
    },
  },
}
