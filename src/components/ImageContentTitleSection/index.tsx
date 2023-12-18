import clsx from "clsx";
import dynamic from "next/dynamic";
const RichText = dynamic(() => import("../RichText"));
const CustomImage = dynamic(() => import("../CustomImage"));
import { ImageContentTitleSection as ImageContentTitleSectionType } from "@/lib/sanity/types/page";

const ImageContentTitleSection: React.FC<ImageContentTitleSectionType> = (
  block
) => {
  const { image, content, title } = block || {};

  return (
    <div>
      <div className="container">
        <div
          className={clsx(
            "font-DM [&>p]:pt-[1em] esm:[&>p]:pt-[0] [&>p]:text-[16px] em:[&>p]:text-[18px] md:[&>p]:text-[20px] [&>p]:font-medium [&>p]:text-dark-blue [&>p>span]:font-bold [&>p>span]:text-dark-pink"
          )}
        >
          <h5
            className={clsx(
              "font-DM flex items-center text-dark-pink [&>img]:max-w-[3em] text-[20px] esm:text-[22px] sm:text-[26px] md:text-[30px] xl:text-[34px] mb-[0.5em]"
            )}
          >
            {title}
            {image && <CustomImage block={image} />}
          </h5>
          {content && <RichText block={content} />}
        </div>
      </div>
    </div>
  );
};
export default ImageContentTitleSection;
