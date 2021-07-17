import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    allSushi: []
  }

  componentDidMount() {
    fetch(API)
    .then(res => res.json())
    .then(data => {
      this.setState({
        allSushi: data
      })
    })
  }

  render() {
    return (
      <div className="app">
        <SushiContainer allSushi={this.state}/>
        <Table />
      </div>
    );
  }
}

export default App;
App.defaultProps = {
  
}
