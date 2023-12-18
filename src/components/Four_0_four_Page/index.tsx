import clsx from "clsx";
import React from "react";
import CustomImage from "../CustomImage";
import { ErrorImageType } from "@/lib/sanity/types/page";

const Four0fourSection: React.FC<ErrorImageType> = ( block ) => {
  const { error_image, title, sub_title, section_theme } = block || {};
  return (
    <div className={clsx("pt-[10em] md:pt-[13em] pb-[4em]", section_theme ?? "bg-white")}>
      <div className="container">
        <div className="mx-auto text-center [&>img]:max-w-[90%] em:[&>img]:max-w-[70%] md:[&>img]:max-w-[50%] [&>img]:mx-auto">
          <div className="mb-[3em] md:mb-[6em]">
          {title &&  <h4 className="text-[3em] em:text-[4em] font-[900] text-[#da3654] capitalize">{title}</h4> }
          {sub_title &&  <p className="text-[1.25em] em:text-[1.5em] font-bold text-[#222549]">{sub_title}</p> }
          </div>
          {error_image && <CustomImage block={error_image}/>}
        </div>
      </div>
    </div>
  );
};

export default Four0fourSection;
