import FoodService from '../../services/FoodService';

export const actions = {
  GET_FOODS: '@@FOOD/GET_FOODS',
  GET_FOODS_SUCCESS: '@@FOOD/GET_FOODS_SUCCESS',
  GET_FOODS_FAILURE: '@@FOOD/GET_FOODS_FAILURE'
};

const actionCreators = {
  getFoods: () => async dispatch => {
    dispatch({ type: actions.GET_FOODS });
    const response = await FoodService.getFoods();
    if (response.ok) {
      dispatch({
        type: actions.GET_FOODS_SUCCESS,
        payload: response.data.foods
      });
    } else {
      dispatch({
        type: actions.GET_FOODS_FAILURE,
        payload: response.originalError
      });
    }
  }
};

export default actionCreators;
