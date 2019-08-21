import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { PROTECTED_ROUTES } from '../../constants';

import Navbar from '~components/Navbar'; // eslint-disable-line import/no-unresolved

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
