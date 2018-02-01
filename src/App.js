import React, { Component } from 'react';
import './App.css';
import Menu from './Menu';
import 'font-awesome/css/font-awesome.css';
class App extends Component {
  render() {
    
    return (
      <div className="App">
        <header className="App-header">         
          <h1 className="App-title">Aaron Schriever</h1>
          <h1>Portfolio</h1>
          <div className="Icons">
        <div className="Icon-link"> 
          <a href="https://github.com/aaronschriever"><i className="fa fa-3x fa-github" aria-hidden="true"/></a>
        </div>
        <div className="Icon-Link">
          <a href="https://codepen.io/Arnoo/"><i className="fa fa-3x fa-codepen" aria-hidden="true"></i></a>
        </div>
        </div>
          </header>
        <main>
        <Menu />
        </main>
        
        
      </div>
    );
  }
}

export default App;
