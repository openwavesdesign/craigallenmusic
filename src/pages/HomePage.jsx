import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import LatestVideo from '../components/LatestVideo';
import OptIn from '../components/OptIn';
import About from '../components/About';
import FaqSection from '../components/FaqSection';
import usePageMeta from '../hooks/usePageMeta';
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
            <Link to="/lessons" className={styles.serviceLink}>
              Lesson info &amp; pricing &rarr;
            </Link>
          </div>

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
            <Link to="/production" className={styles.serviceLink}>
              Services &amp; rates &rarr;
            </Link>
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
      <OptIn />
      <ServicesHub />
      <LatestVideo />
      <FaqSection faqs={FAQS} />
      <About />
    </>
  );
}
