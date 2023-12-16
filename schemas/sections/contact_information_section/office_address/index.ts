import {modes} from '../../../../lib/constant/select-options'

export default {
  name: 'office_address',
  title: 'Office Address',
  type: 'object',
  fields: [
    {
      name: 'addressTitle',
      title: 'Address Title',
      type: 'title',
    },
    {
      name: 'addressDescription',
      title: 'Address Description',
      type: 'rich_text',
    },
    {
      name: 'directions',
      title: 'Directions',
      type: 'label_link',
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
        title: 'Office Address',
      }
    },
  },
}
