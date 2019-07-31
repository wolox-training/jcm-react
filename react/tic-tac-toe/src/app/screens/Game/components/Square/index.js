/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/prop-types */
import React from 'react';

import styles from './styles.module.scss';

function Square({ value, onClick }) {
  return (
    <button
      type="button"
      className={styles.square}
      onClick={onClick}
    >
      {value}
    </button>
  );
}

export default Square;
