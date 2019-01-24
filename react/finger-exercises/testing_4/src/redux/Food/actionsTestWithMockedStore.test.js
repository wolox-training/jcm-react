import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import expect from 'expect';

import actionCreators, { actions } from './actions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Action --- Test async actions with mocked store', () => {
  it('dispatches GET_FOODS_SUCCESS if the request is successful', () => {
    const expectedActions = [actions.GET_FOODS, actions.GET_FOODS_SUCCESS];

    const store = mockStore({ foods: [] });

    // eslint-disable-next-line max-nested-callbacks
    return store.dispatch(actionCreators.getFoods()).then(() => {
      // compare action types only (Forget about Payload)
      // eslint-disable-next-line max-nested-callbacks
      const actionTypes = store.getActions().map(action => action.type);
      // Missing code here
    });
  });
});
