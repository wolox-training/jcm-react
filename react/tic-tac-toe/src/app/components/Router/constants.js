import Login from '~screens/Login'; // eslint-disable-line import/no-unresolved

import Game from '~screens/Game'; // eslint-disable-line import/no-unresolved

import DefaultLayout from './components/DefaultLayout';

export const PUBLIC_ROUTES = [
  { path: '/login', component: Login, exact: true },
  { path: '/', component: DefaultLayout }
];

export const PROTECTED_ROUTES = [
  { path: '/', component: Game }
];
