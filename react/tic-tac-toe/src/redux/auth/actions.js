import AuthService from '~services/AuthService'; // eslint-disable-line import/no-unresolved

export const actions = {
  LOGIN_SUCCESS: '@@AUTH/LOGIN_SUCCESS',
  LOGIN_FAILURE: '@@AUTH/LOGIN_FAILURE'
};

const actionCreators = {
  login: (credentials) => async (dispatch) => {
    const response = await AuthService.login(credentials);
    if (response.ok) {
      dispatch({
        type: actions.LOGIN_SUCCESS,
        payload: response.data.token
      });
    } else if (response.status === 401) {
      dispatch({
        type: actions.LOGIN_FAILURE,
        payload: response.data
      });
    }
  }
};

export default actionCreators;
