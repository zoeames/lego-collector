import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaintBrush } from '@fortawesome/pro-solid-svg-icons';

export default {
  name: 'brickSeparator',
  title: 'Brick Separators',
  type: 'document',
  icon: () => <FontAwesomeIcon icon={faPaintBrush} />,
  fields: [
    {
      name: 'name',
      title: 'Separator Name',
      type: 'string',
      description:  'Name of brick separator'
    },
    {
      name: 'color',
      title: 'Separator Color',
      type: 'string',
      description:  'Color of the brick separator - HEX value with #'
    },
    {
      name: 'imageUrl',
      title: 'Image Url',
      type: 'string',
      description:  'URL for an image'
    },
  ]
}
