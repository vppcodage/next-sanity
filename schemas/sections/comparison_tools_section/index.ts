import {modes} from '../../../lib/constant/select-options'

export default {
  name: 'comparison_tools_section',
  title: 'Comparison Tools Section',
  type: 'object',
  fields: [
    {
      name: 'Comparison_Tools_Table',
      title: 'Comparison Tools Table',
      type: 'array',
      of: [{type: 'custom_table'}],
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
        title: 'Comparison Tools Section',
      }
    },
  },
}
