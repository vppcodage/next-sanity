import {SchemaTypeDefinition} from 'sanity'
import {modes} from '../../../lib/constant/select-options'

export default {
  name: 'price_section',
  title: 'Price Section',
  type: 'document',
  fields: [
    {
      name: 'title_subtitle',
      title: 'Title Subtitle',
      type: 'title',
    },
    {
      name: 'content',
      title: 'Content',
      type: 'rich_text',
    },
    {
      name: 'pricing_section',
      title: 'Pricing',
      type: 'pricing',
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
        title: 'Price Section',
      }
    },
  },
} as SchemaTypeDefinition
