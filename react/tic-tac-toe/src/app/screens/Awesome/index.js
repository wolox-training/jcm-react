import React from 'react';

import styles from './styles.module.scss';

function Awesome() {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.awesome}>
        This is an <i>awesome</i> page
      </h1>
    </div>
  );
}

export default Awesome;
