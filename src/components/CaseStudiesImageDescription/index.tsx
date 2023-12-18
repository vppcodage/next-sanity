import { CaseStudyPreviewType } from "@/lib/sanity/types/page";

import dynamic from "next/dynamic";
const RichText = dynamic(() => import("../RichText"));
const Link = dynamic(() => import("../Link"));
const CustomImage = dynamic(() => import("../CustomImage"));
const CaseStudiesImageDescription: React.FC<{
  block: CaseStudyPreviewType;
}> = ({ block }) => {
  const { project_year, slug, project_overview, heroSectionPreviewImage } =
    block || {};
  const { image } = heroSectionPreviewImage || {};
  const { title, description } = project_overview || {};
  return (
    <div className="group">
      <div className="hidden md:block group-hover:hidden">
        <CustomImage block={image} />
      </div>
      <div className=" flex items-start justify-between h-full flex-col  md:hidden group-hover:flex   w-full rounded-[1em] shadow-lg py-[3em] sm:py-[3em] px-[1em] em:px-[2em]  font-Inter text-center em:text-left gap-[0.5em]">
        <div>
          <div className="text-[1.125em] leading-[1.5em] pb-[0.5em] ">
            {project_year}
          </div>
          <div className=" font-Montserrat text-[1.75em] font-semibold text-[#da3654] pb-[0.5em]">
            {title}
          </div>
          <div className=" [&>p]:text-dove-gray-color [&>p]:text-[15px] em:[&>p]:text-[16px] xl:[&>p]:text-[18px] [&>p]:pb-[0.5em] ">
            {description && <RichText block={description} />}
          </div>
        </div>
        <div className="flex justify-center em:justify-end w-full  ">
          <Link
            to={`/case-studies/${slug?.current}`}
            className="text-[1em] font-medium text-[#eff0f7] bg-[#222549] rounded-[0.5em] py-[0.5em] px-[1.5em] hover:bg-dark-pink hover:text-[#eff0f7] font-DM w-fit"
          >
            view case
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CaseStudiesImageDescription;
