import { Fragment, useEffect, useState } from "react";

const SideContentTitle: React.FC<{
  contant_card?: string | null;
  sideTitle?: string[];
}> = ({ sideTitle, contant_card }) => {
  const [currId, setCurrId] = useState("");

  useEffect(() => {
    const val =
      document?.getElementById(`${currId.toString()}`)?.offsetTop ?? 0;
    const elementVal =
      val ||
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop;
    const pointerValue: number = typeof window != "undefined" ? elementVal : 0;
    window.scroll(0, pointerValue);
  }, [currId]);

  return (
    <Fragment>
      <section className=" bg-dark-pink p-[1.5em] rounded-[0.625em]">
        <div>
          <h5 className="font-semibold text-[#fff] text-2xl text-center font-DM">
            {contant_card}
          </h5>
          <ul className=" m-0 overflow-auto pt-[0.5em] pl-[1.5em] pr-[0.875em] relative  block list-disc marker:text-[#fff] max-h-calc contentList ">
            {sideTitle?.map((item, index) => {
              return (
                item && (
                  <li  onClick={() => setCurrId(`postHas_content_${index+1}`)} className="pt-[0.625em] pb-[0.5em]" key={index}>
                    <span className="text-[16px] font-medium text-[#fff] hover:text-dark-blue align-text-top leading-[24px] font-DM">
                      {item}
                    </span>
                  </li>
                )
              );
            })}
          </ul>
        </div>
      </section>
    </Fragment>
  );
};

export default SideContentTitle;
