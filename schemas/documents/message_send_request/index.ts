export default {
  name: 'message_send_request',
  title: 'Message Send Request',
  type: 'document',
  fields: [
    {
      name: 'first_name',
      title: 'First Name',
      type: 'string',
      readOnly: () => {
        return true
      },
    },
    {
      name: 'last_name',
      title: 'Last Name',
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
      name: 'phone_number',
      title: 'Phone Number',
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
      title: 'first_name',
    },
  },
}
