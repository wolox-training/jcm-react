import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';

import authReducer from '~redux/auth/reducer'; // eslint-disable-line import/no-unresolved

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line no-underscore-dangle
export const history = createBrowserHistory();

const rootReducer = combineReducers({
  form: formReducer,
  auth: authReducer,
  router: connectRouter(history)
});

const configureStore = preloadedState => createStore(
  rootReducer,
  preloadedState,
  composeEnhancers(
    applyMiddleware(
      thunk,
      routerMiddleware(history)
    )
  )
);

export default configureStore;
