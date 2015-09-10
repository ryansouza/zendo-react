'use strict';

var React = require('react/addons');

import DotGrid from './DotGrid';
import Koan from './Koan';

var KoanToolbox = React.createClass({
  render: function() {
    const { width, height, cols, rows, grabPiece } = this.props;
    const x = 5;

    var pieces = [
      { x, y: 3, piece: {length: 3, width: 2.4, rotation: 0, color: 'red' }},
      { x, y: 7, piece: {length: 5, width: 4, rotation: 90, color: 'red' }},
      { x, y: 13, piece: {length: 7, width: 5.6, rotation: 45, color: 'red' }}
    ];

    return (
      <svg
        width={width}
        height={height}
        viewBox={'0 0 ' + cols + ' ' + rows}
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <DotGrid/>
        { pieces.map( p => (<Koan {...p} {...p.piece} onClick={ function() { grabPiece(p.piece) } } />)) }
    </svg>
    )
  }
});

module.exports = KoanToolbox;
