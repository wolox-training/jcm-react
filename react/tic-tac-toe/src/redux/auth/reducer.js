import { actions } from './actions';

const initialState = {
  token: localStorage.authToken,
  loginError: null
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.LOGIN_SUCCESS:
      return { ...state, token: action.payload };
    case actions.LOGIN_FAILURE:
      return { ...state, loginError: action.payload };
    case actions.LOGOUT:
      return { ...state, token: action.payload };
    default:
      return state;
  }
}

export default reducer;
