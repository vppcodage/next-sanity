import React, { useEffect, useState } from "react";
import clsx from "clsx";
import { Header as HeaderType } from "@/lib/sanity/types";
import Link, { checkLinkIsActive } from "../Link";
import { useRouter } from "next/router";
import Button from "../Button";
import LabelLink from "../LabelLink";
import Logo from "../Logo";
import TopHeader from "../TopHeader";


const Header: React.FC<{
  block: HeaderType;
}> = ({ block }) => {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    if (openNav) {
      document.body.classList.add("bg-drop");
    } else {
      document.body.classList.remove("bg-drop");
    }
  }, [openNav]);
  const { nav_links, button, background_classname, top_header } = block || {};
  const { asPath } = useRouter();
  if (!block) {
    return null;
  }
  return (
    <>
      {top_header && <TopHeader block={top_header} />}
      <header
        className={clsx(
          "z-[1] absolute inset-x-0 bg-[transparent]",
          background_classname ?? "white"
        )}
      >
        <div className="container">
          <div className="main-menu flex justify-between items-baseline lg:items-center px-0 py-[1.9375em] 3xl:py-[2.9375em] ">
            <div className="cursor-pointer logo-section">
              <Logo dark={background_classname === "dark-gradient"} />
            </div>
            <div className={clsx(`flex justify-end navbar-section font-DM`)}>
              <ul className="items-center hidden lg:flex">
                {nav_links?.map((item, index) => {
                  const { link, label } = item || {};
                  return (
                    <li key={index} className="mx-[1.2em] xl:mx-[1.5em] my-0">
                      {link ? (
                        <Link
                          to={link}
                          aria-label={label}
                          activeClassName={clsx("text-dark-pink")}
                          className={clsx(
                            "text-[1.125em] leading-[1em] font-normal text-[#304256]  hover:text-dark-pink",
                            background_classname === "dark-gradient"
                              ? checkLinkIsActive(link, asPath)
                                ? `text-dark-pink`
                                : "!text-[#fff]"
                              : ""
                          )}
                        >
                          {item?.label}
                        </Link>
                      ) : (
                        <span>{item?.label}</span>
                      )}
                    </li>
                  );
                })}
              </ul>
              <div
                className={clsx(
                  "hidden lg:block ml-[1em] xlg:ml-[2.0625em] [&>a]:bg-[#222549] [&>a]:text-[#ffffff] [&>a]:font-bold [&>a]:text-base xl:[&>a]:text-lg [&>a]:px-[1.2em] xl:[&>a]:px-[1.5em] [&>a]:py-[0.9em] [&>a]:rounded-[2em] [&>a]:hover:bg-dark-pink [&>a]:hover:text-[#fff] hover:[&>a]:shadow-banner-btn",
                  background_classname === "dark-gradient"
                    ? "[&>a]:bg-[#fff] [&>a]:text-dark-pink [&>a]:hover:bg-dark-blue"
                    : "[&>a]:bg-dark-blue"
                )}
                id="drift-open-chat"
              >
                <Button block={{ ...button, link: button?.link }} />
              </div>
            </div>
            <div
              className={`block lg:hidden  ${
                openNav
                  ? "  [&>span>div:nth-child(2)]:none  [&>span]:fixed [&>span]:right-[2.8em] [&>span]:top-[2.3em] md:[&>span]:top-[4.5em] [&>span]:z-90  [&>span>div]:bg-dark-pink [&>div]:block"
                  : "dark-gradient"
              }`}
            >
              <span
                className="shadow-none p-[0] relative z-10 cursor-pointer"
                onClick={() => {
                  setOpenNav(!openNav);
                }}
              >
                <div
                  className={clsx(
                    "w-[2em] h-[0.20625em]  my-[0.475em] rounded-[0.5em] transition",
                    background_classname === "dark-gradient"
                      ? "bg-[#fff]"
                      : " bg-dark-pink"
                  )}
                />
                <div
                  className={clsx(
                    "w-[2em] h-[0.20625em]  my-[0.475em] rounded-[0.5em] transition",
                    background_classname === "dark-gradient"
                      ? "bg-[#fff]"
                      : " bg-dark-pink"
                  )}
                />
                <div
                  className={clsx(
                    "w-[2em] h-[0.20625em]  my-[0.475em] rounded-[0.5em] transition",
                    background_classname === "dark-gradient"
                      ? "bg-[#fff]"
                      : " bg-dark-pink"
                  )}
                />
              </span>
              <div
                className={clsx(
                  "fixed left-[0] right-[0] top-[0]  rounded-[0.625em]  z-10 pt-[5em] pb-[1.5em] px-[2em] mt-[1.5em] md:mt-[3em] mb-[1.5em] mx-[1em]",
                  openNav
                    ? "bg-[#da3654] lg:bg-[transparent] opacity-100 visible  transition-opacity ease-in-out duration-300 bg-drop"
                    : "bg-[green] opacity-0 invisible transition-opacity ease-in-out duration-300 bg-drop"
                )}
              >
                <span
                  className="shadow-none p-[0] absolute z-10 right-[1.5em] top-[1em] md:top-[1.5em] cursor-pointer"
                  onClick={() => {
                    setOpenNav(!openNav);
                  }}
                >
                  <div className="w-[2em] h-[0.20625em] bg-[#fff] my-[0.475em] rounded-[0.5em] transition transform rotate-45 translate-x-[0.4em] translate-y-[0.875em] ease-in-out duration-300" />
                  <div className="w-[2em] h-[0.20625em] bg-[#fff] my-[0.475em] rounded-[0.5em] transition opacity-0" />
                  <div className="w-[2em] h-[0.20625em] bg-[#fff] my-[0.475em] rounded-[0.5em] transition transform -rotate-45 translate-x-[0.3em] translate-y-[-0.5em]  ease-in-out duration-300" />
                </span>
                <ul className="block lg:hidden ">
                  {nav_links?.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="m-[0] py-[0.5em] [&>a]:text-[1.5em] [&>a]:font-normal [&>a]:text-[#fff] [&>a]:tracking-[0.025em] [&>a]:hover:text-[#fff] font-DM"
                      >
                        {item && <LabelLink block={item} />}
                      </li>
                    );
                  })}
                </ul>
                <div
                  className="my-[1em] [&>a]:bg-[#222549] [&>a]:py-[0.75em] [&>a]:pl-[1.3em] [&>a]:pr-[1.5em] [&>a]:text-[15.75px] [&>a]:text-[#fff] [&>a]:rounded-[3.5em] [&>a]:hover:text-[#fff] [&>a]:font-DM [&>span]:py-[0.75em] [&>span]:px-[1.5em] [&>span]:bg-dark-blue [&>span]:rounded-[3.5em] [&>span]:text-white-color [&>span]:text-base [&>span]:cursor-pointer mt-[2em]"
                  id="drift-open-chat-mobile"
                >
                  <Button block={{ ...button }} />
                </div>
                <div className="text-end [&>a>img]:max-w-[10em] mt-[2em]">
                  <Logo dark />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default React.memo(Header);
