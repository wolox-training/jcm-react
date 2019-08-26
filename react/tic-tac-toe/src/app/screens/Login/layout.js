import React from 'react';
import { Field, reduxForm } from 'redux-form';

import styles from './styles.module.scss';
import { VALIDATIONS, ERROR_MESSAGES } from './constants';

import Input from '~components/Input'; // eslint-disable-line import/no-unresolved

import Alert from '~components/Alert'; // eslint-disable-line import/no-unresolved

function Login({ authError, handleSubmit }) {
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
        <button className={styles.button} type="submit">
            Sign In
        </button>
      </form>
    </div>
  );
}

export default reduxForm({ form: 'login' })(Login);
