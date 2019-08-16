import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import store from '~redux/store'; // eslint-disable-line import/no-unresolved

import Login from '~screens/Login'; // eslint-disable-line import/no-unresolved

import Game from '~screens/Game'; // eslint-disable-line import/no-unresolved

import '../scss/application.scss';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <>
          <Switch>
            <Route path="/login" component={Login} />
            <PrivateRoute path="/game" component={Game} />
          </Switch>
        </>
      </Router>
    </Provider>
  );
}

export default App;
