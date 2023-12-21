import { SchemaTypeDefinition } from "sanity";
import { background_classname } from "../../../lib/constant/select-options";

export default {
  name: 'header',
  title: 'Header',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'custom_image',
    },
    {
      name: 'nav_links',
      title: 'Nav Links',
      type: 'array',
      of: [{type: 'label_link'}],
    },
    {
      name: 'button',
      title: 'Button',
      type: 'button',
    },
    {
      name: 'background_classname',
      title: 'Background Classname',
      type: 'string',
      initialValue: 'white',
      options: {list: background_classname, direction: 'horizontal', layout: 'radio'},
    },
  ],
} as SchemaTypeDefinition
