import React, { Fragment } from "react";
import FooterBanner from "./FooterBanner";
import LabelLink from "../LabelLink";
import { Footer } from "@/lib/sanity/types";
import CustomImage from "../CustomImage";

const Footer: React.FC<{ block: Footer }> = ({ block }) => {
  if (!block) {
    return null;
  }
  const { footer_links, footer_logo, contact_link, footer_banner } =
    block || {};
  const currentYear = new Date().getFullYear();
  return (
    <Fragment>
      <div
        className="bg-white shadow-[0px_-35px_65px_1px_rgba(0,0,0,0.1)] pt-[2.625em] pb-[1.5em] px-0"
        id="introcall-section"
      >
        {footer_banner && <FooterBanner block={footer_banner} />}
      </div>
      <div className="bg-dark-blue">
        <div className="container">
          <div className="flex justify-between items-center px-0 py-[2.375em] font-DM">
            <div className="flex items-center footer-left">
              <div className="max-w-[2.75em] w-full h-full">
                {footer_logo && <CustomImage block={footer_logo} />}
              </div>
              <ul className="hidden lg:flex ml-[4.375em]">
                {footer_links?.map((item, index) => {
                  return (
                    <li
                      key={index}
                      className="mx-[1.5em] my-0
                             [&>a]:text-[12.6px] xl:[&>a]:text-[16px] [&>a]:leading-[1.25em] [&>a]:font-normal hover:[&>a]:text-dark-pink [&>a]:text-white-color
                                "
                    >
                      {item && <LabelLink block={item} />}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="text-right flex-col sm:flex-row flex items-center space-x-4 md:space-x-0 md:flex md:flex-col">
              <p
                className="text-[0.875em] leading-[1.25em] font-normal text-white-color p-0
                [&<a]:text-[13.78px] sm:[&<a]:text-[15.50px]  md:[&<a]:text-[12.40px]  xl:[&>a]:text-[15.75px] [&>a]:underline [&>a]:leading-[1.25em] [&>a]:font-normal [&>a]:text-white-color [&>a]:cursor-pointer  [&>a]:hover:text-dark-pink  hover:[&>a]:underline
                    "
              >
                {contact_link && <LabelLink block={contact_link} />}
              </p>
              <p className="text-[11px] xl:text-[14px] font-normal text-white-color p-0 m-0 md:pt-[3px] max-sm:pt-[3px]">
                jamstacky.com © {currentYear}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default React.memo(Footer);
