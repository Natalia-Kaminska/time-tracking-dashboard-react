import styles from './Header.module.sass';

const Header = (props) => {
  return (
    <div className={styles.header}>
      <div className={styles['avatar-section']}>
        <img 
          className={styles.avatar}
          alt='avatar' 
          src={props.avatar} 
          width='85px' 
          height='85px'
        />
        <p 
          className={styles['avatar-header']}
        >
          Report for
        </p>
        <p 
          className={styles['avatar-name']}
        >
          {props.name}
        </p>
      </div>
      <div 
        className={styles['time-buttons-section']}
      >
        <p>Daily</p>
        <p>Weekly</p>
        <p>Monthly</p>
      </div>
    </div>
  );
};

export default Header;