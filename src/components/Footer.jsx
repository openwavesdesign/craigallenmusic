import { Link } from 'react-router-dom';
import { YOUTUBE_CHANNEL_URL, INSTAGRAM_URL } from '../config';
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
          <Link to="/contact" className={styles.navLink}>Contact</Link>
        </nav>
        <div className={styles.right}>
          <div className={styles.socials}>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="Instagram"
            >
              Instagram &rarr;
            </a>
            <a
              href={YOUTUBE_CHANNEL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="YouTube"
            >
              YouTube &rarr;
            </a>
          </div>
          <span className={styles.copy}>
            &copy; {new Date().getFullYear()} Craig Allen Music
          </span>
        </div>
      </div>
    </footer>
  );
}
