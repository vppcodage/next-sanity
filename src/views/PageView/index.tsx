import Layout from "@/layouts/Layout";
import { Page } from "@/lib/sanity/types/page";
import { Suspense } from "react";
import Section from "@/components/common/Section";

export interface PageViewProps {
  preview?: boolean;
  loading?: boolean;
  page: Page;
}

export default function PageView(props: PageViewProps) {
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
          return (
            <Suspense key={index}>
              <Section data={item}  />
            </Suspense>
          );
        })}
    </Layout>
  );
}
