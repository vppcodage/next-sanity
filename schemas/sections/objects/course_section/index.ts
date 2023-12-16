import {modes} from '../../../../lib/constant/select-options'

export default {
  name: 'course_section',
  title: 'Course Section',
  type: 'object',
  fields: [
    {
      name: 'title_subtitle',
      title: 'Title Subtitle',
      type: 'title',
    },
    {
      name: 'course_img',
      title: 'Course Img',
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
  ],

  preview: {
    prepare: () => {
      return {
        title: 'Course Section',
      }
    },
  },
}