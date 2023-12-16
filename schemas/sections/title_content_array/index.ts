import {modes} from '../../../lib/constant/select-options'

export default {
  name: 'title_content_array',
  title: 'Title Content Array',
  type: 'object',
  fields: [
    {
      name: 'text_section',
      title: 'Text Section',
      type: 'array',
      of: [{type: 'title_content'}],
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
        title: 'Title Content Array',
      }
    },
  },
}
