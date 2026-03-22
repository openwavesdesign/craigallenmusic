import { YOUTUBE_CHANNEL_URL } from '../config';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container--wide ${styles.inner}`}>
        <a
          href={YOUTUBE_CHANNEL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.ytLink}
        >
          YouTube &rarr;
        </a>
        <span className={styles.copy}>
          &copy; {new Date().getFullYear()} Craig Allen Music
        </span>
      </div>
    </footer>
  );
}
