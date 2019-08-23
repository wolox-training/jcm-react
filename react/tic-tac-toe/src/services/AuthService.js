import { wrapService, withPostSuccess } from 'redux-recompose';

// eslint-disable-next-line import/no-unresolved
import api from '~config/api';

const login = credentials => api.post('/login', credentials);

login.successSelector = response => response.data.token;
login.failureSelector = response => response.data;

login.injections = [
  withPostSuccess((_, response) => localStorage.setItem('token', response.data.token))
];

export const service = {
  login
};

export default wrapService(service, 'auth', { login: 'token' });
