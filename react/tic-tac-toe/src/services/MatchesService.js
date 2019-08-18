import api from '~config/api'; // eslint-disable-line import/no-unresolved

export default {
  getMatches: () => api.get('/matches')
};
