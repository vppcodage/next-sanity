import {modes} from '../../../lib/constant/select-options'

export default {
  name: 'reviews_section',
  title: 'Reviews Section',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'text_with_image',
      title: 'Text With Image',
      type: 'rich_text',
    },
    {
      name: 'description_rich_text',
      title: 'Description Rich Text',
      type: 'rich_text',
    },
    {
      name: 'book_free_consultation_button',
      title: 'Book Free Consultation Button',
      type: 'button',
    },
    {
      name: 'reviews_image',
      title: 'Reviews Image',
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
        title: 'Reviews Section',
      }
    },
  },
}
