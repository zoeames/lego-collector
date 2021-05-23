import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocation } from '@fortawesome/pro-solid-svg-icons';

export default {
  name: 'purchaseLocation',
  title: 'Purchase Locations',
  type: 'document',
  icon: () => <FontAwesomeIcon icon={faLocation} />,
  fields: [
    {
      name: 'name',
      title: 'Location Name',
      type: 'string',
    },
    {
      name: 'address',
      title: 'Location Address',
      type: 'string',
    },
  ]
}
