import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './Menu';

class App extends Component {
  render() {
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Aaron Schriever</h1>
          <h2>Portfolio</h2>
          <Menu />
        </header>
        
      </div>
    );
  }
}

export default App;
