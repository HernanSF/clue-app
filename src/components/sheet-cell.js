import React, { Component } from 'react'
import './sheet-cell.css'

class SheetCell extends Component {
    constructor(props) {
        super(props);
        this.state = { icon: 0, iconSet: props.iconSet };
    }

    changeState() {
        var nextIndex = this.state.icon + 1 >= this.state.iconSet.length ? 0 : this.state.icon + 1;
        this.setState({ icon: nextIndex });
    }

    render() {
        return (
            <div className="sheet-column" onClick={() => this.changeState()} style={{ backgroundColor: this.state.iconSet[this.state.icon].color }}>{this.state.iconSet[this.state.icon].icon}</div>
        )
    }
}
export default SheetCell;   