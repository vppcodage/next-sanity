import { modes } from "../../../lib/constant/select-options"

export default {
  name: 'more_conversation_section',
  title: 'More Conversation Section',
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
      type: 'text',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'custom_image',
    },
    {
      name: 'section_theme',
      title: 'Section Theme',
      type: 'string',
      initialValue: 'bg-white',
      options: {list: modes, direction: 'horizontal', layout: 'radio'},
    },
  ],
  preview: {
    prepare: () => {
      return {
        title: 'More Conversation Section',
      }
    },
  },
}
