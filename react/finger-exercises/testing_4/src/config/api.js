import { create } from 'apisauce';

import { BASE_URL } from './constants';

const api = create({
  baseURL: BASE_URL,
  timeout: 5000
});

export default api;
