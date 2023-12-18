import { footerFields } from "../helper/footerFields";
import { headerFields } from "../helper/headerFields";
import { BlogCategorySectionField, blogHeroSectionField, blogTitleSectionFields, bookConsultationFields, bookConsultationHeroSectionFields, caseStudiesClientSectionFields, caseStudySectionFields, casestudyBestworkSectionFields, chooseJamstackySectionField, comparisionFrameworksSectionFields, contactHeroSectionFields, contactInformationSectionFields, contactMapSectionFields, contactMessageSectionFields, contactReviewSectionFields, customerReviewsSectionFields, developerProfileField, errorImageFields, faqSectionFields, featureBlogSectionField, featuredCaseStudySectionFields, heroSectionCaseStudyDPAGEFields, heroSectionPrivacyPolicyFields, homeHeroSectionSectionFields, imageTitleDescriptionArraySectionField, jamstackDevelopmentFields, newaLetterSectionFields, ourBlogSectionFields, ourProcessSectionFields, priceSectionFields, reviewsSectionFields, richTextIconSideImageSectionFields, richTextWithRichTextCardSectionFields, sectionCourseTitleSectionFields, techStackSectionFields, testimonialsSectionFields, thankYouImageFields, titleBlogSectionFields, titleContentArrayFields, titleDescriptionSideImageSectionFields, titleImageArraySectionFields, titleSubTitleImageSectionFields } from "../helper/sectionFields";
import { seofields } from "../helper/seoFields";

export const header = /* groq */ `
header->{
${headerFields}
} 
`;
export const seo = /* groq */ `seo{
${seofields}  
}`;

export const footer = /* groq */ `
footer->{
${footerFields}
}
`;

export const pageBuilder = /* groq */ `
pageBuilder[]->{
_id,
_type,
content[]{
    (_type == "home_hero_section") => {
      ${homeHeroSectionSectionFields}
    },
    (_type == "featurd_case_study") => {
      ${featuredCaseStudySectionFields}
    },
    (_type == "section_course_title") => {
      ${sectionCourseTitleSectionFields}
    },
    (_type == "case_study") => {
      ${caseStudySectionFields}
    },
    (_type == "testimonials_section") => {
      ${testimonialsSectionFields}
    },
    (_type == "blog_title_section") => {
      ${blogTitleSectionFields}
    },
    (_type == "title_image_array_section") => {
      ${titleImageArraySectionFields}
    },
    (_type == "customer_reviews") => {
      ${customerReviewsSectionFields}
    },
    (_type == "comparision_frameworks") => {
      ${comparisionFrameworksSectionFields}
    },
    (_type == "price_section_document") => @->{
      ${priceSectionFields}
    },
    (_type == "hero_section_case_study_d_page") => {
      ${heroSectionCaseStudyDPAGEFields}
    },
    (_type == "rich_text_with_rich_text_card_section") => {
      ${richTextWithRichTextCardSectionFields}
    },
    (_type == "image_title_description_array_section") => {
      ${imageTitleDescriptionArraySectionField}
    },
    (_type == "title_subtitle_image_section") => {
      ${titleSubTitleImageSectionFields}
    },
    (_type == "reviews_section") => {
      ${reviewsSectionFields}
    },
    (_type == "rich_text_icon_sideImage_section") => {
      ${richTextIconSideImageSectionFields}
    },
    (_type == "our_process_section")=>{
      ${ourProcessSectionFields}
    },
    (_type == "book_consultation")=>{
      ${bookConsultationFields}
    },
    (_type == "f_and_q_section")=>{
      ${faqSectionFields}
    },
    (_type == "tech_stack_section")=>{
      ${techStackSectionFields}
    },
    (_type == "jamstack_development")=>{
      ${jamstackDevelopmentFields}
    },
    (_type == "title_description_side_image_Section") => {
      ${titleDescriptionSideImageSectionFields}
    },
    (_type == "choose_jamstacky_section")=> {
      ${chooseJamstackySectionField}
    },
    (_type == "case_studies_client_section") => {
      ${caseStudiesClientSectionFields}
    },
    (_type == "developer_profile") => {
      ${developerProfileField}
    },
    (_type == "thank_you_image") => {
      ${thankYouImageFields}
    },
    (_type == "error_image") => {
      ${errorImageFields}
    },
    (_type == "hero_section_privacy_policy") => {
      ${heroSectionPrivacyPolicyFields}
    },
    (_type == "title_content_array") => {
      ${titleContentArrayFields}
    },
    (_type == "casestudy_bestwork_section") => {
      ${casestudyBestworkSectionFields}
    },
    (_type == "blog_hero_section") => {
      ${blogHeroSectionField}
    },
    (_type == "blog_category") => {
      ${BlogCategorySectionField}
    },
    (_type == "feature_blog_section")=>{
      ${featureBlogSectionField}
    },
    (_type == "our_blog_section")=>{
      ${ourBlogSectionFields}
    },
    (_type == "title_blog")=>{
      ${titleBlogSectionFields}
    },
    (_type == "news_letter") => {
      ${newaLetterSectionFields}
    },
    (_type == "book_consultation_hero_section") => {
    ${bookConsultationHeroSectionFields},
    },
    (_type == "contact_hero_section") => {
      ${contactHeroSectionFields}
    },
    (_type == "contact_information_section") => {
      ${contactInformationSectionFields}
    },
    (_type == "contact_message_section") => {
      ${contactMessageSectionFields}
    },
    (_type == "contact_map_section") => {
      ${contactMapSectionFields}
    },
    (_type == "contact_review_section") => {
      ${contactReviewSectionFields}
    },
}
}
`;
