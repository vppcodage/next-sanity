import {background_classname, modes} from '../../../lib/constant/select-options'

export default {
  name: 'blog_hero_section',
  title: 'Blog Hero Section',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'hero_image',
      title: 'Hero Image',
      type: 'custom_image',
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
      title: 'background_classname',
      type: 'string',
      initialValue: 'white',
      options: {list: background_classname, direction: 'horizontal', layout: 'radio'},
    },
  ],
  preview: {
    prepare: () => {
      return {
        title: 'Blog Hero Section',
      }
    },
  },
}
