import React, { Component } from 'react';
import './sheet-separator.css'

class SheetSeparator extends Component {
    render() {
        return (
            <div className="sheetseparator">
                <div id="first-separator">{this.props.text}</div>
            </div>);
    }
}
export default SheetSeparator