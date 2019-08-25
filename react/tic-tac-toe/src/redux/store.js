import { createStore, compose, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line no-underscore-dangle
export default createStore(combineReducers({ form: formReducer }), composeEnhancers());
