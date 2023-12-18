//@ts-ignore
//@ts-nocheck
import clsx from "clsx";
import { Fragment } from "react";
import { HourlyDeveloperFragment } from "../../__app__/api/generated/graphql/graphql";
import TitleSubtitle from "../TitleSubtitle";
import Button from "../Button";
import CustomImage from "../CustomImage";

const HourlyDeveloperSection: React.FC<{ block: HourlyDeveloperFragment }> = ({
  block,
}) => {
  const {
    background_image,
    contact_us_button,
    disc,
    price,
    price_section,
    title_Subtitle,
    section_theme,
  } = block || {};

  const { description } = price_section || {};
  return (
    <Fragment>
      <div
        className={clsx(
          "hourly-developer-section",
          section_theme ?? "bg-white"
        )}
      >
        <div className="container">
          <div className="hourly-developer-inner">
            {title_Subtitle && <TitleSubtitle block={title_Subtitle} />}
            <div className="blockquote-section">
              <div className="blockquote-left">
                <div className="hourly-title">
                  <h6>{price_section?.title}</h6>
                </div>
                <div className="hourly-description">
                  <p>{description}</p>
                  <h5>{price}</h5>
                  <p>{disc}</p>
                  {contact_us_button && <Button block={contact_us_button} />}
                </div>
              </div>
              <div className="blockquote-right">
                {background_image && <CustomImage block={background_image} />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default HourlyDeveloperSection;
