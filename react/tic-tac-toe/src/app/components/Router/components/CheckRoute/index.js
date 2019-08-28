import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { string, func } from 'prop-types';

function CheckRoute ({ component: Component, path, authToken, ...props }) {
  if (authToken) {
    if (path === '/login') {
      return <Redirect to="/" />;
    }
  } else if (path !== '/login') {
    return <Redirect to="/login" />;
  }
  return <Component {...props} />;
}

const mapStateToProps = state => ({
  authToken: state.auth.token
});

CheckRoute.propTypes = {
  authToken: string,
  component: func,
  path: string
};

export default connect(mapStateToProps)(CheckRoute);
