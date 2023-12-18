import React, { Fragment } from "react";
import Carousel from "../Carousel";
import CustomImage from "../CustomImage";
import { Image } from "../Image";
import { CustomerReviewsSectionType } from "@/lib/sanity/types/page";
import { PortableText } from "@portabletext/react";

const CustomerReviewsArraySection: React.FC<CustomerReviewsSectionType> = ({
  title,
  reviews,
  section_image,
}) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <Fragment>
      <div className=" bg-[#f4fbff] px-0 py-[3.5em] md:py-[5em]">
        <div className="container">
          <div className="">
            <div className="flex flex-col em:flex-row justify-between items-center mb-[3em]">
              <h1 className="text-[20px] md:text-[24px] xl:text-[32px] text-[#222549] font-bold leading-normal mb-[1em] em:mb-[0]">
                {title}{" "}
              </h1>
              <div className="[&>img]:max-w-[10em]">
                {section_image && <CustomImage block={section_image} />}
              </div>
            </div>
            <div
              className="customer-main-content [&>react-multi-carousel-list]:pb-[4em] [&>react-multi-carousel-list>ul>li]:m-0 [&>react-multi-carousel-list>ul>li]:px-[0.5em] [&>react-multi-carousel-list>ul>li]:py-0
          [&>react-multi-carousel-list>ul>li>customer-review-box]:flex [&>react-multi-carousel-list>ul>li>customer-review-box]:justify-between [&>react-multi-carousel-list>ul>li>customer-review-box]:flex-col [&>react-multi-carousel-list>ul>li>customer-review-box]:bg-white [&>react-multi-carousel-list>ul>li>customer-review-box]:h-[13em] [&>react-multi-carousel-list>ul>li>customer-review-box]:p-[1.5em] [&>react-multi-carousel-list>ul>li>customer-review-box]:rounded-[0.5em] [&>react-multi-carousel-list>ul>li>customer-review-box]:border-[0.125em] [&>react-multi-carousel-list>ul>li>customer-review-box]:border-solid [&>react-multi-carousel-list>ul>li>customer-review-box]:border-[#DA3654]
          "
            >
              <Carousel
                infinite={true}
                arrows={false}
                showDots={true}
                transitionDuration={800}
                slidesToSlide={2}
                centerMode={false}
                responsive={responsive}
              >
                {reviews?.map((item, index) => {
                  const { review, customer_image } = item || {};
                  return (
                    <div key={index}>
                      <div className="bg-white-color customer-review-box mx-[0.5em] flex justify-between flex-col bg-white h-[13em] p-[1.5em] rounded-[0.5em] border-[0.125em] border-solid border-[#DA3654]">
                        <div
                          className=" mb-[1.5em]
                      [&>p]:text-[0.875em] [&>p]:font-medium [&>p]:leading-[1.5em] [&>p]:text-[#222549] [&>p]:max-h-[4.5em] [&>p]:overflow-hidden [&>p]:text-ellipsis
    
                      "
                        >
                          {review && (
                            <PortableText value={review.custom_rich_text} />
                          )}
                        </div>
                        <div className="review-bottom flex gap-x-[1em] items-center">
                          <div className="review-bottom-left">
                            <div className="review-profile w-[3em] h-[3em] [&>img]:max-w-[3em] [&>img]:object-cover [&>img]:rounded-[5em]">
                              {customer_image && (
                                <CustomImage block={customer_image} />
                              )}
                            </div>
                          </div>
                          <div className="review-bottom-right w-[70%] mt-[0.5em]">
                            <div
                              className={
                                "review-rating [&>span]:opacity-0 inline-block w-[5em] [&>star5]:bg-none star" +
                                String(item?.rating)
                              }
                            >
                              <span className="opacity-0">{item?.rating}</span>
                            </div>
                            <div className="google-img">
                              <Image
                                src="/google.png"
                                alt="google image"
                                width={100}
                                height={100}
                                className="max-w-[4em]"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </Carousel>
            </div>
          </div>
        </div>
        <div />
      </div>
    </Fragment>
  );
};

export default CustomerReviewsArraySection;
