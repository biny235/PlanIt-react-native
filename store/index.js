import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import socket from './socket';
import logger from 'redux-logger';
import users from './users';
import planReducer from './plans';
import places from './places';
import friendsPlans from './friendsPlans';
import friends from './friends';
import recommendations from './recommendations';
import { NEW_BROADCAST, NEW_RECOMMENDATION } from './constants';

const reducer = combineReducers({
  users,
  plans: planReducer,
  places,
  friendsPlans,
  friends,
  recommendations
});

const store = createStore(
  reducer,
  applyMiddleware(thunk, logger)
);

socket.on('newBroadcast', broadcast => {
  store.dispatch({ type: NEW_BROADCAST, broadcast});
});

socket.on('newRecommendation', recommendation => {
  store.dispatch({ type: NEW_RECOMMENDATION, recommendation });
});

export default store;
