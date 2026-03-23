import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import LatestVideo from '../components/LatestVideo';
import OptIn from '../components/OptIn';
import About from '../components/About';
import styles from './HomePage.module.css';

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
  return (
    <>
      <Hero />
      <ServicesHub />
      <LatestVideo />
      <OptIn />
      <About />
    </>
  );
}
