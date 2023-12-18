import { RichText as RichTextTypes } from "@/lib/sanity/types";
import { PortableText, PortableTextReactComponents } from "@portabletext/react";
import dynamic from "next/dynamic";
const DynamicComponent= dynamic(()=>import("../DynamicComponent"))
const SanityImage= dynamic(()=>import("../SanityImage"))
const CustomImage= dynamic(()=>import("../CustomImage"))
const Button= dynamic(()=>import("../Button"))
const Readblog= dynamic(()=>import("../Readblog"))
const TitleDescriptionSideImageSection= dynamic(()=>import("../TitleDescriptionSideImageSection"))
const Link= dynamic(()=>import("../Link"))
const TitleContent= dynamic(()=>import("../TitleContent"))
const TitleSubtitle= dynamic(()=>import("../TitleSubtitle"))
const ImageTitleDescriptionArraySection= dynamic(()=>import("../ImageTitleDescriptionArraySection"))

export const RichTextComponents: Partial<PortableTextReactComponents> = {
  unknownType: ({ value,index, ...props }) => {
    return <DynamicComponent block={value} {...props} index={index} />;
  },
  types: {
    image: ({ value }) => <SanityImage src={value} />,
    title_content: ({ value ,index}) => <TitleContent block={value} index={index}/>,
    custom_image: ({ value }) => <CustomImage block={value} />,
    button: ({ value }) => <Button block={value} />,
    title: ({ value }) => <TitleSubtitle block={value} />,
    image_title_description_array_section: ({ value }) => (
      <ImageTitleDescriptionArraySection block={value} />
    ),
    read_blog_together: ({ value }) => <Readblog block={value} />,
    title_description_side_image_Section: ({ value }) => (
      <TitleDescriptionSideImageSection block={value} />
    ),
  },
  marks: {
    link: ({ children, value }) => {
      return <Link to={value?.href}>{children}</Link>;
    },
  },
};
const RichText: React.FC<{ block: RichTextTypes }> = ({ block }) => {
  const { custom_rich_text } = block || {};
  return (
    <PortableText value={custom_rich_text} components={RichTextComponents} />
  );
};
export default RichText;
