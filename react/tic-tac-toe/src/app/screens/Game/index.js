/* eslint-disable react/no-array-index-key */
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
    xIsNext: true,
    stepNumber: 0
  };

  nextTurn() {
    return this.state.xIsNext ? 'X' : 'O';
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
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
      xIsNext: !prevState.xIsNext,
      stepNumber: history.length
    }));
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0
    });
  }

  render() {
    const { history } = this.state;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);
    let status = '';

    const moves = history.map((step, move) => {
      const desc = move
        ? `Go to move #${move}`
        : 'Go to game start';

      return (
        <li key={move}>
          <button type="button" onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

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
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

export default Game;
