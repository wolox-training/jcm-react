import { actions } from './actions';

const initialState = {
  token: '',
  loginError: ''
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.LOGIN_SUCCESS:
      return { ...state, token: action.payload };
    case actions.LOGIN_FAILURE:
      return { ...state, loginError: action.payload };
    default:
      return state;
  }
}

export default reducer;
