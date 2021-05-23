import React from 'react';
import './App.scss';

import LegoCardContainer from '../containers/LegoCardContainer/LegoCardContainer';
import setData from '../helpers/data/setData';

class App extends React.Component {
  state = {
    sets: [],
    filteredSets: [],
    selectedSet: {},
  }

  componentDidMount() {
    setData.getSets()
      .then((sets) => this.setState({ sets, filteredSets: sets }))
      .catch((err) => console.error('error getting sets: ', err));
  }

  openBigCard = (id) => {
    const { filteredSets } = this.state;
    const findIt = filteredSets.find((x) => x.id === id);
    this.setState({ selectedSet: findIt });
  }

  closeBigCard = () => {
    console.log('WTF');
    this.setState({ selectedSet: {} });
  }

  render() {
    const { filteredSets, selectedSet } = this.state;
    return (
      <div className="App">
        <div className="container">
          <h1>LEGO SETS</h1>
          <LegoCardContainer sets={filteredSets} openBigCard={this.openBigCard} selectedSet={selectedSet} closeBigCard={this.closeBigCard}/>
        </div>
      </div>
    );
  }
}

export default App;
