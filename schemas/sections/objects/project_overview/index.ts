export default {
  name: 'project_overview',
  title: 'Project Overview',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'rich_text',
    },
  ],
  preview: {
    prepare: () => {
      return {
        title: 'Project Overview',
      }
    },
  },
}
