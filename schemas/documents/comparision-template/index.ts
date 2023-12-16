export default {
  name: 'comparision_template',
  title: 'Comparision Template',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      required: true,
    },
    {
      name: 'fields',
      title: 'Fields',
      type: 'array',
      of: [{type: 'comparision_field'}],
    },
  ],
}
