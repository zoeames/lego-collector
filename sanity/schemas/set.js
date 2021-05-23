import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStarfighter } from '@fortawesome/pro-solid-svg-icons';

export default {
  name: 'set',
  title: 'Sets',
  type: 'document',
  icon: () => <FontAwesomeIcon icon={faStarfighter} />,
  fields: [
    {
      name: 'name',
      title: 'Set Name',
      type: 'string',
      description:  'Name of the lego set'
    },
    {
      name: 'setId',
      title: 'Set ID',
      type: 'string',
      description:  'Lego set identifier'
    },
    {
      name: 'pieces',
      title: 'Number of pieces',
      type: 'string',
    },
    {
      name: 'yearReleased',
      title: 'Year Released',
      type: 'date',
      description:  'Year Released (YYYY)',
      options: {
        dateFormat: 'YYYY',
        calendarTodayLabel: 'Today'
      }
    },
    {
      name: 'themeId',
      title: 'Theme',
      type: 'reference',
      to: [{ type: 'theme' }],
    },
    {
      name: 'buildingInstructions',
      title: 'Building Instructions',
      type: 'string',
      description:  'URL to building instructions'
    },
    {
      name: 'imageUrl',
      title: 'Image Url',
      type: 'string',
      description:  'URL for an image'
    },
    {
      name: 'description',
      title: 'Set Description',
      type: 'string',
      description:  'Description of the lego set'
    },
    {
      name: 'brickSeparatorColorId',
      title: 'Brick Separator Color',
      type: 'reference',
      to: [{ type: 'brickSeparator' }],
    },
    {
      name: 'purchaseDate',
      title: 'Purchase Date',
      type: 'date',
      description:  'Purchase Date (MM-DD-YYYY)',
      options: {
        dateFormat: 'MM-DD-YYYY',
        calendarTodayLabel: 'Today'
      }
    },
    {
      name: 'purchasePrice',
      title: 'Purchase Price',
      type: 'number',
      description: 'Price of the lego set in cents',
      validation: (Rule) => Rule.min(1000).max(50000000),
      // inputComponent: PriceInput,
    },
    {
      name: 'purchaseLocationId',
      title: 'Purchase Location',
      type: 'reference',
      to: [{ type: 'purchaseLocation' }],
    },
    {
      name: 'isBuilt',
      title: 'Is the set built?',
      type: 'boolean',
      initialValue: false,
      options: {
        layout: 'checkbox',
      },
    },
    {
      name: 'hasLightKit',
      title: 'Does the set have a light kit?',
      type: 'boolean',
      initialValue: false,
      options: {
        layout: 'checkbox',
      },
    },
    {
      name: 'isPurchased',
      title: 'Has the set been purchased?',
      type: 'boolean',
      initialValue: false,
      options: {
        layout: 'checkbox',
      },
    },
    {
      name: 'isFreeGift',
      title: 'Was the set a free gift?',
      type: 'boolean',
      initialValue: false,
      options: {
        layout: 'checkbox',
      },
    },
  ]
}
