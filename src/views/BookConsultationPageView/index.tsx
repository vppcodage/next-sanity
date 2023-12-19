import Section from "@/components/common/Section";
import Layout from "@/layouts/Layout";
import { BookConsultationListing } from "@/lib/sanity/types/bookConsultation";

export interface BookConsultationViewProps {
  preview?: boolean;
  loading?: boolean;
  page: BookConsultationListing;
}

export default function BookConsultationPageView(props: BookConsultationViewProps) {
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
