import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import BasicButton from './buttons/BasicButton';
import DialBox from './dials/DialBox';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>This will be a place for cool UI stuff</p>
          <BasicButton />
          <DialBox />
        </header>
      </div>
    );
  }
}

export default App;
