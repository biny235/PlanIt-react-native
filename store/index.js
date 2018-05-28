import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import users from './users';

const reducer = combineReducers({
  //auth,
  users,
  // plans,
  // places,
  // groups,
});

const store = createStore(
  reducer,
  applyMiddleware(thunk, logger)
)

export default store
