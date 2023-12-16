
export default {
  name: "estimatePage",
  title: "Estimate Page",
  type: "document",
  groups: [
    {
      name: "main",
      title: "Main",
      default: true,
    },
    {
      name: "seo",
      title: "SEO",
    },
  ],
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      description: "This field is only used for CMS.",
      group: "main",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 200, // will be ignored if slugify is set
        slugify: (input: string) =>
          input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
      },
      group: "main",
    },
    {
      name: "header",
      title: "Header",
      type: "reference",
      to: [{ type: "header" }],
      group: "main",
    },
    {
      name: "section",
      title: "Section",
      type: "array",
      of: [
        { type: "developer_profile" }
      ],
      group: "main",
    },
    {
      name: "footer",
      title: "Footer",
      type: "reference",
      to: [{ type: "footer" }],
      group: "main",
    },
    {
      name: "seo",
      title: "SEO",
      type: "seo",
      group: "seo",
    },
  ],
};
