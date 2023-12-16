import {Template} from 'sanity'
import {OLD_PAGE_ID_LIST} from '../helper/defaults'
export const getPageId = (new_id: string) => OLD_PAGE_ID_LIST[new_id] ?? new_id
export const InitialValueTemplates = {
  HEADER: getPageId('header'),
  FOOTER: getPageId('footer'),
  CATEGORIES: getPageId('category'),
  BLOG_DETAIL_PAGE: getPageId("blog_detail_page"),
  COMPARISION_DETAILS: getPageId("comparision_details_page"),
  CASE_STUDY_DETAIL_PAGE: getPageId("case_study_detail_page"),
  HOME: getPageId('home'),
  BLOG_PAGE: getPageId("blog_page"),
  BOOK_CONSULTATION_PAGE: getPageId("book_consultation_page"),
  CASE_STUDY_PAGE: getPageId("case_study_page"),
  COMPARISION_MAIN_PAGE : getPageId("comparision_main_page"),
  ESTIMATE_PAGE: getPageId("estimatePage"),
  FOUR_O_FOUR_PAGE: getPageId("four_o_four_page"),
  HIRE_DEDICATED_PAGE: getPageId("hireDedicatedPage"),
  ALL_PAGE: getPageId("all_page"),
  PRIVACY_POLICY: getPageId("privacy_policy"),
  THANK_YOU_PAGE: getPageId("thank_you_page"),
  BLOGCATEGORY: getPageId('blog_category'),
  AUTHOR_SECTION: getPageId("author_section"),
  BLOG_DETAIL_SIDE_CONTENT: getPageId("blog_detail_side_content"),
  TESTIMONIAL: getPageId("testimonial"),
  CLIENT: getPageId("client"),
  STAFF: getPageId("staff"),
  PACKAGE: getPageId("package"),
  PLAN: getPageId("plan"),
  HIRING_REQUEST: getPageId("hiring_request"),
  MESSAGE_SEND_REQUEST: getPageId("message_send_request"),
  FRAMEWORK: getPageId("framework"),
  FRAMEWORK_TYPE: getPageId("framework_type"),
}

export const templateBuilders: Template[] = [
  {
    id: InitialValueTemplates.BLOG_DETAIL_SIDE_CONTENT,
    title: "Blog Detail Side Content",
    schemaType: "blog_detail_side_content",
    value: {
      type: "blog_detail_side_content",
    },
  },
]

export default [...templateBuilders.map((template) => template)]
