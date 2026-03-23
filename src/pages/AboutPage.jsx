import { Link } from 'react-router-dom';
import ImagePlaceholder from '../components/ImagePlaceholder';
import styles from './AboutPage.module.css';

export default function AboutPage() {
  return (
    <>
      {/* ── Page header ─────────────────────────────────────────── */}
      <section className={styles.header}>
        <div className="container">
          <span className="label">About</span>
          {/* CUSTOMIZE: Your name or tagline */}
          <h1 className={styles.h1}>Craig Allen</h1>
          <p className={styles.sub}>Guitarist. Songwriter. Home recorder.</p>
        </div>
      </section>

      {/* ── Featured image ──────────────────────────────────────── */}
      <section className={styles.imageSection}>
        <div className="container--wide">
          <ImagePlaceholder label="Portrait photo" aspectRatio="3/2" />
        </div>
      </section>

      {/* ── Bio ─────────────────────────────────────────────────── */}
      <section className={styles.section}>
        <div className="container">
          <span className="label">My story</span>
          {/* CUSTOMIZE: Replace with your full bio */}
          <div className={styles.prose}>
            <p>
              I picked up my first guitar at [age] and never really put it down.
              What started as learning songs off the radio turned into a lifelong
              obsession with tone, songwriting, and the art of capturing music on tape
              &mdash; or, these days, hard drive.
            </p>
            <p>
              Over the years I&rsquo;ve played in [bands/projects], written [number] of
              original songs, and spent more hours than I care to count chasing the right
              sound in my basement studio. Every record I&rsquo;ve worked on has taught
              me something new, and I genuinely believe you never stop learning on this
              instrument.
            </p>
            <p>
              I started sharing my process on YouTube because I wished someone had shown
              me this stuff earlier. If you&rsquo;re a beginner trying to figure out
              where to start, or a hobbyist home recorder trying to get your mixes to
              translate &mdash; this is the place.
            </p>
          </div>
        </div>
      </section>

      {/* ── Second image ────────────────────────────────────────── */}
      <section className={styles.imageSection}>
        <div className="container">
          <ImagePlaceholder label="Live or studio photo" aspectRatio="4/3" />
        </div>
      </section>

      {/* ── Musical background ──────────────────────────────────── */}
      <section className={styles.section}>
        <div className="container">
          <span className="label">Musical background</span>
          <div className={styles.prose}>
            {/* CUSTOMIZE: Genres, influences, instruments */}
            <p>
              My roots are in [genres &mdash; e.g., blues, classic rock, folk], but I
              pull from all over. My biggest influences include [Artist 1], [Artist 2],
              and [Artist 3]. Beyond guitar I also play [other instruments if any], which
              informs how I think about arrangements and production.
            </p>
          </div>
        </div>
      </section>

      {/* ── Studio & gear ───────────────────────────────────────── */}
      <section className={styles.section}>
        <div className="container">
          <span className="label">Studio &amp; gear</span>
          <div className={styles.gearGrid}>
            {/* CUSTOMIZE: Replace with your actual gear */}
            <div className={styles.gearGroup}>
              <h3 className={styles.gearHeading}>Guitars</h3>
              <ul className={styles.gearList}>
                <li>[Guitar 1 &mdash; e.g., 2018 Gibson Les Paul Standard]</li>
                <li>[Guitar 2 &mdash; e.g., Fender American Stratocaster]</li>
                <li>[Guitar 3 &mdash; e.g., Martin D-28 acoustic]</li>
              </ul>
            </div>
            <div className={styles.gearGroup}>
              <h3 className={styles.gearHeading}>Amplifiers</h3>
              <ul className={styles.gearList}>
                <li>[Amp 1]</li>
                <li>[Amp 2]</li>
              </ul>
            </div>
            <div className={styles.gearGroup}>
              <h3 className={styles.gearHeading}>Recording</h3>
              <ul className={styles.gearList}>
                <li>[DAW &mdash; e.g., Reaper / Pro Tools / Logic]</li>
                <li>[Interface &mdash; e.g., Focusrite Scarlett 2i2]</li>
                <li>[Microphone(s)]</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Studio image ────────────────────────────────────────── */}
      <section className={styles.imageSection}>
        <div className="container--wide">
          <ImagePlaceholder label="Studio / workspace photo" aspectRatio="16/7" />
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────── */}
      <section className={styles.cta}>
        <div className="container">
          <p className={styles.ctaText}>
            Interested in taking lessons or working on a project together?
          </p>
          <div className={styles.ctaLinks}>
            <Link to="/lessons" className="btn-primary">Guitar lessons</Link>
            <Link to="/production" className={styles.ctaSecondary}>Production services &rarr;</Link>
          </div>
        </div>
      </section>
    </>
  );
}
