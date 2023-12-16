export default {
  name: 'title_content',
  title: 'Title Content',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'content',
      title: 'Content',
      type: 'rich_text',
    },
  ],
  preview: {
    prepare: () => {
      return {
        title: 'Title Content',
      }
    },
  },
}
