import clsx from "clsx";
import dayjs from "dayjs";
import Link, { getBlogLink } from "../Link";
import { BlogFeaturedPostSectionType } from "@/lib/sanity/types/page";
import locales from "@/lib/locales";
import BlogCard from "./BlogCard";
import CustomImage from "../CustomImage";

const BlogFeaturedPostSection: React.FC<BlogFeaturedPostSectionType> = ({
  all_posts_section,
  featured_post_title,
  section_theme,
  all_Posts,
  featured_post,
}) => {
  const { author, banner_desc, banner_title, hero_image, publish_date, slug } =
    featured_post || {};
  const publishDate = dayjs(publish_date).format("MMM DD, YYYY");
  return (
    <div
      className={clsx(
        "pt-[1em] em:pt-[2em] md:pt-[3em] pb-[3em] md:pb-[4.5em]",
        section_theme ?? "bg-white"
      )}
    >
      <div className="container">
        <div className="block emd:flex justify-between font-DM">
          <div className="w-[100%] emd:w-[45%] ">
            <h3 className=" text-[24px] em:text-[31.5px] xl:text-[36px] text-black-shade-color font-bold mb-[0.5em] sm:mb-[1em] leading-[1.5em] text-left font-DM tracking-[-2px]">
              {featured_post_title}
            </h3>
            <div className="p-[1em] em:p-[2em] border-[1px] border-[#6d6e761a] [&>img]:w-[100%] [&>a]:w-[100%]">
              <Link to={slug ? getBlogLink(slug) : ""}>
                {hero_image && <CustomImage block={hero_image} />}
              </Link>

              <div className=" flex my-[1em]">
                <p className="border-r-[1px] border-[#6d6e76] text-[12px] em:text-[14px] font-normal pr-[0.75em] font-Inter pb-0">
                  By{" "}
                  <span className="text-[#592ea9]">{author?.author_Name}</span>
                </p>
                <p className="text-[12px] em:text-[14px] font-normal px-[0.75em] font-Inter pb-[0]">
                  {publishDate}
                </p>
              </div>
              <div className="">
                <Link to={slug ? getBlogLink(slug) : ""}>
                  <h4 className="text-[16px] lsm:text-[18px] em:text-[21px] emd:text-[26.25px] xl:text-[30px] mb-[0.5em] text-[#000] font-bold leading-[1.25em] font-DM">
                    {banner_title}
                  </h4>
                </Link>
                <p className="text-[14px] xl:text-[16px] text-dark-gray-shade font-Inter font-normal pb-[1em]">
                  {banner_desc?.substring(0, 200)}...
                </p>
              </div>
              <div className="">
                <Link
                  className="py-[0.75em] px-[1.5em] text-[12.25px] xl:text-[14px] font-medium text-[#fff] hover:text-[#fff] bg-dark-pink hover:bg-dark-blue  rounded-[3.5em] cursor-pointer "
                  to={slug ? getBlogLink(slug) : ""}
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
          <div className="w-[100%] emd:w-[50%] pl-[0.5em] mt-[2em] md:mt-[3em] emd:mt-0">
            <div className=" flex items-center justify-between mb-[1em]">
              <h3 className=" text-[24px] em:text-[31.5px] xl:text-[36px] text-black-shade-color font-bold leading-[1.5em] font-DM">
                {all_posts_section}
              </h3>
              <Link
                to="#all_blogs"
                className="text-[14px] lg:text-[16px] font-normal leading-[28px] text-dark-pink hover:text-dark-blue font-Inter"
              >
                {" "}
                {locales.en.VIEW_ALL}{" "}
              </Link>
            </div>

            <ul className="block ">
              {all_Posts?.map((i, index) => (
                <BlogCard block={i} key={index} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BlogFeaturedPostSection;
