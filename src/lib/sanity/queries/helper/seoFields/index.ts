import { imageFields } from "../imageFields";
import {
  metaAttributesQuery,
  openGraphQuery,
  twitterQuery,
} from "./metaHelperQuery";

export const seofields = /* groq */ `
_type,
meta_title,
meta_description,
meta_image{
${imageFields}
},
openGraph{
${openGraphQuery}
},
twitter{
${twitterQuery}
},
meta_tags[]{
_type,
meta_attributes[]{
${metaAttributesQuery}     
}
}
`;
