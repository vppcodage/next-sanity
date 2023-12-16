export default {
  name: 'blog_detail_page',
  title: 'Blog Detail Page',
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
    {
      name: 'sidebar',
      title: 'Sidebar',
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
      name: 'banner_title',
      title: 'Banner Title',
      type: 'string',
      group: 'main',
    },
    {
      name: 'button',
      title: 'Button',
      type: 'button',
      group: 'main',
    },
    {
      name: 'hero_image',
      title: 'Hero Image',
      type: 'custom_image',
      group: 'main',
    },
    {
      name: 'publish_date',
      title: 'Publish Date',
      type: 'date',
      group: 'main',
    },
    {
      name: 'category',
      title: 'Category',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'category'}]}],
      group: 'main',
    },
    {
      name: 'banner_desc',
      title: 'Banner Desc',
      type: 'text',
      group: 'main',
    },
    {
      name: 'recommended_blog',
      title: 'Recommended Blog',
      type: 'title',
      group: 'main',
    },
    {
      name: 'content',
      title: 'Content',
      type: 'rich_text',
      group: 'main',
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{type: 'author_section'}],
      group: 'main',
    },
    {
      name: 'news_letter_section',
      title: 'News Letter Section',
      type: 'reference',
      to: [{type: 'news_letter'}],
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
    {
      name: 'share_text',
      title: 'Share Text',
      type: 'string',
      group: 'sidebar',
    },
    {
      name: 'contant_card_title',
      title: 'Contant Card Title',
      type: 'string',
      group: 'sidebar',
    },
    {
      name: 'contant',
      title: 'Contant',
      type: 'array',
      of: [
        {
          type: 'section_sidebar',
        },
      ],
      group: 'sidebar',
    },
  ],
}
