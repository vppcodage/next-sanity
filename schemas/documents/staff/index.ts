import { SchemaTypeDefinition } from "sanity";

export default {
  name: 'staff',
  title: 'Staff',
  type: 'document',
  fields: [
    {
      name: 'staff_name',
      title: 'Staff Name',
      type: 'string',
    },
    {
      name: 'staff_post',
      title: 'Staff Post',
      type: 'string',
    },
    {
      name: 'staff_content',
      title: 'Staff Content',
      type: 'rich_text',
    },
    {
      name: 'staff_image',
      title: 'Staff Image',
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
      title: "staff_name",
      image: "staff_image.image",
    },
    prepare(select) {
      const { title, image } = select;
      if (!title) {
        return {
          title: "Staff",
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