import { useState } from 'react';
import FaqSection from '../components/FaqSection';
import usePageMeta from '../hooks/usePageMeta';
import { KIT_MEMBERSHIP_FORM_ID } from '../config';
import styles from './MembershipPage.module.css';

const FAQS = [
  {
    q: 'What exactly is the founding rate?',
    a: '$7/month, locked permanently at sign-up. When I raise the price for new members — and I will as the content library grows — your rate stays at $7 forever. It\'s not a trial or a promotional period. It\'s the price you pay for coming in early, and it never changes.',
  },
  {
    q: 'Is there content in there right now, or is this pre-launch?',
    a: 'This is the pre-launch waitlist. When the membership opens, there will be real content waiting for you on day one — not an empty room. The founding rate and early access are the reward for signing up before the doors officially open.',
  },
  {
    q: 'What if I\'m already a Patreon supporter?',
    a: 'The membership is different from Patreon. Patreon is direct support for the music — demos, early listens. The membership is structured content: lessons, recording advice, community. They\'re not the same thing, and I\'m not asking you to choose. But if you want to join the membership too, you\'ll get the same founding rate as everyone else.',
  },
  {
    q: 'Can I cancel any time?',
    a: 'Yes. No contracts, no commitments beyond the month you\'re in. If you cancel and want to come back later, you\'ll rejoin at whatever the current rate is — so the founding rate is worth keeping. But there\'s no pressure and no trap.',
  },
  {
    q: 'How many founding member spots are there?',
    a: 'Limited to 50. When those are filled, the founding rate closes and the regular price takes over. I\'ll let the waitlist know before that happens so you have time to decide.',
  },
];

function KitForm({ id, inputId, buttonLabel, note, dark = false }) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  async function handleSubmit(e) {
    e.preventDefault();
    if (!email.trim()) return;
    setStatus('loading');
    try {
      const res = await fetch(
        `https://app.kit.com/forms/${KIT_MEMBERSHIP_FORM_ID}/subscriptions`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams({ email_address: email.trim() }),
        }
      );
      setStatus(res.ok ? 'success' : 'error');
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className={styles.successState} role="status">
        <p className={`${styles.successMsg} ${dark ? styles.successMsgDark : ''}`}>
          Check your inbox.
        </p>
        <p className={styles.successSub}>
          Click the confirmation link in the email to secure your spot.
        </p>
      </div>
    );
  }

  return (
    <form
      id={id}
      className={`${styles.formWrap} ${dark ? styles.formWrapDark : ''}`}
      onSubmit={handleSubmit}
      noValidate
    >
      <div className={styles.formRow}>
        <input
          id={inputId}
          className={`${styles.emailInput} ${dark ? styles.emailInputDark : ''}`}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          required
          autoComplete="email"
          aria-label="Email address"
          disabled={status === 'loading'}
        />
        <button
          type="submit"
          className={`${styles.submitBtn} ${dark ? styles.submitBtnDark : ''}`}
          disabled={status === 'loading'}
        >
          {status === 'loading' ? 'Sending\u2026' : buttonLabel}
        </button>
      </div>
      {status === 'error' && (
        <p className={styles.errorMsg} role="alert">
          Something went wrong &mdash;{' '}
          <button type="button" className={styles.retryBtn} onClick={() => setStatus('idle')}>
            try again
          </button>
          .
        </p>
      )}
      <p className={`${styles.formNote} ${dark ? styles.formNoteDark : ''}`}>{note}</p>
    </form>
  );
}

const INSIDE_ITEMS = [
  {
    icon: '🎸',
    title: 'Guitar & Technique',
    desc: 'Chord voicings, rhythm playing, the things that make a simple part sound like it belongs on a record. Real technique for real songs.',
  },
  {
    icon: '🎛️',
    title: 'Home Recording',
    desc: 'Honest advice for recording in imperfect spaces. No gear porn — just what actually moves the needle when you\'re working alone in a room.',
  },
  {
    icon: '✍️',
    title: 'Songwriting Process',
    desc: 'Behind the scenes on songs as they\'re being written and recorded. The messy middle, not just the finished product.',
  },
  {
    icon: '👥',
    title: 'Community',
    desc: 'A small, serious group of working musicians. Share your work, get real feedback, be around people who understand what it costs to keep making things.',
  },
];

const FOR_ITEMS = [
  {
    text: (
      <>
        <strong>Musicians who are making things</strong> — not waiting until conditions are perfect, but working with what they have, in whatever room they have.
      </>
    ),
  },
  {
    text: (
      <>
        <strong>Home recorders who want honest advice</strong> — not which preamp to buy, but what actually makes recordings sound like you meant them to.
      </>
    ),
  },
  {
    text: (
      <>
        <strong>Guitarists who want to play better</strong> — technique that serves the song, not technique for its own sake.
      </>
    ),
  },
  {
    text: (
      <>
        <strong>People who are tired of performing enthusiasm</strong> — who want a creative community that&rsquo;s honest about how hard this is and does it anyway.
      </>
    ),
  },
];

