'use strict';

var React = require('react/addons');

var Koan = React.createClass({
  points: function() {
    const { x: midX, y: midY, length, width, rotation } = this.props;
    const rotationRad = ((rotation + 180) * Math.PI) / 180;
    const splitRad = Math.atan((width / 2.0) / length);
    const edge = Math.sqrt(Math.pow(length, 2) + Math.pow(width / 2, 2));

    const x = midX - Math.sin(Math.PI * 2 - rotationRad) * length / 2;
    const y = midY + Math.cos(Math.PI * 2 - rotationRad) * length / 2;

    return {
      tip: { x, y },
      left: { x: x + Math.sin(Math.PI * 2 - rotationRad + splitRad) * edge, y: y - Math.cos(Math.PI * 2 - rotationRad + splitRad) * edge },
      right: { x: x + Math.sin(Math.PI * 2 - rotationRad - splitRad) * edge, y: y - Math.cos(Math.PI * 2 - rotationRad - splitRad) * edge },
      base: { x: x + Math.sin(Math.PI * 2 - rotationRad) * length, y: y - Math.cos(Math.PI * 2 - rotationRad) * length }
    }
  },
  render: function() {
    const { tip, left, right, base } = this.points();
    const polygonPoints = `${tip.x},${tip.y} ${left.x},${left.y} ${right.x},${right.y}`;

    return (
      <g>
        <line
          x1={tip.x}
          y1={tip.y}
          x2={left.x}
          y2={left.y}
          stroke="red"
          strokeWidth=".5"
          strokeLinecap="round"
        />
        <line
          x1={tip.x}
          y1={tip.y}
          x2={right.x}
          y2={right.y}
          stroke="blue"
          strokeWidth=".5"
          strokeLinecap="round"
        />
        <line
          x1={tip.x}
          y1={tip.y}
          x2={base.x}
          y2={base.y}
          stroke="black"
          strokeWidth=".5"
          strokeLinecap="round"
        />
        <polygon points={polygonPoints} onClick={this.props.onClick} opacity="0"/>
      </g>
    )
  }
});

module.exports = Koan;
