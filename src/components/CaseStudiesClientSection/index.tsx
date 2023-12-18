import React, { Fragment } from "react";
import clsx from "clsx";

import CaseStudiesImageDescription from "../CaseStudiesImageDescription";
import TitleSubtitle from "../TitleSubtitle";
import { CaseStudiesClientSectionType } from "@/lib/sanity/types/page";

const CaseStudiesClientSection: React.FC<CaseStudiesClientSectionType> = (
  props
) => {
  const { title_subtitle, section_theme, caseStudies } = props || {};

  return (
    <Fragment>
      <div
        className={clsx(
          "pt-[2em] sm:pt-[4em] pb-[4em] sm:pb-[7em]",
          section_theme ?? "bg-white"
        )}
      >
        <div className="container">
          {title_subtitle && <TitleSubtitle block={title_subtitle} />}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-[1em] em:gap-y-[3em] md:gap-y-[0em] gap-x-[3em] 2xl:gap-x-[5em] mt-[1em] sm:mt-[3em]">
            {caseStudies &&
              caseStudies?.map((i, index) => (
                <CaseStudiesImageDescription block={i} key={index} />
              ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default CaseStudiesClientSection;
