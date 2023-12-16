export default {
  name: 'extra_text_link',
  title: 'Extra Text Link',
  type: 'object',
  fields: [
    {
      name: 'text',
      title: 'Text',
      type: 'string',
    },
    {
      name: 'link',
      title: 'Link',
      type: 'label_link',
    },
  ],
}
