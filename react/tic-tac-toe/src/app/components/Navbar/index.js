import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { func } from 'prop-types';

import styles from './styles.module.scss';

import authActions from '~redux/auth/actions'; // eslint-disable-line import/no-unresolved

function Navbar({ handleLogout }) {
  return (
    <nav className={styles.nav}>
      <span className={styles.brand}>Wolox Game</span>
      <div className={styles.navList}>
        <Link to="/game" className={styles.navItem}>
          Game
        </Link>
        <Link to="/awesome" className={styles.navItem}>
          Awesome Screen
        </Link>
      </div>
      <button
        type="button"
        className={styles.btnLogout}
        onClick={handleLogout}
      >
        Log out
      </button>
    </nav>
  );
}

Navbar.propTypes = {
  handleLogout: func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  handleLogout: () => dispatch(authActions.logout())
});

export default connect(null, mapDispatchToProps)(Navbar);
