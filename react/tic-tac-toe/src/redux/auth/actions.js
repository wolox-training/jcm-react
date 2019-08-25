import { createTypes } from 'redux-recompose';

export const actions = createTypes(['LOGOUT'], '@@AUTH');

const actionCreators = {
  logout: () => {
    localStorage.removeItem('token');
    return {
      type: actions.LOGOUT,
      target: 'auth'
    };
  }
};

export default actionCreators;
