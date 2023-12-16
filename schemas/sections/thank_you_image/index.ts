import {modes} from '../../../lib/constant/select-options'

export default {
  name: 'thank_you_image',
  title: 'Thank You Image',
  type: 'object',
  fields: [
    {
      name: 'thank_you_image',
      title: 'Thank You Image',
      type: 'custom_image',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
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
        title: 'Thank You Image',
      }
    },
  },
}
