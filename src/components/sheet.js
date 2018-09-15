import React, { Component } from 'react';
import SheetHeader from './sheet-header'
import SheetRow from './sheet-row'
import SheetSeparator from './sheet-separator'
import './sheet.css'

class Sheet extends Component {
  render() {
    return (
      <div id="sheet">
        <SheetHeader columnCount={this.props.columns}></SheetHeader>
        <SheetSeparator text="Sospechosos"></SheetSeparator>
        {this.props.characters.map(char => <SheetRow key={char} columnCount={this.props.columns} text={char} iconSet={this.props.iconSet}></SheetRow>)}
        <SheetSeparator text="Arma Homicida"></SheetSeparator>
        {this.props.weapons.map(weaps => <SheetRow key={weaps} columnCount={this.props.columns} text={weaps} iconSet={this.props.iconSet}></SheetRow>)}
        <SheetSeparator text="Escena del crimen"></SheetSeparator>
        {this.props.murderScenes.map(scenes => <SheetRow key={scenes} columnCount={this.props.columns} text={scenes} iconSet={this.props.iconSet}></SheetRow>)}
      </div>
    );
  }
}

export default Sheet;