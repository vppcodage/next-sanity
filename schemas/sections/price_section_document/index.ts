export default {
  name: 'price_section_document',
  title: 'Price Section',
  type: 'reference',
  to: {type: 'price_section'},
  preview: {
    prepare: () => {
      return {
        title: 'Price Section Document',
      }
    },
  },
}
