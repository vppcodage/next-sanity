export default {
  name: 'title_description_image',
  title: 'Title Description Image',
  type: 'object',
  fields: [
    {
      name: 'section_title',
      title: 'Section Title',
      type: 'title',
    },
    {
      name: 'section_description',
      title: 'Section Description',
      type: 'rich_text',
    },
    {
      name: 'section_image',
      title: 'Section Image',
      type: 'custom_image',
    },
  ],
  preview: {
    prepare: () => {
      return {
        title: 'Title Description Image',
      }
    },
  },
}
