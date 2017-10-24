import React, { Component } from 'react';
import './App.css';
import Menu from './Menu';

class App extends Component {
  render() {
    
    return (
      <div className="App">
        <header className="App-header">
          
          <h1 className="App-title">Aaron Schriever</h1>
          <h2>Portfolio</h2>
          
        </header>
        <main>
        <Menu />
        </main>
        
        
      </div>
    );
  }
}

export default App;
