import React from 'react';

import styles from './styles.module.scss';

function Input({ input, label, type, placeholder, meta: { touched, error } }) {
  return (
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
  );
}

export default Input;
