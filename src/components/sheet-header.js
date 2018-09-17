import React, { Component } from 'react';
import './sheet-header.css'

class SheetHeader extends Component {
    render() {
        var columns = []

        for (var index = 0; index < this.props.columnCount; index++) {
            columns.push(<div key={index} className="sheetheader-column">{"P" + (index + 1)}</div>);
        }
        return (
            <div id="sheetheader">
                <div className="sheetheader-column first-column">Evidencia</div>
                {columns}
            </div>
        );
    }
}

export default SheetHeader;