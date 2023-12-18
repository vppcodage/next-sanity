import {
  BlogsType,
  PageBuilder as PageBuilderType,
} from "@/lib/sanity/types/page";
import Section from "../Section";
import { Category } from "@/lib/sanity/types";
export interface SectionProps {
  block: PageBuilderType;
  categories?: Category[];
  allBlogs?: BlogsType[];
}
const SectionView: React.FC<SectionProps> = ({
  block,
  categories,
  allBlogs,
  ...rest
}) => {
  const { content } = block || {};
  return (
    Array.isArray(content) &&
    content.map((item, index) => (
      <Section
        data={item}
        key={index}
        categories={categories}
        allBlogs={allBlogs}
        {...rest}
      />
    ))
  );
};
export default SectionView;
