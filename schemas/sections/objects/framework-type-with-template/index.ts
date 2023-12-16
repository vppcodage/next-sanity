export default {
  name: 'framework_type_with_template',
  title: 'Type',
  type: 'object',
  fields: [
    {
      name: 'type',
      title: 'Type',
      type: 'reference',
      to: [{type: 'framework_type'}],
      required: true,
    },
    {
      name: 'template',
      title: 'Template',
      type: 'reference',
      to: [{type: 'comparision_template'}],
      required: true,
    },
  ],
}
