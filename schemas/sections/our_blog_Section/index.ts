import {modes} from '../../../lib/constant/select-options'

export default {
  name: 'our_blog_section',
  title: 'Our Blog Section',
  type: 'object',
  fields: [
    {
      name: 'title_subtitle',
      title: 'Title Subtitle',
      type: 'title',
    },
    {
      name: 'view_blog_button',
      title: 'View Blog Button',
      type: 'button',
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
        title: 'Our Blog Section',
      }
    },
  },
}
