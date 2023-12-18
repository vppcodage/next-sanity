import { BookConsultationHeroSectionType } from "@/lib/sanity/types/page";
import dynamic from "next/dynamic";
const RichText=dynamic(()=>import("../RichText"))


const BookConsultationHeroSection: React.FC<BookConsultationHeroSectionType> = ( block ) => {
  const { title_subtitle, content } = block || {};
  const { title } = title_subtitle || {};
  return (
    <div className="bg-bookhero-gradient mt-[7em] sm:mt-[9em] px-0 py-[3.5em] md:py-[5em]">
      <div className="container">
        <div className="text-center">
          <h1 className="font-bold leading-normal text-[2em] sm:text-[2.625em] md:text-[3.75em] text-[black]">{title}</h1>
          <div className="[&>p]:text-[1em] [&>p]:lg:text-[1.125em] [&>p]:leading-[1.25em] [&>p]:font-medium [&>p]:text-[#222549] [&>p]:pb-0">
            {content && <RichText block={content} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookConsultationHeroSection;
