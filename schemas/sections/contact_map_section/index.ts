import {modes} from '../../../lib/constant/select-options'

export default {
  name: 'contact_map_section',
  title: 'Contact Map Section',
  type: 'object',
  fields: [
    {
      name: 'title_subtitle',
      title: 'Title Subtitle',
      type: 'title',
    },
    {
      name: 'mapImage',
      title: 'Map Image',
      type: 'string',
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
        title: 'Contact Map Section',
      }
    },
  },
}
