import {modes} from '../../../lib/constant/select-options'

export default {
  name: 'title_subtitle_image_section',
  title: 'Title Subtitle Image Section',
  type: 'object',
  fields: [
    {
      name: 'title_subtitle',
      title: 'Title Subtitle',
      type: 'title',
    },
    {
      name: 'img',
      title: 'Img',
      type: 'custom_image',
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
        title: 'Title Subtitle Image Section',
      }
    },
  },
}
