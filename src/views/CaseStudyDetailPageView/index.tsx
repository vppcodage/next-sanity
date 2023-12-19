import Section from "@/components/common/Section";
import Layout from "@/layouts/Layout";
import { CaseStudy } from "@/lib/sanity/types/caseStudy";

export interface CaseStudyDetailPageViewProps {
  preview?: boolean;
  loading?: boolean;
  page: CaseStudy;
}

export default function CaseStudyDetailPageView(props: CaseStudyDetailPageViewProps) {
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
