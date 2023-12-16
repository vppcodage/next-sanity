import {modes} from '../../../lib/constant/select-options'

export default {
  name: 'technology_section',
  title: 'Technology Section',
  type: 'object',
  fields: [
    {
      name: 'title_subtitle',
      title: 'Title Subtitle',
      type: 'title',
    },
    {
      name: 'image_array',
      title: 'Image Array',
      type: 'array',
      of: [{type: 'custom_image'}],
    },
    {
      name: 'single_image',
      title: 'Single Image',
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
        title: 'Technology Section',
      }
    },
  },
}

