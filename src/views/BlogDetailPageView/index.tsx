import BlogDetailPage from "@/components/BlogDetailPage";
import Layout from "@/layouts/Layout";
import { useModals } from "@/lib/hooks/useModals";
import { BlogDetailPageType } from "@/lib/sanity/types/blog";

export interface BlogDetailPageViewProps {
  preview?: boolean;
  loading?: boolean;
  page: BlogDetailPageType;
}

export default function BlogDetailPageView(props: BlogDetailPageViewProps) {
  const { preview, loading, page } = props;
  const { readblog } = page || {};
  const { setBlog } = useModals();
  if (readblog) {
    setBlog(readblog);
  }
  return (
    <Layout
      seo={page?.seo}
      preview={preview}
      loading={loading}
      header={page?.header}
      footer={page?.footer}
    >
      <BlogDetailPage block={page} />
    </Layout>
  );
}
