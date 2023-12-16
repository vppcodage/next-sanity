import {modes} from '../../../lib/constant/select-options'

export default {
  name: 'featurd_case_study',
  title: 'Featurd Case Study',
  type: 'object',
  fields: [
    {
      name: 'title_subtitle',
      title: 'Title Subtitle',
      type: 'title',
    },
    {
      name: 'case_study_image',
      title: 'Case Study Image',
      type: 'custom_image',
    },
    {
      name: 'core_web_title',
      title: 'Core Web Title',
      type: 'string',
    },
    {
      name: 'process_image',
      title: 'Process Image',
      type: 'custom_image',
    },
    {
      name: 'case_study_blog',
      title: 'Case Study Blog',
      type: 'rich_text',
    },
    {
      name: 'section_theme',
      title: 'Section Theme',
      type: 'string',
      initialValue: 'bg-white',
      options: {list: modes , direction: 'horizontal', layout: 'radio'},
    },
  ],
}
