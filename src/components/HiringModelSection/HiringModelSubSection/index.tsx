//@ts-ignore
//@ts-nocheck
import { HireTeamFragment } from "../../../__app__/api/generated/graphql/graphql";
import { PortableText } from "@portabletext/react";
import dynamic from "next/dynamic";
const CustomImage = dynamic(() => import("../CustomImage"));
const HiringModelSubSection: React.FC<{ item: HireTeamFragment }> = ({
  item,
}) => {
  const { hire_team_description, hire_team_image, title } = item || {};
  return (
    <div className="hriring-tab-row">
      <div className="hiring-tab-left">
        <h5 className="tab-row-title">{title}</h5>
        {hire_team_description && <PortableText value={hire_team_description} />}
      </div>
      <div className="hiring-tab-right">
        {hire_team_image && <CustomImage block={hire_team_image} />}
      </div>
    </div>
  );
};
export default HiringModelSubSection;
