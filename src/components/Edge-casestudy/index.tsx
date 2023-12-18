import clsx from "clsx";
import React, { Fragment } from "react";
import TitleSubtitle from "../TitleSubtitle";
import CustomImage from "../CustomImage";
import Button from "../Button";
import Author from "../Author";
import { CaseStudySectionType } from "@/lib/sanity/types/page";

const EdgeCasestudy: React.FC<CaseStudySectionType> = (data) => {
  const {
    case_study_img,
    title_subtitle,
    description,
    read_full_case_study_button,
    section_title,
    author,
    section_theme,
  } = data || {};

  return (
    <Fragment>
      <div
        className={clsx(
          " px-0 py-[1.5em] em:py-[2em] md:py-[4em]",
          section_theme ?? "bg-white"
        )}
      >
        <div className="container">
          <div className="edge-casestudy-inner">
            <div className="section-header">
              {title_subtitle && (
                <div className="max-w-[850px] mt-[0] ml-auto em:ml-0 mr-auto text-center em:text-left mb-[30px] md:mb-[50px] ">
                  <p className="after:absolute after:bg-light-blue after:w-[1em] md:after:w-[1.5em] after:h-[0.125em] after:right-[0.5em] after:top-[0.5em] before:absolute before:bg-light-blue before:w-[1em] md:before:w-[1.5em] before:h-[0.125em] before:left-[0.5em] before:top-[0.5em] font-medium leading-[1.25em] uppercase text-light-blue  tracking-wider relative inline-block mb-[1em] px-[2em] md:px-[3em] py-0 text-[14.175px] sm:text-[15.75px] xl:text-[18px] font-DM">
                    {title_subtitle?.title}
                  </p>
                  <p className="font-medium leading-[1.25em] text-[20px] lg:text-[24px] xl:text-[28px] font-DM text-title-blue-shade">
                    {title_subtitle?.sub_title}
                  </p>
                </div>
              )}
            </div>
            <div className="block md:flex items-center pt-[1em] sm:pt-[3.5em] pb-0 px-0">
              <div
                className="relative w-[70%] sm:w-[50%] mx-auto
              before:content-[''] before:bg-[url(/edge-logo.svg)] before:bg-no-repeat before:w-[3.1em] esm:before:w-[3em] md:before:w-[4em] before:h-[3em] md:before:h-[4em] before:absolute before:right-[38%]  lsm:before:right-[39%] esm:before:right-[41%] em:before:right-[43%] md:before:right-[45%] before:top-[42%]  lsm:before:top-[43%]  esm:before:top-[44%] before:bg-esmedgeSize esm:before:bg-mdedgeSize md:before:bg-edgeSize 
              "
              >
                {case_study_img && (
                  <CustomImage
                    block={case_study_img}
                    className="animate-spin"
                  />
                )}
              </div>
              <div
                className="w-full md:w-[50%] pl-[0] md:pl-[5.3125em] mt-[2em] md:mt-[0em]
                [&>h2]:font-semibold [&>h2]:leading-[1.5em] [&>h2]:text-[#110462] [&>h2]:mb-[0.3em]
                [&>h3]:font-semibold [&>h3]:leading-[1.5em] [&>h3]:text-[#110462] [&>h3]:mb-[0.3em]
                [&>h4]:font-semibold [&>h4]:leading-[30px] sm:[&>h4]:leading-[35px] lg:[&>h4]:leading-[50px] xl:[&>h4]:leading-[60px] [&>h4]:text-dark-blue [&>h4]:mb-[0.3em] [&>h4]:text-[21px] sm:[&>h4]:text-[23px] lg:[&>h4]:text-[34px] xl:[&>h4]:text-[48px] [&>h4]:text-center em:[&>h4]:text-left [&>h4]:font-inter 
                [&>h5]:font-semibold [&>h5]:leading-[1.5em] [&>h5]:text-[#110462] [&>h5]:mb-[0.3em]
                [&>h6]:font-semibold [&>h6]:leading-[1.5em] [&>h6]:text-[#110462] [&>h6]:mb-[0.3em]
                [&>p]:text-[12.75px] md:[&>p]:text-[14.175px] xl:[&>p]:text-[18px] [&>p]:font-inter [&>p]:leading-[22px] xl:[&>p]:leading-[28px] [&>p]:text-center em:[&>p]:text-left [&>*:nth-child(4)]:text-center em:[&>*:nth-child(4)]:text-left
                
              "
              >
                <h2 className="font-Inter">{section_title}</h2>
                <p className="text-[1.125em] font-light leading-[28px]  text-[#646680] mb-[1em] p-0 font-Inter">
                  {description}
                </p>
                <div>{author && <Author block={author} />}</div>
                <div className="hover:[&>a]:text-[#ffffff] [&>a]:px-[20px] sm:[&>a]:px-[28px] [&>a]:py-[10px] sm:[&>a]:py-[12px] hover:[&>a]:bg-[#222549] [&>a]:text-[14px] md:[&>a]:text-[16px] [&>a]:font-medium [&>a]:leading-[20px]">
                  {read_full_case_study_button && (
                    <Button block={read_full_case_study_button} />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default EdgeCasestudy;
