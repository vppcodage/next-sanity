import { groq } from "next-sanity";
import { handleSanityRequestError } from "../../utils";


const groqQuery = groq`*[_type in ["home","case_study_page","pagespeed","blog_detail_page","book_consultation_page","pricingPage","blog_page","all_page","comparision_details_page","comparision_main_page","case_study_detail_page", "blog", "category"] && defined(slug.current)]{
  (_type == "home") => {
    "slug" : slug.current
  },
 (_type == "case_study_page") => {
    "slug" : slug.current
  },
 (_type == "comparision_main_page") => {
    "slug" : slug.current
  },
 (_type == "blog_page") => {
    "slug" : slug.current
  },
  (_type == "comparision_details_page") => {
    "slug" : slug.current
  },
  (_type == "all_page") => {
    "slug" : slug.current
  },
  (_type == "pagespeed") => {
    "slug" : slug.current
  },
  (_type == "pricingPage") => {
    "slug" : slug.current
  },
 (_type == "book_consultation_page") => {
    "slug" : slug.current
  },
  (_type == "case_study_detail_page") => {
    "slug" : "case-studies/" + slug.current
  },
  (_type == "blog_detail_page") => {
    "slug" : "blog/" + slug.current
  },
  (_type == "category") => {
    "slug" : "post-categories/" + slug.current
  },
  _updatedAt
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
