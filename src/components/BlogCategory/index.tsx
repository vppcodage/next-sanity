import dynamic from "next/dynamic";
const Link = dynamic(() => import("../Link"));
import clsx from "clsx";
import React from "react";
import { useRouter } from "next/router";
import { BlogCategorySectionType } from "@/lib/sanity/types/page";
import { routes } from "@/lib/routes";
import { Category } from "@/lib/sanity/types";

const BlogCategorySection: React.FC<BlogCategorySectionType&{ categories?: Category[];}> = ({
  Category,
  categories,
}) => {
  const router = useRouter();
  const { slug } = router?.query;
  return (
    <div className="mt-[3em] sm:mt-[5em] emd:mt-[7em] mb-[2em] emd:mb-[4em]">
      <div className="container">
        <div className=" bg-[#eaf7ff] p-[1em] em:p-[2em] mx-[0] em:mx-[3em] sm:mx-[5em]">
          <h5 className="mb-[0.5em] text-center text-dark-pink font-bold block text-[21px] xl:text-[32px] font-DM">
            {Category}
          </h5>
          <ul className="[&>li]:!my-0 flex flex-wrap justify-center items-center [&>li]:my-[0.25em] [&>li]:mx-[0.3em] hover:[&>li>a]:text-dark-pink [&>li>a]:text-[#909090] [&>li>a]:text-[15px] xl:[&>li>a]:text-[17px] [&>li>a]:font-bold [&>li>a]:inline-block [&>li>a]:p-0 [&>li>a]:m-[0.3em] [&>li>a]:font-DM">
            <li className={clsx({ '[&>a]:!text-dark-blue': !slug }, "")}>
              <Link to={routes.blog_index()}>All Posts</Link>
            </li>
            {categories &&
              categories?.map((name, index) => {
                return (
                  <li
                    className={clsx({
                      "[&>a]:!text-[#DA3654]":
                        slug == String(name?.slug?.current),
                    })}
                    key={index}
                  >
                    <Link
                      to={
                        name?.slug?.current
                          ? routes.post_category(name?.slug?.current)
                          : routes.blog_index()
                      }
                    >
                      {name.title}
                    </Link>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default BlogCategorySection;
