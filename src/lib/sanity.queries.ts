import { groq } from "next-sanity";

export const categorySlugsQuery = groq`
*[_type == "category" && defined(slug.current)][].slug
`;

export const blogSlugsQuery = groq`
*[_type == "blog_detail_page" && defined(slug.current)][].slug.current
`;

export const casestudiesSlugsQuery = groq`
*[_type == "case_study_detail_page" && defined(slug.current)][].slug.current
`;
