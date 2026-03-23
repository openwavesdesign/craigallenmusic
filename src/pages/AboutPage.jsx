import { Link } from 'react-router-dom';
import ImagePlaceholder from '../components/ImagePlaceholder';
import FaqSection from '../components/FaqSection';
import usePageMeta from '../hooks/usePageMeta';
import styles from './AboutPage.module.css';

const FAQS = [
  {
    q: 'How long have you been playing guitar?',
    a: 'CUSTOMIZE: [e.g., Over 20 years — I picked it up as a kid and never really stopped. Playing, writing, and recording has been a constant throughout my life.]',
  },
  {
    q: 'Do you give guitar lessons?',
    a: 'Yes — I offer guitar lessons for complete beginners of all ages, in-person in Montgomery County, PA or online. Head to the Lessons page for details on scheduling, pricing, and how to get started.',
  },
  {
    q: 'What kind of music do you make?',
    a: 'CUSTOMIZE: [e.g., Mostly roots-influenced rock and folk — guitars front and center, songs that mean something. I record everything myself in my basement studio.]',
  },
  {
    q: 'Do you perform live?',
    a: 'CUSTOMIZE: [e.g., Occasionally — I play locally in the Montgomery County and Philadelphia area. Follow me on Instagram @craigallenmusic for updates on upcoming shows.]',
  },
  {
    q: 'How do I contact you?',
    a: 'The best way is through the Contact page on this site. You can also reach me on Instagram @craigallenmusic. I typically respond within 24 hours.',
  },
];

export default function AboutPage() {
  usePageMeta({
    title: 'About Craig Allen | Guitarist & Music Teacher — Montgomery County, PA',
    description: 'Meet Craig Allen — guitarist, songwriter, home recording enthusiast, and guitar teacher based in Montgomery County, PA.',
  });

  return (
    <>
      {/* ── Page header with full-width background image ─────────── */}
      <section className={styles.header} aria-label="Page header">
        {/* CUSTOMIZE: Replace with real <img> or CSS background-image when photo is ready */}
        <div className={styles.headerBg} aria-hidden="true">
          <ImagePlaceholder label="Portrait photo — full-width background" aspectRatio="21/9" />
        </div>
        <div className={styles.headerOverlay} aria-hidden="true" />
        <div className={`container ${styles.headerContent}`}>
          <span className="label">About</span>
          {/* CUSTOMIZE: Your name or tagline */}
          <h1 className={styles.h1}>Craig Allen</h1>
          <p className={styles.sub}>Guitarist. Songwriter. Home recorder.</p>
        </div>
      </section>

      {/* ── My story (two columns) ───────────────────────────────── */}
      <section className={styles.section}>
        <div className="container--wide">
          <span className="label">My story</span>
          <h2 className={styles.h2}>The long version</h2>
          <div className={styles.storyGrid}>
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
            <div className={styles.storyImage}>
              <ImagePlaceholder label="Live or studio photo" aspectRatio="4/3" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Studio & gear ───────────────────────────────────────── */}
      <section className={styles.section}>
        <div className="container--wide">
          <span className="label">Studio &amp; gear</span>
          <h2 className={styles.h2}>What I work with</h2>
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
      <div className={styles.studioImageWrap}>
        <div className="container--wide">
          <ImagePlaceholder label="Studio / workspace photo" aspectRatio="16/7" />
        </div>
      </div>

      <FaqSection faqs={FAQS} />

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
