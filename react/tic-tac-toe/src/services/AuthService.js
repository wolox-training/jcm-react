import { wrapService, withPostSuccess } from 'redux-recompose';

// eslint-disable-next-line import/no-unresolved
import api from '~config/api';

import { AUTH_REDUCER, AUTH_TARGET } from '~redux/constants'; // eslint-disable-line import/no-unresolved

const login = credentials => api.post('/login', credentials);

login.successSelector = response => response.data.token;

login.injections = [
  withPostSuccess((_, response) => localStorage.setItem('token', response.data.token))
];

export const service = {
  login
};

export default wrapService(service, AUTH_REDUCER, { login: AUTH_TARGET });
