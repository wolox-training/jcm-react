import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import store from '~redux/store'; // eslint-disable-line import/no-unresolved

import Login from './screens/Login';
import Game from './screens/Game';

import '../scss/application.scss';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/game" component={Game} />
          </Switch>
        </>
      </Router>
    </Provider>
  );
}

export default App;
