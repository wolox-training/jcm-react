import React from 'react';
import { Provider } from 'react-redux';

import store from '~redux/store'; // eslint-disable-line import/no-unresolved

import Login from './screens/Login';

import '../scss/application.scss';

function App() {
  return (
    <Provider store={store}>
      <Login />
    </Provider>
  );
}

export default App;
