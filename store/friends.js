import call from './axiosFunc';
import { AsyncStorage } from 'react-native';
import { GET_FRIENDS, LOGOUT } from './constants';
import { fetchPlans } from './friendsPlans'


export const fetchFriends = () => {
  return dispatch => {
    return call('get', '/api/user/friends')
      .then(res => res.data)
      .then(friends => {
        dispatch({type: GET_FRIENDS, friends});
        friends.forEach(friend => {
          dispatch(fetchPlans(friend.id))
        })
      })
      .catch(err => console.log("***fetchFriends Err:", err))
  }
}

const friends = (state = [], action) => {
  switch (action.type) {
    case GET_FRIENDS:
      return action.friends;
    case LOGOUT:
      return []
    default:
      return state;
  }
};


export default friends;
