import React from "react";
import { GetStaticProps, NextPage } from "next";
import { SharedPageProps } from "@/lib/sanity/types";
import { fetchDataFromSanity, pageQuery, readToken } from "@/lib/sanity";
import { filterSanityDataToSingleItem } from "@/lib/sanity/utils/filterSanityDataToSingleItem";
import PreviewComparisionListingView from "@/views/PreviewComparisionListingView";
import ComparisionListingView from "@/views/ComparisionListingView";
import { ComparisionListingType } from "@/lib/sanity/types";
import { comparisionListingPageQuery } from "@/lib/sanity/queries/comparisionListingPageQuery";

export interface PageProps extends SharedPageProps {
  page: ComparisionListingType;
}
const ComparisionListingPage: NextPage<PageProps> = ({ page, draftMode }) => {
  if (draftMode) {
    return <PreviewComparisionListingView page={page} preview={draftMode} />;
  }
  return <ComparisionListingView page={page} />;
};
export default ComparisionListingPage;
export const getStaticProps: GetStaticProps<PageProps> = async ({
  draftMode = false,
}) => {
  const pageData = await fetchDataFromSanity<ComparisionListingType[]>({
    query: comparisionListingPageQuery.query,
  });
  const page = filterSanityDataToSingleItem({
    data: pageData,
    isPreview: draftMode,
  });
  if (!page) {
    return {
      notFound: true,
    };
  }
  return {
    props: { page, draftMode, token: draftMode ? readToken : "" },
  };
};
