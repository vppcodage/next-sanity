import React from "react";
import type { PropsWithChildren } from "react";

import {
  Header as HeaderType,
  Footer as FooterType,
  SeoType,
} from "@/lib/sanity/types";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import { NEXT_PUBLIC_APP_URL } from "@/lib/constants";
import { getMetaObjects, getOpenGraph } from "@/lib/metaHelper";
import dynamic from "next/dynamic";
import Header  from "@/components/Header";
const Footer = dynamic(() => import("@/components/Footer"));
const AlertBanner = dynamic(() => import("@/components/AlertBanner"));
interface LayoutProps {
  header?: HeaderType;
  footer?: FooterType;
  preview?: boolean;
  loading?: boolean;
  seo: SeoType | null;
}
const Layout: React.FC<PropsWithChildren<LayoutProps>> = ({
  children,
  footer,
  header,
  seo,
  loading,
  preview,
}) => {
  const router = useRouter();
  const { meta_title, meta_description, meta_tags, meta_image, twitter } =
    seo || {};
  const tags = meta_tags ? getMetaObjects(meta_tags) : [];
  const openGraph = seo?.openGraph ? getOpenGraph(seo.openGraph) : undefined;
  const url = (NEXT_PUBLIC_APP_URL ?? "") + router.asPath;
  return (
    <>
      <NextSeo
        themeColor=""
        twitter={twitter}
        nofollow={process.env.NEXT_PUBLIC_ALLOW_INDEXING !== "true"}
        noindex={process.env.NEXT_PUBLIC_ALLOW_INDEXING !== "true"}
        openGraph={openGraph}
        canonical={url || ""}
        additionalMetaTags={tags ?? []}
        title={meta_title ?? ""}
        description={meta_description ?? ""}
      />
      <AlertBanner preview={preview} loading={loading} />
      {header && <Header block={header} />}
      {children}
      {footer && <Footer block={footer} />}
    </>
  );
};

export default Layout;
