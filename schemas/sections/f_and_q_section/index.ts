import {modes, variant} from '../../../lib/constant/select-options'

export default {
  name: 'f_and_q_section',
  title: 'F&Q Section',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'question_and_answer',
      title: 'Question And Answer',
      type: 'array',
      of: [{type: 'question_and_answer'}],
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
        title: 'F&Q Section',
      }
    },
  },
}
