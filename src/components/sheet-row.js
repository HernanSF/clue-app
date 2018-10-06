import React, { Component } from 'react';
import SheetCell from './sheet-cell'
import './sheet-row.css'

class SheetRow extends Component {

    cellClicked(icon, cell) {
        this.props.onRowTocada(icon, cell, this.props.rowNumber);
    }

    render() {
        var columns = [];

        for (var index = 0; index < this.props.columnCount; index++) {
            columns.push(<SheetCell onTocado={(icon, cell) => this.cellClicked(icon, cell)} key={index} colNumber={index} iconSet={this.props.iconSet}></SheetCell>);
        }

        return (
            <div id="sheetrow">
                <div className="sheet-column" id="first-column">{this.props.text}</div>
                {columns}
            </div>
        );
    }
}

export default SheetRow;