import { createReducer, onSetValue, completeState } from 'redux-recompose';

import { actions } from './actions';

const initialStateDescription = { token: localStorage.getItem('token') };
const initialState = completeState(initialStateDescription);


const reducerDescription = {
  [actions.LOGOUT]: onSetValue(null)
};

export default createReducer(
  initialState,
  reducerDescription
);
