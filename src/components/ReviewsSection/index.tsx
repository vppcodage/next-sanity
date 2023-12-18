import clsx from "clsx";
import RichText from "../RichText";
import Button from "../Button";
import CustomImage from "../CustomImage";
import { ReviewsSectionType } from "@/lib/sanity/types/page";

const ReviewsSection: React.FC<ReviewsSectionType> = (block) => {
  const {
    book_free_consultation_button,
    description_rich_text,
    reviews_image,
    text_with_image,
    section_theme,
  } = block || {};
  return (
    <div
      className={clsx(
        "pt-[2.5em] sm:pt-[5em] pb-[2.5em] sm:pb-[3em]",
        section_theme ?? "bg-white"
      )}
    >
      <div className="container">
        <div className="p-[1.5em] md:p-[2em] md:p-[2.9375em] block md:flex justify-between items-center bg-review-gradient">
          <div className="w-full md:w-[50%] emd:w-[65%] [&>p]:text-[#ffffff80] [&>p]:text-[12.6px] em:[&>p]:text-[14.175px] emd:[&>p]:text-[15.75px] xl:[&>p]:text-[18px] [&>p]:font-Inter [&>p]:tracking-[0.05em] [&>p]:leading-[25px] em:[&>p]:leading-[30px] xl:[&>p]:leading-[34px] [&>a]:py-[1em] [&>a]:px-[2.5em] [&>a]:text-[12.6px] em:[&>a]:text-[14.175px] emd:[&>a]:text-[15.75px] xl:[&>a]:text-[18px] hover:[&>a]:bg-btn-hover-pink hover:[&>a]:text-[#fff] [&>a]:font-bold">
            <div className="mb-[0.7em] [&>h4]:font-DM [&>h4]:text-[21px] em:[&>h4]:text-[26.25px] xl:[&>h4]:text-[30px] [&>h4]:text-[#fff] [&>h4]:font-bold inline-flex flex-wrap [&>img]:max-w-[6em] [&>img]:mt-[0.6em] sm:[&>img]:mt-[0.75em] [&>img]:mx-[0.5em] [&>p]:text-[15.75px] xl:[&>p]:text-[18px] hover:[&>a]:shadow-review-btn">
              `{text_with_image && <RichText block={text_with_image} />}
            </div>
            {description_rich_text && (
              <RichText block={description_rich_text} />
            )}
            {book_free_consultation_button && (
              <Button block={book_free_consultation_button} />
            )}
          </div>
          <div className="w-full md:w-[50%] emd:w-[30%] text-center md:text-left mt-[3em] md:mt-[0] [&>img]:max-w-[23.125em] [&>img]:max-h-[16.875em] [&>img]:ml-auto [&>img]:mr-auto md:[&>img]:mr-0">
            {reviews_image && <CustomImage block={reviews_image} />}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ReviewsSection;
