import React from 'react';
import { Provider } from 'react-redux';

import store from '~redux/store'; // eslint-disable-line import/no-unresolved

import '../scss/application.scss';

import Router from '~components/Router'; // eslint-disable-line import/no-unresolved

function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

export default App;
