import {modes} from '../../../lib/constant/select-options'

export default {
  name: 'jamstack_development',
  title: 'Jamstack Development Section',
  type: 'object',
  fields: [
    {
      name: 'title_subtitle',
      title: 'Title Subtitle',
      type: 'title',
    },
    {
      name : "image",
      title : "Image",
      type : "array",
      of: [{ type: "custom_image" }]
    },
    {
      name : "title_description",
      title : "Title Description",
      type : "array",
      of:[{type:'title_description'}]
    },
    {
      name: 'section_theme',
      title: 'Section Theme',
      type: 'string',
      initialValue: 'bg-white',
      options: {list: modes, direction: 'horizontal', layout: 'radio'},
    },
  ],
  preview: {
    prepare: () => {
      return {
        title: 'Jamstack Development Section',
      }
    },
  },
}

