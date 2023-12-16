import {SchemaTypeDefinition} from 'sanity'
import {variant} from '../../../lib/constant/select-options'

export default {
  name: 'framework_type',
  title: 'Type',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      required: true,
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description:
        'The `slug` becomes the path of the published page on the website. It will be appended to the domain name automatically.',
      options: {
        source: (doc) => `/frameworks/${doc.name}/`,
        slugify: (input) => input.toLowerCase().slice(0, 200),
      },
    },
    {
      name: 'content',
      title: 'Content',
      type: 'rich_text',
    },
    {
      name: 'variant',
      title: 'Variant',
      type: 'string',
      initialValue: 'primary',
      options: {list: variant, direction: 'horizontal', layout: 'radio'},
    },
    {
      name: 'seo_postfix',
      title: 'Seo Postfix',
      type: 'string',
      required: true,
    },
  ],
} as SchemaTypeDefinition
