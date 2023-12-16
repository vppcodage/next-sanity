import { background_classname, modes } from "../../../lib/constant/select-options";

export default {
  name: 'home_hero_section',
  title: 'Home Hero Section',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'hero_image',
      title: 'Hero Image',
      type: 'custom_image',
    },
    {
      name: 'hero_title',
      title: 'Hero Title',
      type: 'string',
    },
    {
      name: 'hero_description',
      title: 'Hero Description',
      type: 'text',
    },
    {
      name: 'title_image',
      title: 'Title Image',
      type: 'custom_image',
    },
    {
      name: 'start_project_button',
      title: 'Start Prject Button',
      type: 'button',
    },
    {
      name: 'jamstack_developer_button',
      title: 'Jamstack Developer Button',
      type: 'button',
    },
    {
      name: 'bottom_description',
      title: 'Bottom Description',
      type: 'text',
    },
    {
      name: 'section_theme',
      title: 'Section Theme',
      type: 'string',
      initialValue:'bg-white',
      options:{ list:modes, direction: 'horizontal', layout: 'radio'}
    },
    {
      name: 'background_classname',
      title: 'Background Classname',
      type: 'string',
      initialValue:'white',
      options:{list:background_classname,  direction: 'horizontal', layout: 'radio'}
    },
  ],
}
