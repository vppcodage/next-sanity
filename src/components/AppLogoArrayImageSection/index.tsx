import clsx from "clsx";
import { Fragment } from "react";
import Carousel from "../Carousel";
import CustomImage from "../CustomImage";

import TitleSubtitle from "../TitleSubtitle";

const AppLogoArrayImageSection = ({ block }) => {
  const { image_array, single_image, title_subtitle, section_theme } =
    block || {};
  return (
    <Fragment>
      <div
        className={clsx("technology-for-jamstack", section_theme ?? "bg-white")}
      >
        <div className="container">
          <div className="technology-for-jamstack-inner">
            {title_subtitle && <TitleSubtitle block={title_subtitle} />}

            {Array.isArray(image_array) && image_array.length > 0 && (
              <div className="technology-row-jamstack">
                <Carousel arrows={false} autoPlay={true}>
                  {image_array?.map((image, index) => (
                    <CustomImage block={image} key={index} />
                  ))}
                </Carousel>
              </div>
            )}
            <div className="technology-row-banner">
              {single_image && (
                <CustomImage
                  block={single_image}
                 
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default AppLogoArrayImageSection;
