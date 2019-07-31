/* eslint-disable react/jsx-no-bind */
import React, { Component } from 'react';

import calculateWinner from './utils';
import styles from './styles.module.scss';
import Board from './components/Board';

class Game extends Component {
  state = {
    history: [{
      squares: Array(9).fill(null)
    }],
    xIsNext: true
  };

  nextTurn() {
    return this.state.xIsNext ? 'X' : 'O';
  }

  handleClick(i) {
    const { history } = this.state;
    const current = history[history.length - 1];
    const squares = current.squares.slice();

    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    squares[i] = this.nextTurn();
    this.setState(prevState => ({
      history: history.concat([{
        squares
      }]),
      xIsNext: !prevState.xIsNext
    }));
  }

  render() {
    const { history } = this.state;
    const current = history[history.length - 1];
    const winner = calculateWinner(current.squares);
    let status = '';

    if (winner) {
      status = `Winner: ${winner}`;
    } else {
      status = `Next player: ${this.nextTurn()}`;
    }

    return (
      <div className={styles.game}>
        <div className={styles.gameBoard}>
          <Board
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className={styles.gameInfo}>
          <div>{ status }</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

export default Game;
