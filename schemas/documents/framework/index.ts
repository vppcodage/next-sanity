import { SchemaTypeDefinition } from "sanity";

export default {
  name: 'framework',
  title: 'Framework',
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
      name: 'image',
      title: 'Image',
      type: 'custom_image',
    },
    {
      name: 'content',
      title: 'Content',
      type: 'content',
    },
    {
      name: 'type',
      title: 'Type',
      type: "framework_type_with_template",
      required: true,
    },
    {
      name: 'content_summary',
      title: 'Content Summary',
      type: 'array',
      of: [{type: 'string'}],
    },
  ],
}as SchemaTypeDefinition
