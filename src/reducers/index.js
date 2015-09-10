import { combineReducers } from 'redux';

import pendingPiece from './pendingPiece';
import pieces from './pieces';

const rootReducer = combineReducers({
  pendingPiece,
  pieces
});

export default rootReducer;
