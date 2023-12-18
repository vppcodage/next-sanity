import clsx from "clsx";
import dynamic from "next/dynamic";
const Link = dynamic(() => import("../Link"));
import dayjs from "dayjs";
import CustomImage from "../CustomImage";
import { BlogHeroSectionType } from "@/lib/sanity/types/page";

const BlogHeroSection: React.FC<BlogHeroSectionType> = ({
  hero_image,
  section_theme,
  most_recent_blog,
}) => {
  const { author, banner_desc, banner_title, publish_date, category, slug } =
    most_recent_blog || {};
  if (!most_recent_blog) {
    return null;
  }
  const { author_Name } = author || {};
  const convert_date = dayjs(publish_date).format("MMM DD, YYYY");
  const { title } = category || {};
  return (
    <div
      className={clsx(
        " bg-hire-remote-gradient pt-[8em] w-full mx-auto relative",
        section_theme ?? "bg-white"
      )}
    >
      <div className="container">
        <div className="py-[2em] block md:flex justify-between items-center  md:gap-[1.5rem] gap-0 ">
          <div className="w-full md:w-[60%] max-w-full md:max-w-[40em] z-0">
            <div>
              <h6 className="text-[12px] sm:text-[14px] xl:text-[16px]  tracking-[3px] text-dark-blue mb-[0.5em] font-medium  font-Inter uppercase ">
                {title}
              </h6>
              <h1 className="text-[1.82rem]  md:text-[2.125rem] emd:text-[2.516rem] xl:text-[2.875rem] leading-[1.25em] text-dark-blue mb-[0.5em]  font-semibold  font-DM">
                {banner_title}
              </h1>
            </div>
            <div className="flex font-DM">
              <p className="border-r-[0.0625em] border-dark-blue text-[14px] xl:text-[16px] font-normal text-[#6d6e76] font-inter pr-[0.75em] pb-[0]">
                By <span className="text-dark-pink">{author_Name}</span>
              </p>
              <p className="text-[#6d6e76] text-[14px] xl:text-[16px] px-[0.75em] pb-0 font-inter">
                {convert_date}
              </p>
            </div>
            <div className="font-Inter my-[1em] [&>a]:bg-dark-pink [&>a]:text-[#fff] [&>a]:inline-flex [&>a]:text-[14px] xl:[&>a]:text-[16px] [&>a]:font-medium [&>a]:rounded-[5em] [&>a]:py-[0.6em] md:[&>a]:py-[0.75em]  [&>a]:px-[2em] md:[&>a]:mt-[1.2em] hover:[&>a]:bg-dark-blue [&>a]:font-DM hover:[&>a]:shadow-banner-btn">
              <p className="text-[1rem] md:text-[1.1rem] font-normal text-dark-blue">
                {banner_desc?.substring(0, 200)}...
              </p>
              <Link
                to={
                  slug?.current?.startsWith("/blog/")
                    ? slug?.current
                    : "/blog/" + String(slug?.current)
                }
              >
                Read More 
              </Link>
            </div>
          </div>
          <div className="bloglisthero-right w-[70%] md:w-[40%] ml-auto mr-auto md:mr-0 flex justify-center md:justify-end z-0 [&>img]:max-w-[26.125em] [&>img]:max-h-[26.125em] mt-[0rem]">
            {hero_image && <CustomImage block={hero_image} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogHeroSection;
