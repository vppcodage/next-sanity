export default {
  name: 'staff',
  title: 'Staff',
  type: 'document',
  fields: [
    {
      name: 'staff_name',
      title: 'Staff Name',
      type: 'string',
    },
    {
      name: 'staff_post',
      title: 'Staff Post',
      type: 'string',
    },
    {
      name: 'staff_content',
      title: 'Staff Content',
      type: 'rich_text',
    },
    {
      name: 'staff_image',
      title: 'Staff Image',
      type: 'custom_image',
    },
    {
      name: 'company',
      title: 'Company',
      type: 'label_link',
    },
  ],
  preview: {
    prepare: () => {
      return {
        title: 'Staff',
      }
    },
  },
}
