import React from 'react';
import './BigCard.scss';

class BigCard extends React.Component {
  render() {
    const { set, closeBigCard } = this.props;
    return (
      set.name
        ? (
          <div className="BigCard col-12">
            <button className="btn btn-outline-dark close-btn" aria-label="close the card" onClick={() => closeBigCard()}><i class="far fa-times-circle"></i></button>
            <div className="row">
              <div className="col-12 col-md-4">
                <p>{set.setId}</p>
                <p>{set.yearReleased}</p>
                <p>Theme: {set.themeId}</p>
              </div>
              <div className="col-12 col-md-8">
                <h2>{set.name}</h2>
                <p>{set.description}</p>
              </div>
            </div>
          </div>
        )
        : ''
    );
  }
}

export default BigCard;
