import React from 'react';
import './App.scss';

import LegoCardContainer from '../containers/LegoCardContainer/LegoCardContainer';
import setData from '../helpers/data/setData';

class App extends React.Component {
  state = {
    sets: [],
  }

  componentDidMount() {
    setData.getSets()
      .then((sets) => this.setState({ sets }))
      .catch((err) => console.error('error getting sets: ', err));
  }

  render() {
    const { sets } = this.state;
    return (
      <div className="App">
        <div className="container">
          <LegoCardContainer sets={sets}/>
        </div>
      </div>
    );
  }
}

export default App;
