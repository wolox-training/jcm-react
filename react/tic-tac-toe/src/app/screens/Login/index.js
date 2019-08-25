import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { func } from 'prop-types';

import styles from './styles.module.scss';
import { VALIDATIONS } from './constants';

import Input from '~components/Input'; // eslint-disable-line import/no-unresolved

function Login({ handleSubmit }) {
  return (
    <div className={styles.loginWrapper}>
      <div className={styles.loginInside}>
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
  handleSubmit: func.isRequired
};

export default reduxForm({ form: 'login' })(Login);
