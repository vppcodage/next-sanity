import React, { Fragment } from "react";
import TitleSubtitle from "../TitleSubtitle";
import CustomImage from "../CustomImage";
import { TitleImageArraySectionType } from "@/lib/sanity/types/page";

const TitleImageArraySection: React.FC<TitleImageArraySectionType> = (
  block
) => {
  const { title_subtitle, image_array } = block || {};

  return (
    <Fragment>
      <div
        className="overflow-y-hidden relative mx-0
      "
      >
        {title_subtitle && <TitleSubtitle block={title_subtitle} />}
        <div className="bg-white-color relative w-full h-full overflow-hidden ">
          <div className="mt-[14px] flex w-[9000px] animate-scroll ">
            {image_array?.map((item, index) => {
              return (
                <div
                  className="flex items-center justify-center w-[30em] h-[16em] xl:h-[24em] pl-[1em] first:pl-0
                [&>img]:max-w-full [&>img]:w-full [&>img]:h-full [&>img]:object-cover"
                  key={index}
                >
                  <CustomImage block={item} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default TitleImageArraySection;
