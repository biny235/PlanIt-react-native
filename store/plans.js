import { GET_PLANS, CREATE_PLAN, DELETE_PLAN } from './constants';
import call from './axiosFunc';

// Action Creators
const planCreate = plan => ({ type: CREATE_PLAN, plan });
const getPlan = plans => ({ type: GET_PLANS, plans });
const removePlan = plan => ({ type: DELETE_PLAN, plan });

// Thunks
export const fetchPlans = () => async dispatch => {
  try {
    const res = await call('get', 'http://localhost:3000/api/user/plan');
    const planData = await res.data;
    dispatch(getPlan(planData));
  } catch (error) {
    console.warn(error);
  }
};

export const createPlan = plan => async dispatch => {
  try {
    const res = await call('post', 'http://localhost:3000/api/user/plan', plan);
    const planData = await res.data;
    dispatch(planCreate(planData));
  } catch (error) {
    console.warn(error);
  }
};

export const deletePlan = (plan) => async dispatch => {
  try {
    await call('delete', `/user/plan/${plan.id}`);
    dispatch(removePlan(plan));
  } catch (error) {
    console.warn(error);
  }
};

const planReducer = (state = [], action) => {
  switch (action.type) {
    case GET_PLANS:
      return action.plans;
    case CREATE_PLAN:
      return [...state, action.plan];
    case DELETE_PLAN:
      return state.filter(plan => plan.id !== action.plan.id);
    default:
      return state;
  }
};

export default planReducer;
