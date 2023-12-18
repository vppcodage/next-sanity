import React from "react";
import { TitleContent } from "@/lib/sanity/types/page";
import dynamic from "next/dynamic";
const RichText = dynamic(() => import("@/components/RichText"));

const TitleContent: React.FC<{
  block: TitleContent;
  index?: number;
}> = ({ block, index }) => {
  const { content, title } = block || {};
  return (
    <div id={`postHas_content_${index}`}>
      <h4>{title}</h4>
      {content && <RichText block={content} />}
    </div>
  );
};

export default TitleContent;
