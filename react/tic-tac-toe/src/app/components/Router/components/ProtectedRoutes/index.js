import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { PROTECTED_ROUTES } from '../../constants';

// eslint-disable-next-line import/no-unresolved
import Navbar from '~components/Navbar';

function DefaultLayout() {
  return (
    <>
      <Navbar />
      <Switch>
        {PROTECTED_ROUTES.map(route => <Route key={route.path} {...route} />)}
      </Switch>
    </>
  );
}

export default DefaultLayout;
