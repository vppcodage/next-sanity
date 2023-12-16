export default {
  name: 'case_study_detail_page',
  title: 'Case Study Detail Page',
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
      name: 'feature_images',
      title: 'Feature Images',
      type: 'array',
      of: [{type: 'custom_image'}],
      group: 'main',
    },
    {
      name: 'project_year',
      title: 'Project Year',
      type: 'string',
      group: 'main',
    },
    {
      name: 'project_overview',
      title: 'Project Overview',
      type: 'project_overview',
      group: 'main',
    },
    {
      name: 'content',
      type: 'array',
      of: [
        {type: 'hero_section_case_study_d_page'},
        {type: 'overview_section'},
        {type: 'text_image_block'},
        {type: 'text_image_blocks'},
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
