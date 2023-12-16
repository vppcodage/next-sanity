export default {
  name: 'description_author_array',
  title: 'Description Author Array',
  type: 'object',
  fields: [
    {
      name: 'desc',
      title: 'Desc',
      type: 'rich_text',
    },
    {
      name: 'testimonials_author',
      title: 'Testimonials Author',
      type: 'reference',
      to: [{type: 'author_section'}],
    },
  ],
}
