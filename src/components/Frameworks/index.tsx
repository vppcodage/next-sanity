import clsx from "clsx";
import { useRouter } from "next/router";
import React, { useMemo, useState } from "react";
import { CompareFrameworkSection } from "@/lib/sanity/types/page";
import locales from "@/lib/locales";
import dynamic from "next/dynamic";
const RichText = dynamic(() => import("../RichText"));
const Button = dynamic(() => import("../Button"));

const Frameworks: React.FC<{
  block: CompareFrameworkSection;
  isshow?: boolean;
}> = ({ block, isshow }) => {
  const {
    button_label_compare,
    title_subtitle,
    content,
    type,
    section_theme,
    frameworks: all_frameworks,
  } = block || {};
  const filtered_frameworks = useMemo(
    () =>
      type?.slug?.current
        ? all_frameworks?.filter(
            (i) => i?.type?.type?.slug?.current == type.slug?.current
          )
        : all_frameworks,
    [type, all_frameworks]
  );
  const [frameworks, setFrameworks] = useState({
    framework1:
      filtered_frameworks && filtered_frameworks?.length > 0
        ? filtered_frameworks[0]?.slug?.current || ""
        : "",
    framework2:
      filtered_frameworks && filtered_frameworks?.length > 1
        ? filtered_frameworks[1]?.slug?.current || ""
        : "",
  });
  const { push } = useRouter();
  const optionsListFirst = useMemo(
    () =>
      filtered_frameworks.filter(
        (i) =>
          frameworks.framework2 || frameworks.framework1 !== i.slug?.current
      ),
    [filtered_frameworks, frameworks]
  );
  const optionsListSecond = useMemo(
    () =>
      filtered_frameworks.filter(
        (i) =>
          frameworks.framework1 || frameworks.framework2 !== i.slug?.current
      ),
    [filtered_frameworks, frameworks]
  );
  return (
    <div className={clsx("", section_theme ?? " bg-white")}>
      <div
        className={clsx(
          "",
          isshow
            ? "bg-compare-gradient p-[1em] esm:p-[2em] sm:p-[3.5em] mb-[40px] sm:mb-[50px] emd:mb-[80px]"
            : "block emd:flex items-center justify-between px-[1.5em] em:px-[3em] py-[1em] font-DM "
        )}
      >
        <div className={clsx("", isshow ? "w-full" : "w-full emd:w-[30%]")}>
          <div>
            <h1
              className={clsx(
                "",
                isshow
                  ? "text-[18px] esm:text-[20px] em:text-[22px] xl:text-[24px] text-dark-blue font-DM font-bold"
                  : "text-[20px] font-bold leading-normal text-[#DA3654] font-DM"
              )}
            >
              {title_subtitle?.title}
            </h1>
            {content && (
              <div
                className={clsx(
                  "",
                  isshow
                    ? "font-DM [&>p]:text-[14px] xl:[&>p]:text-[16px] [&>p]:text-dark-blue [&>p]:py-[0.5em] em:[&>p]:py-[1em]  "
                    : "[&>p]:text-[1em] [&>p]:leading-[1.5em] [&>p]:font-normal [&>p]:text-black [&>p]:py-[0.75em] lg:[&>p]:py-[1em] "
                )}
              >
                <RichText block={content} />
              </div>
            )}
          </div>
        </div>
        <div className="flex justify-center lg:justify-end mt-[1em] lg:mt-0">
          {!filtered_frameworks || !(filtered_frameworks.length > 1) ? (
            <h6>{locales.en.SERVICE_UNAVAILABLE}</h6>
          ) : (
            <div className="max-w-full  w-full  max-auto">
              {isshow ? (
                <div>
                  <ul className="flex flex-wrap  my-[1.5em]">
                    {filtered_frameworks &&
                      filtered_frameworks.map((i, index) => (
                        <li
                          className="mr-[1em] mb-[1em] bg-dark-pink rounded-[0.5em] py-[0.5em] em:py-[0.8em] px-[1em] em:px-[1.5em] text-[13px] xl:text-[14px] font-medium text-[#ffffffb3] font-DM"
                          key={index}
                        >
                          {i.name}
                        </li>
                      ))}
                  </ul>
                </div>
              ) : null}
              <div
                className={clsx(
                  "",
                  isshow
                    ? "p-[1.5em] em:p-[2em] mt-[2em] bg-compare-row-gradient rounded-[0.5em]"
                    : ""
                )}
              >
                {isshow ? (
                  <h6 className="text-[#fff] font-DM text-[15px] md:text-[17px] font-medium uppercase tracking-[0.416px] mb-[1em] text-center emd:text-left">
                    compare <span>{title_subtitle?.title}</span>
                  </h6>
                ) : null}
                <div
                  className={clsx(
                    "",
                    isshow
                      ? "flex flex-col md:flex-row items-center justify-center emd:justify-start [&>select]:w-[25em] md:[&>select]:w-[13em] [&>select]:bg-selectBgsize  [&>select]:bg-pos  [&>select]:bg-white  [&>select]:appearance-none   [&>select]:shadow-[0px_0px_10px_rgba(218,54,84,0.2)]  [&>select]:relative  [&>select]:bg-[url(/dropdown.png)]    [&>select]:bg-no-repeat  [&>select]:indent-px  [&>select]:pr-[2.5em]  [&>select]:rounded-[0.625em]  [&>select]:border-[none] [&>button]:rounded-[10px] [&>button]:bg-[#222549] hover:[&>button]:bg-[#da3654]"
                      : "flex flex-col md:block items-center [&>select]:w-[25em] md:[&>select]:w-[13em] [&>select]:bg-selectBgsize  [&>select]:bg-pos  [&>select]:bg-white  [&>select]:appearance-none   [&>select]:shadow-[0px_0px_10px_rgba(218,54,84,0.2)]  [&>select]:relative  [&>select]:bg-[url(/dropdown.png)]    [&>select]:bg-no-repeat  [&>select]:indent-px  [&>select]:pr-[2.5em]  [&>select]:rounded-[0.625em]  [&>select]:border-[none] [&>button]:rounded-[10px] [&>button]:bg-[#222549] hover:[&>button]:bg-[#da3654]"
                  )}
                >
                  <select
                    className="w-[25em] max-w-full bg-[rgba(0,0,0,0)] font-medium  bg-white-shad-color font-DM text-[#222549]"
                    required
                    aria-label="State"
                    defaultValue={filtered_frameworks[0]?.slug?.current || ""}
                    onChange={(e) =>
                      setFrameworks((state) => ({
                        ...state,
                        framework1: e.target.value,
                      }))
                    }
                  >
                    {optionsListFirst.map((i, index) => (
                      <option value={i.slug?.current || ""} key={index}>
                        {i.name}
                      </option>
                    ))}
                  </select>
                  <span
                    className={clsx(
                      "",
                      isshow
                        ? "text-white-color font-DM text-[14px] md:text-[16px] uppercase mx-[0] md:mx-[1em] my-[1em] md:my-[0]"
                        : "text-[1.25em] font-bold leading-[3.5em] text-[#DA3654] uppercase mx-[1em] my-0"
                    )}
                  >
                    {" "}
                    VS{" "}
                  </span>
                  <select
                    className="w-[25em] max-w-full  bg-[rgba(0,0,0,0)] font-medium bg-white-shad-color font-DM text-[#222549]"
                    required
                    aria-label="State"
                    defaultValue={filtered_frameworks[1]?.slug?.current || ""}
                    onChange={(e) =>
                      setFrameworks((state) => ({
                        ...state,
                        framework2: e.target.value,
                      }))
                    }
                  >
                    {optionsListSecond.map((i, index) => (
                      <option value={i.slug?.current || ""} key={index}>
                        {i.name}
                      </option>
                    ))}
                  </select>
                  <Button
                    onClick={() => {
                      if (frameworks.framework1 && frameworks.framework2) {
                        const path =
                          String(
                            frameworks.framework1
                              .replace("/frameworks/", "")
                              .replace("/", "")
                          ).toLowerCase() +
                          "-vs-" +
                          String(
                            frameworks.framework2
                              .replace("/frameworks/", "")
                              .replace("/", "")
                          ).toLowerCase();
                        push("/comparision/" + path);
                      }
                    }}
                    className={clsx(
                      "",
                      isshow
                        ? "mt-[2em] md:mt-[0] ml-[0] md:ml-[2em] py-[1.125em] px-[1.5em] !bg-white-color w-full em:w-[15em] text-dark-pink hover:text-white-color hover:!bg-dark-blue text-[14px] xl:text-[16px] font-medium"
                        : " block text-[1em] !font-medium text-white text-center bg-[#222549] w-auto md:w-[10em] mt-[2em] md:mt-[0] ml-[0em] md:ml-[2em] rounded-[0.625em] max-w-full"
                    )}
                  >
                    {button_label_compare ?? "Compare"}
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default React.memo(Frameworks);
