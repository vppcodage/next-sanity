import React, { PropsWithChildren } from "react";
import { LinkProps, default as NextLink } from "next/link";
import clsx from "clsx";
import { useRouter } from "next/router";

export const getLink = (url?: string) => {
  if (url?.startsWith("#")) {
    return String(url);
  }
  if (url?.includes("#")) {
    const url_pre = url?.startsWith("/") ? url : "/" + String(url);
    const url_final =
      url_pre.endsWith("/") || url_pre.includes("#") ? url_pre : url_pre + "/";
    return url_final;
  }
  const url_pre = url?.startsWith("/") ? url : "/" + String(url);
  const url_final =
    url_pre[url_pre.length - 1] == "/" ? url_pre : url_pre + "/";
  return url_final;
};
export const getBlogLink = (slug?: { _type: "slug"; current: string }) =>
  slug?.current?.startsWith("/blog/")
    ? slug?.current
    : "/blog/" + String(slug?.current);
const removeParams = (path = "") =>
  path.split("?")[0].endsWith("/")
    ? path.split("?")[0].slice(0, -1)
    : path.split("?")[0];

export const checkLinkIsActive = (source: string, current: string) =>
  removeParams(current).startsWith(removeParams(source));
const Link: React.FC<
  PropsWithChildren<
    Omit<LinkProps & React.RefAttributes<HTMLAnchorElement>, "to" | "href"> & {
      to: string | null | undefined;
      target?: React.HTMLAttributeAnchorTarget;
      className?: string;
      activeClassName?: string;
      "aria-label"?: string;
    }
  >
> = ({ to, target, children, activeClassName, className, ...props }) => {
  const { asPath } = useRouter();
  if (!to) {
    return (
      <span className={className} {...props}>
        {children}
      </span>
    );
  } else if (
    to.startsWith("http") ||
    to.startsWith("mailto:") ||
    to.startsWith("tel:")
  ) {
    return (
      <NextLink
        href={to}
        target={target ?? "_blank"}
        className={clsx(
          checkLinkIsActive(to, asPath) && `${activeClassName ?? ""}`,
          className
        )}
        {...props}
      >
        {children}
      </NextLink>
    );
  }
  return (
    <NextLink
      href={getLink(to)}
      target={target || "_self"}
      {...props}
      className={clsx(
        checkLinkIsActive(getLink(to), asPath) && `${activeClassName ?? ""}`,
        className
      )}
    >
      {children}
    </NextLink>
  );
};

export default Link;
