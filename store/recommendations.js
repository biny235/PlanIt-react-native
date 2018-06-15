import call from './axiosFunc';
import { ADD_RECOMMENDATION } from './constants';
import  { newRecommendation } from './socket';


// Thunks
export const addRecommendationToStore = (place, userId, planId) => {
  return dispatch => {
    return call('post', `/api/user/plan/${planId}/user/${userId}/recommend`, place)
    .then( res => res.data)
    .then(recommendation => {
      newRecommendation(recommendation);
      dispatch({type: ADD_RECOMMENDATION, recommendation});
    })
    .catch(err => console.log('***addRecommend Err:', err));
  };
};

const recommendationReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_RECOMMENDATION:
      return [...state, action.place];
    default:
      return state;
  }
};

export default recommendationReducer;
