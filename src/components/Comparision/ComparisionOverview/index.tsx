import React, { FC } from "react";
import FrameworkOverviewCard from "../FrameworkOverviewCard";
import { Framework } from "@/lib/sanity/types/framework";

const ComparisionOverview: FC<{
  block: { frameworks: Framework[] };
}> = ({ block }) => {
  if (!block?.frameworks) {
    return null;
  }
  return (
    <ul className="grid grid-cols-[1fr] em:grid-cols-[1fr_1fr] items-baseline [&>*:nth-child(1)]:border-b-[0.0625em] em:[&>*:nth-child(1)]:border-b-0 em:[&>*:nth-child(2)]:border-l-[0.0625em] [&>*:nth-child(2)]:border-dark-pink [&>*:nth-child(2)>div]:pl-[1.5em] em:[&>*:nth-child(2)>div]:pl-[3.5em] md:[&>*:nth-child(2)>div]:pl-[5em] [&>*:nth-child(2)>h5]:pt-[2em] em:[&>*:nth-child(2)>h5]:pt-[0em]">
      {block?.frameworks?.map((i, index) => (
        <FrameworkOverviewCard key={index} block={{ framework: i }} />
      ))}
    </ul>
  );
};

export default ComparisionOverview;
