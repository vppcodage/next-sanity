import {modes} from '../../../lib/constant/select-options'

export default {
  name: 'footer',
  title: 'Footer',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'footer_logo',
      title: 'Footer_Logo',
      type: 'custom_image',
    },
    {
      name: 'footer_links',
      title: 'Footer Links',
      type: 'array',
      of: [{type: 'label_link'}],
    },
    {
      name: 'contact_link',
      title: 'ContectLinks',
      type: 'label_link',
    },
    {
      name: 'copyright_text',
      title: 'Copyright Text',
      type: 'string',
    },
    {
      name: 'contact_no',
      title: 'Contact No',
      type: 'string',
    },
    {
      name: 'footer_banner',
      title: 'Footer Banner',
      type: 'reference',
      to: [{type: 'footer_banner'}],
    },
    {
      name: 'section_theme',
      title: 'section Theme',
      type: 'string',
      initialValue: 'bg-white',
      options: {list: modes, direction: 'horizontal', layout: 'radio'},
    },
    {
      name: 'top_label',
      title: 'Top Label',
      type: 'string',
    },
    {
      name: 'top_link',
      title: 'Top Link',
      type: 'string',
    },
    {
      name: 'whatsapp_number',
      title: 'Whatsapp Number',
      type: 'string',
    },
    {
      name: 'telegram_userName',
      title: 'Telegram UserName',
      type: 'string',
    },
  ],
}
