import clsx from "clsx";
import React from "react";
import { ImageTitleDescriptionArraySectionType } from "@/lib/sanity/types/page";
import dynamic from "next/dynamic";
const RichText = dynamic(() => import("../RichText"));
const CustomImage = dynamic(() => import("../CustomImage"));
const TitleSubtitle = dynamic(() => import("../TitleSubtitle"));

const ImageTitleDescriptionArraySection: React.FC<{
  block: ImageTitleDescriptionArraySectionType;
  index?: number;
}> = ({ block }) => {
  const { title_subtitle, title_blogs, section_theme, background } =
    block || {};
  return (
    <div
      className={clsx(
        "pt-[2em] md:pt-[3.5em] pb-[2.5em] px-0 overflow-hidden ",
        section_theme ?? "bg-white",
        background ?? "withBackground"
      )}
    >
      <div className="container">
        {title_subtitle && <TitleSubtitle block={title_subtitle} />}
        <div
          className={clsx(
            "max-w-full mt-[2em] sm:mt-[4em] mb-0 mx-auto",
            section_theme ? "bg-white-shad-color rounded-[10px]" ?? "" : ""
          )}
        >
          <ul
            className={clsx(
              "flex flex-wrap  items-center justify-between lg:justify-center text-center  px-[1em] sm:px-[2em] rounded-[0.625em]  [&>*:nth-child(3)]:after:hidden [&>*:nth-child(4)>div]:mt-0",
              section_theme
                ? "pt-[1em] em:pt-[3em] md:pt-[4em] pb-[0em] em:pb-[2em] md:pb-[3em] relative [&>*:nth-child(2)>div>img]:w-[200px] "
                : " pt-[0] md:pt-[2em]   pb-[2em] md:pb-[3em]"
            )}
          >
            {title_blogs?.map((item, index) => {
              const { image } = item || {};
              return (
                <li
                  key={index}
                  className={clsx(
                    "relative w-full md:w-[38%] emd:w-[31%] m-0 pt-0 pb-[3em] px-0 em:px-[1em] sm:px-[1.5em]",
                    section_theme
                      ? "after:bg-[none] emd:after:bg-[url('/output-onlinegiftools.gif')] after:absolute after:top-[25%] after:right-[-10%] after:w-[20%] after:h-[4em] after:z-10 after:bg-no-repeat after:bg-gifSize after:bg-center"
                      : ""
                  )}
                >
                  <div
                    className={clsx(
                      "[&>img]:h-[auto] [&>img]:max-h-[150px] [&>img]:max-w-[150px] [&>img]:w-auto [&>img]:mx-auto",
                      section_theme ? "[&>img]:max-w-full" ?? "" : ""
                    )}
                  >
                    {image && <CustomImage block={image} />}
                  </div>
                  <div className="mt-[1em] font-DM">
                    <h6
                      className={clsx(
                        "font-bold text-dark-pink  mb-[0.5em] font-DM",
                        section_theme
                          ? "text-[15px] sm:text-[16px] font-Inter font-semibold" ??
                              ""
                          : "text-[18px] em:text-[20px] xl:text-[22px]"
                      )}
                    >
                      {item?.title}
                    </h6>
                    <div className="[&>p]:tracking-[0.07em] [&>p]:text-[#222549] [&>p]:text-[14px] xl:[&>p]:text-[16px] [&>p]:capitalize font-medium ">
                      {item.content && <RichText block={item.content} />}
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default ImageTitleDescriptionArraySection;
