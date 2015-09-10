'use strict';

var React = require('react/addons');

import DotGrid from './DotGrid';
import Koan from './Koan';

var ZendoSVG = React.createClass({
  getInitialState: function() {
    return {
      mouseX: 0,
      mouseY: 0,
      mouseOver: false,
      mouseDragging: false
    };
  },
  _mouseMoving: function(e) {
    this.setState({
      mouseOver: true,
      mouseX: Math.round((e.nativeEvent.offsetX / this.props.width) * this.props.cols),
      mouseY: Math.round((e.nativeEvent.offsetY / this.props.height) * this.props.rows)
    });
  },
  _mouseOut: function() {
    this.setState({
      mouseOver: false
    });
  },
  _mouseClick: function(e) {
    if (this.props.pendingPiece && this.state.mouseOver) {
      this.props.placePiece(Object.assign({}, this.props.pendingPiece, {x: this.state.mouseX, y: this.state.mouseY}));
    }
  },
  render: function() {
    var hover = null;

    if (this.state.mouseOver) {
      if (this.props.pendingPiece) {
        hover = (
          <Koan {...this.props.pendingPiece} x={this.state.mouseX} y={this.state.mouseY} />
        );
      } else {
        hover = (
          <circle
            cx={this.state.mouseX}
            cy={this.state.mouseY}
            r="0.5"
            fill="red"
          />
        );
      }
    }

    return (
      <svg
        width={this.props.width}
        height={this.props.height}
        viewBox={'0 0 ' + this.props.cols + ' ' + this.props.rows}
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        onMouseMove={this._mouseMoving}
        onMouseEnter={this._mouseMoving}
        onMouseLeave={this._mouseOut}
        onClick={this._mouseClick}
      >
        <DotGrid />
        { hover }
        { this.props.pieces.map(p => (<Koan {...p} />)) }
      </svg>
    );
  }
});

module.exports = ZendoSVG;
