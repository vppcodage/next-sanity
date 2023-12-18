import dynamic from "next/dynamic";
import React, { Fragment } from "react";
const Link = dynamic(() => import("../Link"));
const LabelLink = dynamic(() => import("../LabelLink"));
import clsx from "clsx";
import { TopHeader as TopHeaderType } from "@/lib/sanity/types";

const TopHeader: React.FC<{ block: TopHeaderType }> = ({ block }) => {
  const { contact_link, top_link, top_label, contact_no } = block || {};

  return (
    <div className="bg-lily-White">
      <div className={clsx(`h-[0.625em] w-full bg-line-gradient font-DM`)} />
      <div className="container">
        <div className="hidden md:flex items-center justify-between px-0 py-[0.5em] font-DM">
          <div className="relative flex items-center ">
            <Link
              to={top_link}
              className="text-black-shade-color text-[0.875em] font-normal whitespace-nowrap max-w-[30em] overflow-hidden text-ellipsis hover:text-dark-pink after:content-[''] after:absolute after:right-[-2em] after:bg-[url('/top-header-icon.svg')] after:bg-no-repeat after:w-[15px] after:h-[15px] after:top-[0.2em]"
            >
              {top_label}
            </Link>
          </div>
          <div>
            <ul className="[&>*:last-child]:pr-0 [&>*:last-child]:border-l-[0.0625em] [&>*:last-child]:border-l-[#000] [&>*:last-child]:border-solid flex items-center [&>li>span]:text-[0.875em] [&>li>span]:font-normal [&>li]:m-0 [&>li]:px-[1em] [&>li]:py-0  [&>li>a]:font-normal [&>li>a]:leading-[1em] [&>li>a]:text-dark-blue">
              <li className="[&>a]:text-[12.25px]  xl:[&>a]:text-[14px] hover:[&>a]:text-dark-pink">
                {contact_link && <LabelLink block={contact_link} />}
              </li>
              <li>
                <span className="text-dark-blue">Office : </span>
                <Link to={`tel:${String(contact_no)}`}>
                  <span className="text-[12.25px]  xl:text-[14px] hover:text-dark-pink">
                    {contact_no}
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
