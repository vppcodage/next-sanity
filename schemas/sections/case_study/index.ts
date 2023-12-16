import {modes} from '../../../lib/constant/select-options'

export default {
  name: 'case_study',
  title: 'Case Study',
  type: 'object',
  fields: [
    {
      name: 'title_subtitle',
      title: 'Title Subtitle',
      type: 'title',
    },
    {
      name: 'case_study_img',
      title: 'Case Study Img',
      type: 'custom_image',
    },
    {
      name: 'section_title',
      title: 'Section Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{type: 'author_section'}],
    },
    {
      name: 'read_full_case_study_button',
      title: 'Read Full Case Study Button',
      type: 'button',
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
        title: 'Case Study',
      }
    },
  },
}

