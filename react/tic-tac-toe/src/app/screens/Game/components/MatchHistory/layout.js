import React from 'react';

import styles from './styles.module.scss';

import { WINNERS } from '~constants/players'; // eslint-disable-line import/no-unresolved

import { matchesPropTypes } from '~constants/propTypes'; // eslint-disable-line import/no-unresolved

function MatchHistory({ matches }) {
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

MatchHistory.propTypes = {
  matches: matchesPropTypes.isRequired
};

export default MatchHistory;
