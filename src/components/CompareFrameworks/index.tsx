import clsx from "clsx";
import React from "react";
import { ComparisionFrameworksSectionType } from "@/lib/sanity/types/page";
import dynamic from "next/dynamic";
const Frameworks = dynamic(()=>import("../Frameworks"))
const ComparisionFrameworks: React.FC<ComparisionFrameworksSectionType> = ({
  compare_framework_section,
  title_subtitle,
  variant,
  is_show,
}) => {
  return (
      <div
        className={clsx(
          "pl-[0em] pr-0 pt-[2.5em] sm:pt-[5em] pb-[1em]",
          variant ?? "primary"
        )}
      >
        <div className="container">
          <div
            className={clsx(
              "",
              is_show
                ? "hidden"
                : "[&>div]:bg-[#DA3654] [&>div]:w-full [&>div]:max-w-full [&>div]:m-0 [&>div]:p-[2em] em:[&>div]:p-[3em] [&>div]:rounded-[0.625em_0.625em_0_0] [&>div>h5]:text-[14.75px] sm:[&>div>h5]:text-[15.75px] emd:[&>div>h5]:text-[14px] xl:[&>div>h5]:text-[16px] [&>div>h5]:mt-[1em] [&>div>h5]:max-w-full sm:[&>div>h5]:max-w-[85%] [&>div]:text-center em:[&>div]:text-left"
            )}
          >
          {title_subtitle && (
              <div className="max-w-[850px] mt-[0] ml-auto em:ml-0 mr-auto text-center em:text-left mb-[30px] md:mb-[50px] ">
                <p className="after:absolute after:bg-[#fff] after:w-[1.5em] after:h-[0.125em] after:right-[0.5em] after:top-[0.5em]  before:absolute before:bg-[#fff] before:w-[1.5em] before:h-[0.125em] before:left-[0.5em] before:top-[0.5em] font-medium leading-[1.25em] uppercase text-[#fff]  tracking-wider relative inline-block mb-[1em] px-[3em] py-0 text-[14.175px] sm:text-[15.75px] xl:text-[18px] font-DM">
                  {title_subtitle?.title}
                </p>
                <p className="mt-[0.5em] xl:mt-[1em] text-[16px] xl:text-[18px] max-w-full ms:max-w-[85%] text-[#fff] font-medium font-DM ">
                  {title_subtitle?.sub_title}
                </p>
              </div>
            )}
          </div>
          <div
            className={clsx(
              "",
              is_show
                ? ""
                : " bg-compare-framework-gradient px-0 py-[1.5em] em:py-[2.5em]"
            )}
          >
            {compare_framework_section &&
              compare_framework_section?.map((item, index) => {
                return (
                  item && (
                    <Frameworks
                      block={item}
                      key={index}
                      isshow={Boolean(is_show)}
                    />
                  )
                );
              })}
          </div>
        </div>
      </div>
  );
};

export default ComparisionFrameworks;
