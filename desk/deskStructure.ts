import { MenuItem, MenuItemBuilder, StructureResolver } from "sanity/desk";
import { AiOutlineGlobal } from "react-icons/ai";
import { structureListType } from "./helper/structure-list-type";
import {
  HiChat,
  HiOutlineAnnotation,
  HiOutlineBriefcase,
  HiOutlineDocumentSearch,
  HiOutlineTerminal,
} from "react-icons/hi";
import {
  RiPagesLine,
  RiGroupLine,
  RiPagesFill,
} from "react-icons/ri";
import { SiMicrodotblog } from "react-icons/si";
import { BsFileEarmarkCodeFill } from "react-icons/bs";

import { FaRocketchat } from "react-icons/fa";
import { OLD_PAGE_ID_LIST } from "./helper/defaults";
const singleton_pages = [
  OLD_PAGE_ID_LIST["blog_page"],
  OLD_PAGE_ID_LIST["book_consultation_page"],
  OLD_PAGE_ID_LIST["case_study_page"],
  OLD_PAGE_ID_LIST["four_o_four"],
  OLD_PAGE_ID_LIST["home"],
];
export const deskStructure: StructureResolver = (S) =>
  S.list()
    .title("Documents")
    .items([
      S.listItem()
        .title("Global")
        .icon(AiOutlineGlobal)
        .child(
          S.list()
            .title("Global")
            .items([
              structureListType({
                S,
                type: "header",
                title: "Header",
                icon: HiOutlineTerminal,
              }),
              structureListType({
                S,
                type: "footer",
                title: "Footer",
                icon: HiOutlineTerminal,
              }),
              S.divider(),
              structureListType({
                S,
                type: "author_section",
                title: "Author",
              }),
              structureListType({
                S,
                title: "Blog Detail Side Content",
                type: "blog_detail_side_content",
              }),
              structureListType({
                S,
                title: "Category",
                type: "category",
              }),
              structureListType({
                S,
                title: "Compare Frameworks Section",
                type: "compare_frameworks_section",
              }),
            ])
        ),
      S.divider(),
      S.listItem()
        .title("Site Pages (Unique)")
        .icon(RiPagesLine)
        .child(
          S.list()
            .title("Site Pages (Unique)")
            .items([
              S.documentListItem()
                .title("Home Page")
                .icon(RiGroupLine)
                .schemaType("home"),
              S.documentListItem()
                .title("Case Study Index")
                .icon(RiGroupLine)
                .schemaType("case_study_page"),
              S.documentListItem()
                .icon(RiGroupLine)
                .title("Comparision Main Page")
                .schemaType("comparision_main_page"),
              S.documentListItem()
                .icon(RiGroupLine)
                .title("Blog Index")
                .schemaType("blog_page"),
              S.documentListItem()
                .icon(RiGroupLine)
                .title("Comparision Details")
                .schemaType("comparision_details_page"),
              S.documentListItem()
                .icon(RiGroupLine)
                .title("404")
                .schemaType("all_page"),
              S.documentListItem()
                .icon(RiGroupLine)
                .title("Book Consultation Page")
                .schemaType("book_consultation_page"),
            ])
        ),
      S.listItem()
        .title("Site Pages (Custom)")
        .icon(RiPagesFill)
        .child(
          S.documentTypeList("all_page")
            .filter(
              `_type=="all_page" && !(_id in [${singleton_pages
                ?.map((i) => `"${i}"`)
                .join(",")}])`
            )
            .title("Site Pages (Custom)")
            .menuItems([
              ...(S.documentTypeList("all_page").getMenuItems() as (
                | MenuItem
                | MenuItemBuilder
              )[]),
              S.orderingMenuItem({
                title: "Publishing date new->old",
                by: [{ field: "_createdAt", direction: "desc" }],
                name: "",
              }),
              S.orderingMenuItem({
                title: "Publishing date old->new",
                by: [{ field: "_createdAt", direction: "asc" }],
                name: "",
              }),
            ])
        ),
      S.divider(),
      structureListType({
        S,
        type: "case_study_detail_page",
        title: "Case Studies",
        icon: HiOutlineDocumentSearch,
      }),
      structureListType({
        S,
        type: "blog_detail_page",
        title: "Blogs",
        icon: SiMicrodotblog,
      }),
      S.divider(),
      structureListType({
        S,
        type: "framework",
        title: "Frameworks",
        icon: BsFileEarmarkCodeFill,
      }),
      structureListType({
        S,
        type: "framework_type",
        title: "Types of Frameworks",
        icon: BsFileEarmarkCodeFill,
      }),
      structureListType({
        S,
        type: "hiring_request",
        title: "Hiring Requests",
        icon: FaRocketchat,
      }),
      structureListType({
        S,
        type: "message_send_request",
        title: "Messages",
        icon: HiChat,
      }),
      S.divider(),
      structureListType({
        S,
        type: "testimonial",
        title: "Testimonials",
        icon: HiOutlineAnnotation,
      }),
      structureListType({
        S,
        title: "Clients",
        type: "client",
        icon: HiOutlineBriefcase,
      }),
      structureListType({
        S,
        type: "staff",
        title: "Staff",
        icon: HiOutlineBriefcase,
      }),
      structureListType({
        S,
        type: "plan",
        title: "Plan",
      }),
      structureListType({
        S,
        type: "package",
        title: "Packages",
      }),
    ]);
