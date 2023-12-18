import React, { Fragment } from "react";
import clsx from "clsx";

import TitleSubtitle from "../TitleSubtitle";
import Button from "../Button";
import { BlogtitleSectionType } from "@/lib/sanity/types/page";
import HomeBlogPostCard from "./HomeBlogPostCard";

const Homeblogs: React.FC<BlogtitleSectionType> = (block) => {
  const { blog_button, title_subtitle, section_theme, blogs } = block || {};
  return (
    <Fragment>
      <div className={clsx(" py-[3em]", section_theme ?? "bg-white")}>
        <div className="container">
          <div className="pb-[1em] md:pb-[3em]">
            <div className=" leading-[1.25em] text-[#110462] text-[16px] esm:text-[18px] sm:text-[20px] lg:text-[24px] xl:text-[34px] [&>div>h5]:max-w-[50.5625em]">
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

            <div className=" mt-[3.125em]">
              <ul className="grid grid-cols-1 sm:grid-cols-2 emd:grid-cols-3 gap-x-[1.875em] gap-y-[1.875em] items-start">
                {blogs?.map((item, index) => {
                  return <HomeBlogPostCard block={item} key={index} />;
                })}
              </ul>
              <div
                className=" text-center mt-[2.75em] mx-auto my-0
              [&>a]:inline-block [&>a]:bg-[#DA3654]   [&>a]:leading-[1.25em] [&>a]:font-bold [&>a]:text-white [&>a]:cursor-pointer [&>a]:text-[12.6px]  md:[&>a]:text-[15.75px] lg:[&>a]:text-[18px] [&>a]:px-[2em]   md:[&>a]:px-[1.5em] [&>a]:py-[1em] md:[&>a]:py-[1em] [&>a]:rounded-[3.5em] hover:[&>a]:bg-dark-blue
              hover:[&>a]:text-[#fff] 
              
              "
              >
                {blog_button && <Button block={blog_button} />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Homeblogs;
