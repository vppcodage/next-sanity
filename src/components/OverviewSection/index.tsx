import { OverviewSectionType } from "@/lib/sanity/types/page";
import CustomImage from "../CustomImage";
import TitleDescription from "../ImageSideBySideTitleDescriptionArraySection/TitleDescription";
import TitleSubtitle from "../TitleSubtitle";

const OverviewSection: React.FC<OverviewSectionType> = (block) => {
  const { technology_icon, feature_image, title_subtitle, section_title } =
    block || {};
  return (
    <div className="mt-[1em] em:mt-[3em] mb-[5em] sm:mb-[8em]">
      <div className="container">
        {title_subtitle && <TitleSubtitle block={title_subtitle} />}

        <div className="block emd:flex justify-between mt-[1em] em:mt-[2em] pt-[2em] em:pt-[3em] pb-[1em] em:pb-[2em] emd:pb-[3em] px-[1em] em:px-[2em] bg-[#f4fbff] rounded-[0.625em] font-DM">
          <div className="w-full emd:w-[54%] min-h-[100%] em:min-h-[23em] vem:min-h-[26em] [&>img]:max-h-[45em] vem:[&>img]:max-h-[40em] emd:[&>img]:max-h-[26em] [&>img]:max-w-full [&>img]:object-fill">
            {feature_image?.map((image, index) => {
              return <CustomImage block={image} key={index} />;
            })}
          </div>
          <div className="w-full emd:w-[44%] pl-[0.5em] [&>div>h6]:text-[23.625px] sm:[&>div>h6]:text-[26.25px]  xl:[&>div>h6]:text-[30px] [&>div>h6]:text-dark-pink [&>div>h6]:font-bold [&>div>h6]:mb-[1em] [&>div>p]:text-[15.75px] sm:[&>div>p]:text-[17.5px] xl:[&>div>p]:text-[20px] [&>div>p]:text-[#000] [&>div>p]:font-normal [&>div>p]:font-DM [&>div>p]:leading-[1.5em] [&>div>p]:opacity-100 mt-[2em] em:mt-[3em] emd:mt-[0]">
            {section_title && <TitleDescription block={section_title} />}
            <div className=" flex justify-around my-[2em] [&>img]:max-w-[3em] em:[&>img]:max-w-[4em]">
              {technology_icon?.map((image, index) => {
                return <CustomImage block={image} key={index} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OverviewSection;
