import {modes} from '../../../lib/constant/select-options'

export default {
  name: 'contact_information_section',
  title: 'Contact Information Section',
  type: 'object',
  fields: [
    {
      name: 'title_subtitle',
      title: 'Title Subtitle',
      type: 'title',
    },
    {
      name: 'email',
      title: 'Email',
      type: 'label_link',
    },
    {
      name: 'phoneNumber',
      title: 'Phone Number',
      type: 'string',
    },
    {
      name: 'officeAddress',
      title: 'Office Address',
      type: 'office_address',
    },
    {
      name: 'officeTime',
      title: 'Office Time',
      type: 'title_content',
    },
    {
      name: 'contactUsCard',
      title: 'Contact Us Card',
      type: 'array',
      of: [{type: 'title_description_image'}],
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
        title: 'Contact Information Section',
      }
    },
  },
}
