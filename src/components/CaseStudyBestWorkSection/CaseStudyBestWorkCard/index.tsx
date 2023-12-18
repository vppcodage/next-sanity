import React, { Fragment } from "react";

import dynamic from "next/dynamic";
import { CaseStudyBestWorkCardType } from "@/lib/sanity/types/page";
const Link = dynamic(() => import("../../Link"));
const CustomImage = dynamic(() => import("../../CustomImage"));

const CaseStudyBestWorkCard: React.FC<{
  item?: CaseStudyBestWorkCardType;
}> = ({ item }) => {
  const { heroSectionPreview, slug, feature_images } = item || {};
  if (!heroSectionPreview) {
    return null;
  }
  const { description, section_title, title } = heroSectionPreview || {};

  return (
    <Fragment>
      <li className="">
        <div className="bg-casestudy-gradient flex flex-col md:flex-row-reverse sm:items-center  justify-between shadow-[0px_4px_10px_rgba(74,58,255,0.3)] mb-[3.25em] lg:mb-[6.25em] px-[2em] md:px-[3em] py-[1.5em] lg:py-[3em] rounded-[0.625em]">
          <div className="w-full md:w-2/5 font-DM">
            <h6 className="leading-[1.5em] font-normal text-[16px] text-[#000ee6] mb-[0.5em] font-DM">
              {section_title}
            </h6>
            <h4 className="text-[24px] sm:text-[30px] md:text-[36px] text-[#222549] font-medium font-DM">
              {title}
            </h4>
            <p className="text-[14px] smn:text-[16px] md:text-[18px] font-normal leading-[1.5em] text-[#222549]">
              {description}
            </p>
            <Link
              to={`/case-studies/${slug?.current}`}
              className="inline-block text-[14px] sm:text-[16px] font-normal leading-[1.25em] px-[0.75em] py-[0.45em] rounded-[0.625em] border-[0.0625em] border-solid border-[#da3654] hover:bg-dark-pink hover:text-[#fff]"
            >
              View Case
            </Link>
          </div>
          <div className="flex justify-center md:justify-start w-full sm:w-[53%] mt-[2em] md:mt-[0]">
            {feature_images?.map((image, index) => {
              return (
                <CustomImage
                  block={image}
                  key={index}
                  className="first:w-full max-w-full min-h-[100%] lg:min-h-[22em] max-h-[22em] object-contain mx-[1em] my-0"
                />
              );
            })}
          </div>
        </div>
      </li>
    </Fragment>
  );
};
export default CaseStudyBestWorkCard;
