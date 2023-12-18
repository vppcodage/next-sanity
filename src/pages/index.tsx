import { GetStaticProps, NextPage } from "next";
import React from "react";

import { fetchDataFromSanity, readToken } from "@/lib/sanity";
import { Page } from "@/lib/sanity/types/page";
import { homePageQuery } from "@/lib/sanity/queries/homePageQuery";
import { filterSanityDataToSingleItem } from "@/lib/sanity/utils/filterSanityDataToSingleItem";
import PageView from "@/views/PageView";
import dynamic from "next/dynamic";
import { SharedPageProps } from "@/lib/sanity/types";
const PreviewPageView = dynamic(()=>import("@/views/PreviewPageView"))
export interface PageProps extends SharedPageProps {
  page: Page;
}

const Home: NextPage<PageProps> = ({ page, draftMode }) => {
  if (draftMode) {
    return <PreviewPageView page={page} preview={draftMode} />;
  }
  return <PageView page={page} />;
};
export const getStaticProps: GetStaticProps<PageProps> = async ({
  draftMode = false,
}) => {
  const homePageData = await fetchDataFromSanity<Page[]>({
    query: homePageQuery.query,
  });
  const homePageFilteredData = filterSanityDataToSingleItem({
    data: homePageData,
    isPreview: draftMode,
  });
  if (!homePageFilteredData) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      page: homePageFilteredData,
      draftMode,
      token: draftMode ? readToken : "",
    },
  };
};
export default Home;
