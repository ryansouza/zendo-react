'use strict';

var React = require('react/addons');

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// CSS
require('normalize.css');
require('../styles/main.css');

import ZendoSVG from './ZendoSVG';
import KoanToolbox from './KoanToolbox';

import * as PieceActions from '../actions/pieces';

var ReactZendoApp = React.createClass({
  render: function() {
    const { pieces, pendingPiece, dispatch } = this.props;
    const actions = bindActionCreators(PieceActions, dispatch)

    return (
      <div className="main">
        <ZendoSVG pieces={pieces} pendingPiece={pendingPiece} placePiece={actions.placePiece} cancelPiece={actions.cancelPiece} cols="50" rows="25" width="500" height="250" />
        <KoanToolbox grabPiece={actions.grabPiece} cols="10" rows="25" width="100" height="250"/>
      </div>
    );
  }
});

function mapStateToProps(state) {
  return {
    pendingPiece: state.pendingPiece,
    pieces: state.pieces
  }
}

module.exports = connect(mapStateToProps)(ReactZendoApp);
