import call from './axiosFunc';
import { GET_FRIENDS, GET_DETAILS, ADD_FRIEND, LOGOUT } from './constants';
import { fetchPlans } from './friendsPlans'


export const fetchFriends = () => {
  return dispatch => {
    return call('get', '/api/user/friends')
      .then(res => res.data)
      .then(friends => {
        dispatch({type: GET_FRIENDS, friends});
        friends.forEach(friend => {
          dispatch(fetchPlans(friend.id))
          dispatch(fetchFriendDetails(friend.id))
        })
      })
      .catch(err => console.log("***fetchFriends Err:", err))
  }
}

export const addFriend = (email) => {
  return dispatch => {
    return call('post', '/api/user/friends', { email })
      .then(res => res.data)
      .then(friend => {
        dispatch({type: ADD_FRIEND, friend})
        dispatch(fetchFriendDetails(friend.id))
        dispatch(fetchPlans(friend.id))
      })
      .catch(err => console.log(err))
  }
}

export const fetchFriendDetails = (id) =>{
  return dispatch => {
    return call('get', `/api/user/${id}`)
      .then(res => res.data)
      .then(friend => dispatch({type: GET_DETAILS, friend}))
  }
}

const friends = (state = [], action) => {
  switch (action.type) {
    case GET_FRIENDS:
      return action.friends;
    case ADD_FRIEND:
      return [...state, action.friend]
    case GET_DETAILS:
      return state.map(friend => friend.id === action.friend.id ? action.friend : friend )
    case LOGOUT:
      return []
    default:
      return state;
  }
};


export default friends;
