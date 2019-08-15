import React, { Component } from 'react';

import MatchServices from '~services/MatchesService'; // eslint-disable-line import/no-unresolved

import styles from './styles.module.scss';

const PLAYER_IDS = {
  playerOne: 'player_one',
  playerTwo: 'player_two'
};

const WINNERS = {
  [PLAYER_IDS.playerOne]: 'Player One',
  [PLAYER_IDS.playerTwo]: 'Player Two',
  tie: 'Tie'
};

class MatchHistory extends Component {
  state = {
    matches: [],
    matchesLoading: false,
    matchesError: null
  }

  componentDidMount() {
    this.getMatches();
  }

  getMatches = async () => {
    this.setState({ matchesLoading: true });
    const response = await MatchServices.getMatches();
    if (response.ok) {
      this.setState({ matches: response.data });
    } else {
      this.setState({ matchesError: response.problem });
    }
    this.setState({ matchesLoading: false });
  }

  render () {
    const { matches, matchesLoading, matchesError } = this.state;

    if (matchesLoading) {
      return <h1>Loading...</h1>;
    } else if (matchesError) {
      return <h1>Oops, something was wrong!</h1>;
    } else if (matches && !matches.length) {
      return <h1>Empty data :)</h1>;
    }

    return (
      <table className={styles.matchHistory}>
        <thead>
          <tr className={styles.headerRow}>
            <th className={styles.headerCell}>Player 1</th>
            <th className={styles.headerCell}>Player 2</th>
            <th className={styles.headerCell}>Winner</th>
          </tr>
        </thead>

        <tbody>
          {matches.map(match => (
            <tr key={match.id} className={styles.bodyRow}>
              <td className={styles.bodyCell}>{match.player_one}</td>
              <td className={styles.bodyCell}>{match.player_two}</td>
              <td className={styles.bodyCell}>{WINNERS[match.winner]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default MatchHistory;
