import call from './axiosFunc';
import { ADD_RECOMMENDATION } from './constants';

// Action Creators
const addRecommendation = place => ({ type: ADD_RECOMMENDATION, place });

// Thunks
export const addRecommendationToStore = place => async dispatch => {
  try {
    const res = await call('post', '/:planId/user/:userId/recommend', place);
    const placeData = await res.data;
    dispatch(addRecommendation(placeData));
  } catch (error) {
    console.warn(error);
  }
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
