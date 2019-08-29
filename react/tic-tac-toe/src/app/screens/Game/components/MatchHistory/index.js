import React, { Component } from 'react';
import { connect } from 'react-redux';
import { shape, arrayOf, func, number, string, bool } from 'prop-types';

import { PLAYER_IDS, WINNERS } from './constants';

import MatchServices from '~services/MatchesService'; // eslint-disable-line import/no-unresolved

import styles from './styles.module.scss';

class MatchHistory extends Component {
  componentDidMount() {
    this.props.getMatches();
  }

  render () {
    const { matches, matchesLoading, matchesError } = this.props;

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

MatchHistory.propTypes = {
  getMatches: func.isRequired,
  matches: arrayOf(shape({
    id: number.isRequired,
    [PLAYER_IDS.playerOne]: string,
    [PLAYER_IDS.playerTwo]: string,
    winner: string,
    createdAt: string
  })).isRequired,
  matchesError: string,
  matchesLoading: bool
};

const mapStateToProps = (state) => ({
  matches: state.match.matches,
  matchesLoading: state.match.matchesLoading,
  matchesError: state.match.matchesError

});

const mapDispatchToProps = (dispatch) => ({
  getMatches: () => dispatch(MatchServices.getMatches())
});

export default connect(mapStateToProps, mapDispatchToProps)(MatchHistory);
