import React from 'react';
import { Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import { history } from '~redux/store'; // eslint-disable-line import/no-unresolved

import CheckRoute from './components/CheckRoute';
import { PUBLIC_ROUTES } from './constants'; // eslint-disable-line import/no-unresolved

function Router() {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        {PUBLIC_ROUTES.map((route) => <CheckRoute key={route.path} {...route} />)}
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
