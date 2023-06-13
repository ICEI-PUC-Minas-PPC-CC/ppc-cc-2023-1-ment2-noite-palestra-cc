import styles from '../css/Header.module.css';

export function Header({ children, icon }) {
  return (
    <header className={styles.header}>
      <div style={{ float: 'left' }}>{icon}</div>
      {children}
    </header>
  );
}
