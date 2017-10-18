import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const projectArray = [{title: 'Random Quote Generator', link: 'https://codepen.io/Arnoo/pen/dpZvpA', caption: 'quote generator - part of the Free Code Camp curriculum'},
{title: 'Twitch TV Viewer', link: 'https://codepen.io/Arnoo/pen/zZvKyL', captioon: 'list view of Twitch casters pulling data from the Twitch API - part of the Free Code Camp curriculum'} ]
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Aaron Schriever</h1>
          <h2>Portfolio</h2>
        </header>
        
      </div>
    );
  }
}

export default App;
