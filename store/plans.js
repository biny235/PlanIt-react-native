import call from './axiosFunc';
import { GET_PLAN, UPDATE_PLAN, LOGOUT } from './constants';

export const fetchPlan = () => {
  return (dispatch) => {
    console.log("fetching plan")
    return call('get', '/api/user/plan')
      .then(res => res.data)
      .then(plan => {
        dispatch({ type: GET_PLAN, plan })
      })
      .catch(err => alert(err));
  }
}

export const updatePlan = (plan) => {
  return (dispatch) => {
    return call('put', `/api/plans/${plan.id}`, plan)
      .then(res => res.data)
      .then(plan => dispatch({ type: UPDATE_PLAN, plan }))
      .catch(err => alert(err));
  };
};


const planReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_PLAN:
      return action.plan
    case UPDATE_PLAN:
      return Object.assign({}, state, action.plan)
    case LOGOUT:
      return {}
    default:
      return state;
  }
};

export default planReducer;
