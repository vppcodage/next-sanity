import {modes} from '../../../../lib/constant/select-options'

export default {
  name: 'hire_team',
  title: 'Hire Team',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'hire_team_description',
      title: 'Hire Team Description',
      type: 'rich_text',
    },
    {
      name: 'hire_team_image',
      title: 'Hire Team Image',
      type: 'custom_image',
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
        title: 'Hire Team',
      }
    },
  },
}
