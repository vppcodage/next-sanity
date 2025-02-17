import { SchemaTypeDefinition } from "sanity";

export default {
  name: 'client',
  title: 'Client',
  type: 'document',
  fields: [
    {
      name: 'clientName',
      title: 'Client Name',
      type: 'string',
    },
    {
      name: 'clientLocation',
      title: 'Client Location',
      type: 'string',
    },
    {
      name: 'clientImage',
      title: 'Client Image',
      type: 'custom_image',
    },
    {
      name: 'company',
      title: 'Company',
      type: 'label_link',
    },
  ],
  preview: {
    select: {
      title: "clientName",
      image: "clientImage.image",
    },
    prepare(select) {
      const { title, image } = select;
      if (!title) {
        return {
          title: "Client",
          media: image && image,
        };
      }
      return {
        title: title,
        media: image && image,
      };
    },
  },
} as SchemaTypeDefinition
