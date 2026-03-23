import { Link } from 'react-router-dom';
import styles from './About.module.css';

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className="container">
        <span className="label">About</span>
        {/* CUSTOMIZE: Replace with your own bio (2–3 sentences max) */}
        <p className={styles.text}>
          I&rsquo;ve been playing guitar and writing songs my whole life.
          Based in Montgomery County, PA, I record everything in my basement studio
          and teach guitar to students of all ages &mdash; in-person and online.
          This site is where I share what I&rsquo;m learning.
        </p>
        <Link to="/about" className={styles.more}>Full story &rarr;</Link>
      </div>
    </section>
  );
}
