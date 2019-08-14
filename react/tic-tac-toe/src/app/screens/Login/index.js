import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { func } from 'prop-types';

import styles from './styles.module.scss';

const validate = values => {
  const errors = {};
  if (!values.email) {
    errors.email = 'Por favor ingresa un email';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Selecciona una dirección de email válido';
  }

  if (!values.password) {
    errors.password = 'Selecciona una contraseña';
  } else if (values.password.length < 8) {
    errors.password = 'Debe tener al menos 8 caracteres';
  }

  return errors;
};

class Login extends Component {
  renderField = ({ input, label, type, placeholder, meta: { touched, error } }) => (
    <div className={styles.field}>
      <label className={styles.label}>
        {label}
      </label>
      <input
        {...input}
        className={`${styles.input} ${touched && error && styles.inputError}`}
        type={type}
        placeholder={placeholder}
      />
      {touched && error && (<p className={styles.error}>{error}</p>)}
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
          <button className={styles.button} type="submit">
            Sign In
          </button>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  handleSubmit: func.isRequired
};

export default reduxForm({ form: 'login', validate })(Login);
