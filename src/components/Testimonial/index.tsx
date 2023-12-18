import React, { Fragment } from "react";
import clsx from "clsx";

import dynamic from "next/dynamic";
import ButtonGroup from "../CarouselCustomsArrow";
import { TestimonialsSectionType } from "@/lib/sanity/types/page";
import { PortableText } from "@portabletext/react";

const CustomImage = dynamic(() => import("../CustomImage"));
const Carousel = dynamic(() => import("../Carousel"));

const Testimonials: React.FC<TestimonialsSectionType> = (block) => {
  const {
    TestimonialsDescription,
    TestimonialsTitle,
    section_theme,
    testimonials,
  } = block || {};

  return (
    <div
      className={clsx(
        "px-0 py-[2.5em] sm:py-[5em]",
        section_theme ?? "bg-white"
      )}
    >
      <div className="container">
        <div className="bg-testimonial-gradient p-[1.75em] md:p-[3em] xl:p-[5em] font-DM">
          <div className="block md:flex justify-between">
            <div className="w-full md:w-[40%] pb-[1.5em] md:pb-[0] pr-[0] md:pr-[5em] border-b-[#827D92] md:border-b-[transparent] md:border-r-[#827D92] border-b md:border-r border-solid">
              <h1 className="text-[#fff] text-[23.625px] xl:text-[30px]  mt-[0.5em] my-[0.7em] font-DM font-bold">
                {TestimonialsTitle}
              </h1>
              <p className="text-[#fff] text-[16px]">
                {TestimonialsDescription}
              </p>
            </div>
            <div
              className=" w-full md:w-[60%] relative pl-[0] md:pl-[6em] py-0 pt-[1em] md:pt-[0] pr-[1em] md:pr-[0]
        "
            >
              {testimonials && (
                <Carousel
                  arrows={false}
                  renderButtonGroupOutside={true}
                  customButtonGroup={
                    <ButtonGroup next={true} previous={true} goToSlide={true} />
                  }
                  autoPlay={false}
                  responsive={{
                    global: { items: 1, breakpoint: { min: 0, max: 4000 } },
                  }}
                  infinite
                >
                  {testimonials &&
                    testimonials?.map((item, index) => {
                      const { client, description } = item || {};
                      const { clientImage, clientName, clientLocation } =
                        client || {};
                      return (
                        <Fragment key={index}>
                          <div className="min-h-[10em] [&>p]:text-[#fff] [&>p]:font-bold [&>p]:text-[15.75px] xl:[&>p]:text-[20px]">
                            {description && (
                              <PortableText value={description.custom_rich_text} />
                            )}
                          </div>
                          <div className="flex items-center mt-[1em] lg:mt-[3em] mb-[3em] em:mb-[1em]">
                            {clientImage && (
                              <CustomImage
                                block={clientImage}
                                className="w-full max-w-[3em] max-h-[3em] object-cover rounded-full"
                              />
                            )}
                            <div className="pl-[0.875em]">
                              <h1 className="text-white-color font-DM text-lg md:text-[24px] font-bold">
                                {clientName}
                              </h1>
                              <p className="text-sm md:text-base text-white-color font-light pb-0">
                                {clientLocation}
                              </p>
                            </div>
                          </div>
                        </Fragment>
                      );
                    })}
                </Carousel>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Testimonials;
