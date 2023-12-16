import {modes} from '../../../lib/constant/select-options'

export default {
  name: 'contact_hero_section',
  title: 'Contact Hero Section',
  type: 'object',
  fields: [
    {
      name: 'title_subtitle',
      title: 'Title Subtitle',
      type: 'title',
    },
    {
      name: 'section_description',
      title: 'Section Description',
      type: 'rich_text',
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
        title: 'Contact Hero Section',
      }
    },
  },
}
