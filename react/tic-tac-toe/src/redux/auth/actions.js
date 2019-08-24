import { createTypes } from 'redux-recompose';

export const actions = createTypes(['LOGOUT'], '@@AUTH');

const actionCreators = {
  logout: () => ({
    type: actions.LOGOUT,
    target: 'auth'
  })
};

export default actionCreators;
