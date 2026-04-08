import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import OptIn from '../components/OptIn';
import FaqSection from '../components/FaqSection';
import ImagePlaceholder from '../components/ImagePlaceholder';
import usePageMeta from '../hooks/usePageMeta';
import { YOUTUBE_CHANNEL_URL } from '../config';
import { LATEST_VIDEO_ID } from 'virtual:youtube-latest';
import styles from './HomePage.module.css';

const FAQS = [
  {
    q: 'Where are you located?',
    a: 'I\'m based in Montgomery County, PA — right in the Philadelphia suburbs. I teach guitar in-person locally and online to students anywhere.',
  },
  {
    q: 'Do you offer guitar lessons?',
    a: 'Yes! I offer guitar lessons for complete beginners of all ages — kids, teens, adults, and seniors. Lessons are available in-person in Montgomery County, PA or online via video call. Standard sessions are 45 minutes, with 30- and 60-minute options available.',
  },
  {
    q: 'What music production services do you offer?',
    a: 'I offer recording, mixing, and mastering from my home studio in Montgomery County, PA. Rates start at $50/hr for recording, $75/song for mixing, and $40/song for mastering. Single, EP, and album packages are also available.',
  },
  {
    q: 'Do you have any free resources?',
    a: 'Yes — sign up on this page and I\'ll send you a free Home Studio Starter Guide: practical advice on recording decent music at home without spending a fortune on gear.',
  },
  {
    q: 'How do I get in touch?',
    a: 'Head to the Contact page and fill out the form — I typically respond within 24 hours. You can also reach me on Instagram @craigallenmusic.',
  },
  {
    q: 'Do you post new content regularly?',
    a: 'I post new videos to YouTube covering guitar playing, home recording tips, gear, and songwriting. Subscribe to the channel to stay updated.',
  },
];

function ServicesHub() {
  return (
    <section className={styles.services}>
      <div className="container--wide">
        <span className="label">What I offer</span>
        <div className={styles.servicesGrid}>

          <div className={styles.serviceCard}>
            <span className={styles.serviceIcon}>⏺</span>
            <h2 className={styles.serviceHeading}>Music Production</h2>
            <p className={styles.serviceBody}>
              Recording, mixing, and mastering from a home studio in the
              Philadelphia suburbs. Honest rates, personal attention,
              and a genuine love for the craft.
            </p>
            <ul className={styles.servicePoints}>
              <li>Recording from $50/hr</li>
              <li>Mixing from $75/song</li>
              <li>Mastering from $40/song</li>
              <li>Single, EP &amp; album packages</li>
            </ul>
            <Link to="/services" className={styles.serviceLink}>
              Services &amp; rates &rarr;
            </Link>
          </div>

          <div className={styles.serviceCard}>
            <span className={styles.serviceIcon}>♩</span>
            <h2 className={styles.serviceHeading}>Guitar Lessons</h2>
            <p className={styles.serviceBody}>
              In-person in Montgomery County, PA or online via video call.
              Beginners of all ages welcome — kids, teens, adults, seniors.
              Standard 45-minute sessions with flexible scheduling.
            </p>
            <ul className={styles.servicePoints}>
              <li>Complete beginners always welcome</li>
              <li>Rock, folk, blues, fingerstyle &amp; more</li>
              <li>No music reading required</li>
              <li>Starting at $35</li>
            </ul>
            <Link to="/services" className={styles.serviceLink}>
              Lesson info &amp; pricing &rarr;
            </Link>
          </div>

          <div className={styles.serviceCard}>
            <span className={styles.serviceIcon}>★</span>
            <h2 className={styles.serviceHeading}>Membership</h2>
            <p className={styles.serviceBody}>
              A community for musicians serious about their craft &mdash; guitar technique,
              home recording, and songwriting process. Built by someone doing this
              for 20 years in a basement.
            </p>
            <ul className={styles.servicePoints}>
              <li>Guitar, recording &amp; songwriting lessons</li>
              <li>Behind-the-scenes on The Rearview EP</li>
              <li>Private community (small &amp; intentional)</li>
              <li>Founding rate: $7/month &mdash; locked forever</li>
            </ul>
            <Link to="/membership" className={styles.serviceLink}>
              Join the membership &rarr;
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}

function VideoAbout() {
  if (!LATEST_VIDEO_ID) return null;

  return (
    <section className={styles.videoAbout}>
      <div className="container--wide">
        <div className={styles.videoAboutGrid}>

          {/* Video column */}
          <div className={styles.videoCol}>
            <span className="label">Latest video</span>
            <div className={styles.videoWrap}>
              <iframe
                src={`https://www.youtube.com/embed/${LATEST_VIDEO_ID}`}
                title="Craig Allen Music — Latest Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </div>
            <p className={styles.videoNote}>
              <a href={YOUTUBE_CHANNEL_URL} target="_blank" rel="noopener noreferrer">
                Subscribe on YouTube &rarr;
              </a>
            </p>
          </div>

          {/* About column */}
          <div className={styles.aboutCol}>
            <span className="label">About</span>
            {/* CUSTOMIZE: Replace with your own bio (2–3 sentences max) */}
            <p className={styles.aboutText}>
              I&rsquo;ve been playing guitar and writing songs my whole life.
              Based in Montgomery County, PA, I record everything in my basement studio
              and teach guitar to students of all ages &mdash; in-person and online.
              This site is where I share what I&rsquo;m learning.
            </p>
            <Link to="/about" className={styles.aboutMore}>Full story &rarr;</Link>
          </div>

        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  usePageMeta({
    title: 'Craig Allen Music | Guitar Lessons & Recording — Montgomery County, PA',
    description: 'Guitar lessons for beginners of all ages — in-person in Montgomery County, PA or online. Also offering recording, mixing, and mastering from a home studio in the Philadelphia suburbs.',
  });

  return (
    <>
      <Hero />
      <ServicesHub />
      <VideoAbout />
      <OptIn />
      <FaqSection faqs={FAQS} />
    </>
  );
}
