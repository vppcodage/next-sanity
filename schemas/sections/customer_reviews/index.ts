export default {
  name: 'customer_reviews',
  title: 'Customer Reviews',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {name: 'reviews', title: 'Reviews', type: 'array', of: [{type: 'all_customer_reviews'}]},
    {
      name: 'section_image',
      title: 'Section Image',
      type: 'custom_image',
    },
  ],
  preview: {
    prepare: () => {
      return {
        title: 'Customer Reviews',
      }
    },
  },
}
