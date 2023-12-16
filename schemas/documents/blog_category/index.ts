import {HiInformationCircle} from 'react-icons/hi'

export default {
  name: 'blog_category',
  title: 'Blog Category',
  type: 'document',
  fields: [
    {
      title: 'category',
      name: 'Category',
      type: 'string',
    },
    {
      name: 'myCustomNote',
      title: 'Important!',
      description: 'Articles will be included automatically',
      type: 'note',
      options: {
        icon: HiInformationCircle,
        tone: 'caution',
      },
    },
  ],
}
