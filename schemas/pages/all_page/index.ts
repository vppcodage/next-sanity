export default {
  name: "all_page",
  title: "All Page",
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
        { type: "home_hero_section" },
        { type: "casestudy_bestwork_section" },
        { type: "table" },
        { type: "developer_profile" },
        { type: "error_image" },
        { type: "image_title_description_array_section" },
        { type: "jamstack_development" },
        { type: "technology_section" },
        { type: "hourly_developer" },
        { type: "news_letter_section_document" },
        { type: "choose_jamstacky_section" },
        { type: "hiring_model_section" },
        { type: "f_and_q_section" },
        { type: "hero_section_privacy_policy" },
        { type: "title_content" },
        { type: "thank_you_image" },
        { type: "title_content_array" },
        { type: "title_description_side_image_Section" },
        { type: "blog_title_section" },
        { type: "rich_text_with_rich_text_card_section" },
        { type: "reviews_section" },
        { type: "title_subtitle_image_section" },
        { type: "choose_jamstacky_section_document" },
        { type: "our_process_section" },
        { type: "price_section_document" },
        { type: "comparison_tools_section" },
        { type: "comparision_frameworks" },
        { type: "rich_text_icon_sideImage_section" },
        { type: "testimonials_section" },
        { type: "title_image_array_section" },
        { type: "tech_stack_section" },
        { type: "book_consultation" },
        { type: "book_consultation_hero_section" },
        { type: "case_studies_client_section" },
        { type: "customer_reviews" },
        { type: "contact_hero_section" },
        { type: "contact_information_section" },
        { type: "contact_map_section" },
        { type: "contact_message_section" },
        { type: "contact_review_section" },
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
