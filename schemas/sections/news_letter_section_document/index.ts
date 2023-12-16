export default {
  name: 'news_letter_section_document',
  title: 'News Letter Section Document',
  type: 'reference',
  to: {type: 'news_letter'},
  preview: {
    prepare: () => {
      return {
        title: 'News Letter Section Document',
      }
    },
  },
}
