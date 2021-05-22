import React from 'react';
import './LegoCard.scss';

class LegoCard extends React.Component {
  render() {
    const { set } = this.props;
    return (
      <div className="LegoCard col mt-4">
        <div className="card">
          <img alt={`Build of ${set.name}`} src={set.imageUrl} />
          <div className="card-img-overlay">
            <h2 className="title">{set.name}</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default LegoCard;
