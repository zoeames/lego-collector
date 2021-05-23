import React from 'react';
import './App.scss';

import LegoCardContainer from '../containers/LegoCardContainer/LegoCardContainer';
import setData from '../helpers/data/setData';

class App extends React.Component {
  state = {
    sets: [],
    selectedSets: [],
    selectedSet: {},
  }

  componentDidMount() {
    setData.getSets()
      .then((sets) => this.setState({ sets, selectedSets: sets }))
      .catch((err) => console.error('error getting sets: ', err));
  }

  openBigCard = (id) => {
    const { selectedSets } = this.state;
    const findIt = selectedSets.find((x) => x.id === id);
    this.setState({ selectedSet: findIt });
  }

  closeBigCard = () => {
    this.setState({ selectedSet: {} });
  }

  render() {
    const { selectedSets, selectedSet } = this.state;
    return (
      <div className="App">
        <div className="container">
          <h1>LEGO SETS</h1>
          <LegoCardContainer sets={selectedSets} openBigCard={this.openBigCard} selectedSet={selectedSet} closeBigCard={this.closeBigCard}/>
        </div>
      </div>
    );
  }
}

export default App;
