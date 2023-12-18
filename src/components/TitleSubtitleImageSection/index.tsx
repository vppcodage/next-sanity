import clsx from "clsx";
import { TitleSubtitleImageSectionType } from "@/lib/sanity/types/page";
import dynamic from "next/dynamic";
const RichText = dynamic(() => import("@/components/RichText"));
const CustomImage = dynamic(() => import("@/components/CustomImage"));
const TitleSubtitle = dynamic(() => import("@/components/TitleSubtitle"));

const TitleSubtitleImageSection: React.FC<TitleSubtitleImageSectionType> = (
  props
) => {
  const { img, title_subtitle, section_theme, content } = props || {};

  return (
    <div className={clsx("px-0 py-[0em]", section_theme ?? "bg-white")}>
      <div className="container">
        {title_subtitle && <TitleSubtitle block={title_subtitle} />}
        <div
          className="mt-[3em]
                [&>img]:max-h-[24em] [&>img]:block [&>img]:mx-auto [&>img]:my-[2em]
                "
        >
          {img && <CustomImage block={img} />}
        </div>
        <div>
          {content && (
            <ul className="block max-w-[84em] xl:max-w-[73em] w-full mx-auto my-0 pl-[2em]">
              <li
                className="list-disc mt-[1.5em] mx-[0em] my-[1em] font-DM
                            [&>ul]:block
                            [&>ul]:mt-[3em]
                            [&>ul>li]:text-[16px] xl:[&>ul>li]:text-[18px] [&>ul>li]:leading-[1.5em] [&>ul>li]:list-disc [&>ul>li]:mt-[1.5em] [&>ul>li]:mx-[0em] [&>ul>li]:mb-[1em]  [&>ul>li]:text-[#222549]
                            [&>ul>li>span]:text-[#DA3654] [&>ul>li>span]:font-semibold
                            "
              >
                <RichText block={content} />
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};
export default TitleSubtitleImageSection;
