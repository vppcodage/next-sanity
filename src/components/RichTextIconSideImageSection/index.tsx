import React from "react";
import dynamic from "next/dynamic";
const RichText = dynamic(() => import("../RichText"));
const CustomImage = dynamic(() => import("../CustomImage"));
const TitleSubtitle = dynamic(() => import("../TitleSubtitle"));
import { RichTextIconSideImageSectionType } from "@/lib/sanity/types/page";

const RichTextIconSideImageSection: React.FC<
  RichTextIconSideImageSectionType
> = (block) => {
  const {
    title_subtitle,
    section_description,
    icon_lable_array,
    section_image,
  } = block || {};
  return (
    <div className="pt-[2.5em] sm:pt-[5em] pb-[2.5em] sm:pb-[3em]">
      <div className="container">
        <div className="block emd:grid grid-cols-[1.5fr_1fr] gap-x-[7em] [&>div>p]:text-[14px] xl:[&>div>p]:text-[15px] [&>div>p]:text-[#646680] [&>div>p]:font-Montserrat [&>div>p]:leading-[180%] [&>div>p]:pb-[1em] [&>div>p]:font-Inter [&>div>p]:text-center em:[&>div>p]:text-left">
          <div className="[&>div>h5]:max-w-[50.56em] [&>div>h5]:text-[#222549] [&>div>h5]:font-Montserrat [&>div>h5]:font-semibold [&>div>h5]:mb-[0.5em] [&>div>h5]:text-[19px] sm:[&>div>h5]:text-[21px] xl:[&>div>h5]:text-[24px] ">
            {title_subtitle && <TitleSubtitle block={title_subtitle} />}
            {section_description && <RichText block={section_description} />}
            <div className="mt-[1em] max-w-full md:max-w-[70%]">
              <ul className="grid grid-cols-2 em:grid-cols-4 grid-rows-1 gap-y-[30px] sm:gap-y-[0px] gap-x-[30px] emm:gap-x-[0px] items-baseline justify-center">
                {icon_lable_array?.map((item, index) => {
                  const { icon_image, icon_title } = item || {};
                  return (
                    <li
                      key={index}
                      className="ml-auto mr-auto sm:mr-[2em] text-center"
                    >
                      <div className="flex flex-col justify-center w-[7em]">
                        <div className="w-[5em] h-auto p-[1em] mx-auto text-center bg-[#fff] rounded-[0.8em] shadow-white-lable">
                          {icon_image && <CustomImage block={icon_image} />}
                        </div>
                        <h6 className="text-[0.875em] text-dark-blue font-semibold font-Inter mt-[0.5em] ">
                          {icon_title}
                        </h6>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="max-w-[90%] em:max-w-[50%] emd:max-w-full mx-auto pt-[5em] emd:pt-[0em]">
            {section_image && <CustomImage block={section_image} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RichTextIconSideImageSection;
