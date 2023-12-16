import {imagevariant, modes} from '../../../lib/constant/select-options'

export default {
  name: 'title_image_array_section',
  title: 'Title Image Array Section',
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
      name: 'section_theme',
      title: 'Section Theme',
      type: 'string',
      initialValue: 'bg-white',
      options: {list: modes, direction: 'horizontal', layout: 'radio'},
    },
    {
      name: 'imagevariant',
      title: 'Image Variant',
      type: 'string',
      initialValue: 'primary',
      options: {list: imagevariant, direction: 'horizontal', layout: 'radio'},
    },
  ],
  preview: {
    prepare: () => {
      return {
        title: 'Title Image Array Section',
      }
    },
  },
}
