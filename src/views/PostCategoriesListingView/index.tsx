import Section from "@/components/common/Section";
import Layout from "@/layouts/Layout";
import { AllBlogsData, PostCategoriesListing } from "@/lib/sanity/types/blog";

export interface PostCategoriesPageViewProps {
  preview?: boolean;
  loading?: boolean;
  page: PostCategoriesListing;
  allBlogs: AllBlogsData;
}

export default function PostCategoriesPageView(
  props: PostCategoriesPageViewProps
) {
  const { preview, loading, page, allBlogs } = props;
  const {categories} = page || {}
  const { allBlogs: blogs } = allBlogs || {};
  return (
    <Layout
      seo={page?.seo}
      preview={preview}
      loading={loading}
      header={page?.header}
      footer={page?.footer}
    >
      {page?.section &&
        page?.section?.map((item, index) => {
          return <Section categories={categories} data={item} key={index} allBlogs={blogs} />;
        })}
    </Layout>
  );
}
