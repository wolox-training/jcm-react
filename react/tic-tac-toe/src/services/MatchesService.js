import { wrapService } from 'redux-recompose';

import api from '~config/api'; // eslint-disable-line import/no-unresolved

import { MATCH_REDUCER, MATCHES_TARGET } from '~redux/constants'; // eslint-disable-line import/no-unresolved

const service = {
  getMatches: () => api.get('/matches')
};

export default wrapService(service, MATCH_REDUCER, { getMatches: MATCHES_TARGET });
