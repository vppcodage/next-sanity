export default {
  name: 'section_sidebar',
  title: 'Section Sidebar',
  type: 'document',
  fields: [
    {name: 'label', type: 'string', description: 'Only used in CMS.'},
    {
      name: 'content',
      type: 'array',
      of: [{type: 'title_description_side_image_Section'}, {type: 'join_our_news_letter'}],
    },
  ],
}
