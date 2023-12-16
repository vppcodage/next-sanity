import {modes} from '../../../lib/constant/select-options'

export default {
  name: 'blog_title_section',
  title: 'Blog Title Section',
  type: 'object',
  fields: [
    {
      name: 'title_subtitle',
      title: 'Title Subtitle',
      type: 'title',
    },
    {
      name: 'blog_button',
      title: 'Blog Button',
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
        title: 'Blog Title Section',
      }
    },
  },
}
