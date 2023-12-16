import {modes, variant} from '../../../lib/constant/select-options'

export default {
  name: 'book_consultation',
  title: 'Book Consultation',
  type: 'object',
  fields: [
    {
      name: 'title_subtitle',
      title: 'Title Subtitle',
      type: 'title',
    },
    {name: 'staff', title: 'Staff', type: 'reference', to: {type: 'staff'}},
    {
      name: 'content',
      title: 'Content',
      type: 'rich_text',
    },
    {
      name: 'section_image',
      title: 'Section Image',
      type: 'custom_image',
    },
    {
      name: 'variant',
      type: 'string',
      initialValue: 'primary',
      options: {list: variant, direction: 'horizontal', layout: 'radio'},
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
        title: 'Book Consultation',
      }
    },
  },
}
