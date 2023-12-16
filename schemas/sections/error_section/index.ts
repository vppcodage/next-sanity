import {modes} from '../../../lib/constant/select-options'

export default {
  name: 'error_image',
  title: 'Error Image',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'sub_title',
      title: 'Sub Title',
      type: 'string',
    },
    {
      name: 'error_image',
      title: 'Error Image',
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
        title: '404 Page',
      }
    },
  },
}
