import SectionHeading from '../../../lib/components/SectionHeading'

export default {
  name: 'rich_text',
  title: 'Rich Text',
  type: 'object',
  fields: [
    {
      name: 'custom_rich_text',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'Heading1', value: 'h1'},
            {title: 'Heading2', value: 'h2'},
            {title: 'Heading3', value: 'h3'},
            {title: 'Heading4', value: 'h4'},
            {title: 'Heading5', value: 'h5'},
            {title: 'Heading6', value: 'h6'},
            {title: 'Quote', value: 'blockquote'},
            {title: 'Section Heading', value: 'section-heading', component: SectionHeading},
          ],
          marks: {
            annotations: [
              {name: 'color', title: 'Color', type: 'color'},
              {
                name: 'link',
                type: 'object',
                title: 'External link',
                fields: [
                  {
                    name: 'href',
                    type: 'string',
                    title: 'URL',
                  },
                ],
              },
            ],
          },
        },
        {type: 'image'},
        {type: 'button'},
        {type: 'custom_image'},
        {type: 'title_content'},
        {type: 'title'},
        {type: 'title_description_side_image_Section'},
        {type: 'more_conversation_section'},
        {type: 'image_title_description_array_section'},
        {type: 'read_blog_together'},
      ],
    },
  ],
}
