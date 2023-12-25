import clsx from "clsx";
import React from "react";
import Button from "../Button";
import CustomImage from "../CustomImage";
import { HomeheroSectionType } from "@/lib/sanity/types/page";

const Hero: React.FC<HomeheroSectionType> = (sectionProps) => {
  const {
    bottom_description,
    hero_description,
    hero_image,
    hero_title,
    jamstack_developer_button,
    start_project_button,
    title,
    title_image,
    section_theme,
  } = sectionProps || {};
  return (
    <div
      className={clsx(
        "bg-hero-gradient animate-gradient  bg-heroBgsize",
        section_theme ?? "bg-white"
      )}
    >
      <div className="container">
        <div className="flex justify-between items-center pt-[8em] sm:pt-[10em] pb-0 px-0">
          <div className="w-full lg:w-[60%]">
            <div className="relative banner-text-content">
              <div className="flex xl:items-center  flex-col-reverse xl:flex-row justify-start">
                <h1 className="inline-block text-[25.2px] esm:text-[28.35px]  md:text-[31.5px] emd:text-[40.25px] lg:text-[46px] font-bold leading-[1.25em] lg:max-w-[32rem] text-[#110462] mb-[0.5em] font-DM">
                  {hero_title}
                </h1>
                {title_image && (
                  <div
                    className="max-w-[100px] 2xl:max-w-[unset] mb-4 ml-0 xl:ml-[15px] inline-flex relative lg:mt-[-1.5rem] before:bg-arrowSizeRespon vem:before:bg-arrowSize
                    before:content-[''] before:bg-none before:bg-[url(/Arrow.svg)] before:bg-no-repeat before:w-[1.5em] before:xl:w-[2em] before:h-[1.1em] before:xl:h-[1.5em] before:absolute  [&>img]:max-w-[auto] sm:[&>img]:max-w-[8.5em] [&>img]:w-full [&>img]:h-full [&>img]:animate-[rotations_30s_linear_infinite]
                    before:top-2/4 before:left-2/4 before:-translate-x-2/4 before:-translate-y-2/4"
                  >
                    <CustomImage block={title_image} height={100} width={100} priority/>
                  </div>
                )}
              </div>
              <p className="text-sm em:text-base emd:text-xl xl:text-[22px] font-normal leading-[1.5em] text-[#304256] w-full md:w-[80%] emd:w-full">
                {hero_description}
              </p>
              <div className="banner-btn">
                <ul className="hover:[&>li>a]:text-[#ffffff] mt-4 block em:flex ">
                  <li className="secondary [&>a]:bg-[#222549] hover:[&>a]:bg-[#6A70B2] [&>a]:text-[15.75px] xl:[&>a]:text-[18px] mr-[1em] [&>a]:px-[25px] [&>a]:py-[12px] lg:[&>a]:px-[30px] sm:[&>a]:py-[16px] lg:[&>a]:py-[20px] hover:[&>a]:shadow-banner-btn">
                    {start_project_button && (
                      <Button block={start_project_button} />
                    )}
                  </li>
                  <li className="hover:[&>a]:bg-[#FF90A5] ml-0 mt-[0] vsm:ml-4 [&>a]:text-[15.75px] xl:[&>a]:text-[18px] mr-[1em] [&>a]:mt-[1em] em:[&>a]:mt-[0] [&>a]:px-[25px] [&>a]:py-[12px] lg:[&>a]:px-[30px] sm:[&>a]:py-[16px] lg:[&>a]:py-[20px] hover:[&>a]:shadow-banner-btn">
                    {jamstack_developer_button && (
                      <Button block={jamstack_developer_button} />
                    )}
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="lg:w-[40%] hidden lg:block">
            {hero_image && (
              <div>
                <CustomImage block={hero_image} height={500} width={500} loading="eager" />
              </div>
            )}
          </div>
        </div>
        <div className=" max-w-[90%] em:max-w-[80%] lg:max-w-[64%] text-center relative z-0 mt-[3em] em:mt-[3em] mx-auto my-0 pb-[3em] em:pb-[0.5em] vsm:pt-[0]">
          <p className="text-sm em:text-base md:text-lg lg:text-xl !leading-[1.6em] font-normal text-dark-blue">
            {bottom_description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
