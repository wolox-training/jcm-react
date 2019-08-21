import Login from '~screens/Login'; // eslint-disable-line import/no-unresolved

import Game from '~screens/Game'; // eslint-disable-line import/no-unresolved

import ProtectedRoutes from './components/ProtectedRoutes';

import Awesome from '~screens/Awesome'; // eslint-disable-line import/no-unresolved


export const PUBLIC_ROUTES = [
  { path: '/login', component: Login, exact: true },
  { path: '/', component: ProtectedRoutes }
];

export const PROTECTED_ROUTES = [
  { path: '/awesome', component: Awesome },
  { path: '/game', component: Game }
];
