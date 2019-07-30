/* eslint-disable react/jsx-no-bind */
import React, { Component } from 'react';

import styles from './styles.module.scss';

class Square extends Component {
  state = {
    value: null
  }

  render() {
    return (
      <button
        type="button"
        className={styles.square}
        onClick={() => this.setState({ value: 'X' })}
      >
        {this.state.value}
      </button>
    );
  }
}

export default Square;
