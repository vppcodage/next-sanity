import { SchemaTypeDefinition } from "sanity";

export default {
  name: "setting",
  title: "Setting",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "telePhone",
      title: "TelePhone",
      type: "string",
    },
    {
      name: "image",
      title: "Image",
      type: "custom_image",
    },
  ],
} as SchemaTypeDefinition;
