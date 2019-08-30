import { createTypes } from 'redux-recompose';

// eslint-disable-next-line import/no-unresolved
import { AUTH_TARGET } from '~redux/constants';

export const actions = createTypes(['LOGOUT'], '@@AUTH');

const actionCreators = {
  logout: () => dispatch => {
    localStorage.removeItem('token');
    dispatch({
      type: actions.LOGOUT,
      target: AUTH_TARGET
    });
  }
};

export default actionCreators;
