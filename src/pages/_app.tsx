import { SharedPageProps } from "@/lib/sanity/types";
import "../styles/source/main.css";
import { AppProps } from "next/app";
import { lazy } from "react";
const PreviewProvider = lazy(() => import("@/components/PreviewProvider"));
function MyApp({ Component, pageProps }: AppProps<SharedPageProps>) {
  return (
    <>
      {pageProps.draftMode ? (
        <PreviewProvider token={pageProps.token}>
          <Component {...pageProps} />
        </PreviewProvider>
      ) : (
        <Component {...pageProps} />
      )}
    </>
  );
}
export default MyApp;
