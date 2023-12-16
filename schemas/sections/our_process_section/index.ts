import {modes, variant} from '../../../lib/constant/select-options'

export default {
  name: 'our_process_section',
  title: 'Our Process Section',
  type: 'object',
  fields: [
    {
      name: 'title_subtitle',
      title: 'Title Subtitle',
      type: 'title',
    },
    {
      name: 'progress_bar',
      title: 'Progress Bar',
      type: 'boolean',
    },
    {
      name: 'image_title_array',
      title: 'Image Title Array',
      type: 'array',
      of: [{type: 'image_title_array'}],
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
        title: 'Our Process Section',
      }
    },
  },
}
