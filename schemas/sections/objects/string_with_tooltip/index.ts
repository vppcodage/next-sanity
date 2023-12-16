export default {
  name: "string_with_tooltip",
  title: "String with Tooltip",
  type: "object",
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'tooltip_name',
      title: 'Tooltip Name',
      type: 'rich_text',
    },
    {
      name: 'tooltip_image',
      title: 'Tooltip Image',
      type: 'custom_image',
    },
  ],
};