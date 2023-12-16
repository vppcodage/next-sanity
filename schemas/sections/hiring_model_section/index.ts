import {modes} from '../../../lib/constant/select-options'

export default {
  name: 'hiring_model_section',
  title: 'Hiring Model Section',
  type: 'object',
  fields: [
    {
      name: 'title_subtitle',
      title: 'Title Subtitle',
      type: 'title',
    },
    {
      name: 'sub_sections',
      title: 'Sub Sections',
      type: 'array',
      of: [{type: 'hire_team'}],
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
        title: 'Hiring Model Section',
      }
    },
  },
}
