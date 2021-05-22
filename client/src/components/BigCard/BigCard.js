import React from 'react';
import './BigCard.scss';

class BigCard extends React.Component {
  render() {
    const { set, closeBigCard } = this.props;
    return (
      set.name
        ? (
          <div className="BigCard col">
            <button className="btn btn-outline-dark" aria-label="close the card" onClick={() => closeBigCard()}><i class="far fa-times-circle"></i></button>
            <h2>{set.name}</h2>
          </div>
        )
        : ''
    );
  }
}

export default BigCard;
