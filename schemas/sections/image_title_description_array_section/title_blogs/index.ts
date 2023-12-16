import {modes} from '../../../../lib/constant/select-options'

export default {
  name: 'title_blog',
  title: 'Blog',
  type: 'object',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'custom_image',
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'content',
      title: 'Content',
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
        title: 'Blog',
      }
    },
  },
}
