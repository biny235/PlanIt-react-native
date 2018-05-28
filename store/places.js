// import axios from 'axios';
// import { GET_PLACES, CREATE_PLACE, UPDATE_PLACE, DELETE_PLACE } from './constants';

// export const fetchPlaces = () => {
//   return (dispatch) => {
//     return axios.get('https://fwiwh.herokuapp.com/api/places')
//       .then(res => res.data)
//       .then(places => {
//         dispatch({ type: GET_PLACES, places })
//       })
//       .catch(err => alert(err));
//   }
// }

// export const createPlace = (place) => {
//   return (dispatch) => {
//     return axios.put('https://fwiwh.herokuapp.com/api/places', place)
//       .then(res => res.data)
//       .then(place => dispatch({ type: CREATE_PLACE, place }))
//       .catch(err => alert(err));
//   };
// };

// export const updatePlace = (place) => {
//   return (dispatch) => {
//     return axios.put(`https://fwiwh.herokuapp.com/api/places/${place.id}`, place)
//       .then(res => res.data)
//       .then(place => dispatch({ type: UPDATE_PLACE, place }))
//       .catch(err => alert(err));
//   };
// };

// export const deletePlace = (place) => {
//   return (dispatch) => {
//     return axios.delete(`https://fwiwh.herokuapp.com/api/places/${place.id}`)
//       .then(() => dispatch({ type: DELETE_PLACE, place }))
//       .catch(err => alert(err));
//   };
// };

// const placeReducer = (state = [], action) => {
//   switch (action.type) {
//     case GET_PLACES:
//       return action.places
//     case CREATE_PLACE:
//       return [...state, action.place];
//     case UPDATE_PLACE:
//       return state.map(place => place.id === action.place.id ? action.place : place);
//     case DELETE_PLACE:
//       return state.filter(place => place.id !== action.place.id);
//     default:
//       return state;
//   }
// };

// export default placeReducer;
