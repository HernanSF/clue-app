import React, { Component } from 'react';
import './App.css';

import Sheet from './components/sheet';

const chars = ['Col. Mustard', 'Miss Scarlet']
const weaps = ['Knife', 'Rope']
const scenes = ['Kitchen', 'Study']
const iconSet = [{ icon:'', color: 'white'}, { icon: 'N', color: 'red'}, { icon: 'S', color: 'green'}]

class App extends Component {
  render() {
    return (
      <div id="app">
        <Sheet columns="5" characters={chars} weapons={weaps} murderScenes={scenes} iconSet={iconSet}></Sheet>
      </div>
    );
  }
}

export default App;


