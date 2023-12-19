import Comparision from "@/components/Comparision";
import Layout from "@/layouts/Layout";
import { ComparisionDetailPageType } from "@/lib/sanity/types";
import { Framework } from "@/lib/sanity/types/framework";

export interface ComparisionDetailPageViewProps {
  preview?: boolean;
  loading?: boolean;
  framework_1: Framework;
  framework_2: Framework;
  page: ComparisionDetailPageType;
}

export default function ComparisionDetailPageView(
  props: ComparisionDetailPageViewProps
) {
  const { preview, loading, page, framework_1, framework_2 } = props;
  const data = { framework_1, framework_2, page };
  return (
    <Layout
      seo={page?.seo}
      preview={preview}
      loading={loading}
      header={page?.header}
      footer={page?.footer}
    >
      <Comparision block={data} />
    </Layout>
  );
}
