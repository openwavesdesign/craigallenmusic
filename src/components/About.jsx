import styles from './About.module.css';

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className="container">
        <span className="label">About</span>
        {/* CUSTOMIZE: Replace with your own bio (2–3 sentences max) */}
        <p className={styles.text}>
          I&rsquo;ve been playing guitar and writing songs my whole life.
          I record everything in my basement studio.
          This site is where I share what I&rsquo;m learning.
        </p>
      </div>
    </section>
  );
}
