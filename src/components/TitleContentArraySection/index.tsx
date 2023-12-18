
import React, { Fragment } from "react";
import dynamic from "next/dynamic";
const RichText = dynamic(() => import("@/components/RichText"));
import { TitleContentArrayType } from "@/lib/sanity/types/page";


const TitleContentArraySection: React.FC<TitleContentArrayType> = (block) => {
  const { text_section } = block || {};

  return (
    <Fragment>
      <div className="pt-[25em] sm:pt-[28em] lg:pt-[29em] 2xl:pt-[30em] pb-[2.5em] sm:pb-[5em]">
        <div className="container">
          {text_section?.map((item, index) => {
            const { content, title } = item || {};
            return (
              <div
                key={index}
                className="[&>ul>li]:mb-[1em] [&>ul>li]:text-[1em] leading-[28px] font-[400]"
              >
                <h4 className="privacy-heading">{title}</h4>
                {content && <RichText block={content} />}
              </div>
            );
          })}
        </div>
      </div>
    </Fragment>
  );
};

export default TitleContentArraySection;
