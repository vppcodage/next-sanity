import { SchemaTypeDefinition } from 'sanity'
import {modes} from '../../../lib/constant/select-options'

export default {
  name: 'author_section',
  title: 'Author Section',
  type: 'document',
  fields: [
    {
      name: 'author_Name',
      title: 'Author Name',
      type: 'string',
    },
    {
      name: 'company',
      title: 'Company',
      type: 'label_link',
    },
    {
      name: 'author_Image',
      title: 'Author Image',
      type: 'custom_image',
    },
    {
      name: 'author_Post',
      title: 'Author Post',
      type: 'string',
    },
    {
      name: 'social_Icon',
      title: 'Social Icon',
      type: 'array',
      of: [{type: 'custom_image'}],
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
    select: {
      title:"author_Name",
      image:"author_Image.image"
    },
    prepare(select) {
      const {title, image} = select
      return {
        title: title,
        media: image && image,
      }
    },
  },
} as SchemaTypeDefinition

