import { actions } from './actions';

const initialState = { foods: [], foodsLoading: false };

function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_FOODS_FAILURE:
    case actions.GET_FOODS_SUCCESS:
    case actions.GET_FOODS:
      return {
        ...state,
        foods: action.payload,
        foodsLoading: action.type === actions.GET_FOODS
      };
    default:
      return state;
  }
}

export default reducer;
