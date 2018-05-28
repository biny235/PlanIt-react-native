// import axios from 'axios';
// import { GET_PLANS, CREATE_PLAN, UPDATE_PLAN, DELETE_PLAN } from './constants';

// export const fetchPlans = () => {
//   return (dispatch) => {
//     return axios.get('https://fwiwh.herokuapp.com/api/plans')
//       .then(res => res.data)
//       .then(plans => {
//         dispatch({ type: GET_PLANS, plans })
//       })
//       .catch(err => alert(err));
//   }
// }

// export const createPlan = (plan) => {
//   return (dispatch) => {
//     return axios.put('https://fwiwh.herokuapp.com/api/plans', plan)
//       .then(res => res.data)
//       .then(plan => dispatch({ type: CREATE_PLAN, plan }))
//       .catch(err => alert(err));
//   };
// };

// export const updatePlan = (plan) => {
//   return (dispatch) => {
//     return axios.put(`https://fwiwh.herokuapp.com/api/plans/${plan.id}`, plan)
//       .then(res => res.data)
//       .then(plan => dispatch({ type: UPDATE_PLAN, plan }))
//       .catch(err => alert(err));
//   };
// };

// export const deletePlan = (plan) => {
//   return (dispatch) => {
//     return axios.delete(`https://fwiwh.herokuapp.com/api/plans/${plan.id}`)
//       .then(() => dispatch({ type: DELETE_PLAN, plan }))
//       .catch(err => alert(err));
//   };
// };

// const planReducer = (state = [], action) => {
//   switch (action.type) {
//     case GET_PLANS:
//       return action.plans
//     case CREATE_PLAN:
//       return [...state, action.plan];
//     case UPDATE_PLAN:
//       return state.map(plan => plan.id === action.plan.id ? action.plan : plan);
//     case DELETE_PLAN:
//       return state.filter(plan => plan.id !== action.plan.id);
//     default:
//       return state;
//   }
// };

// export default planReducer;
