import * as types from '../constants/pieceActionTypes';

export function grabPiece(piece) {
  return { type: types.GRAB_PIECE, piece: piece };
}

export function placePiece(piece) {
  return { type: types.PLACE_PIECE, piece: piece };
}

export function cancelPiece() {
  return { type: types.CANCEL_PIECE };
}
