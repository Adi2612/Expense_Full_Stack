import React, { Component } from 'react';
import Edetails from './Edetails';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="navBar" >
            <h1 style={{ color : 'white' }}>  Expenses </h1>
        </div>
        <Edetails />
      </div>
    );
  }
}

export default App;
