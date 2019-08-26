import React from 'react';
import { connect } from 'react-redux';

import Login from './layout';

import AuthService from '~services/AuthService'; // eslint-disable-line import/no-unresolved

import withLoading from '~components/WithLoading'; // eslint-disable-line import/no-unresolved

function LoginContainer({ authLoading, handleSubmit, ...props }) {
  const LoginWithLoading = withLoading(Login);
  return (
    <LoginWithLoading
      isLoading={authLoading}
      onSubmit={handleSubmit}
      {...props}
    />
  );
}

const mapStateToProps = state => ({
  authError: state.auth.authError,
  authLoading: state.auth.authLoading
});

const mapDispatchToProps = dispatch => ({
  handleSubmit: values => dispatch(AuthService.login(values))
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
