import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TriggerButton from '../TriggerButton';

import styles from './styles.module.scss';

class Board extends Component {
  renderSquare = (i) => {
    const { squares, onClick } = this.props;
    return (
      <TriggerButton btnClass={styles.square} onClick={onClick} onClickArgs={i}>
        {squares[i]}
      </TriggerButton>
    );
  }

  render() {
    return (
      <div>
        <div className={styles.boardRow}>
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className={styles.boardRow}>
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className={styles.boardRow}>
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

Board.propTypes = {
  onClick: PropTypes.func.isRequired,
  squares: PropTypes.arrayOf(PropTypes.string)
};

export default Board;
