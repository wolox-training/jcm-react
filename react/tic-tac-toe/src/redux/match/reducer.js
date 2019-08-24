import { createReducer, completeState } from 'redux-recompose';

const initialStateDescription = { matches: [] };
const initialState = completeState(initialStateDescription);

export default createReducer(
  initialState,
  {}
);

