import call from './axiosFunc';
import { AsyncStorage } from 'react-native';
import { GET_USER, CREATE_USER, UPDATE_USER, DELETE_USER, LOGOUT } from './constants';
import { fetchFriends } from './friends';

export const fetchUser = () => {
  return (dispatch) => {
    return call('get', '/api/user')
      .then(res => res.data)
      .then(user => {
        dispatch({ type: GET_USER, user });
        dispatch(fetchFriends());
      })
      .catch(err => alert(err));
  };
};

export const authenticate = (credentials) => {
  return (dispatch) => {
    return call('post', '/auth', credentials)
      .then(res => res.data)
      .then(token => {
        AsyncStorage.setItem('token', token);
        return token;
      });
  };
};

export const register = (credentials) => {
  return dispatch => {
    return call('post', '/api/user/signup', credentials)
      .then(res => res.data)
      .then(token => {
        AsyncStorage.setItem('token', token);
        return token;
      });
  };
};

export const logout = () => {
  return (dispatch) => {
    AsyncStorage.removeItem('token');
    dispatch({ type: LOGOUT });
  };
};

export const createUser = (user) => {
  return (dispatch) => {
    return call('post', '/api/user', user)
      .then(res => res.data)
      .then(_user => dispatch({ type: CREATE_USER, _user }))
      .catch(err => alert(err));
  };
};

export const updateUser = (user) => {
  return (dispatch) => {
    return call('put', `/api/user/${user.id}`, user)
      .then(res => res.data)
      .then(_user => dispatch({ type: UPDATE_USER, _user }))
      .catch(err => alert(err));
  };
};

export const deleteUser = (user) => {
  return (dispatch) => {
    return call('delete', `/api/users/${user.id}`)
      .then(() => dispatch({ type: DELETE_USER, user }))
      .catch(err => alert(err));
  };
};

const userReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_USER:
      return action.user;
    case UPDATE_USER:
      return action.user;
    case DELETE_USER:
      return {};
    case LOGOUT:
      return {};
    default:
      return state;
  }
};


export default userReducer;
