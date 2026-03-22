import { YOUTUBE_CHANNEL_URL } from '../config';
import styles from './Nav.module.css';

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <div className="container--wide">
        <a href="#" className={styles.name}>Craig Allen Music</a>
        <a
          href={YOUTUBE_CHANNEL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.ytLink}
        >
          YouTube &rarr;
        </a>
      </div>
    </nav>
  );
}
