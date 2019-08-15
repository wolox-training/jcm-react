import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';

import authReducer from '~redux/auth/reducer'; // eslint-disable-line import/no-unresolved

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line no-underscore-dangle
export default createStore(
  combineReducers({
    form: formReducer,
    auth: authReducer
  }),
  composeEnhancers(applyMiddleware(thunk))
);
