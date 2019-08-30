import React from 'react';

import notFoundImage from '../../../../assets/images/notFound.jpg';

import styles from './styles.module.scss';

function NotFound() {
  return (
    <div className={styles.notFoundWrapper}>
      <div className={styles.notFoundInside}>
        <img className={styles.image} src={notFoundImage} alt="Not Found" />
        <h1 className={styles.title}>Oops! The page you were looking for doesn&#39;t exist</h1>
        <p className={styles.description}>
          You may have misstyped the address or the page may have moved.
        </p>
      </div>
    </div>
  );
}

export default NotFound;
