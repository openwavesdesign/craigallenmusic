import { Link } from 'react-router-dom';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={`container ${styles.inner}`}>
        <span className={styles.eyebrow}>Montgomery County, PA</span>
        {/* CUSTOMIZE: Update the h1 if needed */}
        <h1 className={styles.name}>
          Craig<br /><em>Allen</em>
        </h1>
        <p className={styles.sub}>
          Guitar lessons for all ages &middot; music production &middot; original songs
        </p>
        <div className={styles.ctas}>
          <Link to="/lessons" className="btn-primary">Guitar Lessons</Link>
          <a href="#optin" className={styles.ctaSecondary}>Free Studio Guide &darr;</a>
        </div>
      </div>
    </section>
  );
}
