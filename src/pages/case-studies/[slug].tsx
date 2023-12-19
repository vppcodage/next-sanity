import { SharedPageProps } from "@/lib/sanity/types";
import { getAllCaseStudySlugs } from "@/lib/sanity.client";
import { GetStaticProps, NextPage } from "next";
import { readToken } from "@/lib/sanity.api";
import { casestudiesQuery, fetchDataFromSanity } from "@/lib/sanity";

import { CaseStudy as CaseStudyType } from "@/lib/sanity/types/caseStudy";
import { filterSanityDataToSingleItem } from "@/lib/sanity/utils/filterSanityDataToSingleItem";
import CaseStudyDetailPageView from "@/views/CaseStudyDetailPageView";
import PreviewCaseStudyDetailPageView from "@/views/PreviewCaseStudyDetailPageView";

interface CaseStudyPageProps extends SharedPageProps {
  page: CaseStudyType;
}

interface Query {
  [key: string]: string;
}

const CaseStudyDetailPage: NextPage<CaseStudyPageProps> = ({
  page,
  draftMode,
}) => {
  if (draftMode) {
    return <PreviewCaseStudyDetailPageView page={page} preview={draftMode} />;
  }
  return <CaseStudyDetailPageView page={page} />;
};

export const getStaticProps: GetStaticProps<CaseStudyPageProps, Query> = async (
  ctx
) => {
  const { draftMode = false, params = {} } = ctx;
  const [pageData] = await Promise?.all([
    fetchDataFromSanity<CaseStudyType[]>({
      query: casestudiesQuery?.query,
      queryParams: { slug: params?.slug },
    }),
  ]);

  const pageFilteredData = filterSanityDataToSingleItem({
    data: pageData,
    isPreview: draftMode,
  });
  if (!pageFilteredData) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      page: pageFilteredData,
      draftMode,
      token: draftMode ? readToken : "",
    },
  };
};

export const getStaticPaths = async () => {
  const slugs = await getAllCaseStudySlugs();
  return {
    paths: slugs?.map(({ slug }) => `/case-studies/${slug}`),
    fallback: "blocking",
  };
};
export default CaseStudyDetailPage;
