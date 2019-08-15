import api from '~config/api'; // eslint-disable-line import/no-unresolved

export default {
  login: (credentials) => api.post('/login', credentials)
};
