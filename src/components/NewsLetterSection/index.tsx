//@ts-ignore
//@ts-nocheck
import React from "react";
import clsx from "clsx";
import EmailForm from "./EmailForm";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import { NesLetterSectionType } from "@/lib/sanity/types/page";
import { MAILCHIMP_ENDPOINT } from "@/lib/constants";
import { useSanityImage } from "@/lib/sanity";

const NewsLetterSection: React.FC<{ block: NesLetterSectionType }> = ({
  block,
}) => {
  const { background_image, description, title, section_theme } = block || {};
  const PostUrl = MAILCHIMP_ENDPOINT ?? "";
  const bgUrl = useSanityImage({
    asset: background_image && background_image?.image?.asset,
  });

  return (
    <div className={clsx(" pt-[2em] pb-[4.5em]", section_theme ?? "bg-white")}>
      <div className="container">
        <div
          className="newsletter-inner max-w-[60.4375em] w-full rounded-[0.625em] px-[1em] em:px-[0] py-[3em] sm:py-[5em] mx-auto text-center"
          style={{
            backgroundImage: `url(${bgUrl?.src || ""})`,
            backgroundSize: "cover",
          }}
        >
          <h4 className="text-[22px] sm:text-[26.25px] xl:text-[30px] mb-[0.25em] font-bold text-[#fff] font-DM">
            {title}
          </h4>
          <h6 className="text-[14px] sm:text-[16px] font-normal mb-[0.25em] text-[#EDFCF2] font-Inter">
            {description}
          </h6>
          <div className=" max-w-[400px] mt-[1.5em] sm:mt-[2em] mx-auto relative">
            <MailchimpSubscribe
              url={PostUrl}
              render={({ subscribe, status, message }) => {
                return (
                  <div>
                    <EmailForm
                      status={status}
                      message={message}
                      subscribe={subscribe}
                    />
                    {status === "sending" && <span className="waiting" />}
                    {status === "error" && (
                      <span
                        className="error"
                        dangerouslySetInnerHTML={{
                          __html: String(message),
                        }}
                      />
                    )}
                    {status === "success" && (
                      <span
                        className="success"
                        dangerouslySetInnerHTML={{
                          __html: String(message),
                        }}
                      />
                    )}
                  </div>
                );
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetterSection;
