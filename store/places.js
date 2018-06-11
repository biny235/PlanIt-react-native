import call from './axiosFunc';
import { GET_PLACES, CREATE_PLACE, DELETE_PLACE } from './constants';

export const fetchPlaces = () => {
  return (dispatch) => {
    return call('get', '/api/places')
      .then(res => res.data)
      .then(places => {
        dispatch({ type: GET_PLACES, places });
      })
      .catch(err => alert(err));
  };
};

export const createPlace = (place) => {
  return (dispatch) => {
    return call('post', '/:planId/user/:userId/recommend', place)
      .then(res => res.data)
      .then(place => dispatch({ type: CREATE_PLACE, place }))
      .catch(err => alert(err));
  };
};

export const deletePlace = (place) => {
  return (dispatch) => {
    return call('delete', `/api/places/${place.id}`)
      .then(() => dispatch({ type: DELETE_PLACE, place }))
      .catch(err => alert(err));
  };
};

const placeReducer = (state = [], action) => {
  switch (action.type) {
    case GET_PLACES:
      return action.places;
    case CREATE_PLACE:
      return [...state, action.place];
    case DELETE_PLACE:
      return state.filter(place => place.id !== action.place.id);
    default:
      return state;
  }
};

export default placeReducer;
