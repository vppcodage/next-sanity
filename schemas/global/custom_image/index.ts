import { SchemaTypeDefinition } from "sanity"

export default {
  name: 'custom_image',
  title: 'Custom Image',
  type: 'object',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true, // <-- Defaults to false
      },
    },
    {
      name: 'caption',
      type: 'string',
      title: 'Caption',
    },
    {
      // Editing this field will be hidden behind an "Edit"-button
      name: 'alt',
      type: 'string',
      title: 'Alt',
    },
    {
      name: 'link',
      title: 'Link',
      type: 'string',
    },
  ],
  preview: {
    select: {
      imageUrl: 'image.asset',
      alt: 'alt',
    },
    prepare(select) {
      const {imageUrl, alt} = select
      return {
        title: alt,
        media: imageUrl && imageUrl,
      }
    },
  },
} as SchemaTypeDefinition
