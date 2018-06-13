import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import users from './users';
import plans from './plans';
import places from './places';
import friendsPlans from './friendsPlans';
import friends from './friends';
import recommendations from './recommendations';
import socket from './socket'

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
  applyMiddleware(thunk)
);

export default store;
