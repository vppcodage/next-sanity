import {modes} from '../../../lib/constant/select-options'

export default {
  name: 'developer_profile',
  title: 'Developer Profile',
  type: 'object',
  fields: [
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
      name: 'name_placeholder',
      title: 'Name Placeholder',
      type: 'string',
      required: true,
    },
    {
      name: 'email_placeholder',
      title: 'Email Placeholder',
      type: 'string',
      required: true,
    },
    {
      name: 'select_type_of_project',
      title: 'Select Type Of Project',
      type: 'string',
    },
    {
      name: 'select_type_button',
      title: 'Select Type Button',
      type: 'array',
      of: [{type: 'string'}],
    },
    {
      name: 'how_can_we_help_placeholder',
      title: 'How Can We Help Placeholder',
      type: 'text',
    },
    {
      name: 'hire_jamstack_development_button',
      title: 'Hire Jamstack Development Button',
      type: 'button',
    },
    {
      name: 'image',
      title: 'Image',
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
        title: 'Developer Profile',
      }
    },
  },
}
