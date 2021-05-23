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
    }
  ]
}