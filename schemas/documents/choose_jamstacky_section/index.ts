import {modes} from '../../../lib/constant/select-options'

export default {
  name: 'choose_jamstacky_section',
  title: 'Why Choose Jamstacky Section',
  type: 'document',
  fields: [
    {
      name: 'title_subtitle',
      title: 'Title Subtitle',
      type: 'title',
    },
    {
      name: 'media_icon',
      title: 'Media Icon',
      type: 'array',
      of: [{type: 'development_process'}],
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      required: true,
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
        title: 'Why Choose Jamstacky Section',
      }
    },
  },
}
