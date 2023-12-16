import {modes} from '../../../lib/constant/select-options'

export default {
  name: 'case_studies_client_section',
  title: 'Case Studies Client Section',
  type: 'object',
  fields: [
    {
      name: 'title_subtitle',
      title: 'Title Subtitle',
      type: 'title',
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
        title: 'Case Studies Client Section',
      }
    },
  },
}
