import React from "react";
import { Framework } from "@/lib/sanity/types/framework";

const FrameworkOverviewCard: React.FC<{
  block: { framework: Framework };
}> = ({ block }) => {
  const { framework } = block || {};
  if (!framework || !block) {
    return null;
  }
  return (
    <li>
      <h5 className="text-lg md:text-xl font-bold text-dark-pink text-center">{framework?.name}</h5>
      <div className=" mt-[2em] px-[1em] sm:px-[2em] md:px-[3em]">
        <ul className="block list-disc">
          {framework?.content_summary?.map((i, index) => {
            return <li key={index} className="mb-[1.875em] text-sm md:text-base font-medium text-dark-blue">{i}</li>;
          })}
        </ul>
      </div>
    </li>
  );
};

export default FrameworkOverviewCard;
