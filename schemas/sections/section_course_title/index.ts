import {modes} from '../../../lib/constant/select-options'

export default {
  name: 'section_course_title',
  title: 'Section Course Title',
  type: 'object',
  fields: [
    {
      name: 'title_subtitle',
      title: 'Title Subtitle',
      type: 'title',
    },
    {
      name: 'bookConsultationButton',
      title: 'Book Consultation Button',
      type: 'button',
    },
    {
      name: 'titleImage',
      title: 'Title Image',
      type: 'array',
      of: [{type: 'course_section'}],
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
        title: 'Section Course Title',
      }
    },
  },
}
