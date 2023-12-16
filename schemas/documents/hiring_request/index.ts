export default {
  name: 'hiring_request',
  title: 'Hiring Request',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      readOnly: () => {
        return true
      },
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
      readOnly: () => {
        return true
      },
    },
    {
      name: 'project_type',
      title: 'Project Type',
      type: 'string',
      readOnly: () => {
        return true
      },
    },
    {
      name: 'message',
      title: 'Message',
      type: 'text',
      readOnly: () => {
        return true
      },
    },
  ],
  preview: {
    select: {
      title: 'name',
    },
  },
}
