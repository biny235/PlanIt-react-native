import call from './axiosFunc';
import { GET_FRIENDS_PLANS, NEW_BROADCAST, LOGOUT } from './constants';

export const fetchPlans = (id) => {
  return dispatch => {
    return call('get', `/api/user/${id}/plan`)
      .then(res => res.data)
      .then(plan => {
        dispatch({ type: GET_FRIENDS_PLANS, plan })
      })
      .catch(err => console.log("***fetchFriendsPlans Err:", err))
  }
}


const friendsPlansReducer = (state = [], action) => {
  switch (action.type) {
    case GET_FRIENDS_PLANS:
      return [...state, action.plan];
    case NEW_BROADCAST:
      return state.map(plan => plan.id === action.broadcast.id ? action.broadcast : plan)
    case LOGOUT:
      return [];
    default:
      return state;
  }
};


export default friendsPlansReducer;
