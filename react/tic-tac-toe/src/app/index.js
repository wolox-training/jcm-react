import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from '~redux/store'; // eslint-disable-line import/no-unresolved

import Login from './screens/Login';

import '../scss/application.scss';

class App extends Component {
  handleSubmit = values => {
    console.log(values);
  }

  render () {
    return (
      <Provider store={store}>
        <Login onSubmit={this.handleSubmit} />
      </Provider>
    );
  }
}

export default App;
