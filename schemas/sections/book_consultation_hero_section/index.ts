import {background_classname, modes, variant} from '../../../lib/constant/select-options'

export default {
  name: 'book_consultation_hero_section',
  title: 'Book Consultation Hero Section',
  type: 'object',
  fields: [
    {
      name: 'title_subtitle',
      title: 'Title Subtitle',
      type: 'title',
    },
    {
      name: 'content',
      title: 'Content',
      type: 'rich_text',
    },
    {
      name: 'background_classname',
      title: 'Background Classname',
      type: 'string',
      initialValue: 'white',
      options: {list: background_classname, direction: 'horizontal', layout: 'radio'},
    },
    {
      name: 'variant',
      type: 'string',
      initialValue: 'primary',
      options: {list: variant, direction: 'horizontal', layout: 'radio'},
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
        title: 'Book Consultation Hero Section',
      }
    },
  },
}
