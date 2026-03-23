import { useState } from 'react';
import ImagePlaceholder from '../components/ImagePlaceholder';
import usePageMeta from '../hooks/usePageMeta';
import styles from './LessonsPage.module.css';
import { CONTACT_FORM_URL } from '../config';

const BENEFITS = [
  {
    heading: 'Stress relief & emotional wellbeing',
    body: 'Playing music activates the brain\'s reward system and reduces cortisol levels. Even a 15-minute practice session can shift your mood.',
  },
  {
    heading: 'Builds patience and focus',
    body: 'Learning a chord progression or picking pattern trains you to break a skill into small steps — a habit that carries over into work, school, and life.',
  },
  {
    heading: 'Boosts memory and brain health',
    body: 'Research consistently shows that musical training strengthens neural connections and may help protect against cognitive decline.',
  },
  {
    heading: 'A creative outlet that\'s yours forever',
    body: 'Unlike team sports or group hobbies, guitar goes wherever you go. A campfire, a living room, a quiet afternoon — it\'s always available.',
  },
  {
    heading: 'You\'ll hear music differently',
    body: 'Once you understand how a chord is built or a riff is phrased, every song you love takes on a new dimension.',
  },
  {
    heading: 'It\'s genuinely fun',
    body: 'The moment you play your first recognizable song is one of the best feelings. And it keeps getting better from there.',
  },
];

const PRICING = [
  { option: 'Intro lesson', duration: '30 min', price: '$35', note: 'Great for young beginners or first-timers' },
  { option: 'Standard lesson', duration: '45 min', price: '$60', note: 'Most popular — the right balance of time and focus', highlight: true },
  { option: 'Extended lesson', duration: '60 min', price: '$75', note: 'Ideal for working through complex material' },
  { option: 'Monthly package', duration: '4 × 45 min', price: '$220', note: 'Save $20 — billed monthly, consistent progress' },
];

