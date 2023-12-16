import {modes} from '../../../lib/constant/select-options'

export default {
  name: 'rich_text_icon_sideImage_section',
  title: 'Rich Text Icon Side Image Section',
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
      name: 'icon_lable_array',
      title: 'Icon Lable Array',
      type: 'array',
      of: [{type: 'icon_title_array'}],
    },
    {
      name: 'section_image',
      title: 'Section Image',
      type: 'custom_image',
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
        title: 'Rich Text Icon Side Image Section',
      }
    },
  },
}
