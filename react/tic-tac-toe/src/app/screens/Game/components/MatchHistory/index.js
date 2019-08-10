import React, { Component } from 'react';

import services from '~services/MatchesService'; // eslint-disable-line import/no-unresolved

import styles from './styles.module.scss';

class MatchHistory extends Component {
  state = {
    matches: []
  }

  componentDidMount() {
    services.getMatches().then(response => this.setState({ matches: response.data }));
  }


  humanize = (property) => property.replace(/_/g, ' ')
    .replace(/(\w+)/g, (match) => match.charAt(0).toUpperCase() + match.slice(1));

  MATCH_RESULT_CLASS = {
    player_one: 'winner-one', // eslint-disable-line camelcase
    player_two: 'winner-two', // eslint-disable-line camelcase
    tie: 'tie'
  }

  render () {
    const { matches } = this.state;
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
              <td className={styles.bodyCell}>{this.humanize(match.player_one)}</td>
              <td className={styles.bodyCell}>{this.humanize(match.player_two)}</td>
              <td className={styles.bodyCell}>{this.humanize(match.winner)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default MatchHistory;
