import React from 'react';
import { Provider } from 'react-redux';

import configureStore from '~redux/store'; // eslint-disable-line import/no-unresolved

import '../scss/application.scss';

import Router from '~components/Router'; // eslint-disable-line import/no-unresolved

function App() {
  const store = configureStore();
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

export default App;
