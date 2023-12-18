import clsx from "clsx";
import { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import { FAndQSectionType } from "@/lib/sanity/types/page";
import dynamic from "next/dynamic";
const RichText = dynamic(() => import("../RichText"));

const FAQSection: React.FC<FAndQSectionType> = ({
  question_and_answer,
  title,
  section_theme,
  variant,
}) => {
  const [currActiveIndex, setCurrActiveIndex] = useState<number[]>([]);

  return (
    <div
      className={clsx(
        "pb-[2em] md:pb-[3.5em] pt-[1em]",
        section_theme ?? "bg-white",
        variant ?? "primary"
      )}
    >
      <div className="container">
        <h4 className="text-[#da3654] max-w-full sm:max-w-[70%] mx-auto mb-[0.5em] md:mb-[0.7em] xl:mb-[1.5em] text-center text-[20px] em:text-[22px] md:text-[26px] xl:text-[30px] font-medium font-DM">
          {title}
        </h4>
        <div className="max-w-[1054px] mx-auto">
          <ul className="block">
            {question_and_answer?.map((item, index) => {
              const { answer } = item || {};
              return (
                <li key={index} className="mx-[0] sm:mx-[1.5em] selection:bg-[transparent] ">
                  <Accordion
                    allowZeroExpanded={true}
                    allowMultipleExpanded={true}
                    className="mb-[1.25em]"
                  >
                    <AccordionItem>
                      <AccordionItemHeading className="bg-[#222549]  relative cursor-pointer rounded-[0.1875em]">
                        <AccordionItemButton>
                          <h6
                            className={clsx(
                              "relative text-[#fff] text-[15.75px] xl:text-[18px] font-bold pr-[3rem] sm:pr-[4rem]  font-DM  after:bg-[url(/Plus.svg)] after:absolute after:top-[50%] after:translate-y-[-50%] after:right-[4%] md:after:right-[2%] after:w-[1em] after:h-[1.1em] after:z-10 after:bg-no-repeat after:bg-[100%] after:transition-all after:duration-[0.2s] pl-[1.5rem] py-[0.85rem] ",
                              {
                                "after:!bg-[url(/Minus.svg)] after:!rotate-180":
                                  currActiveIndex.includes(index),
                              }
                            )}
                            onClick={() =>
                              setCurrActiveIndex((state) => {
                                if (state.includes(index)) {
                                  return state.filter((i) => i != index);
                                } else {
                                  return [...state, index];
                                }
                              })
                            }
                          >
                            {item?.question}
                          </h6>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel className="mt-[0.875em] px-[1.5em] [&>p]:text-[14px] xl:[&>p]:text-[16px] [&>p]:text-[#000000d9] [&>p]:font-DM">
                        {answer && <RichText block={answer} />}
                      </AccordionItemPanel>
                    </AccordionItem>
                  </Accordion>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default FAQSection;
