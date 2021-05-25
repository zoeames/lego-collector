import React from 'react';
import './App.scss';

import LegoCardContainer from '../containers/LegoCardContainer/LegoCardContainer';
import setData from '../helpers/data/setData';

class App extends React.Component {
  state = {
    sets: [],
    filteredSets: [],
    selectedSet: '',
  }

  componentDidMount() {
    setData.getSets()
      .then((sets) => this.setState({ sets, filteredSets: sets }))
      .catch((err) => console.error('error getting sets: ', err));
  }

  openBigCard = (id) => {
    this.setState({ selectedSet: id });
  }

  closeBigCard = (e) => {
    e.stopPropagation();
    this.setState({ selectedSet: '' });
  }

  render() {
    const { filteredSets, selectedSet } = this.state;
    return (
      <div className="App">
        <div className="container">
          <h1>LEGO SETS</h1>
          <LegoCardContainer sets={filteredSets} selectedSet={selectedSet} openBigCard={this.openBigCard} closeBigCard={this.closeBigCard}/>
        </div>
      </div>
    );
  }
}

export default App;
