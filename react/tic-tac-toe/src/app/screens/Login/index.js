import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { func, string } from 'prop-types';
import { Field, reduxForm } from 'redux-form';

import authActions from '~redux/auth/actions'; // eslint-disable-line import/no-unresolved

import { validate } from './utils';
import styles from './styles.module.scss';
import { VALIDATIONS } from './constants';

import Input from '~components/Input'; // eslint-disable-line import/no-unresolved

function Login({ handleSubmit, loginError }) {
  return (
    <div className={styles.loginWrapper}>
      <div className={styles.loginInside}>
        {loginError && (<Alert {...ERROR_MESSAGES[loginError]} />)}
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
          <button className={styles.button} type="submit">
              Sign In
          </button>
        </form>
      </div>
    </div>
  );
}

Login.propTypes = {
  handleSubmit: func.isRequired,
  loginError: string.isRequired
};

const mapStateToProps = ({ auth }) => ({
  loginError: auth.loginError
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (values) => dispatch(authActions.login(values))
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm({ form: 'login', validate })
)(Login);
