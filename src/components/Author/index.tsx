import React from "react";
import CustomImage from "../CustomImage";
import dynamic from "next/dynamic";
import { Author } from "@/lib/sanity/types/author";


const Link = dynamic(() => import("../Link"));

const Author: React.FC<{ block: Author }> = ({ block }) => {
  const { author_Image, author_Name, author_Post, company } = block || {};
  return (
    <div className="mt-[1.75em] pb-[1em] sm:pb-[3em] [&>div]:text-left flex  justify-center em:justify-start items-center">
      <div className="[&>img]:max-w-[4em] sm:[&>img]:max-w-[4.8125em]">
        {author_Image && <CustomImage block={author_Image} />}
      </div>
      <div className="pl-[0.875em]">
        <h1 className="text-[16px] em:text-[18px] xl:text-[22px] leading-normal font-bold text-[#232536] font-DM">
          {author_Name}
        </h1>
        <div className="[&>span]:text-[#6D6E76] [&>span]:text-[12px] em:[&>span]:text-[14px] [&>span]:leading-normal font-Inter">
          {author_Post && <span>{author_Post}</span>}
          {company && (
            <span className="[&>a]:text-[#6D6E76] [&>a]:text-[12px] em:[&>a]:text-[14px] [&>a]:leading-normal">
              <Link to={String(company?.link)}>{company?.label}</Link>
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Author;
