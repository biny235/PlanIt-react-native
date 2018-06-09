import axios from 'axios';
import { GET_USERS, CREATE_USER, UPDATE_USER, DELETE_USER  } from './constants';
import call from './axiosFunc';

// Action Creators
const userCreate = user => ({ type: CREATE_USER, user });
const getUser = users => ({ type: GET_USERS, users });
const removeUser = user => ({ type: DELETE_USER, user });

// Thunks
export const fetchuser = () => async dispatch => {
  try {
    const res = await call('get', 'http://localhost:3000/api/user');
    const userData = await res.data;
    dispatch(getUser(userData));
  } catch (error) {
    console.warn(error);
  }
};
export const fetchUsers = () => {
  return (dispatch) => {
    return axios.get('http://localhost:3000/api/users')
      .then(res => res.data)
      .then(users => {
        dispatch({ type: GET_USERS, users });
      })
      .catch(err => alert(err));
  }
}

export const createUser = (user) => {
  return (dispatch) => {
    return axios.put('https://fwiwh.herokuapp.com/api/users', user)
      .then(res => res.data)
      .then(user => dispatch({ type: CREATE_USER, user }))
      .catch(err => alert(err));
  };
};

export const updateUser = (user) => {
  return (dispatch) => {
    return axios.put(`https://fwiwh.herokuapp.com/api/users/${user.id}`, user)
      .then(res => res.data)
      .then(user => dispatch({ type: UPDATE_USER, user }))
      .catch(err => alert(err));
  };
};

export const deleteUser = (user) => {
  return (dispatch) => {
    return axios.delete(`https://fwiwh.herokuapp.com/api/users/${user.id}`)
      .then(() => dispatch({ type: DELETE_USER, user }))
      .catch(err => alert(err));
  };
};


const userReducer = (state = [], action) => {
  switch (action.type) {
    case GET_USERS:
      return action.users
    case CREATE_USER:
      return [...state, action.user];
    case UPDATE_USER:
      return state.map(user => user.id === action.user.id ? action.user : user);
    case DELETE_USER:
      return state.filter(user => user.id !== action.user.id);
    default:
      return state;
  }
};


export default userReducer;
