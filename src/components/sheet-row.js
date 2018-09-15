import React, { Component } from 'react';
import SheetCell from './sheet-cell'
import './sheet-row.css'

class SheetRow extends Component {
    render() {
        var columns = [];

        for (var index = 0; index < this.props.columnCount; index++) {
            columns.push(<SheetCell key={index} iconSet={this.props.iconSet}></SheetCell>);
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