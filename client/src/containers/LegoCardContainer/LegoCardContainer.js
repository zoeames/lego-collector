import React from 'react';
import './LegoCardContainer.scss';

import LegoCard from '../../components/LegoCard/LegoCard';

class LegoCardContainer extends React.Component {
  render() {
    const { sets, openBigCard } = this.props;
    return (
      <div className="LegoCardContainer">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
            {sets.map((set) => <LegoCard key={set.id} set={set} openBigCard={openBigCard}/>)}
        </div>
      </div>
    );
  }
}

export default LegoCardContainer;
