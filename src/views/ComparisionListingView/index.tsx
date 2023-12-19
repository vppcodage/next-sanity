import Section from "@/components/common/Section";
import Layout from "@/layouts/Layout";
import { ComparisionListingType } from "@/lib/sanity/types";

export interface ComparisionListingViewProps {
  preview?: boolean;
  loading?: boolean;
  page: ComparisionListingType;
}

export default function ComparisionListingView(
  props: ComparisionListingViewProps
) {
  const { preview, loading, page } = props;
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
          return <Section data={item} key={index} />;
        })}
    </Layout>
  );
}
