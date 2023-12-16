import { variant } from "../../../lib/constant/select-options"

export default {
  name: 'text_image_block',
  title: 'Text Image Block',
  type: 'object',
  fields: [
    {
      name: 'section_title',
      title: 'Section Title',
      type: 'title',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'custom_image',
    },
    {
      name: 'content',
      title: 'Content',
      type: 'rich_text',
    },
    {
      name: 'justify_content',
      title: 'Justify Content',
      type: 'boolean',
    },
    {
      name: 'variant',
      type: 'string',
      initialValue: 'primary',
      options: {list: variant, direction: 'horizontal', layout: 'radio'},
    },
  ],
  preview: {
    prepare() {
      return {title: 'Text Image Block'}
    },
  },
}