export default function MembershipPage() {
  usePageMeta({
    title: 'Membership — Founding Members Now Open | Craig Allen Music',
    description: 'Join Craig Allen\'s founding membership for $7/month — guitar technique, home recording, songwriting process, and a serious creative community. Founding rate locked forever.',
  });

  return (
    <>
      {/* ── Hero ────────────────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className="container">
          <span className="label">Founding Members Now Open</span>
          <h1 className={styles.h1}>
            Make music.<br />
            <em className={styles.h1Em}>In the room</em><br />
            where it happens.
          </h1>
          <p className={styles.heroSub}>
            A membership for musicians who are serious about their craft — guitar, home recording, songwriting process, and a community of people who get it. Built by someone who&rsquo;s been doing this for 20 years in a basement.
          </p>

          <div className={styles.foundingPill}>
            <span className={styles.foundingDot} aria-hidden="true" />
            Founding rate: $7/month — locked permanently
          </div>

          <KitForm
            id="heroForm"
            inputId="heroEmail"
            buttonLabel="Reserve my spot"
            note="No spam. Unsubscribe any time. Your founding rate locks in at sign-up."
          />
        </div>
      </section>

      <hr className={styles.divider} />

      {/* ── What this is ────────────────────────────────────────── */}
      <section className={styles.section}>
        <div className="container">
          <span className="label">What this is</span>
          <div className={styles.aboutGrid}>
            <blockquote className={styles.aboutStatement}>
              &ldquo;Not a course platform. Not a YouTube channel. The room behind the room.&rdquo;
            </blockquote>
            <div className={styles.aboutBody}>
              <p>I&rsquo;ve been making music for over 20 years — in bands, solo, ambient records, and now acoustic singer-songwriter work that&rsquo;s honest in a way my earlier stuff wasn&rsquo;t.</p>
              <p>I record in a basement. Real gear, imperfect room, songs that are actually about something. The membership is where I share what&rsquo;s happening — the process, the lessons learned, the techniques that actually work when you&rsquo;re not in a professional studio.</p>
              <p>It&rsquo;s also a community. For musicians who are still figuring it out and doing it anyway.</p>
            </div>
          </div>
        </div>
      </section>

      <hr className={styles.divider} />

      {/* ── What's inside ───────────────────────────────────────── */}
      <section className={styles.section}>
        <div className="container">
          <span className="label">What&rsquo;s inside</span>
          <div className={styles.insideGrid}>
            {INSIDE_ITEMS.map((item) => (
              <div key={item.title} className={styles.insideItem}>
                <span className={styles.insideIcon} aria-hidden="true">{item.icon}</span>
                <h3 className={styles.insideTitle}>{item.title}</h3>
                <p className={styles.insideDesc}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Founding offer ──────────────────────────────────────── */}
      <section className={styles.offerSection}>
        <div className="container">
          <span className={`label ${styles.offerLabel}`}>The founding member offer</span>
          <div className={styles.offerLayout}>
            <div className={styles.offerPriceBlock}>
              <p className={styles.offerPriceLabel}>Founding rate — locked forever</p>
              <p className={styles.offerPrice}>
                <sup className={styles.offerPriceSup}>$</sup>7
                <sub className={styles.offerPriceSub}>/mo</sub>
              </p>
              <p className={styles.offerRegular}>Regular price: $9/month</p>
              <div className={styles.offerLocked}>
                <span aria-hidden="true">🔒</span> Your rate never increases
              </div>
            </div>

            <div className={styles.offerDetails}>
              <h2 className={styles.offerDetailTitle}>Come in early. Stay at this price forever.</h2>
              <p className={styles.offerDetailBody}>
                The founding rate exists because I&rsquo;m still building this. You get the lowest price it&rsquo;ll ever be, and in return you help shape what gets built first. That&rsquo;s the deal — and it&rsquo;s a real one.
              </p>
              <ul className={styles.offerPerks}>
                <li>Full access to the lesson and recording library</li>
                <li>Behind-the-scenes on The Rearview EP</li>
                <li>All PDF guides, chord charts, and tabs</li>
                <li>Private community — small and intentional</li>
                <li>Direct input on what gets built next</li>
                <li>Founding Member status — permanent</li>
              </ul>

              <div className={styles.offerFormWrap}>
                <KitForm
                  id="offerForm"
                  inputId="offerEmail"
                  buttonLabel="Lock in my rate"
                  note="Cancel any time. No commitment beyond the month you're in."
                  dark
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Who this is for ─────────────────────────────────────── */}
      <section className={styles.section}>
        <div className="container">
          <span className="label">Who this is for</span>
          <ul className={styles.forList}>
            {FOR_ITEMS.map((item, i) => (
              <li key={i} className={styles.forItem}>
                <span className={styles.forCheck} aria-hidden="true">✓</span>
                <span className={styles.forText}>{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Personal note ───────────────────────────────────────── */}
      <section className={styles.noteSection}>
        <div className="container">
          <span className={`label ${styles.noteLabel}`}>A note from Craig</span>
          <blockquote className={styles.noteBody}>
            I built this because I kept making content that didn&rsquo;t fit anywhere else. Lessons that were too specific for YouTube. Process videos that assumed you cared about the whole arc of a song, not just a technique tip. A community that didn&rsquo;t exist yet for the kind of musician I am — mid-career, still learning, not interested in performing expertise I don&rsquo;t have.
            <br /><br />
            If that sounds familiar, this is for you. The founding rate is low because I&rsquo;m still building it. That&rsquo;s not a disclaimer — it&rsquo;s the honest reason to come in now rather than later.
          </blockquote>
          <p className={styles.noteSig}>Craig Allen</p>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────────── */}
      <FaqSection faqs={FAQS} label="Questions" />
    </>
  );
}
