import React from 'react';
import './BigCard.scss';

class BigCard extends React.Component {
  render() {
    const { set } = this.props;
    return (
      <div className="BigCard col">
        <h2>{set.name}</h2>
      </div>
    );
  }
}

export default BigCard;
