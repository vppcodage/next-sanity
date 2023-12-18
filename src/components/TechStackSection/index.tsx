import React, { Fragment, useState } from "react";
import clsx from "clsx";

import Frameworkalldata from "./Frameworkalldata";
import TitleSubtitle from "../TitleSubtitle";
import {
  AllFrameworkTypes,
  FrameworkType,
  TechStackSectionType,
} from "@/lib/sanity/types/page";

const TechStackSection: React.FC<TechStackSectionType> = ({
  title_subtitle,
  frameworkTypes,
}) => {
  const [sortedDetails, setSortedDetails] = useState<{
    frameworkName: string;
    frameworks?: Pick<AllFrameworkTypes, "_type" | "image" | "name">[];
  }>({
    frameworkName: frameworkTypes?.[0].name,
    frameworks: frameworkTypes?.[0].frameworks,
  });
  const handleClick = (data?: FrameworkType) => {
    setSortedDetails({
      frameworkName: data?.name,
      frameworks: data?.frameworks,
    });
  };
  return (
    <Fragment>
      <div className="pt-[1em] em:pt-[2em] sm:pt-[6em] pb-[1em] em:pb-[2em] sm:pb-[3em]">
        <div className="container">
          {title_subtitle && <TitleSubtitle block={title_subtitle} />}
          <div className="  block em:inline-block my-[1rem] em:my-[2rem] text-center mx-auto">
            <ul className="flex flex-col em:flex-row items-center ml-[0] em:ml-[0.5em]">
              {frameworkTypes &&
                frameworkTypes?.map((i, index) => {
                  return (
                    <li
                      key={index}
                      className={clsx(
                        "mr-[0] em:mr-[2em] text-[14px] em:text-[16px] sm:text-[18px] font-medium text-[#da3654] opacity-50 pt-[0.7em] em:pt-[0em] cursor-pointer hover:opacity-100 font-DM border-b-[0.125em] border-[transparent] ",
                        sortedDetails.frameworkName === i?.name &&
                        "!border-[#222549] !opacity-[1]"
                      )}
                      onClick={() => handleClick(i)}
                    >
                      {i?.name}
                    </li>
                  );
                })}
            </ul>
          </div>
          <div>
            <ul className="grid grid-cols-[1fr_1fr] esm:grid-cols-[1fr_1fr_1fr] em:grid-cols-[1fr_1fr_1fr] sm:grid-cols-[1fr_1fr_1fr_1fr_1fr] md:grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr] lg:grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr] gap-x-[1.75em] gap-y-[1em] em:gap-y-[2em]  md:gap-y-[2em]">
              {sortedDetails.frameworks &&
                sortedDetails.frameworks.map((item, index) => {
                  return (
                    <li
                      key={index}
                      className="[&>div>div]:flex [&>div>div]:justify-center [&>div>div]:items-center [&>div>div]:mx-auto [&>div>div]:w-[7em] [&>div>div]:h-[7em] [&>div>div]:p-[0.5em] [&>div>div]:text-center   "
                    >
                      <Frameworkalldata block={item} key={index} />
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
        <div />
      </div>
    </Fragment>
  );
};

export default TechStackSection;
