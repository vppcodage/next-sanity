import React from "react";
import dynamic from "next/dynamic";

const NewsLetterSection = dynamic(() => import("../NewsLetterSection"));
import BlogDetailPostCard from "./BlogDetailPostCardSection";
import JoinOurNewsLetter from "./JoinOurNewsLetter";
import SideContentTitle from "./SideContentTitle";
import ShareButtons from "../ShareButtons";
import dayjs from "dayjs";
import CustomImage from "../CustomImage";
import Button from "../Button";
import { BlogDetailPageType } from "@/lib/sanity/types/blog";
import RichText from "../RichText";

export interface BlogDetailPage {
  block?: BlogDetailPageType;
}
const BlogDetailPage: React.FC<BlogDetailPage> = ({ block }) => {
  const {
    banner_title,
    button,
    content,
    hero_image,
    publish_date,
    recommended_blog,
    author,
    news_letter_section,
    contant_card_title,
    sideContentTitle,
    share_text,
    blog_detail_post_Card,
    join_our_news_letter,
  } = block || {};

  const { author_Image, author_Name } = author || {};
  const publishDate = dayjs(publish_date).format("MMM DD, YYYY");
  const url = typeof window !== "undefined" ? window.location.href : "";

  return (
    <div className="pt-[6em] sm:pt-[8em] md:pt-[10em] pb-[0em] md:pb-[2em]">
      <div className="mb-[3em] sm:mb-[5em]">
        <div className="container">
          <div className="block emd:flex justify-between mt-[2em] em:mt-[3em] mb-[2em] em:mb-[3em] lg:mb-[5.938em]">
            <div className=" w-full emd:w-[60%] max-w-full emd:max-w-[42em]">
              <div className=" flex items-center">
                <div className="w-[3.5em] h-[3.5em] rounded-full">
                  {author_Image && <CustomImage block={author_Image} />}
                </div>
                <div className=" ml-[0.5em]">
                  <h6 className="text-[16px] em:text-[18px] md:text-[20px] xl:text-[22px] text-dark-pink opacity-80 font-bold font-DM">
                    {author_Name}
                  </h6>
                  <p className="text-[12px] sm:text-[14px] font-normal text-[#6d6e67] p-0 font-Inter">
                    Posted on {publishDate}
                  </p>
                </div>
              </div>
              <div className=" mt-[2em]">
                <h3 className="text-[21.25px] em:text-[29.75px] md:text-[42px]  text-[#222549] font-bold leading-[1.4] font-DM">
                  {banner_title}
                </h3>
              </div>
              <div className="mt-[1em] sm:mt-[1.5em] flex items-center [&>a]:bg-dark-blue [&>a]:text-[#fff] [&>a]:font-bold [&>a]:py-[0.75em] [&>a]:px-[1.25em] [&>a]:cursor-pointer hover:[&>a]:bg-dark-pink [&>a]:text-[14px] em:[&>a]:text-[16px] emd:[&>a]:text-[18px] [&>a]:rounded-[5em] [&>a]:font-DM">
                {button && <Button block={button} />}
              </div>
            </div>
            <div className=" w-full emd:w-[40%] flex justify-center emd:justify-end [&>img]:max-w-[100%] lg:[&>img]:max-w-[28.125em] [&>img]:max-h-[28.125em] [&>img]:object-contain pt-[2em] sm:pt-[5em] emd:pt-[0]">
              {hero_image && <CustomImage block={hero_image} />}
            </div>
          </div>
          <div className="block lg:grid grid-cols-[2fr_5fr] gap-x-[4.5em]">
            <div className="sticky self-start top-[1.875em] hidden lg:block ">
              <SideContentTitle
                contant_card={contant_card_title}
                sideTitle={sideContentTitle}
              />
              <ShareButtons url={url} section_title={share_text} />

              {join_our_news_letter && (
                <JoinOurNewsLetter block={join_our_news_letter} />
              )}
            </div>
            <div className="w-full pl-[0em] [&>div>h4]:font-DM [&>div>h4]:text-dark-blue  [&>div>h4]:text-[22px] sm:[&>div>h4]:text-[26px] xl:[&>div>h4]:text-[30px] [&>div>h4]:leading-[1.3em] [&>div>h4]:font-bold [&>div>h4]:mb-[0.5em] [&>div>p]:text-dark-gray-shade [&>div>p]:text-[16px] md:[&>div>p]:text-[18px] [&>div>p]:leading-[26px] esm:[&>div>p]:leading-[28px] [&>div>p]:pb-[0.5em]  md:[&>div>p]:pb-[1em] [&>div>p]:font-DM [&>div>p]:font-normal  [&>div>ul]:block [&>div>ul]:list-disc [&>div>ul]:text-dark-blue [&>div>ul]:pl-[1.5em] [&>div>ul]:pb-[0.5em] sm:[&>div>ul]:pb-[1em] [&>div>ul>li]:font-DM [&>div>ul>li]:text-[16px] md:[&>div>ul>li]:text-[18px] [&>div>ul>li]:leading-[28px] em:[&>div>ul>li]:leading-[30px] md:[&>div>ul>li]:leading-[32px] [&>div>ul>li]:font-normal [&>div>ul>li]:text-[#6d6e76] [&>div>ul>li]:mb-[0.5em] [&>div>img]:my-[1em] [&>div>ul>li>strong]:text-[14px] em:[&>div>ul>li>strong]:text-[16px] md:[&>div>ul>li>strong]:text-[18px] [&>div>ul>li>strong]:leading-[20px] em:[&>div>ul>li>strong]:leading-[24px] sm:[&>div>ul>li>strong]:leading-[26px] md:[&>div>ul>li>strong]:leading-[32px] [&>div>h5>strong]:text-dark-blue [&>div>h5>strong]:text-[18px] esm:[&>div>h5>strong]:text-[19px] sm:[&>div>h5>strong]:text-[22px] xl:[&>div>h5>strong]:text-[24px] [&>div>h5>strong]:font-bold [&>div>h5>strong]:font-DM [&>div>h6>strong]:font-DM [&>div>h5]:font-DM [&>div>div.container]:!px-0 [&>div>div>div.container]:!px-0 [&>div.background-purple]:my-[40px] md:[&>div.background-purple]:my-[60px] md:[&>div>div.background-purple]:my-[60px] [&>div]:mb-4">
              {content?.custom_rich_text && <RichText block={content} />}
            </div>
          </div>
        </div>
      </div>
      <BlogDetailPostCard
        blog_title={recommended_blog!}
        blog_detail_post_Card={blog_detail_post_Card}
      />
      {news_letter_section && <NewsLetterSection block={news_letter_section} />}
    </div>
  );
};
export default BlogDetailPage;
