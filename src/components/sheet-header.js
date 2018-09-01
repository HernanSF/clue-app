import React, { Component } from 'react';
import './sheet-header.css'

class SheetHeader extends Component {
    render() {
        return (
            <div id="sheetheader">
                <div id="first-column">Evidencia</div>
                <div>PR1</div>
                <div>PR2</div>
                <div>PR3</div>
                <div>PR4</div>
                <div>PR5</div>
            </div>
        );
    }
}

export default SheetHeader;