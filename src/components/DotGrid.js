'use strict';

var React = require('react/addons');

var DotGrid = React.createClass({
  render: function() {
    return (
      <g>
        <defs>
          <pattern
            id="dotGrid"
            width="1"
            height="1"
            x="0.5"
            y="0.5"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="0.5" cy="0.5" r="0.1" fill="black"/>
          </pattern>
        </defs>
        <rect
          x="0.5"
          y="0.5"
          fill="url(#dotGrid)"
          style={{height: 'calc(100% - 1px)', width: 'calc(100% - 1px)'}}
        />
      </g>
    )
  }
});

module.exports = DotGrid;
