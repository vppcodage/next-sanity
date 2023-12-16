import {modes} from '../../../../lib/constant/select-options'

export default {
  name: 'contact_forms',
  title: 'Contact Forms',
  type: 'object',
  fields: [
    {
      name: 'title_subtitle',
      title: 'Title Subtitle',
      type: 'title',
    },
    {
      name: 'companyName',
      title: 'Company Name',
      type: 'string',
    },
    {
      name: 'companyName_placeholder',
      title: 'CompanyName Placeholder',
      type: 'string',
    },
    {
      name: 'Name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'name_placeholder',
      title: 'Name Placeholder',
      type: 'string',
    },
    {
      name: 'email',
      title: 'email',
      type: 'string',
    },
    {
      name: 'email_placeholder',
      title: 'Email Placeholder',
      type: 'string',
    },
    {
      name: 'phone_number',
      title: 'Phone Number',
      type: 'string',
    },
    {
      name: 'phone_number_placeholder',
      title: 'Phone Number Placeholder',
      type: 'string',
    },
    {
      name: 'message',
      title: 'message',
      type: 'string',
    },
    {
      name: 'message_placeholder',
      title: 'Message Placeholder',
      type: 'text',
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
        title: 'Contact Forms',
      }
    },
  },
}
