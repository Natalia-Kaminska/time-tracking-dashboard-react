import React from 'react';

import styles from './Dashboard.module.sass';

const Dashboard = (props) => {

  return (
    <section
      className={styles.dashboard}
    >
      <div className={styles.header}></div>
      <div className={styles.work}></div>
      <div className={styles.play}></div>
      <div className={styles.study}></div>
      <div className={styles.exercise}></div>
      <div className={styles.social}></div>
      <div className={styles['self-care']}></div>
    </section>
  );
};

export default Dashboard;