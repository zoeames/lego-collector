import React from 'react';
import './LegoCard.scss';

import BigCard from '../BigCard/BigCard';

class LegoCard extends React.Component {
  render() {
    const {
      set,
      openBigCard,
      selectedSet,
      closeBigCard,
    } = this.props;
    return (
      <div className={`LegoCard col mt-4 ${set.id === selectedSet.id ? 'active' : ''}`} onClick={() => openBigCard(set.id)}>
        <div className="card">
          <img alt={`Build of ${set.name}`} src={set.imageUrl} />
          <div className="card-img-overlay">
            <h2 className="title">{set.name}</h2>
          </div>
        </div>
        {
          set.id === selectedSet.id
            ? <BigCard set={selectedSet} closeBigCard={closeBigCard}/>
            : ''
        }
      </div>
    );
  }
}

export default LegoCard;
