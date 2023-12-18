import { handleSanityRequestError } from "@/lib/sanity/utils";
import { groq } from "next-sanity";
import {
  faqSectionFields,
  customerReviewsSectionFields,
  bookConsultationFields,
  heroSectionCaseStudyDPAGEFields,
  imageTitleDescriptionArraySectionField,
  ourProcessSectionFields,
  priceSectionFields,
  reviewsSectionFields,
  richTextIconSideImageSectionFields,
  richTextWithRichTextCardSectionFields,
  testimonialsSectionFields,
  titleSubTitleImageSectionFields,
  techStackSectionFields,
  jamstackDevelopmentFields,
  caseStudiesClientSectionFields,
  titleDescriptionSideImageSectionFields,
  chooseJamstackySectionField,
  errorImageFields,
  developerProfileField,
  contactHeroSectionFields,
  contactInformationSectionFields,
  contactMapSectionFields,
  contactMessageSectionFields,
  contactReviewSectionFields,
  thankYouImageFields,
  heroSectionPrivacyPolicyFields,
  titleContentArrayFields,
} from "../helper/sectionFields";
import { footer, header, pageBuilder, seo } from "../helperQueries";
import { imageFields } from "../helper/imageFields";

const groqQuery = groq`*[_type == "page" && slug.current==$slug]{
  _type,
  "slug": slug.current,
  ${header},
  ${footer},
  ${seo},
  ${pageBuilder},
  "allBlogs":*[_type=="blog_detail_page" && defined(slug.current)]{
  _type,
  banner_title,
  banner_desc,
  hero_image{
  ${imageFields}
  },
  category[]->{
  _type,
  title,
  slug,
  },
  slug,
  },
  "categories":*[_type == "category" && defined(slug.current)]{
  title,
  _type,
  slug,
  },
  }`;

const handleError = (error: Error, mockData: unknown = undefined) =>
  handleSanityRequestError({
    error,
    mockData,
  });

export const query = {
  groqQuery,
  handleError,
};
