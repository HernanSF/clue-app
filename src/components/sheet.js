import React, { Component } from 'react';
import SheetHeader from './sheet-header'  
import SheetRow from './sheet-row'  
import './sheet.css'

class Sheet extends Component {
  render() {
    return (
      <div id="sheet">
       <SheetHeader></SheetHeader>
       <div className="sheet-separator">Sospechosos</div>
       <SheetRow></SheetRow>
       <div className="sheet-separator">Arma Homicida</div>
       <SheetRow></SheetRow>
       <div className="sheet-separator">Escena del Crimen</div>
       <SheetRow></SheetRow>
       </div>
    );
  }
}

export default Sheet;