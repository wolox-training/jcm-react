import React from 'react';
import { string } from 'prop-types';

import styles from './styles.module.scss';

function Alert({ title, description }) {
  return (
    <div className={styles.alert}>
      <h1 className={styles.title}>{title}</h1>
      <p>{description}</p>
    </div>
  );
}

Alert.propTypes = {
  title: string.isRequired,
  description: string
};

export default Alert;
