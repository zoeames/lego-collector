import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTypewriter } from '@fortawesome/pro-solid-svg-icons';

export default {
  name: 'theme',
  title: 'Themes',
  type: 'document',
  icon: () => <FontAwesomeIcon icon={faTypewriter} />,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      description:  'Theme Name'
    },
  ]
}
