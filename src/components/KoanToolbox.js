'use strict';

var React = require('react/addons');

import DotGrid from './DotGrid';
import Koan from './Koan';

var KoanToolbox = React.createClass({
  _changeRotation: function(by) {
    return () => { this.setState({rotation: this.state.rotation + by}) }
  },
  _changeColor: function(color) {
    return () => { this.setState({color: color}) }
  },

  getInitialState: function() {
    return { rotation: 0, color: 'red' }
  },
  render: function() {
    const { width, height, cols, rows, grabPiece } = this.props;
    const { rotation, color } = this.state;

    const small = { length: 3, width: 2, rotation, color };
    const medium = { length: 5, width: 3.5, rotation, color };
    const large = { length: 7, width: 5, rotation, color };

    const x = 5;

    return (
      <svg
        width={width}
        height={height}
        viewBox={'0 0 ' + cols + ' ' + rows}
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <DotGrid/>
        <Koan x={x} y={3} {... small} onClick={ function() { grabPiece(small) } } />
        <Koan x={x} y={8} {... medium} onClick={ function() { grabPiece(medium) } } />
        <Koan x={x} y={15} {... large} onClick={ function() { grabPiece(large) } } />

        <rect x="2" y="20" width="2" height="2" onClick={this._changeRotation(10)} />
        <rect x="6" y="20" width="2" height="2" onClick={this._changeRotation(-10)} />

        <rect x="1" y="23" width="2" height="2" fill="red" onClick={this._changeColor("red")} />
        <rect x="4" y="23" width="2" height="2" fill="green" onClick={this._changeColor("green")} />
        <rect x="7" y="23" width="2" height="2" fill="blue" onClick={this._changeColor("blue")} />
    </svg>
    )
  }
});

module.exports = KoanToolbox;
