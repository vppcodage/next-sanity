import { modes } from "../../../lib/constant/select-options";

export default {
  name: "case_study_page",
  title: "CaseStudyPage",
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
        { type: "hero_section_case_study_d_page" },
        { type: "casestudy_bestwork_section" },
        { type: "title_description_side_image_Section" },
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
      name: "section_theme",
      title: "Section Theme",
      initialValue: "bg-white",
      type: "string",
      group: "main",
      options: { list: modes, direction: "horizontal", layout: "radio" },
    },
    {
      name: "seo",
      title: "SEO",
      type: "seo",
      group: "seo",
    },
  ],
};
