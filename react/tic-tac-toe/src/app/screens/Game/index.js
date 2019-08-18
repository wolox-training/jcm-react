import React, { Component } from 'react';

import calculateWinner from './utils';
import styles from './styles.module.scss';
import Board from './components/Board';
import TriggerButton from './components/TriggerButton';
import MatchHistory from './components/MatchHistory';

class Game extends Component {
  state = {
    history: [{
      squares: Array(9).fill(null)
    }],
    xIsNext: true,
    stepNumber: 0
  };

  nextTurn = () => this.state.xIsNext ? 'X' : 'O'

  handleClick = (i) => {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();

    if (!calculateWinner(squares) && !squares[i]) {
      squares[i] = this.nextTurn();
      this.setState(prevState => ({
        history: history.concat([{
          squares
        }]),
        xIsNext: !prevState.xIsNext,
        stepNumber: history.length
      }));
    }
  }

  handleJumpTo = (step) => {
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0
    });
  }

  renderMoveButton = (_, move) => {
    const description = move
      ? `Go to move #${move}`
      : 'Go to game start';

    return (
      <li key={move}>
        <TriggerButton onClick={this.handleJumpTo} onClickArgs={move}>
          {description}
        </TriggerButton>
      </li>
    );
  }

  render() {
    const { history, stepNumber } = this.state;
    const current = history[stepNumber];
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
            onClick={this.handleClick}
          />
        </div>
        <div className={styles.gameInfo}>
          <div>{status}</div>
          <ol>
            {history.map(this.renderMoveButton)}
          </ol>
        </div>
        <MatchHistory />
      </div>
    );
  }
}

export default Game;
