import { modes } from "../../../lib/constant/select-options"

export default {
  name: 'contact_review_section',
  title: 'Contact Review Section',
  type: 'object',
  fields: [
    {
      name: 'title_subtitle',
      title: 'Title Subtitle',
      type: 'title',
    },
    {
      name: 'image_content_array',
      title: 'Image Content Array',
      type: 'array',
      of: [{ type: "image_content" }]
    },
    {
      name: 'section_theme',
      title: 'Section Theme',
      type: 'string',
      initialValue: 'bg-white',
      options: {list: modes , direction: 'horizontal', layout: 'radio'},
    },
  ],
  preview: {
    prepare: () => {
      return {
        title: 'Contact Review Section',
      }
    },
  },
}
