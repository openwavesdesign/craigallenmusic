import { Link } from 'react-router-dom';
import { YOUTUBE_CHANNEL_URL } from '../config';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container--wide ${styles.inner}`}>
        <nav className={styles.nav}>
          <Link to="/" className={styles.navLink}>Home</Link>
          <Link to="/about" className={styles.navLink}>About</Link>
          <Link to="/lessons" className={styles.navLink}>Lessons</Link>
          <Link to="/production" className={styles.navLink}>Production</Link>
          <a
            href={YOUTUBE_CHANNEL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ytLink}
          >
            YouTube &rarr;
          </a>
        </nav>
        <span className={styles.copy}>
          &copy; {new Date().getFullYear()} Craig Allen Music
        </span>
      </div>
    </footer>
  );
}
