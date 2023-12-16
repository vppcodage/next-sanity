import { toPlainText } from '@portabletext/react'
import {SchemaTypeDefinition} from 'sanity'

export default {
  name: 'all_customer_reviews',
  title: 'All Customer Reviews',
  type: 'object',
  fields: [
    {
      name: 'review',
      title: 'Review',
      type: 'rich_text',
    },
    {
      name: 'customer_image',
      title: 'Customer Image',
      type: 'custom_image',
    },
  ],
  preview: {
    select: {
      imageUrl: 'customer_image.image',
      title: 'review.custom_rich_text',
    },
    prepare(select) {
      const {imageUrl, title} = select
      if (!title) {
        return {
          title: 'All Customer Reviews',
        }
      }
      const headingText = toPlainText(title)
      return {
        title: headingText,
        media: imageUrl && imageUrl,
      }
    },
  },
} as SchemaTypeDefinition