export default function LessonsPage() {
  usePageMeta({
    title: 'Guitar Lessons in Montgomery County, PA | Craig Allen Music',
    description: 'Beginner guitar lessons in-person in Montgomery County, PA or online via video call. All ages welcome — kids, teens, adults. Standard 45-minute sessions starting at $35. Flexible scheduling.',
  });

  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [form, setForm] = useState({
    name: '', email: '', phone: '',
    format: '', who: '', level: '',
    goals: '', message: '',
  });

  const set = (field) => (e) => setForm(f => ({ ...f, [field]: e.target.value }));

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch(CONTACT_FORM_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({ ...form, _subject: 'Lesson inquiry — Craig Allen Music' }),
      });
      if (res.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  return (
    <>
      {/* ── Page header ─────────────────────────────────────────── */}
      <section className={styles.header}>
        <div className="container">
          <span className="label">Instruction</span>
          <h1 className={styles.h1}>Guitar Lessons</h1>
          <p className={styles.sub}>
            In-person in Montgomery County, PA or online &mdash; for beginners of all ages, taught at your pace.
          </p>
        </div>
      </section>

      {/* ── Hero image ──────────────────────────────────────────── */}
      <section className={styles.imageSection}>
        <div className="container--wide">
          <ImagePlaceholder label="Lesson / guitar photo" aspectRatio="16/6" />
        </div>
      </section>

      {/* ── Why learn an instrument ─────────────────────────────── */}
      <section className={styles.section}>
        <div className="container--wide">
          <span className="label">Why learn guitar</span>
          <h2 className={styles.h2}>The benefits of learning an instrument</h2>
          <div className={styles.benefitsGrid}>
            {BENEFITS.map((b) => (
              <div key={b.heading} className={styles.benefitCard}>
                <h3 className={styles.benefitHeading}>{b.heading}</h3>
                <p className={styles.benefitBody}>{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── About the lessons ───────────────────────────────────── */}
      <section className={styles.section}>
        <div className="container--wide">
          <span className="label">What to expect</span>
          <h2 className={styles.h2}>How lessons work</h2>
          <div className={styles.detailsLayout}>
            <div className={styles.detailsList}>
              <div className={styles.detailItem}>
                <span className={styles.detailIcon}>●</span>
                <div>
                  <strong>In-person or online</strong>
                  <p>Lessons are available at [your location] or via video call &mdash; whichever works best for you.</p>
                </div>
              </div>
              <div className={styles.detailItem}>
                <span className={styles.detailIcon}>●</span>
                <div>
                  <strong>All ages welcome</strong>
                  <p>Kids, teens, adults, seniors &mdash; it&rsquo;s never too early or too late to pick up the guitar.</p>
                </div>
              </div>
              <div className={styles.detailItem}>
                <span className={styles.detailIcon}>●</span>
                <div>
                  <strong>Standard 45-minute lessons</strong>
                  <p>45 minutes is the sweet spot for most students. 30-minute sessions are available for younger beginners, and 60-minute sessions for advanced work or focused sessions.</p>
                </div>
              </div>
              <div className={styles.detailItem}>
                <span className={styles.detailIcon}>●</span>
                <div>
                  <strong>Play the music you love</strong>
                  <p>Rock, folk, blues, country, pop, fingerstyle &mdash; we build around your interests and goals, not a fixed curriculum.</p>
                </div>
              </div>
              <div className={styles.detailItem}>
                <span className={styles.detailIcon}>●</span>
                <div>
                  <strong>No prior experience required</strong>
                  <p>True beginners are always welcome. We&rsquo;ll cover proper technique from day one to build a solid foundation.</p>
                </div>
              </div>
              <div className={styles.detailItem}>
                <span className={styles.detailIcon}>●</span>
                <div>
                  <strong>Reading music is optional</strong>
                  <p>We can work with tabs and chord charts. If you want to learn to read notation, we can do that too &mdash; totally up to you.</p>
                </div>
              </div>
            </div>
            <div className={styles.detailsImage}>
              <ImagePlaceholder label="Teaching photo" aspectRatio="3/4" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Pricing ─────────────────────────────────────────────── */}
      <section className={styles.section}>
        <div className="container">
          <span className="label">Rates</span>
          <h2 className={styles.h2}>Pricing</h2>
          <p className={styles.pricingNote}>
            Suggested rates are listed below. Reach out to confirm current availability and pricing &mdash; I&rsquo;m happy to discuss what works for your schedule and budget.
          </p>
          <div className={styles.pricingTable}>
            {PRICING.map((row) => (
              <div
                key={row.option}
                className={`${styles.pricingRow} ${row.highlight ? styles.pricingRowHighlight : ''}`}
              >
                <div className={styles.pricingLeft}>
                  <span className={styles.pricingOption}>{row.option}</span>
                  <span className={styles.pricingDuration}>{row.duration}</span>
                </div>
                <div className={styles.pricingRight}>
                  <span className={styles.pricingPrice}>{row.price}</span>
                  <span className={styles.pricingRowNote}>{row.note}</span>
                </div>
              </div>
            ))}
          </div>
          <p className={styles.pricingDisclaimer}>
            * Packages are billed monthly. A minimum 24-hour cancellation notice is appreciated.
          </p>
        </div>
      </section>

      {/* ── Contact form ────────────────────────────────────────── */}
      <section className={styles.section} id="contact">
        <div className="container">
          <span className="label">Get in touch</span>
          <h2 className={styles.h2}>Inquire about lessons</h2>
          <p className={styles.formIntro}>
            I don&rsquo;t offer online booking &mdash; just reach out directly and we&rsquo;ll find a time that works. I typically respond within 24 hours.
          </p>

          {status === 'success' ? (
            <div className={styles.successBox}>
              <p className={styles.successText}>Message received &mdash; I&rsquo;ll be in touch soon!</p>
            </div>
          ) : (
            <form className={styles.form} onSubmit={handleSubmit} noValidate>
              <div className={styles.row2}>
                <div className={styles.field}>
                  <label className={styles.fieldLabel} htmlFor="lessons-name">Name *</label>
                  <input
                    id="lessons-name"
                    className={styles.input}
                    type="text"
                    value={form.name}
                    onChange={set('name')}
                    required
                    disabled={status === 'loading'}
                  />
                </div>
                <div className={styles.field}>
                  <label className={styles.fieldLabel} htmlFor="lessons-email">Email *</label>
                  <input
                    id="lessons-email"
                    className={styles.input}
                    type="email"
                    value={form.email}
                    onChange={set('email')}
                    required
                    disabled={status === 'loading'}
                  />
                </div>
              </div>

              <div className={styles.field}>
                <label className={styles.fieldLabel} htmlFor="lessons-phone">Phone (optional)</label>
                <input
                  id="lessons-phone"
                  className={styles.input}
                  type="tel"
                  value={form.phone}
                  onChange={set('phone')}
                  disabled={status === 'loading'}
                />
              </div>

              <div className={styles.row2}>
                <div className={styles.field}>
                  <label className={styles.fieldLabel} htmlFor="lessons-format">Lesson format</label>
                  <select
                    id="lessons-format"
                    className={styles.select}
                    value={form.format}
                    onChange={set('format')}
                    disabled={status === 'loading'}
                  >
                    <option value="">Select one&hellip;</option>
                    <option value="in-person">In-person</option>
                    <option value="online">Online (video call)</option>
                    <option value="not-sure">Not sure yet</option>
                  </select>
                </div>
                <div className={styles.field}>
                  <label className={styles.fieldLabel} htmlFor="lessons-who">Who will be taking lessons?</label>
                  <select
                    id="lessons-who"
                    className={styles.select}
                    value={form.who}
                    onChange={set('who')}
                    disabled={status === 'loading'}
                  >
                    <option value="">Select one&hellip;</option>
                    <option value="myself-adult">Myself (adult)</option>
                    <option value="child-under-12">My child (under 12)</option>
                    <option value="teen-12-17">My teen (12–17)</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className={styles.field}>
                <label className={styles.fieldLabel} htmlFor="lessons-level">Experience level</label>
                <select
                  id="lessons-level"
                  className={styles.select}
                  value={form.level}
                  onChange={set('level')}
                  disabled={status === 'loading'}
                >
                  <option value="">Select one&hellip;</option>
                  <option value="complete-beginner">Complete beginner — never played before</option>
                  <option value="some-experience">A little experience — know a few chords</option>
                  <option value="returning">Returning after a break</option>
                  <option value="intermediate">Intermediate — looking to level up</option>
                </select>
              </div>

              <div className={styles.field}>
                <label className={styles.fieldLabel} htmlFor="lessons-goals">What style or goals interest you most?</label>
                <input
                  id="lessons-goals"
                  className={styles.input}
                  type="text"
                  placeholder="e.g. rock, fingerpicking, learning specific songs…"
                  value={form.goals}
                  onChange={set('goals')}
                  disabled={status === 'loading'}
                />
              </div>

              <div className={styles.field}>
                <label className={styles.fieldLabel} htmlFor="lessons-message">Anything else I should know?</label>
                <textarea
                  id="lessons-message"
                  className={styles.textarea}
                  rows={4}
                  value={form.message}
                  onChange={set('message')}
                  disabled={status === 'loading'}
                />
              </div>

              {status === 'error' && (
                <p className={styles.errorText}>
                  Something went wrong. Please try again or email me directly.
                </p>
              )}

              <button
                type="submit"
                className="btn-primary"
                disabled={status === 'loading'}
              >
                {status === 'loading' ? 'Sending…' : 'Send inquiry'}
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
