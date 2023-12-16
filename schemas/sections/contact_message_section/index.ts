import {modes} from '../../../lib/constant/select-options'

export default {
  name: 'contact_message_section',
  title: 'Contact Message Section',
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
      name: 'sevicesTitle',
      title: 'Sevices Title',
      type: 'string',
    },
    {
      name: 'ServicesButtonArray',
      title: 'Services Button Array',
      type: 'array',
      of: [{type: 'string'}],
    },
    {
      name: 'contactForm',
      title: 'Contact Form',
      type: 'contact_forms',
    },
    {
      name: 'sevicesDescription',
      title: 'Sevices Description',
      type: 'rich_text',
    },
    {
      name: 'ContactMessageMainImage',
      title: 'Contact Message MainImage',
      type: 'custom_image',
    },
    {
      name: 'imageTitleSubtitleArray',
      title: 'Image Title Subtitle Array',
      type: 'array',
      of: [{type: 'icon_title_array'}],
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
        title: 'Contact Message Section',
      }
    },
  },
}
