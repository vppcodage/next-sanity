
import locales from "@/lib/locales";
import Image from "next/image";

const NotFound: React.FC<{ title: string; description: string }> = ({
  title,
  description,
}) => {
  return (
    <div className="max-w-[44.5rem] w-full rounded-[8.466px] bg-[#f4fbff] mx-auto">
        <div className="notfound-inner py-[1.5rem] px-[2.5rem] lg:py-[1.875rem] lg:px-[3.125rem] text-center">
          <div className="notfound-inner-left [&>img]:w-[6.438rem] flex justify-center md:justify-start">
            <Image
              src="/no-found.gif"
              alt="Jamstacky"
              className="nodata-image"
              width={10}
              height={10}
            />
          </div>
          <div className="notfound-inner-right">
            <h3 className="text-[#222549] text-[24px] md:text-[35.558px] font-medium leading-[normal] pb-4 md:pb-7"><span className="text-[#DA3654]">{locales.en.SORRY}</span> {title}</h3>
          </div>
        <span className="text-[rgba(34,37,73,0.53)] text-center text-[15.239px] font-medium border-b-[#DA3654] border-b border-solid pb-1 leading-7">{description}</span>
        </div>
    </div>
  );
};
export default NotFound;
