import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { PROTECTED_ROUTES } from '../../constants';

function ProtectedRoutes() {
  return (
    <Switch>
      {PROTECTED_ROUTES.map(route => <Route key={route.path} {...route} />)}
    </Switch>
  );
}

export default ProtectedRoutes;
