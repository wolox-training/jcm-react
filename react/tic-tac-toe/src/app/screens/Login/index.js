import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Field, reduxForm } from 'redux-form';

import { VALIDATIONS, ERROR_MESSAGES } from './constants';
import styles from './styles.module.scss';

import AuthService from '~services/AuthService'; // eslint-disable-line import/no-unresolved

import Input from '~components/Input'; // eslint-disable-line import/no-unresolved

import Alert from '~components/Alert'; // eslint-disable-line import/no-unresolved

function Login({ authError, authLoading, handleSubmit }) {
  return (
    <div className={styles.loginWrapper}>
      <form className={styles.loginForm} onSubmit={handleSubmit}>
        <Field
          name="email"
          type="email"
          component={Input}
          label="Email"
          placeholder="e.g. john.doe@email.com"
          validate={VALIDATIONS.email}
        />
        <Field
          name="password"
          type="password"
          component={Input}
          label="Password"
          placeholder="e.g. * * * * * * * *"
          validate={VALIDATIONS.password}
        />

        {authError && (<Alert {...ERROR_MESSAGES[authError]} />)}

        <button disabled={authLoading} className={styles.button} type="submit">
          {authLoading ? 'Loading...' : 'Sign In'}
        </button>
      </form>
    </div>
  );
}

const mapStateToProps = state => ({
  authError: state.auth.authError,
  authLoading: state.auth.authLoading
});

const mapDispatchToProps = dispatch => ({
  onSubmit: values => dispatch(AuthService.login(values))
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm({ form: 'login' })
)(Login);
