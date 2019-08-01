import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.scss';

function Square({ value, item, onClick }) {
  function handleClick() {
    onClick(item);
  }

  return (
    <button
      type="button"
      className={styles.square}
      onClick={handleClick}
    >
      {value}
    </button>
  );
}

Square.propTypes = {
  item: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  value: PropTypes.string
};

export default Square;
