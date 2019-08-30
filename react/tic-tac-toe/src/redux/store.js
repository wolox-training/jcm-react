import { createStore, compose, combineReducers as CR, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { wrapCombineReducers, fetchMiddleware } from 'redux-recompose';

import authReducer from '~redux/auth/reducer'; // eslint-disable-line import/no-unresolved

import matchReducer from '~redux/match/reducer'; // eslint-disable-line import/no-unresolved

import { AUTH_REDUCER, MATCH_REDUCER } from '~redux/constants'; // eslint-disable-line import/no-unresolved

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line no-underscore-dangle
const combineReducers = wrapCombineReducers(CR);
export const history = createBrowserHistory();

const rootReducer = combineReducers({
  form: formReducer,
  [AUTH_REDUCER]: authReducer,
  [MATCH_REDUCER]: matchReducer,
  router: connectRouter(history)
});

export default createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(
      thunk,
      fetchMiddleware,
      routerMiddleware(history)
    )
  )
);
