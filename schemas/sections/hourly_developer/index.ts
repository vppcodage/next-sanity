import { modes } from "../../../lib/constant/select-options"

export default {
  name: 'hourly_developer',
  title: 'Hourly Developer Section',
  type: 'object',
  fields: [
    {
      name: 'title_Subtitle',
      title: 'Title Subtitle',
      type: 'title',
    },
    {
      name: 'column_image',
      title: 'Column Image',
      type: 'custom_image',
    },
    {
      name: 'price_section',
      title: 'Price Section',
      type: 'title_description',
    },
    {
      name: 'price',
      title: 'Price',
      type: 'string',
    },
    {
      name: 'disc',
      title: 'Disc',
      type: 'text',
    },
    {
      name: 'contact_us_button',
      title: 'Contact Us Button',
      type: 'button',
    },
    {
      name: 'background_image',
      title: 'Background Image',
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
        title: 'Hourly Developer Section',
      }
    },
  },
}
