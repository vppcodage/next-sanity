import React from "react";
import { HeroSectionPrivacyPolicyType } from "@/lib/sanity/types/page";

const PrivacyPolicyHeroSection: React.FC<HeroSectionPrivacyPolicyType> = (
  block
) => {
  const { date, title } = block || {};
  return (
    <div className="bg-tooltip-gradient py-14 em:py-18 sm:py-20  absolute top-[5em] md:top-[7em] lg:top-[9em] 2xl:top-[10em] my-[3em] w-full">
      <div className="container">
        <div className="mx-auto text-center">
          <h3 className="text-[#222549] leading-[1.5em] font-[700] text-[2.3em] sm:text-[2.5em] md:text-[3em]">
            {title}
          </h3>
          <p className="text-[#222549] leading-[1.5em] font-[300] text-[1em] opacity-60">
            {date}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyHeroSection;
