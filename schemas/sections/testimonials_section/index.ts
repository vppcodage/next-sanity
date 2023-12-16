import {HiInformationCircle} from 'react-icons/hi'
import {modes} from '../../../lib/constant/select-options'
import {SchemaTypeDefinition} from 'sanity'

export default {
  name: 'testimonials_section',
  title: 'Testimonials Section',
  type: 'object',
  fields: [
    {name: 'testimonials_section', title: 'Testimonials Section', type: 'string'},
    {name: 'TestimonialsTitle', title: 'Testimonials Title', type: 'string'},
    {name: 'TestimonialsDescription', title: 'Testimonials Description', type: 'string'},
    {
      name: 'section_theme',
      title: 'Section Theme',
      type: 'string',
      initialValue: 'bg-white',
      options: {list: modes, direction: 'horizontal', layout: 'radio'},
    },
    {
      name: 'myCustomNote',
      title: 'Important!',
      description: 'All Testimonials`s will be included automatically',
      type: 'note',
      options: {
        icon: HiInformationCircle,
        tone: 'caution',
      },
    },
  ],
  preview: {
    select: {
      title: 'TestimonialsTitle',
    },
    prepare: ({title}) => {
      return {
        title,
      }
    },
  },
} as SchemaTypeDefinition
