import clsx from "clsx";
import React from "react";
import { InlineWidget } from "react-calendly";

import { BookConsultationType } from "@/lib/sanity/types/page";
import dynamic from "next/dynamic";
const RichText=dynamic(()=>import("../RichText"))
const CustomImage=dynamic(()=>import("../CustomImage"))

const BookConsultationSection: React.FC<BookConsultationType> = (block) => {
  const { content, staff, section_image, variant } = block || {};
  const { staff_image, staff_name, staff_content, staff_post } = staff || {};
  return (
    <>
      {variant === "secondary" ? (
        <>
          <div className={clsx("py-[2em] em:py-[3em]", variant ?? "primary")}>
            <div className="container">
              <div
                className={clsx(
                  "bg-[#ecf0f3] shadow-none p-[2em] md:p-[4em] lg:px-[4em] lg:py-[6em] border-[0.0625em] border-solid border-[#da3654] rounded-[1.5em] grid md:grid-cols-[1fr] lg:grid-cols-[3fr_1.5fr] gap-x-[5em] gap-y-[2.5em] md:gap-y-[4em]"
                )}
              >
                <div className="order-1 lg:order-[unset]">
                  <div className="[&>p>strong]:text-[1.375em] [&>p>strong]:font-semibold">
                    {content && <RichText block={content} />}
                  </div>
                  <InlineWidget
                    url="https://calendly.com/bijaljamstacky/30min"
                    styles={{ height: "300px" }}
                    pageSettings={{
                      hideEventTypeDetails: true,
                      hideGdprBanner: true,
                      hideLandingPageDetails: true,
                    }}
                  />
                </div>
                <div className="mt-[5em]">
                  <div className="relative flex-col bg-[#222549] shadow-none m-0 px-[2.5em] py-[2em] rounded-[0.5em_0.5em_0_0]">
                    <div className="mx-auto top-[-5em] flex justify-center inset-x-0 absolute max-w-[6em] rounded-[5em] border-[0.3125em] border-solid border-[#ffffff]">
                      {staff_image && <CustomImage block={staff_image} />}
                    </div>
                    <div className="text-center bg-white mt-[-4em] pt-[3em] pb-[1em] px-[1em] rounded-[0.5em] bg-white-color">
                      <h5 className="text-[1.25em] font-bold text-[#da3654] uppercase">
                        {staff_name}
                      </h5>
                      <p className="text-[1em] font-normal text-[#222549] opacity-100 p-0">
                        {staff_post}
                      </p>
                    </div>
                  </div>
                  <div className="bg-[#222549] flex-col pt-0 pb-[2em] px-[2em] rounded-[0_0_0.5em_0.5em]">
                    <div className="flex items-center justify-center">
                      <p className="text-[0.75em] text-white-color opacity-50 pb-0">
                        Participants
                      </p>
                      <ul className="px-[1.5em] flex items-center">
                        <li className="mx-[-0.8em] [&>img]:max-w-[10em] [&>img]:border-[0.25em] [&>img]:border-[#fff] [&>img]:rounded-[3em]">
                          {section_image && (
                            <CustomImage block={section_image} />
                          )}
                        </li>
                      </ul>
                      <p className="text-[0.75em] text-white-color opacity-50 pb-0">
                        100+
                      </p>
                    </div>
                    <div className="bde-info [&>p]:text-[1em] [&>p]:leading-[1.5em] [&>p]:text-[#ecf0f3] [&>p]:text-center [&>p]:tracking-wide [&>p]:pb-0 pt-[1em]">
                      {staff_content && <RichText block={staff_content} />}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className={clsx("py-[2.5em] em:py-[3em]", variant ?? "primary")}>
            <div className="container">
              <div className="py-[3em] px-[2em] em:px-[4em] shadow-calendy-box rounded-[1.5em] block lg:flex justify-between">
                <div className="w-full lg:w-[70%] max-w-full lg:max-w-[60%]">
                  <div className="block sm:flex  font-Montserrat items-center">
                    <div className="flex mr-[0] sm:mr-[3em] bg-[#fff] rounded-[0.875em] py-[1.5em] pl-[3em] pr-[2.5em] relative shadow-calendy-name">
                      <div className="absolute right-[0] left-[0em] sm:left-[-2em] top-[-2.1em] sm:top-[0.9em] [&>img]:max-w-[4em] flex justify-center sm:justify-start">
                        {staff_image && <CustomImage block={staff_image} />}
                      </div>
                      <div className="mt-[1em] sm:mt-[0] mx-auto text-center sm:text-left  ">
                        <h5 className="text-[21px] xl:text-[24px] font-medium text-[#000]">
                          {staff_name}
                        </h5>
                        <p className="text-[12.25px] xl:text-[14px] font-medium opacity-50 pb-[0]">
                          {staff_post}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center pt-[1em] justify-center">
                      <div className="flex items-center">
                        <p className="text-[12.25px] xl:text-[14px] pb-[0]">
                          Participants
                        </p>
                        <ul className="px-[1.5em] flex items-center">
                          <li className="mx-[-0.8em] [&>img]:max-w-[10em] [&>img]:border-[0.25em] [&>img]:border-[#fff] [&>img]:rounded-[3em]">
                            {section_image && (
                              <CustomImage block={section_image} />
                            )}
                          </li>
                        </ul>
                        <p className="text-[12.25px] xl:text-[14px] pb-[0]">
                          100+
                        </p>
                      </div>
                      <div className="bde-info">
                        {staff_content && <RichText block={staff_content} />}
                      </div>
                    </div>
                  </div>
                  <div className="[&>p>br]:hidden max-w-full lg:max-w-[65%] mt-[2em] [&>p]:text-[16px] xl:[&>p]:text-[16px] [&>p]:opacity-80 [&>p]:font-Montserrat [&>p>strong]:font-medium [&>p>strong]:text-[21px] xl:[&>p>strong]:text-[24px]">
                    {content && <RichText block={content} />}
                  </div>
                </div>
                <div className="w-full lg:w-[30%] hidden em:block">
                  <div className="hidden">
                    {content && <RichText block={content} />}
                  </div>
                  <InlineWidget
                    url="https://calendly.com/bijaljamstacky/30min"
                    styles={{ height: "300px" }}
                    pageSettings={{
                      hideEventTypeDetails: true,
                      hideGdprBanner: true,
                      hideLandingPageDetails: true,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default BookConsultationSection;
