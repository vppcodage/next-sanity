import {background_classname, modes} from '../../../lib/constant/select-options'

export default {
  name: 'hero_section_case_study_d_page',
  title: 'Hero Section',
  type: 'object',
  fields: [
    {
      name: 'section_title',
      title: 'Section Title',
      type: 'string',
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'button',
      title: 'Button',
      type: 'array',
      of: [{type: 'button'}],
    },
    {
      name: 'image',
      title: 'Image',
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
      name: 'background_classname',
      title: 'background_classname',
      type: 'string',
      initialValue: 'white',
      options: {list: background_classname, direction: 'horizontal', layout: 'radio'},
    },
  ],
  preview: {
    prepare: () => {
      return {
        title: 'Hero Section',
      }
    },
  },
}
