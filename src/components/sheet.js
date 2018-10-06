import React, { Component } from "react";
import SheetHeader from "./sheet-header";
import SheetRow from "./sheet-row";
import SheetSeparator from "./sheet-separator";
import "./sheet.css";

class Sheet extends Component {
  constructor(props) {
    super(props);

    var matrix = [];
    for (var row = 0; row < this.props.characters.length + this.props.weapons.length + this.props.murderScenes.length; row++) {
      matrix[row] = [];
      for (var column = 0; column < 5; column++) {
        matrix[row][column] = 0;
      }
    }

    this.state = { matrix: matrix };
  }

  onRowTocada(icon, cell, row) {
    var matrix = this.state.matrix;

    matrix[row][cell] = icon;
    this.setState({ matrix: matrix });
    console.log(matrix);
  }

  render() {
    return (
      <div id="sheet">
        <SheetHeader columnCount={this.props.columns} />
        <SheetSeparator id="first" text="Sospechosos" />
        {this.props.characters.map(char => (
          <SheetRow
            onRowTocada={(icon, cell) => this.onRowTocada(icon, cell, this.props.characters.indexOf(char) )}
            key={char}
            columnCount={this.props.columns}
            text={char}
            iconSet={this.props.iconSet}
          />
        ))}
        <SheetSeparator text="Arma Homicida" />
        {this.props.weapons.map(weaps => (
          <SheetRow
            key={weaps}
            onRowTocada={(icon, cell) => this.onRowTocada(icon, cell, this.props.characters.length + this.props.weapons.indexOf(weaps) )}
            columnCount={this.props.columns}
            text={weaps}
            iconSet={this.props.iconSet}
          />
        ))}
        <SheetSeparator text="Escena del crimen" />
        {this.props.murderScenes.map(scenes => (
          <SheetRow
            key={scenes}
            onRowTocada={(icon, cell) => this.onRowTocada(icon, cell, this.props.characters.length + this.props.weapons.length + this.props.murderScenes.indexOf(scenes) )}
            columnCount={this.props.columns}
            text={scenes}
            iconSet={this.props.iconSet}
          />
        ))}
      </div>
    );
  }
}

export default Sheet;
