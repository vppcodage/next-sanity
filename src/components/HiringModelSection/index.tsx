//@ts-ignore
//@ts-nocheck
import React, { useState } from "react";
import clsx from "clsx";
import HiringModelSubSection from "./HiringModelSubSection";
import { HiringModelSectionFragment } from "../../__app__/api/generated/graphql/graphql";
import TitleSubtitle from "../TitleSubtitle";

const HiringModelSection: React.FC<{ block: HiringModelSectionFragment }> = ({
  block,
}) => {
  const { sub_sections, title_subtitle, section_theme } = block || {};

  const [sortedDetails, setSortedDetails] = useState<string | undefined | null>(
    sub_sections ? sub_sections[0]?.title : ""
  );
  return (
    <div className={clsx("hiringmodel-section", section_theme ?? "bg-white")}>
      <div className="container">
        {title_subtitle && <TitleSubtitle block={title_subtitle} />}
        <div className="hiringmodel-tabbar">
          <ul>
            {sub_sections?.map((buttonTitle, index) => {
              const { title } = buttonTitle || {};
              return (
                <li
                  key={index}
                  className={clsx({ active: title === sortedDetails })}
                >
                  <button onClick={() => setSortedDetails(title)}>
                    {buttonTitle?.title}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="hiringmodel-tabcontent">
          {sub_sections?.map((item, index) => {
            return (
              <div key={index}>
                {item?.title === sortedDetails && item && (
                  <HiringModelSubSection item={item} />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default HiringModelSection;
