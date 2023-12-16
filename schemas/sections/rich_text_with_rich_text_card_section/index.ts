import {modes} from '../../../lib/constant/select-options'

export default {
  name: 'rich_text_with_rich_text_card_section',
  title: 'Rich Text With Rich Text Card Section',
  type: 'object',
  fields: [
    {
      name: 'definition_rich_text',
      title: 'Definition Rich Text',
      type: 'rich_text',
    },
    {
      name: 'definition_card_array',
      title: 'Definition Card Array',
      type: 'array',
      of: [{type: 'rich_text'}],
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
        title: 'Rich Text With Rich Text Card Section',
      }
    },
  },
}
