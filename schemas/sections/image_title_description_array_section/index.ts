import {modes, variant} from '../../../lib/constant/select-options'

export default {
  name: 'image_title_description_array_section',
  title: 'Image Title Description Array Section',
  type: 'object',
  fields: [
    {
      name: 'title_subtitle',
      title: 'Title Subtitle',
      type: 'title',
    },
    {
      name: 'title_blogs',
      title: 'Title Blogs',
      type: 'array',
      of: [
        {
          type: 'title_blog',
        },
      ],
    },
    {
      name: 'section_theme',
      title: 'Section Theme',
      type: 'string',
      initialValue: 'bg-white',
      options: {list: modes, direction: 'horizontal', layout: 'radio'},
    },
    {
      name: 'align',
      title: 'Align',
      type: 'string',
      initialValue: 'center',
      options: {
        list: [
          {title: 'Left', value: 'left'},
          {title: 'Center', value: 'center'},
        ],
        direction: 'horizontal',
        layout: 'radio',
      },
    },
    {
      name: 'background',
      title: 'Background',
      type: 'string',
      initialValue: 'withBackground',
      options: {
        list: [
          {title: 'With-Background', value: 'withBackground'},
          {title: 'Without-Background', value: 'withoutBackground'},
        ],
        direction: 'horizontal',
        layout: 'radio',
      },
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
        title: 'Image Title Description Array Section',
      }
    },
  },
}
