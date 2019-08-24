import { wrapService } from 'redux-recompose';

import api from '~config/api'; // eslint-disable-line import/no-unresolved

export default wrapService(
  { getMatches: () => api.get('/matches') },
  'match',
  { getMatches: 'matches' }
);
