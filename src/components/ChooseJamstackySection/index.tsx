import { Fragment } from "react";
import clsx from "clsx";
import TitleSubtitle from "../TitleSubtitle";
import CustomImage from "../CustomImage";
import { ChooseJamstackySectionType } from "@/lib/sanity/types/page";

const ChooseJamstackySection: React.FC<ChooseJamstackySectionType> = (
  block
) => {
  const { media_icon, title_subtitle, section_theme } = block || {};

  return (
    <Fragment>
      <div
        className={clsx(
          "pt-[1em] em:pt-[2em] sm:pt-[3.5em] pb-[0em] sm:pb-[3.5em]",
          section_theme ?? "bg-white"
        )}
      >
        <div className="container">
          {title_subtitle && <TitleSubtitle block={title_subtitle} />}
          <div className="mt-[3em] md:mt-[5em]">
            <ul className="flex flex-wrap justify-center  [&>*:nth-child(5)>div>div>img]:mx-auto [&>*:nth-child(5)>div>div>img]:max-w-[1.8em] lsm:[&>*:nth-child(5)>div>div>img]:max-w-[2em] em:[&>*:nth-child(5)>div>div>img]:max-w-[2.5em] [&>*:nth-child(5)>div>div]:max-w-[6em] em:[&>*:nth-child(5)>div>div]:max-w-[6.5em]  [&>*:nth-child(8)>div>div]:max-w-[6em] em:[&>*:nth-child(8)>div>div]:max-w-[6.5em] [&>*:nth-child(8)>div>div>img]:mx-auto [&>*:nth-child(8)>div>div>img]:max-w-[2.2em] em:[&>*:nth-child(8)>div>div>img]:max-w-[3em]">
              {media_icon?.map((item, index) => {
                const { process_image } = item || {};
                return (
                  <li key={index} className="mx-[1.25em] mb-[2em]">
                    <div>
                      <div className="text-center bg-[#222549] p-[1.75em] max-w-[6.5em] rounded-t-[6em] hover:rounded-bl-[0em] rounded-bl-[6em] hover:rounded-br-[6em] [&>img]:max-w-[2em] em:[&>img]:max-w-[3em] [&>img]:h-[2em] em:[&>img]:h-[3em]  transition ease-in-out duration-300 toools">
                        {process_image && <CustomImage block={process_image} />}
                      </div>
                      <h6 className="font-medium leading-[1.25em] tracking-[0.4px] my-[1em] text-center text-[#222549] font-DM text-[14px] em:text-[16px]">
                        {item?.lable}
                      </h6>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default ChooseJamstackySection;
