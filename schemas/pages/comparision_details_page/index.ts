export default {
  name: 'comparision_details_page',
  title: 'Comparision Details Page',
  type: 'document',
  groups: [
    {
      name: 'main',
      title: 'Main',
      default: true,
    },
    {
      name: 'seo',
      title: 'SEO',
    },
  ],
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'This field is only used for CMS.',
      group: 'main',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 200, // will be ignored if slugify is set
        slugify: (input: string) => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
      },
      group: 'main',
    },
    {
      name: 'header',
      title: 'Header',
      type: 'reference',
      to: [{type: 'header'}],
      group: 'main',
    },
    {
      name: 'sidebar',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'section_sidebar'}],
        },
      ],
      group: 'main',
    },
    {
      name: 'footer',
      title: 'Footer',
      type: 'reference',
      to: [{type: 'footer'}],
      group: 'main',
    },
    {
      name: 'seo',
      title: 'SEO',
      type: 'seo',
      group: 'seo',
    },
  ],
}
