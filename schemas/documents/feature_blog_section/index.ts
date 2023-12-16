import {modes} from '../../../lib/constant/select-options'

export default {
  name: 'feature_blog_section',
  title: 'Feature Blog Section',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'featured_post_title',
      title: 'Featured Post Title',
      type: 'string',
    },
    {
      name: 'all_posts_section',
      title: 'All Posts Section',
      type: 'string',
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
        title: 'Blog Featured Post Section',
      }
    },
  },
}
