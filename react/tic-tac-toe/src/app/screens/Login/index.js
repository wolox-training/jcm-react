import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import styles from './styles.module.scss';
import { VALIDATIONS, ERROR_MESSAGES } from './constants';

import Input from '~components/Input'; // eslint-disable-line import/no-unresolved

import Alert from '~components/Alert'; // eslint-disable-line import/no-unresolved

import AuthService from '~services/AuthService'; // eslint-disable-line import/no-unresolved


function Login({ handleSubmit, loginError }) {
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
        {loginError && (<Alert {...ERROR_MESSAGES[loginError]} />)}
        <button className={styles.button} type="submit">
              Sign In
        </button>
      </form>
    </div>
  );
}

const mapStateToProps = state => ({
  loginError: state.auth.loginError
});

const mapDispatchToProps = dispatch => ({
  onSubmit: values => dispatch(AuthService.login(values))
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm({ form: 'login' })
)(Login);
