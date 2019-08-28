import Login from '~screens/Login'; // eslint-disable-line import/no-unresolved

import Game from '~screens/Game'; // eslint-disable-line import/no-unresolved

import ProtectedRoutes from './components/ProtectedRoutes';
import NotFound from './components/NotFound';

export const PUBLIC_ROUTES = [
  { path: '/login', component: Login, exact: true },
  { path: '/', component: ProtectedRoutes }
];

export const PROTECTED_ROUTES = [
  { path: '/game', component: Game },
  { path: '/', component: Game, exact: true },
  { path: '/', component: NotFound }
];
