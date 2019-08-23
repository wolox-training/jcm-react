import { createStore, compose, combineReducers as CR, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { wrapCombineReducers, fetchMiddleware } from 'redux-recompose';

import authReducer from '~redux/auth/reducer'; // eslint-disable-line import/no-unresolved

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line no-underscore-dangle
const combineReducers = wrapCombineReducers(CR);
export const history = createBrowserHistory();

const rootReducer = combineReducers({
  form: formReducer,
  auth: authReducer,
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
