import {Template} from 'sanity'
import {OLD_PAGE_ID_LIST} from '../helper/defaults'
export const getPageId = (new_id: string) => OLD_PAGE_ID_LIST[new_id] ?? new_id
export const InitialValueTemplates = {
  HEADER: getPageId('header'),
  FOOTER: getPageId('footer'),
  CATEGORIES: getPageId('category'),
  SECTIONS: getPageId('section'),
  PAGE: getPageId('page'),
  COMPARISIONDETAILSPAGE: getPageId('comparision_details_page'),
  CASESTUDYDETAILSPAGE: getPageId('case_study_detail_page'),
  BLOGDETAILSPAGE: getPageId('blog_detail_page'),
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
