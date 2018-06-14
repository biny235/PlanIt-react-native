import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import socket from './socket';
import logger from 'redux-logger';
import users from './users';
import plans from './plans';
import places from './places';
import friendsPlans from './friendsPlans';
import friends from './friends';
import recommendations from './recommendations';

const reducer = combineReducers({
  users,
  plans,
  places,
  friendsPlans,
  friends,
  recommendations
});

const store = createStore(
  reducer,
  applyMiddleware(thunk, logger)
);

export default store;
