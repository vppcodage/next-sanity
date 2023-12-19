import Section from "@/components/common/Section";
import SectionView from "@/components/common/SectionView";
import Layout from "@/layouts/Layout";
import { BlogListing } from "@/lib/sanity/types/blog";

export interface BlogListingProps {
  preview?: boolean;
  loading?: boolean;
  page: BlogListing;
}

export default function BlogListingView(props: BlogListingProps) {
  const { preview, loading, page } = props;
  const {allBlogs,categories} = page || {}
  const blogs = allBlogs?.slice(6)
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
