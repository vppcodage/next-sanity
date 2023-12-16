export default {
  name: 'package',
  title: 'Package',
  type: 'document',
  fields: [
    {
      name: 'label',
      title: 'Label',
      description: 'Only used in CMS.',
      type: 'string',
    },
    {
      name: 'package_title',
      title: 'Package Title',
      type: 'string',
    },
    {
      name: 'package_price_value',
      title: 'Package Price',
      description: 'Used only for transactions. Will not be used for frontend.',
      type: 'string',
    },
    {
      name: 'package_price_postfix',
      title: 'Package Price Postfix',
      type: 'string',
    },
    {
      name: 'package_price_currency',
      title: 'Package Price Currency',
      type: 'string',
      initialValue: '$',
    },
    {
      name: 'package_price_summary',
      title: 'Package Price Summary',
      type: 'string',
    },
    {
      name: 'package_total_price',
      title: 'Package Total Price',
      type: 'string',
    },
    {
      name: 'package_duration',
      title: 'Package duration',
      type: 'string',
    },
    {
      name: 'package_details',
      title: 'Package Details',
      type: 'array',
      of: [{type: 'comparision_field'}],
    },
    {
      name: 'popularity',
      title: 'Popularity',
      type: 'boolean',
    },
  ],
}
