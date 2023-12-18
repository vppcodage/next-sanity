import clsx from "clsx";
import { RichTextWithRichTextCardSectionType } from "@/lib/sanity/types/page";
import dynamic from "next/dynamic";
const RichText = dynamic(() => import("../RichText"));

const RichTextWithRichTextCardSection: React.FC<
  RichTextWithRichTextCardSectionType
> = (block) => {
  const { definition_card_array, definition_rich_text, section_theme } =
    block || {};
  return (
    <div className={clsx("px-0 py-[2em] md:py-[4em]", section_theme ?? "bg-white")}>
      <div className="container">
        <div
          className="
                  [&>h2]:font-medium [&>h2]:leading-[1.5em] [&>h2]:text-[#222549] [&>h2]:text-[28px] sm:[&>h2]:text-[42px] emd:[&>h2]:text-[52px] xl:[&>h2]:text-[60px] [&>h2]:mb-[0.25em] [&>h2]:font-DM
                  [&>h3]:font-medium [&>h3]:leading-[1.5em] [&>h3]:text-[#222549] [&>h3]:text-[3.75em] [&>h3]:mb-[0.25em]
                  [&>h4]:font-medium [&>h4]:leading-[1.5em] [&>h4]:text-[#222549] [&>h4]:text-[3.75em] [&>h4]:mb-[0.25em]
                  [&>h5]:font-medium [&>h5]:leading-[1.5em] [&>h5]:text-[#222549] [&>h5]:text-[3.75em] [&>h5]:mb-[0.25em]
                  [&>h6]:font-medium [&>h6]:leading-[1.5em] [&>h6]:text-[#222549] [&>h6]:text-[3.75em] [&>h6]:mb-[0.25em]
                  [&>p]:text-[14px] sm:[&>p]:text-[16px] xl:[&>p]:text-[18px] [&>p]:font-normal [&>p]:leading-[1.75em] [&>p]:tracking-wide [&>p]:text-[#222549] [&>p]:mb-[1.5em] [&>p]:p-0 [&>h2>strong>:nth-child(1)]:text-[#da3654] [&>h2>strong>:nth-child(2)]:text-[#3bafde] [&>p]:font-Inter  [&>p]:opacity-70
                  [&>h2>strong>:nth-child(3)]:text-[#95f9ed] [&>h2>strong>span]:uppercase [&>img]:my-[3em] [&>img]:max-w-full md:[&>img]:max-w-[80%] [&>img]:mx-auto
                  "
        >
          {definition_rich_text && <RichText block={definition_rich_text} />}
          <div className="mt-[2em] md:mt-[4em]">
            <ul
              className=" max-w-full md:max-w-[90%] lg:max-w-[80%] block md:grid grid-cols-[1fr_1fr_1fr] gap-2.5 mx-auto my-0
                      [&>*:nth-child(1)]:bg-[#00f5c4] [&>*:nth-child(2)]:bg-[#FF871F] [&>*:nth-child(3)]:bg-[#E88DA3]
                      "
            >
              {definition_card_array?.map((item, index) => {
                return (
                  <li
                    key={index}
                    className="flex-[0_0_30%] min-h-auto  md:min-h-[13.5em] mx-[0em] my-0 px-[1.5em] py-[1.125em] rounded-[1em_1em_0_0] mb-[1em] md:mb-[0]
                                  last:max-w-full last:text-center last:bg-[#da3654] last:min-h-[auto] last:col-[1/span_3] last:mt-[0em] last:mx-[0em] last:my-0 last:px-[1.5em] last:py-[1.5em] last:rounded-[0_0_0.625em_0.625em] [&>h5]:text-[18px] md:[&>h5]:text-[20px] [&>h5]:text-center [&>h5]:mb-[0.5em] [&>h5]:text-[#222549] [&>p]:text-center [&>p]:text-[13px]  [&>p]:pb-[1em] [&>p]:text-[#000000b3] [&>p]:font-medium [&>p]:font-Inter
                                  last:[&>h2]:!text-[#ffffff] last:[&>h2]:font-bold last:[&>h2]:tracking-wider last:[&>h2]:!m-0
                                  last:[&>h3]:!text-[#ffffff] last:[&>h3]:font-bold last:[&>h3]:tracking-wider last:[&>h3]:!m-0
                                  last:[&>h4]:!text-[#ffffff] last:[&>h4]:font-bold last:[&>h4]:tracking-wider last:[&>h4]:!m-0
                                  last:[&>h5]:!text-[#ffffff] last:[&>h5]:font-bold last:[&>h5]:tracking-wider last:[&>h5]:!m-0 [&>h5]:font-DM last:[&>h5]:!text-[26px] md:last:[&>h5]:!text-[34px]
                                  last:[&>h6]:!text-[#ffffff] last:[&>h6]:font-bold last:[&>h6]:tracking-wider last:[&>h6]:!m-0
                                  "
                  >
                    {item && <RichText block={item} key={index} />}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RichTextWithRichTextCardSection;
