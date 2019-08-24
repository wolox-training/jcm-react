import { wrapService } from 'redux-recompose';

import api from '~config/api'; // eslint-disable-line import/no-unresolved

const service = {
  getMatches: () => api.get('/matches')
};

export default wrapService(service, 'match', { getMatches: 'matches' });
