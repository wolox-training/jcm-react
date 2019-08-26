import React, { Component } from 'react';
import { connect } from 'react-redux';
import { func, string, bool } from 'prop-types';

import MatchHistory from './layout';

import MatchServices from '~services/MatchesService'; // eslint-disable-line import/no-unresolved

import { matchesPropTypes } from '~constants/propTypes'; // eslint-disable-line import/no-unresolved

class MatchHistoryContainer extends Component {
  componentDidMount() {
    this.props.getMatches();
  }

  render () {
    const { matches, matchesLoading, matchesError } = this.props;

    if (matchesError) {
      return <h1>Oops, something was wrong!</h1>;
    } else if (!matches.length && !matchesLoading) {
      return <h1>Empty data :)</h1>;
    }

    return <MatchHistory isLoading={matchesLoading} matches={matches} />;
  }
}

MatchHistoryContainer.propTypes = {
  getMatches: func.isRequired,
  matches: matchesPropTypes.isRequired,
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

export default connect(mapStateToProps, mapDispatchToProps)(MatchHistoryContainer);
