import {StructureResolver} from 'sanity/desk'
import {AiOutlineGlobal} from 'react-icons/ai'
import {structureListType} from './helper/structure-list-type'
import {
  HiChat,
  HiOutlineAnnotation,
  HiOutlineBriefcase,
  HiOutlineDocumentSearch,
  HiOutlineTerminal,
} from 'react-icons/hi'
import {RiPagesLine, RiGroupLine, RiFunctionFill} from 'react-icons/ri'
import {SiMicrodotblog} from 'react-icons/si'
import {BsFileEarmarkCodeFill} from 'react-icons/bs'

import {FaRocketchat} from 'react-icons/fa'
import {InitialValueTemplates} from './initialValueTemplates'

export const deskStructure: StructureResolver = (S) =>
  S.list()
    .title('Documents')
    .items([
      S.listItem()
        .title('Global')
        .icon(AiOutlineGlobal)
        .child(
          S.list()
            .title('Global')
            .items([
              structureListType({
                S,
                type: 'header',
                title: 'Header',
                icon: HiOutlineTerminal,
              }),
              structureListType({
                S,
                type: 'footer',
                title: 'Footer',
                icon: HiOutlineTerminal,
              }),
              S.divider(),
              structureListType({
                S,
                type: 'author_section',
                title: 'Author',
              }),
              structureListType({
                S,
                title: 'Blog Detail Side Content',
                type: 'blog_detail_side_content',
              }),
              structureListType({
                S,
                title: 'Category',
                type: 'category',
              }),
              structureListType({
                S,
                title: 'Compare Frameworks Section',
                type: 'compare_frameworks_section',
              }),
            ]),
        ),
      S.divider(),
      structureListType({
        S,
        type: 'page',
        title: 'Page',
        icon: RiPagesLine,
      }),
      S.divider(),
      structureListType({
        S,
        type: 'case_study_detail_page',
        title: 'Case Studies',
        icon: HiOutlineDocumentSearch,
      }),
      structureListType({
        S,
        type: 'blog_detail_page',
        title: 'Blogs',
        icon: SiMicrodotblog,
      }),
      S.divider(),
      structureListType({
        S,
        type: 'framework',
        title: 'Frameworks',
        icon: BsFileEarmarkCodeFill,
      }),
      structureListType({
        S,
        type: 'framework_type',
        title: 'Types of Frameworks',
        icon: BsFileEarmarkCodeFill,
      }),
      structureListType({
        S,
        type: 'hiring_request',
        title: 'Hiring Requests',
        icon: FaRocketchat,
      }),
      structureListType({
        S,
        type: 'message_send_request',
        title: 'Messages',
        icon: HiChat,
      }),
      S.divider(),
      structureListType({
        S,
        type: 'testimonial',
        title: 'Testimonials',
        icon: HiOutlineAnnotation,
      }),
      structureListType({
        S,
        title: 'Clients',
        type: 'client',
        icon: HiOutlineBriefcase,
      }),
      structureListType({
        S,
        type: 'staff',
        title: 'Staff',
        icon: HiOutlineBriefcase,
      }),
      structureListType({
        S,
        type: 'plan',
        title: 'Plan',
      }),
      structureListType({
        S,
        type: 'package',
        title: 'Packages',
      }),
    ])
