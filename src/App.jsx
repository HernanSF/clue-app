import React, { Component } from 'react';
import './App.css';
import background from './imagenes/background.jpg';
import Sheet from './components/sheet';
import BackgroundImage from 'react-background-image-loader';

const chars = ['Col. Mustard', 'Miss Scarlet', 'Mrs. White', 'Mrs. Peacock', 'Mr. Green', 'Professor Plum']
const weaps = ['Candlestick', 'Revolver', 'Wrench', 'Lead Pipe', 'Knife', 'Rope']
const scenes = ['Library', 'Conservatory', 'Hall', 'Ballroom', 'Dining Room', 'Lounge', 'Billiard Room', 'Kitchen', 'Study']
const iconSet = [{ icon:'', color: ''}, { icon: 'N', color: 'red'}, { icon: 'S', color: 'green'}, { icon: 'Q1', color: 'yellow'}, { icon: 'Q2', color: 'yellow'}, { icon: 'Q3', color: 'yellow'}, { icon: 'Q4', color: 'yellow'} ]

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


