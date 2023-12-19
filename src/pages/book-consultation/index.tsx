import React from "react";
import { GetStaticProps, NextPage } from "next";
import { SharedPageProps } from "@/lib/sanity/types";
import { fetchDataFromSanity, pageQuery, readToken } from "@/lib/sanity";
import { filterSanityDataToSingleItem } from "@/lib/sanity/utils/filterSanityDataToSingleItem";

import BookConsultationPageView from "@/views/BookConsultationPageView";
import { bookConsultationQuery } from "@/lib/sanity/queries/bookConsultationQuery";
import { BookConsultationListing } from "@/lib/sanity/types/bookConsultation";
import PreviewBookConsultationListingView from "@/views/PreviewBookConsultationListingView";
import PreviewPageView from "@/views/PreviewPageView";
import PageView from "@/views/PageView";
import { Page } from "@/lib/sanity/types/page";

export interface PageProps extends SharedPageProps {
  page: BookConsultationListing;
}
const BookConsultationPage: NextPage<PageProps> = ({ page, draftMode }) => {

  if (draftMode) {
    return <PreviewBookConsultationListingView page={page} preview={draftMode} />;
  }
  return <BookConsultationPageView page={page} />;
};
export default BookConsultationPage;
export const getStaticProps: GetStaticProps<PageProps> = async ({
  draftMode = false,
}) => {
  const pageData = await fetchDataFromSanity<BookConsultationListing[]>({
    query: bookConsultationQuery.query,
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
