import React from "react";
import clsx from "clsx";

import { TitleDescriptionSideImageSectionType } from "@/lib/sanity/types/page";
import dynamic from "next/dynamic";
const RichText = dynamic(() => import("@/components/RichText"));
const CustomImage = dynamic(() => import("@/components/CustomImage"));

const SidebarTitleDescriptionSideImageSection: React.FC<{
  block: TitleDescriptionSideImageSectionType;
}> = ({ block }) => {
  const { desc, side_image, title_subtitle, background, variant } = block || {};

  const { sub_title, title } = title_subtitle || {};

  return (
    <div
      className={clsx(
        "",
        variant === "secondary" && "mb-[3em]",
        variant === "primary" &&
          "py-[4rem] md:py-[7rem] lg:py-[8rem] xl:py-[9rem] 2xl:py-[9.375rem]",
        !variant && "",
        background ?? "background-white"
      )}
    >
      <div className="">
        <div
          className={clsx(
            "",
            // max-w-[1220px] mx-auto py-[2em] md:py-[2.6875em] px-[2em] md:px-[3.5em] rounded-[0.625em] block md:flex justify-between text-center em:text-left items-center
            variant === "secondary" &&
              "secondary bg-hire-dedicate-comparision flex flex-col justify-between rounded-[0.625em] px-[1.5em] py-[2.5em]",
            variant === "primary" &&
              "!grid !grid-cols-1 lg:!grid-cols-[2fr_1fr] !p-0",
            !variant && "bg-review-gradient rounded-none"
          )}
        >
          <div
            className={clsx(
              "",
              variant === "primary"
                ? "[&>p]:font-Inter [&>p]:text-[14px] em:[&>p]:text-[16px] [&>p]:text-center em:[&>p]:text-left [&>a]:rounded-[0.625em] [&>a]:text-[14px] [&>a]:font-semibold hover:[&>a]:bg-dark-blue hover:[&>a]:text-[#fff]"
                : "[&>div>h5]:text-[#fff] [&>div>h5]:text-center em:[&>div>h5]:text-left [&>h5]:text-[19px] sm:[&:h5]:text-[21px] xl:[&>h5]:text-[24px]  [&>p]:font-DM  [&>p]:text-[#fff] [&>p]:text-[14px] xl:[&>p]:text-[16px] [&>p]:text-center em:[&>p]:text-left [&>a]:rounded-[3em] [&>a]:text-[14px] xl:[&>a]:text-[16px] [&>a]:font-semibold hover:[&>a]:bg-[#fff] hover:[&>a]:text-[#222549] [&>a]:shadow-hire-btn [&>a]:py-[1em] esm:[&>a]:py-[1.125em] [&>a]:px-[1em] lsm:[&>a]:px-[1.8em] esm:[&>a]:px-[2.5em] w-full md:w-[75%] ",
              variant === "secondary" ? "!w-full" : ""
            )}
          >
            {title && (
              <p
                className={clsx(
                  "after:w-[1.5em] after:h-[0.125em] after:right-[0.5em] after:top-[0.5em]  before:absolute font-DM tracking-wider relative inline-block mb-[1em] px-[3em] py-0 text-[14.175px] sm:text-[15.75px] xl:text-[18px] font-medium leading-[1.25em] uppercase after:absolute before:h-[0.125em] before:left-[0.5em] before:top-[0.5em]",
                  variant === "primary"
                    ? "after:bg-light-blue before:bg-light-blue before:w-[1.5em] !text-[#4A3AFF]"
                    : " after:bg-dark-pink  before:bg-dark-pink before:w-[1.5em]  !text-dark-pink after:content-none before:content-none !px-[0em]"
                )}
              >
                {title}
              </p>
            )}
            {sub_title && (
              <h5
                className={clsx(
                  "capitalize font-DM !text-[1.875em] mb-[0.5em] leading-tight font-medium",
                  variant === "primary"
                    ? "leading-[1.25em] font-medium text-[#110462] text-[1.625em] md:text-[2.1875em] xl:!text-[2.125em]"
                    : "text-[#FFF] ",
                  variant === "secondary"
                    ? "!text-xl sm:!text-2xl  font-bold leading-tight"
                    : ""
                )}
              >
                {sub_title}
              </h5>
            )}
            <div
              className={clsx(
                "max-w-full md:max-w-[74%] [&>p]:text-[#FFFFFF] [&>p]:text-[1em]  [&>p>span]:text-[#da3654] [&>a]:mt-[1em]  [&>a]:shadow-book-btn-shadow [&>a]:font-semibold hover:[&>a]:text-white-color hover:[&>a]:bg-dark-blue [&>a]:rounded-[0.625em] [&>a]:px-[1.57em] [&>a]:py-[1em] [&>a]:text-sm",
                variant === "primary"
                  ? "[&>p]:text-black-color [&>p]:text-base sm:[&>p]:text-lg !max-w-full [&>p]:leading-[1.8em] "
                  : "!max-w-full ",
                variant === "secondary"
                  ? "text-sm  sm:text-base leading-[1.3em]"
                  : ""
              )}
            >
              {desc?.custom_rich_text && <RichText block={desc} />}
            </div>
          </div>
          <div className="!mx-auto lg:ml-auto !mr-0 hidden md:flex justify-center md:justify-end pt-[3em] md:pt-[0] [&>a>img]:max-w-[90%] [&>a>img]:ml-auto [&>a>img]:mr-0 [&>img]:h-[335px]">
            {side_image && (
              <CustomImage block={side_image} className="object-contain" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarTitleDescriptionSideImageSection;
