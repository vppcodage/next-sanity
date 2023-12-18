import clsx from "clsx";
import { PropsWithChildren } from "react";

import Link from "../Link";
import { Button } from "@/lib/sanity/types";

const Button: React.FC<
  PropsWithChildren<
    { block?: Button } & React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >
  >
> = ({ block, className = "", ...props }) => {
  const { label, link } = block || {};
  return block ? (
    <Link
      to={link || ""}
      aria-label={label}
      className={clsx(
        "text-[1.125em] font-bold leading-[1.25em] text-[#ffffff] bg-[#DA3654] hover:bg-dark-blue inline-block cursor-pointer px-[1.3em] py-[0.9em] lg:px-[1.5em] lg:py-[1em] rounded-[3.5em] font-DM  text-center ",
        className
      )}
    >
      {label}
    </Link>
  ) : (
    <button
      {...props}
      aria-label={label || ""}
      className={clsx(
        "text-[1.125em] font-bold leading-[1.25em] text-[#ffffff] bg-[#DA3654] inline-block cursor-pointer px-[0.8em] em:px-[1em] py-[0.75em] md:py-[0.9em] lg:px-[1.5em] lg:py-[1em] rounded-[3.5em] font-DM",
        className
      )}
    >
      {props.children}
    </button>
  );
};

export default Button;
