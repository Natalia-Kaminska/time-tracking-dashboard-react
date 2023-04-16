import avatar from '../../images/image-jeremy.png'

import styles from './Dashboard.module.sass';
import Header from './Header/Header';

const Dashboard = (props) => {

  return (
    <section
      className={styles.dashboard}
    >
      <Header 
        class={styles.header} 
        name={'Jeremy Robson'}
        avatar={avatar}
      />
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