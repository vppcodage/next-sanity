export default {
  name: 'content',
  title: 'Content',
  type: 'object',
  fields: [
    {
      name: 'build_image',
      title: 'Build Image',
      type: 'custom_image',
    },
    {
      name: 'content',
      title: 'Content',
      type: 'rich_text',
    },
  ],
}
