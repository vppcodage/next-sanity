import {SchemaTypeDefinition} from 'sanity'

export default {
  name: 'blog_detail_side_content',
  title: 'Blog Detail content',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description:
        'The `slug` becomes the path of the published page on the website. It will be appended to the domain name automatically.',
      options: {
        source: (doc) => `/blog-inner-data/${doc.title}/`,
        slugify: (input) => input.toLowerCase().slice(0, 200),
      },
    },
    {
      name: 'title_logo_array',
      title: 'Title Logo Array',
      type: 'title_logo_array',
    },
    {
      name: 'join_our_news_letter',
      title: 'Join Our News Letter',
      type: 'join_our_news_letter',
    },
  ],
} as SchemaTypeDefinition
