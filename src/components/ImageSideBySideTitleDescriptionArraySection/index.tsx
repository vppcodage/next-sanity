import clsx from "clsx";
import { Fragment } from "react";
import React from "react";
import TitleSubtitle from "../TitleSubtitle";
import CustomImage from "../CustomImage";
import TitleDescription from "./TitleDescription";
import { JamstackDevelopmentType } from "@/lib/sanity/types/page";

const ImageSideBySideTitleDescriptionArraySection: React.FC<
  JamstackDevelopmentType
> = (block) => {
  const { image, title_subtitle, title_description, section_theme } =
    block || {};
  return (
    <Fragment>
      <div
        className={clsx("pt-[2.5em] md:pt-[5em] ", section_theme ?? "bg-white")}
      >
        <div className="container">
          {title_subtitle && <TitleSubtitle block={title_subtitle} />}
          <div className=" block emd:flex justify-between mt-[2em] emd:mt-[4.375em]">
            <div className="w-full emd:w-[27%]">
              <ul className="flex flex-row emd:flex-col items-center">
              {image?.map((image, index) => {
                  return (
                    <li key={index} className="mb-[2.5em]">
                      <CustomImage
                        block={image}
                        key={index}
                      />
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="w-full emd:w-[70%]">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-[3.1875em] items-baseline">
                {title_description?.map((item, index) => {
                  return (
                    <li key={index}>
                      {item && <TitleDescription block={item} key={index} />}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ImageSideBySideTitleDescriptionArraySection;
