import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={`container ${styles.inner}`}>
        <span className={styles.eyebrow}>Craig Allen Music</span>
        {/* CUSTOMIZE: Update the h1 and tagline */}
        <h1 className={styles.name}>
          Craig<br /><em>Allen</em>
        </h1>
        <p className={styles.sub}>guitarist, songwriter, home recorder</p>
        <a href="#optin" className="btn-primary">Get the Free Guide &darr;</a>
      </div>
    </section>
  );
}
