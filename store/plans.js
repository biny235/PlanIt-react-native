import { GET_PLAN, CREATE_PLAN, UPDATE_PLAN, DELETE_PLAN, LOGOUT, NEW_RECOMMENDATION } from './constants';
import call from './axiosFunc';
import { newBroadcast } from './socket';


// Action Creators
const planCreate = plan => ({ type: CREATE_PLAN, plan });
const planUpdate = plan => ({ type: UPDATE_PLAN, plan });
const getPlan = plans => ({ type: GET_PLAN, plans });
const removePlan = plan => ({ type: DELETE_PLAN, plan });

// Thunks
export const fetchPlan = () => async dispatch => {
  try {
    const res = await call('get', '/api/user/plan');
    const planData = await res.data;
    dispatch(getPlan(planData));
  } catch (error) {
    console.warn(error);
  }
};

export const createPlan = plan => async dispatch => {
  try {
    const res = await call('post', '/api/user/plan', plan);
    const planData = await res.data;
    dispatch(planCreate(planData));
  } catch (error) {
    console.warn(error);
  }
};

export const updatePlan = plan => async dispatch => {
  try {
    const res = await call('put', `/api/user/plan/${plan.id}`, plan);
    const planData = await res.data
    newBroadcast(planData)
    dispatch(planUpdate(planData));
  } catch (error) {
    console.warn(error);
  }
};

export const newRecommendation = recommendation => {
  return dispatch => {
    dispatch({type: NEW_RECOMMENDATION, recommendation})
  }
}

export const deletePlan = (plan) => async dispatch => {
  try {
    await call('delete', `/api/user/plan/${plan.id}`);
    dispatch(removePlan(plan));
  } catch (error) {
    console.warn(error);
  }
};

const planReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_PLAN:
      return action.plans;
    case CREATE_PLAN:
      return action.plan;
    case UPDATE_PLAN:
      return action.plan;
    case DELETE_PLAN:
      return {};
    case NEW_RECOMMENDATION:
      return Object.assign({}, state, { places: [...state.places, action.recommendation] })
    case LOGOUT:
      return {};
    default:
      return state;
  }
};

export default planReducer;
