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

const reducer = combineReducers({
  users,
  plans: planReducer,
  places,
  friendsPlans,
  friends,
  recommendations
});

socket.on('newBroadcast', broadcast => {
  console.log(broadcast)
  store.dispatch({ type: NEW_BROADCAST, broadcast})
})
socket.on('newRecommendation', recommendation => {
  console.log(recommendation)
  store.dispatch({ type: NEW_RECOMMENDATION, recommendation })
})

const store = createStore(
  reducer,
  applyMiddleware(thunk, logger)
);

export default store;
