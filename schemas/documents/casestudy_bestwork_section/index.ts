import {modes} from '../../../lib/constant/select-options'

export default {
  name: 'casestudy_bestwork_section',
  title: 'Casestudy Bestwork Section',
  type: 'document',
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
        title: 'Casestudy Bestwork Section',
      }
    },
  },
}
