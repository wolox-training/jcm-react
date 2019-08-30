import { createReducer, onSetValue, completeState } from 'redux-recompose';

import { actions } from './actions';

// eslint-disable-next-line import/no-unresolved
import { AUTH_TARGET } from '~redux/constants';

const initialStateDescription = {
  [AUTH_TARGET]: localStorage.getItem('token')
};

const initialState = completeState(initialStateDescription);
const reducerDescription = {
  [actions.LOGOUT]: onSetValue(null)
};

export default createReducer(
  initialState,
  reducerDescription
);
