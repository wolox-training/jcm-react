// eslint-disable-next-line import/no-unresolved
import api from '~config/api';

export default {
  login: credentials => api.post('/login', credentials)
};
