import clsx from "clsx";
import { useState } from "react";
import dynamic from "next/dynamic";
import HomeBlogPostCard from "../Homeblog/HomeBlogPostCard";
const NotFound = dynamic(() => import("../NotFound"));
import TitleSubtitle from "../TitleSubtitle";
import locales from "@/lib/locales";
import { BlogsType, OurBlogSectionType } from "@/lib/sanity/types/page";

const AllBlogs: React.FC<OurBlogSectionType & { allBlogs?: BlogsType[];}> = ({
  view_blog_button,
  section_theme,
  allBlogs,
  title_subtitle,
}) => {
  const blogs = allBlogs;
  const [currBlogNo, setCurrBlogNo] = useState(6);
  return (
    <div
      className={clsx(
        "pt-[2em] sm:pt-[3em] pb-[3em]",
        section_theme ?? "bg-white"
      )}
    >
      <div className="container">
        {!(Array.isArray(blogs) && blogs.length > 0) && (
          <NotFound
            title={locales.en.BLOG_NOT_FOUNDTEXT}
            description={locales.en.BLOG_NOT_FOUND_DESCRIPTION}
          />
        )}
        <div id="all_blogs" className="homeblog-inner">
          <div className=" ">
            {Array.isArray(blogs) && blogs.length > 0 && (
              <>
                <div className="">
                  {title_subtitle && <TitleSubtitle block={title_subtitle} />}
                </div>
                <ul className="grid grid-cols-[1fr] sm:grid-cols-[1fr_1fr] lg:grid-cols-[1fr_1fr_1fr] gap-x-[2em] gap-y-[1.875em] items-start">
                  {blogs?.slice(0, currBlogNo)?.map((item, index) => {
                    return <HomeBlogPostCard block={item} key={index} />;
                  })}
                </ul>
              </>
            )}

            {Array.isArray(blogs) &&
              blogs.length != 0 &&
              currBlogNo <= blogs.length && (
                <div className="text-center">
                  <button className=" mt-[2.75em] mx-auto my-0
                inline-block bg-[#DA3654]  leading-[1.25em] font-bold text-white cursor-pointer text-[12.6px]  md:text-[15.75px] lg:text-[18px] px-[2em] md:px-[1.5em] py-[1em] md:py-[1em] rounded-[3.5em] hover:bg-dark-blue
                text-[#fff]" onClick={() => setCurrBlogNo((prevNo) => prevNo + 6)}>
                    {view_blog_button?.label}
                  </button>
                </div>
              )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default AllBlogs;
