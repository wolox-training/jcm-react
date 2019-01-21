import React from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import FoodList from '../../app/screens/Home/components/FoodList';

import actionCreators from './actions';
import reducer from './reducer';

configure({ adapter: new Adapter() });

describe('Test - Store + reducer integration testing with real store', () => {
  let store = {},
    wrapper = {};

  beforeEach(() => {
    store = createStore(reducer, compose(applyMiddleware(thunk)));
    wrapper = mount(
      <Provider store={store}>
        <FoodList />
      </Provider>
    );
  });

  afterEach(() => {
    // This is necessary to wait until your request has finished.
    // Otherwise your test will try to finish without waiting for the request to finish.
    wrapper.unmount();
  });

  it('is loading foods', () => {
    expect(store.getState().foodsLoading).toBe(true);
  });

  it('is not loading foods after retrieving info from the api', () =>
    // eslint-disable-next-line max-nested-callbacks
    store.dispatch(actionCreators.getFoods()).then(() => {
      // Missing code here
    }));

  it('is loading foods after retrieving info from the api', () =>
  // eslint-disable-next-line max-nested-callbacks
    store.dispatch(actionCreators.getFoods()).then(() => {
      const response = store.getState().foods;
      // Missing code here
    }));
});
