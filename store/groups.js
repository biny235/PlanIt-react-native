import axios from 'axios';
import { GET_GROUPS, CREATE_GROUP, UPDATE_GROUP, DELETE_GROUP } from './constants';

export const fetchGroups = () => {
  return (dispatch) => {
    return axios.get('https://fwiwh.herokuapp.com/api/groups')
      .then(res => res.data)
      .then(groups => {
        dispatch({ type: GET_GROUPS, groups })
      })
      .catch(err => alert(err));
  }
}

export const createGroup = (group) => {
  return (dispatch) => {
    return axios.put('https://fwiwh.herokuapp.com/api/groups', group)
      .then(res => res.data)
      .then(group => dispatch({ type: CREATE_GROUP, group }))
      .catch(err => alert(err));
  };
};

export const updateGroup = (group) => {
  return (dispatch) => {
    return axios.put(`https://fwiwh.herokuapp.com/api/groups/${group.id}`, group)
      .then(res => res.data)
      .then(group => dispatch({ type: UPDATE_GROUP, group }))
      .catch(err => alert(err));
  };
};

export const deleteGroup = (group) => {
  return (dispatch) => {
    return axios.delete(`https://fwiwh.herokuapp.com/api/groups/${group.id}`)
      .then(() => dispatch({ type: DELETE_GROUP, group }))
      .catch(err => alert(err));
  };
};

const groupReducer = (state = [], action) => {
  switch (action.type) {
    case GET_GROUPS:
      return action.groups
    case CREATE_GROUP:
      return [...state, action.group];
    case UPDATE_GROUP:
      return state.map(group => group.id === action.group.id ? action.group : group);
    case DELETE_GROUP:
      return state.filter(group => group.id !== action.group.id);
    default:
      return state;
  }
};

export default groupReducer;
