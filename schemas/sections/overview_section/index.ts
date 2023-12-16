export default {
  name: 'overview_section',
  title: 'Overview Section',
  type: 'object',
  fields: [
    {
      name: 'title_subtitle',
      title: 'Title Subtitle',
      type: 'title',
    },
    {
      name: 'section_title',
      title: 'Section Title',
      type: 'title_description',
    },
    {
      name: 'feature_image',
      title: 'Feature Image',
      type: 'array',
      of: [{type: 'custom_image'}],
    },
    {
      name: 'technology_icon',
      title: 'Technology Icon',
      type: 'array',
      of: [{type: 'custom_image'}],
    },
  ],
  preview: {
    prepare: () => {
      return {
        title: 'Overview Section',
      }
    },
  },
}
