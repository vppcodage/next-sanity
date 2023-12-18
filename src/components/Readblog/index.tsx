import { useModals } from "@/lib/hooks/useModals";
import Link, { getBlogLink } from "../Link";
import React from "react";

interface ReadblogProps {
  block?: { _ref: string };
}

const Readblog: React.FC<ReadblogProps> = ({ block }) => {
  const { data: blogData } = useModals();
  const data = blogData?.find((i) => i?._id === block?._ref);
  const { banner_title, slug } = data || {};
  return data ? (
    <div className=" bg-dark-blue block md:flex justify-between rounded-[1em] p-[1.5em] em:p-[2em] my-[2.5em] items-center">
      <div className="w-full md:w-[65%]">
        {banner_title && (
          <h3 className="text-[20px] esm:text-[24px] em:text-[26px] xl:text-[30px] text-[#fff] font-bold leading-[30px] esm:leading-[32px] em:leading-[36px] xl:leading-[40px] font-DM text-center md:text-left">
            {banner_title}
          </h3>
        )}
      </div>
      <div className="w-full md:w-[35%] mt-[2em] md:mt-[0] text-center md:text-right [&>a]:py-[0.5em] md:[&>a]:py-[0.75em] [&>a]:px-[1.5em] md:[&>a]:px-[2em] hover:[&>a]:bg-btn-hover-pink [&>a]:bg-dark-pink [&>a]:text-[#fff] [&>a]:rounded-[5em] [&>a]:font-DM [&>a]:text-[16px] xl:[&>a]:text-[18px] ">
        <Link to={slug ? getBlogLink(slug) : ""}>Read More</Link>
      </div>
    </div>
  ) : null;
};

export default React.memo(Readblog);
