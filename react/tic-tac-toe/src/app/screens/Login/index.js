import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { func } from 'prop-types';

import styles from './styles.module.scss';

class Login extends Component {
  renderField = ({ input, label, type, placeholder }) => (
    <div className={styles.field}>
      <label className={styles.label}>
        {label}
      </label>
      <input {...input} className={styles.input} type={type} placeholder={placeholder} />
    </div>
  )

  render () {
    const { handleSubmit } = this.props;
    return (
      <div className={styles.login}>
        <form className={styles.loginForm} onSubmit={handleSubmit}>
          <Field
            name="email"
            type="email"
            component={this.renderField}
            label="Email"
            placeholder="e.g. john.doe@email.com"
          />
          <Field
            name="password"
            type="password"
            component={this.renderField}
            label="Contraseña"
            placeholder="e.g. * * * * * * * *"
          />
          <div>
            <button className={styles.button} type="submit">
              Sign In
            </button>
          </div>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  handleSubmit: func.isRequired
};

export default reduxForm({ form: 'login' })(Login);
