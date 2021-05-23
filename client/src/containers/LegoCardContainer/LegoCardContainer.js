import React from 'react';
import PropTypes from 'prop-types';
import './LegoCardContainer.scss';

import LegoCard from '../../components/LegoCard/LegoCard';

class LegoCardContainer extends React.Component {
  static propTypes = {
    sets: PropTypes.array.isRequired,
    openBigCard: PropTypes.func.isRequired,
    selectedSet: PropTypes.object.isRequired,
    closeBigCard: PropTypes.func.isRequired,
  }

  render() {
    const {
      sets,
      openBigCard,
      selectedSet,
      closeBigCard,
    } = this.props;
    return (
      <div className="LegoCardContainer">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 g-4">
            {sets.map((set) => <LegoCard key={set.id} set={set} openBigCard={openBigCard} selectedSet={selectedSet} closeBigCard={closeBigCard}/>)}
        </div>
      </div>
    );
  }
}

export default LegoCardContainer;
