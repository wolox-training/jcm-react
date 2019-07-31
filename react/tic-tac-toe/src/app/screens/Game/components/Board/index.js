import React, { Component } from 'react';

import Square from '../Square';

import styles from './styles.module.scss';

class Board extends Component {
  state = {
    squares: Array(9).fill(null)
  }

  handleClick(i) {
    const { squares } = this.state;
    squares[i] = 'X';
    this.setState({ squares });
  }

  renderSquare(i) {
    return (
      <Square
        value={this.state.squares[i]}
        // eslint-disable-next-line react/jsx-no-bind
        onClick={() => this.handleClick(i)}
      />
    );
  }

  render() {
    const status = 'Next player: X';
    return (
      <div>
        <div className={styles.status}>{status}</div>
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

export default Board;
