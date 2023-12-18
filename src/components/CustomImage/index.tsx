import { Image } from "../Image";
import Link from "../Link";
import { ImageProps } from "next/image";
import { CustomImageType } from "@/lib/sanity/types";

const CustomImage: React.FC<
  Omit<ImageProps, "src" | "alt"> & {
    alt?: string;
    block: CustomImageType | null;
  }
> = ({ block, ...props }) => {
  const { alt, caption, image, link } = block || {};
  if (!image) {
    return null;
  }
  return typeof link == "string" && link.length > 0 ? (
    <Link aria-label={props.alt} to={link}>
      <Image src={image} alt={(props.alt ?? alt) || ""} {...props} />
    </Link>
  ) : (
    <Image src={image} alt={(props.alt ?? alt) || ""} {...props} />
  );
};

export default CustomImage;
