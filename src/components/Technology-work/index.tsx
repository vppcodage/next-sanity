import React, { Fragment } from "react";
import clsx from "clsx";
import TitleSubtitle from "../TitleSubtitle";
import Button from "../Button";
import CustomImage from "../CustomImage";
import { SectionCourseTitleSectionType } from "@/lib/sanity/types/page";

const Technology: React.FC<SectionCourseTitleSectionType> = (block) => {
  const { bookConsultationButton, title_subtitle, titleImage, section_theme } =
    block || {};

  return (
    <Fragment>
      <div
        className={clsx(
          "bg-[linear-gradient(to_left_bottom,#dcf6fd,#e3f5fe,#e9f4fe,#eff4fc,#f3f4f9,#f1f2f8,#f0f0f7,#efeef6,#ebe9f7,#e6e4f7,#e2e0f8,#dddbf9)] pl-[0em] pr-0 pt-[2.5em] sm:pt-[5em] pb-[1em]",
          section_theme ?? "bg-white"
        )}
      >
        <div className="container">
          <div>
            <div className="block sm:flex justify-between font-DM">
              <div className="section-header max-w-[50.5625em] mb-[1.5em]">
              {title_subtitle && (
              <div className="max-w-[850px] mt-[0] ml-auto em:ml-0 mr-auto text-center em:text-left mb-[30px] md:mb-[50px] ">
                <p className="after:absolute after:bg-light-blue after:w-[1em] md:after:w-[1.5em] after:h-[0.125em] after:right-[0.5em] after:top-[0.5em] before:absolute before:bg-light-blue before:w-[1em] md:before:w-[1.5em] before:h-[0.125em] before:left-[0.5em] before:top-[0.5em] font-medium leading-[1.25em] uppercase text-light-blue  tracking-wider relative inline-block mb-[1em] px-[2em] md:px-[3em] py-0 text-[14.175px] sm:text-[15.75px] xl:text-[18px] font-DM">
                  {title_subtitle?.title}
                </p>
                <p className="font-medium leading-[1.25em] text-[20px] lg:text-[24px] xl:text-[28px] font-DM text-title-blue-shade">
                  {title_subtitle?.sub_title}
                </p>
              </div>
            )}
              </div>
              <div
                className="consultation-btn [&>a]:px-[20px] em:[&>a]:px-[26px] md:[&>a]:px-[34px] [&>a]:py-[14px] em:[&>a]:py-[18px] md:[&>a]:py-[20px] text-center sm:text-right mt-[1.5em] sm:mt-[0]
              [&>a]:font-bold [&>a]:leading-[20px] [&>a]:text-[#ffffff] [&>a]:bg-[#DA3654] [&>a]:inline-block [&>a]:cursor-pointer  [&>a]:rounded-[3.5em] [&>a]:hover:text-[#ffffff] hover:[&>a]:bg-[#222549] [&>a]:hover:shadow-[0_0.1875em_0.75em_#4a3aff2e] [&>a]:text-[14.175px] sm:[&>a]:text-[15.75px] xl:[&>a]:text-[18px] 
              "
              >
                {bookConsultationButton && (
                  <Button block={bookConsultationButton} />
                )}
              </div>
            </div>
            <div>
              <ul className="block ">
                <li>
                  <ul className="block pt-[2em] pb-[0em] px-0 [&>*:last-child>ul]:mb-[3em] md:[&>*:last-child>ul]:mb-[4.5em] ">
                    {titleImage &&
                      titleImage?.map((item, index) => {
                        const { course_img, title_subtitle } = item || {};
                        return (
                          <li
                            key={index}
                            className="m-0 
                        [&>h3]:font-medium [&>h3]:leading-[1em] [&>h3]:text-[#000EE6]  [&>h3]:text-center
                        [&>h4]:font-medium [&>h4]:leading-[1em] [&>h4]:text-[#000EE6]  [&>h4]:text-center
                        [&>h5]:font-medium [&>h5]:leading-[1em] [&>h5]:text-[#000EE6]  [&>h5]:text-center
                        [&>h6]:font-medium [&>h6]:leading-[1em] [&>h6]:text-[#000EE6]  [&>h6]:text-center [&>h6]:text-[12.6px] sm:[&>h6]:text-[14px] xl:[&>h6]:text-[16px]
                        "
                          >
                            <p className="font-DM  text-center text-light-blue  ">
                              <span className="tex-tbase md:text-lg mx-auto relative before:content before:absolute before:left-[-2em] before:top-[0.6em] before:w-[1em]  md:before:w-[1.5em] before:h-[2px] before:bg-[#4A3AFF] before:rounded-xl after:content after:absolute after:right-[-2em] after:top-[0.6em] after:w-[1em] md:after:w-[1.5em] after:h-[2px] after:bg-[#4A3AFF] after:rounded-xl">{title_subtitle?.title} </span>
                            </p>

                            <ul className="[&>*:last-child>img]:max-w-[2em] [&>*:last-child>img]:max-h-[20px] [&>*:last-child]:h-[4em] [&>*:last-child>img]:object-contain grid grid-cols-[1fr_1fr] sm:grid-cols-[1fr_1fr_1fr] emd:grid-cols-[1fr_1fr_1fr_1fr] gap-x-[1em] sm:gap-x-[1.5em] md:gap-x-[3em] emd:gap-x-[3em] gap-y-[2em] sm:gap-y-[3em] emd:gap-y-[3em] mt-[1.875em] mb-[3em] sm:mb-[6.25em]">
                              {course_img?.map((image, index) => {
                                return (
                                  <li
                                    className="flex justify-center items-center h-full w-full bg-[16px_2px,16px_2px,2px_16px,2px_16px] animate-[dash_40s_linear_infinite] p-[1em] rounded-[0.5em]
                                ![&>img]:w-auto ![&>img]:h-auto max-em:[&>img]:max-w-[5em] [&>img]:max-w-[6em] [&>img]:max-h-[2em]
                                bg-dashed-gradient animation-dash [&>img]:object-contain"
                                    key={index}
                                    style={{
                                      backgroundRepeat:
                                        "repeat-x, repeat-x, repeat-y, repeat-y",
                                      backgroundPosition:
                                        " 0% 0%, 100% 100%, 0% 100%, 100% 0px",
                                    }}
                                  >
                                    <CustomImage
                                      block={image}
                                      height={200}
                                      width={200}
                                    />
                                  </li>
                                );
                              })}
                            </ul>
                          </li>
                        );
                      })}
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Technology;
