export default {
  name: 'join_our_news_letter',
  title: 'Join Our News Letter',
  type: 'object',
  fields: [
    {
      name: 'title_description',
      title: 'Title Description',
      type: 'title_description',
    },
    {
      name: 'input_placeholder',
      title: 'Input Placeholder',
      type: 'string',
    },
    {
      name: 'send_button',
      title: 'Send Button',
      type: 'button',
    },
  ],
  preview: {
    prepare: () => {
      return {
        title: 'Join Our News Letter',
      }
    },
  },
}
