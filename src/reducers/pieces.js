'use strict';

import * as types from '../constants/pieceActionTypes';

export default function pieces(state = [], action) {
  switch(action.type) {
    case types.PLACE_PIECE:
      return [...state, action.piece];
    case types.CANCEL_PIECE:
    case types.GRAB_PIECE:
    default:
      return state;
  }
}
