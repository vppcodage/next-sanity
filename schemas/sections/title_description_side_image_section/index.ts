import {modes, variant} from '../../../lib/constant/select-options'

export default {
  name: 'title_description_side_image_Section',
  title: 'Title Description Side Image Section',
  type: 'object',
  fields: [
    {
      name: 'title_subtitle',
      title: 'Title Subtitle',
      type: 'title',
    },
    {
      name: 'desc',
      title: 'Desc',
      type: 'rich_text',
    },
    {
      name: 'side_image',
      title: 'Side Image',
      type: 'custom_image',
    },
    {
      name: 'background',
      title: 'Background',
      type: 'string',
      options: {
        list: [
          {
            title: 'white',
            value: 'background-white',
          },
          {
            title: 'purple',
            value: 'background-purple',
          },
        ],
        direction: 'horizontal',
        layout: 'radio',
      },
    },
    {
      name: 'section_theme',
      title: 'Section Theme',
      type: 'string',
      initialValue: 'bg-white',
      options: {list: modes, direction: 'horizontal', layout: 'radio'},
    },
    {
      name: 'variant',
      title: 'Variant',
      type: 'string',
      initialValue: 'primary',
      options: {list: variant, direction: 'horizontal', layout: 'radio'},
    },
  ],
  preview: {
    prepare: () => {
      return {
        title: 'Title Description Side Image Section',
      }
    },
  },
}
