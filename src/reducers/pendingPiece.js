'use strict';

import * as types from '../constants/pieceActionTypes';

export default function pendingPiece(state = { length: 2.5, width: 2, rotation: 0, color: 'red' }, action) {
  switch(action.type) {
    case types.GRAB_PIECE:
      return action.piece;
    case types.PLACE_PIECE:
    case types.CANCEL_PIECE:
      return null;
    default:
      return state;
  }
}
