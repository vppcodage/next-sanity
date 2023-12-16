import {modes} from '../../../../lib/constant/select-options'

export default {
  name: 'development_process',
  title: 'Development Process',
  type: 'object',
  fields: [
    {
      name: 'process_image',
      title: 'Process Image',
      type: 'custom_image',
    },
    {
      name: 'lable',
      title: 'Lable',
      type: 'string',
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
        title: 'Development Process',
      }
    },
  },
}
