import {background_classname, modes} from '../../../lib/constant/select-options'

export default {
  name: 'hero_section_privacy_policy',
  title: 'Hero Section Privacy Policy',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'date',
      title: 'Date',
      type: 'string',
    },
    {
      name: 'section_theme',
      title: 'Section Theme',
      type: 'string',
      initialValue: 'bg-white',
      options: {list: modes, direction: 'horizontal', layout: 'radio'},
    },
    {
      name: 'background_classname',
      title: 'Background Classname',
      type: 'string',
      initialValue: 'white',
      options: {list: background_classname , direction: 'horizontal', layout: 'radio'},
    },
  ],
  preview: {
    prepare: () => {
      return {
        title: 'Hero Section Privacy Policy',
      }
    },
  },
}
