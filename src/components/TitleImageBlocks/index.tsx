import clsx from "clsx";
import TitleSubtitle from "../TitleSubtitle";
import { TextImageBlocksType } from "@/lib/sanity/types/page";
import TitleImageBlock from "@/components/TitleImageBlock";

const TitleImageBlocks: React.FC<TextImageBlocksType> = (block) => {
  const { blocks, section_title } = block || {};
  return (
    <div>
      <div className={clsx("text-blocks-image-section")}>
        <div className="container ">
          {section_title && (
            <div className="[&>div]:flex [&>div]:justify-center [&>div]:max-w-full">
              <TitleSubtitle block={section_title} />
            </div>
          )}
          <div className="pb-[2em] md:pb-[3em] [&>div]:my-[1.5em] [&>div]:max-w-full sm:[&>div]:max-w-[62.1875em] [&>div]:mx-auto">
            {blocks &&
              blocks?.map((block, index) => {
                return <TitleImageBlock block={block} key={index} />;
              })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default TitleImageBlocks;
