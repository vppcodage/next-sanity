export default {
  name: 'footer_banner',
  title: 'Footer Banner',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'banner_title',
      title: 'Banner Title',
      type: 'string',
    },
    {
      name: 'content',
      title: 'Content',
      type: 'rich_text',
    },
    {
      name: 'button',
      title: 'Button',
      type: 'button',
    },
    {
      name: 'extra_text',
      title: 'Extra text',
      type: 'extra_text_link',
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{type: 'custom_image'}],
    },
  ],
}
