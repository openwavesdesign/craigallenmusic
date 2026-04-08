import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
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
          <a href="https://craigallen.bandcamp.com/" target="_blank" rel="noopener noreferrer" className={styles.link}>Music</a>
          <NavLink to="/services" className={navLinkClass}>Services</NavLink>
          <NavLink to="/membership" className={navLinkClass}>Membership</NavLink>
          <NavLink to="/contact" className={styles.contactBtn}>Contact</NavLink>
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
          <a href="https://craigallen.bandcamp.com/" target="_blank" rel="noopener noreferrer" className={styles.drawerLink} onClick={close}>Music</a>
          <NavLink to="/services" className={styles.drawerLink} onClick={close}>Services</NavLink>
          <NavLink to="/membership" className={styles.drawerLink} onClick={close}>Membership</NavLink>
          <NavLink to="/contact" className={styles.drawerContactBtn} onClick={close}>Contact</NavLink>
        </div>
      </div>
    </nav>
  );
}
