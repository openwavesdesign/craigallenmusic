import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { YOUTUBE_CHANNEL_URL } from '../config';
import styles from './Nav.module.css';

export default function Nav() {
  const [open, setOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    isActive ? `${styles.link} ${styles.linkActive}` : styles.link;

  const close = () => setOpen(false);

  return (
    <nav className={styles.nav} aria-label="Main navigation">
      <div className={`container--wide ${styles.inner}`}>
        <Link to="/" className={styles.name} onClick={close}>
          Craig Allen Music
        </Link>

        <div className={styles.links}>
          <NavLink to="/" end className={navLinkClass}>Home</NavLink>
          <NavLink to="/about" className={navLinkClass}>About</NavLink>
          <NavLink to="/lessons" className={navLinkClass}>Lessons</NavLink>
          <NavLink to="/production" className={navLinkClass}>Production</NavLink>
          <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
          <a
            href={YOUTUBE_CHANNEL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ytLink}
          >
            YouTube &rarr;
          </a>
        </div>

        <button
          className={styles.burger}
          onClick={() => setOpen(o => !o)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          <span className={`${styles.bar} ${open ? styles.bar1Open : ''}`} />
          <span className={`${styles.bar} ${open ? styles.bar2Open : ''}`} />
          <span className={`${styles.bar} ${open ? styles.bar3Open : ''}`} />
        </button>
      </div>

      <div className={`${styles.drawer} ${open ? styles.drawerOpen : ''}`}>
        <div className="container--wide">
          <NavLink to="/" end className={styles.drawerLink} onClick={close}>Home</NavLink>
          <NavLink to="/about" className={styles.drawerLink} onClick={close}>About</NavLink>
          <NavLink to="/lessons" className={styles.drawerLink} onClick={close}>Lessons</NavLink>
          <NavLink to="/production" className={styles.drawerLink} onClick={close}>Production</NavLink>
          <NavLink to="/contact" className={styles.drawerLink} onClick={close}>Contact</NavLink>
          <a
            href={YOUTUBE_CHANNEL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.drawerLink}
            onClick={close}
          >
            YouTube &rarr;
          </a>
        </div>
      </div>
    </nav>
  );
}
