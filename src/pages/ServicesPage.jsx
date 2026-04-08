import { useState } from 'react';
import ImagePlaceholder from '../components/ImagePlaceholder';
import FaqSection from '../components/FaqSection';
import usePageMeta from '../hooks/usePageMeta';
import { CONTACT_FORM_URL } from '../config';
import styles from './ServicesPage.module.css';

const PRODUCTION_FAQS = [
  {
    q: "Do I need to come to your studio to record?",
    a: "For recording sessions, yes — you'll come to my studio in Montgomery County, PA. For mixing and mastering, everything is handled remotely; you send your files digitally and we work from there.",
  },
  {
    q: "What file formats do you accept and deliver?",
    a: "For mixing, I accept WAV, AIFF, or FLAC stem files exported from your DAW. I deliver 24-bit WAV masters plus MP3s at 320kbps. For mastering, send your stereo mix as a 24-bit WAV with at least 3–6dB of headroom.",
  },
  {
    q: "How many revisions are included?",
    a: "Both mixing and mastering include 2 rounds of revisions. Additional revisions beyond that can be arranged at an hourly rate.",
  },
  {
    q: "How long does the process take?",
    a: "Turnaround depends on the project scope and current schedule. A single mix typically takes 2–5 business days; mastering is usually 1–2 days. Reach out with your project details and I can give a more accurate timeline.",
  },
  {
    q: "Do you work with all genres?",
    a: "Mostly yes — I'm most at home with guitar-driven music (rock, folk, Americana, blues, indie), but I'm comfortable across a wide range of styles. If you're unsure, just describe your project and we can figure it out.",
  },
  {
    q: "How do I send you my files?",
    a: "I use Google Drive, Dropbox, or WeTransfer — whichever works best for you. After your initial inquiry, I'll send detailed instructions on how to organize and export your tracks for the cleanest session.",
  },
  {
    q: "Do you offer discounts for EP or album projects?",
    a: "Yes — bundled packages for EPs (3–5 songs) and albums (6+ songs) are available at a discount compared to per-song rates. Get in touch with your project details for an accurate quote.",
  },
];

const LESSON_FAQS = [
  {
    q: "Do I need to own a guitar before starting lessons?",
    a: "Not necessarily — if you're just starting out, we can discuss what kind of guitar would suit you best before your first lesson. You'll need something to practice on at home, but it doesn't need to be expensive. I'm happy to make recommendations.",
  },
  {
    q: "What ages do you teach?",
    a: "All ages are welcome. I teach kids (typically 6 and up), teens, adults, and seniors. It's genuinely never too early or too late to start learning guitar.",
  },
  {
    q: "How do online lessons work?",
    a: "Online lessons are held over video call — Zoom, FaceTime, or Google Meet, whichever works for you. The format is very similar to in-person: I demonstrate, you play, and I give feedback in real time. A decent internet connection and a device with a working camera is all you need.",
  },
  {
    q: "How often should I take lessons and how much should I practice?",
    a: "Once a week is the standard for steady progress. As for practice, even 15–20 minutes a day makes a real difference — consistency matters far more than occasional long sessions.",
  },
  {
    q: "How long until I can play a real song?",
    a: "Most beginners can play a recognizable song within the first few lessons. Simple chord-based songs are very achievable early on. The exact timeline depends on the song you want to learn and how much you practice between sessions.",
  },
  {
    q: "What styles of music do you teach?",
    a: "Rock, folk, blues, pop, fingerstyle, and more. Lessons are built around your musical interests — if you have specific songs or artists you want to learn, we'll work from those.",
  },
  {
    q: "Do you offer a trial lesson?",
    a: "Yes — I offer a 30-minute intro lesson for $35 so we can meet, talk about your goals, and get a feel for working together before committing to regular sessions.",
  },
  {
    q: "Is there a contract or minimum commitment?",
    a: "No contracts. Monthly packages are available for a small discount, but you're not locked into anything. If your schedule changes, just let me know.",
  },
];

const SERVICES = [
  {
    id: 'recording',
    name: 'Recording',
    price: '$50 / hr',
    priceNote: '2-hr minimum',
    description: 'Guitars, vocals, bass, acoustic instruments, and more. Full arrangement and session work available. Includes basic editing and comping.',
    includes: [
      'Guitars (electric & acoustic)',
      'Vocals',
      'Bass',
      'Acoustic instruments',
      'Basic editing & comping',
      'Session playing available',
    ],
  },
  {
    id: 'mixing',
    name: 'Mixing',
    price: '$75 / song',
    priceNote: 'Up to 32 tracks',
    description: 'Full mix from your stems or session files. Includes up to 2 rounds of revisions and delivery in WAV + MP3.',
    includes: [
      'Up to 32 tracks (additional: $1.50/track)',
      '2 rounds of revisions included',
      'Stereo mix: 24-bit WAV + MP3',
      'Instrumental & clean versions available',
    ],
  },
  {
    id: 'mastering',
    name: 'Mastering',
    price: '$40 / song',
    priceNote: 'Stereo master',
    description: 'Loudness-targeted mastering for streaming, download, or physical release. Includes 2 revisions.',
    includes: [
      'Stereo mastering',
      'Targeted to streaming standards (Spotify, Apple Music, etc.)',
      '2 revisions included',
      'WAV + MP3 delivery',
      'DDP / vinyl prep available on request',
    ],
  },
];

const PACKAGES = [
  { name: 'Single', description: 'Mix + master for one song', price: '$100' },
  { name: 'EP', description: '3–5 songs, mix + master', price: '$300–$450' },
  { name: 'Album', description: '6+ songs, full production', price: 'Contact for quote' },
];

const PROJECTS = [
  {
    artist: '[Artist / Project Name]',
    role: 'Recording, Mixing, Mastering',
    notes: 'Full production from tracking to delivery.',
    link: '',
  },
  {
    artist: '[Artist / Project Name]',
    role: 'Mixing',
    notes: 'Mixed 10-song album from stems.',
    link: '',
  },
  {
    artist: '[Artist / Project Name]',
    role: 'Mastering',
    notes: 'Mastered EP for streaming release.',
    link: '',
  },
];

const BENEFITS = [
  {
    heading: "Stress relief & emotional wellbeing",
    body: "Playing music activates the brain's reward system and reduces cortisol levels. Even a 15-minute practice session can shift your mood.",
  },
  {
    heading: 'Builds patience and focus',
    body: "Learning a chord progression or picking pattern trains you to break a skill into small steps — a habit that carries over into work, school, and life.",
  },
  {
    heading: 'Boosts memory and brain health',
    body: 'Research consistently shows that musical training strengthens neural connections and may help protect against cognitive decline.',
  },
  {
    heading: "A creative outlet that's yours forever",
    body: "Unlike team sports or group hobbies, guitar goes wherever you go. A campfire, a living room, a quiet afternoon — it's always available.",
  },
  {
    heading: "You'll hear music differently",
    body: 'Once you understand how a chord is built or a riff is phrased, every song you love takes on a new dimension.',
  },
  {
    heading: "It's genuinely fun",
    body: 'The moment you play your first recognizable song is one of the best feelings. And it keeps getting better from there.',
  },
];

const PRICING = [
  { option: 'Intro lesson', duration: '30 min', price: '$35', note: 'Great for young beginners or first-timers' },
  { option: 'Standard lesson', duration: '45 min', price: '$60', note: "Most popular — the right balance of time and focus", highlight: true },
  { option: 'Extended lesson', duration: '60 min', price: '$75', note: 'Ideal for working through complex material' },
  { option: 'Monthly package', duration: '4 × 45 min', price: '$220', note: 'Save $20 — billed monthly, consistent progress' },
];

export default function ServicesPage() {
  usePageMeta({
    title: 'Services — Guitar Lessons & Music Production | Craig Allen Music',
    description: 'Guitar lessons in-person or online in Montgomery County, PA, plus professional recording, mixing, and mastering. All ages welcome.',
  });

  const [prodStatus, setProdStatus] = useState('idle');
  const [prodForm, setProdForm] = useState({
    name: '', email: '', phone: '',
    service: '', description: '', timeline: '', budget: '',
  });

  const [lessonStatus, setLessonStatus] = useState('idle');
  const [lessonForm, setLessonForm] = useState({
    name: '', email: '', phone: '',
    format: '', who: '', level: '',
    goals: '', message: '',
  });

  const setProd = (field) => (e) => setProdForm(f => ({ ...f, [field]: e.target.value }));
  const setLesson = (field) => (e) => setLessonForm(f => ({ ...f, [field]: e.target.value }));

  async function handleProdSubmit(e) {
    e.preventDefault();
    setProdStatus('loading');
    try {
      const res = await fetch(CONTACT_FORM_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({ ...prodForm, _subject: 'Production inquiry — Craig Allen Music' }),
      });
      setProdStatus(res.ok ? 'success' : 'error');
    } catch {
      setProdStatus('error');
    }
  }

  async function handleLessonSubmit(e) {
    e.preventDefault();
    setLessonStatus('loading');
    try {
      const res = await fetch(CONTACT_FORM_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({ ...lessonForm, _subject: 'Lesson inquiry — Craig Allen Music' }),
      });
      setLessonStatus(res.ok ? 'success' : 'error');
    } catch {
      setLessonStatus('error');
    }
  }

  return (
    <>
      {/* ---- Page header ---------------------------------------- */}
      <section className={styles.header}>
        <div className="container">
          <span className="label">What I offer</span>
          <h1 className={styles.h1}>Services</h1>
          <p className={styles.sub}>
            Music production and guitar lessons — out of a home studio in Montgomery County, PA.
          </p>
        </div>
      </section>

      {/* ======================================================== */}
      {/* PRODUCTION SECTION                                        */}
      {/* ======================================================== */}

      <section className={styles.imageSection}>
        <div className="container--wide">
          <ImagePlaceholder label="Studio photo" aspectRatio="16/6" />
        </div>
      </section>

      <section className={styles.sectionLabel}>
        <div className="container--wide">
          <span className={styles.serviceSectionLabel}>Music Production</span>
        </div>
      </section>

      <section className={styles.section}>
        <div className="container--wide">
          <span className="label">What I offer</span>
          <h2 className={styles.h2}>Services &amp; rates</h2>
          <div className={styles.servicesGrid}>
            {SERVICES.map((s) => (
              <div key={s.id} className={styles.serviceCard}>
                <div className={styles.serviceTop}>
                  <h3 className={styles.serviceName}>{s.name}</h3>
                  <div className={styles.servicePriceBlock}>
                    <span className={styles.servicePrice}>{s.price}</span>
                    <span className={styles.servicePriceNote}>{s.priceNote}</span>
                  </div>
                </div>
                <p className={styles.serviceDesc}>{s.description}</p>
                <ul className={styles.serviceIncludes}>
                  {s.includes.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className="container">
          <span className="label">Bundles</span>
          <h2 className={styles.h2}>Packages</h2>
          <div className={styles.packagesGrid}>
            {PACKAGES.map((p) => (
              <div key={p.name} className={styles.packageCard}>
                <span className={styles.packageName}>{p.name}</span>
                <span className={styles.packageDesc}>{p.description}</span>
                <span className={styles.packagePrice}>{p.price}</span>
              </div>
            ))}
          </div>
          <p className={styles.packagesNote}>
            All package pricing is subject to project scope. Reach out with details and I&rsquo;ll put together an accurate quote.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <div className="container--wide">
          <span className="label">Portfolio</span>
          <h2 className={styles.h2}>Projects I&rsquo;ve worked on</h2>
          <div className={styles.portfolioImage}>
            <ImagePlaceholder label="Gear / console photo" aspectRatio="16/5" />
          </div>
          <div className={styles.projectsTable}>
            <div className={styles.projectsHeader}>
              <span>Artist / Project</span>
              <span>Role</span>
              <span>Notes</span>
              <span></span>
            </div>
            {PROJECTS.map((p, i) => (
              <div key={i} className={styles.projectRow}>
                <span className={styles.projectArtist}>{p.artist}</span>
                <span className={styles.projectRole}>{p.role}</span>
                <span className={styles.projectNotes}>{p.notes}</span>
                <span className={styles.projectLink}>
                  {p.link ? (
                    <a href={p.link} target="_blank" rel="noopener noreferrer">Listen &rarr;</a>
                  ) : (
                    <span className={styles.projectLinkEmpty}>&mdash;</span>
                  )}
                </span>
              </div>
            ))}
          </div>
          <p className={styles.projectsNote}>More projects available on request.</p>
        </div>
      </section>

      <FaqSection faqs={PRODUCTION_FAQS} />

      <section className={styles.section} id="production-contact">
        <div className="container">
          <span className="label">Get in touch</span>
          <h2 className={styles.h2}>Start a project</h2>
          <p className={styles.formIntro}>
            Tell me a bit about what you&rsquo;re working on and I&rsquo;ll get back to you within 24 hours.
          </p>
          {prodStatus === 'success' ? (
            <div className={styles.successBox}>
              <p className={styles.successText}>Message received &mdash; I&rsquo;ll be in touch soon!</p>
            </div>
          ) : (
            <form className={styles.form} onSubmit={handleProdSubmit} noValidate>
              <div className={styles.row2}>
                <div className={styles.field}>
                  <label className={styles.fieldLabel} htmlFor="prod-name">Name *</label>
                  <input id="prod-name" className={styles.input} type="text" value={prodForm.name} onChange={setProd('name')} required disabled={prodStatus === 'loading'} />
                </div>
                <div className={styles.field}>
                  <label className={styles.fieldLabel} htmlFor="prod-email">Email *</label>
                  <input id="prod-email" className={styles.input} type="email" value={prodForm.email} onChange={setProd('email')} required disabled={prodStatus === 'loading'} />
                </div>
              </div>
              <div className={styles.field}>
                <label className={styles.fieldLabel} htmlFor="prod-service">Service interested in</label>
                <select id="prod-service" className={styles.select} value={prodForm.service} onChange={setProd('service')} disabled={prodStatus === 'loading'}>
                  <option value="">Select one&hellip;</option>
                  <option value="recording">Recording</option>
                  <option value="mixing">Mixing</option>
                  <option value="mastering">Mastering</option>
                  <option value="mix-master">Mix + Master package</option>
                  <option value="full-production">Full production</option>
                  <option value="not-sure">Not sure yet</option>
                </select>
              </div>
              <div className={styles.field}>
                <label className={styles.fieldLabel} htmlFor="prod-description">Tell me about your project *</label>
                <textarea id="prod-description" className={styles.textarea} rows={4} placeholder="Genre, number of songs, where you are in the process, any reference tracks…" value={prodForm.description} onChange={setProd('description')} required disabled={prodStatus === 'loading'} />
              </div>
              <div className={styles.row2}>
                <div className={styles.field}>
                  <label className={styles.fieldLabel} htmlFor="prod-timeline">Timeline</label>
                  <input id="prod-timeline" className={styles.input} type="text" placeholder="e.g. flexible, need it by June…" value={prodForm.timeline} onChange={setProd('timeline')} disabled={prodStatus === 'loading'} />
                </div>
                <div className={styles.field}>
                  <label className={styles.fieldLabel} htmlFor="prod-budget">Budget (optional)</label>
                  <input id="prod-budget" className={styles.input} type="text" placeholder="e.g. $300–$500" value={prodForm.budget} onChange={setProd('budget')} disabled={prodStatus === 'loading'} />
                </div>
              </div>
              {prodStatus === 'error' && (
                <p className={styles.errorText}>Something went wrong. Please try again or email me directly.</p>
              )}
              <button type="submit" className="btn-primary" disabled={prodStatus === 'loading'}>
                {prodStatus === 'loading' ? 'Sending…' : 'Send inquiry'}
              </button>
            </form>
          )}
        </div>
      </section>

      <hr className={styles.sectionDivider} />

      {/* ======================================================== */}
      {/* LESSONS SECTION                                           */}
      {/* ======================================================== */}

      <section className={styles.imageSection}>
        <div className="container--wide">
          <ImagePlaceholder label="Lesson / guitar photo" aspectRatio="16/6" />
        </div>
      </section>

      <section className={styles.sectionLabel}>
        <div className="container--wide">
          <span className={styles.serviceSectionLabel}>Guitar Lessons</span>
        </div>
      </section>

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

      <section className={styles.section}>
        <div className="container--wide">
          <span className="label">What to expect</span>
          <h2 className={styles.h2}>How lessons work</h2>
          <div className={styles.detailsLayout}>
            <div className={styles.detailsList}>
              <div className={styles.detailItem}>
                <span className={styles.detailIcon}>&#9679;</span>
                <div>
                  <strong>In-person or online</strong>
                  <p>Lessons are available at [your location] or via video call &mdash; whichever works best for you.</p>
                </div>
              </div>
              <div className={styles.detailItem}>
                <span className={styles.detailIcon}>&#9679;</span>
                <div>
                  <strong>All ages welcome</strong>
                  <p>Kids, teens, adults, seniors &mdash; it&rsquo;s never too early or too late to pick up the guitar.</p>
                </div>
              </div>
              <div className={styles.detailItem}>
                <span className={styles.detailIcon}>&#9679;</span>
                <div>
                  <strong>Standard 45-minute lessons</strong>
                  <p>45 minutes is the sweet spot for most students. 30-minute sessions are available for younger beginners, and 60-minute sessions for advanced work or focused sessions.</p>
                </div>
              </div>
              <div className={styles.detailItem}>
                <span className={styles.detailIcon}>&#9679;</span>
                <div>
                  <strong>Play the music you love</strong>
                  <p>Rock, folk, blues, pop, fingerstyle &mdash; we build around your interests and goals, not a fixed curriculum.</p>
                </div>
              </div>
              <div className={styles.detailItem}>
                <span className={styles.detailIcon}>&#9679;</span>
                <div>
                  <strong>No prior experience required</strong>
                  <p>True beginners are always welcome. We&rsquo;ll cover proper technique from day one to build a solid foundation.</p>
                </div>
              </div>
              <div className={styles.detailItem}>
                <span className={styles.detailIcon}>&#9679;</span>
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
                className={[styles.pricingRow, row.highlight ? styles.pricingRowHighlight : ''].join(' ')}
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

      <FaqSection faqs={LESSON_FAQS} />

      <section className={styles.section} id="lessons-contact">
        <div className="container">
          <span className="label">Get in touch</span>
          <h2 className={styles.h2}>Inquire about lessons</h2>
          <p className={styles.formIntro}>
            I don&rsquo;t offer online booking &mdash; just reach out directly and we&rsquo;ll find a time that works. I typically respond within 24 hours.
          </p>
          {lessonStatus === 'success' ? (
            <div className={styles.successBox}>
              <p className={styles.successText}>Message received &mdash; I&rsquo;ll be in touch soon!</p>
            </div>
          ) : (
            <form className={styles.form} onSubmit={handleLessonSubmit} noValidate>
              <div className={styles.row2}>
                <div className={styles.field}>
                  <label className={styles.fieldLabel} htmlFor="lessons-name">Name *</label>
                  <input id="lessons-name" className={styles.input} type="text" value={lessonForm.name} onChange={setLesson('name')} required disabled={lessonStatus === 'loading'} />
                </div>
                <div className={styles.field}>
                  <label className={styles.fieldLabel} htmlFor="lessons-email">Email *</label>
                  <input id="lessons-email" className={styles.input} type="email" value={lessonForm.email} onChange={setLesson('email')} required disabled={lessonStatus === 'loading'} />
                </div>
              </div>
              <div className={styles.field}>
                <label className={styles.fieldLabel} htmlFor="lessons-phone">Phone (optional)</label>
                <input id="lessons-phone" className={styles.input} type="tel" value={lessonForm.phone} onChange={setLesson('phone')} disabled={lessonStatus === 'loading'} />
              </div>
              <div className={styles.row2}>
                <div className={styles.field}>
                  <label className={styles.fieldLabel} htmlFor="lessons-format">Lesson format</label>
                  <select id="lessons-format" className={styles.select} value={lessonForm.format} onChange={setLesson('format')} disabled={lessonStatus === 'loading'}>
                    <option value="">Select one&hellip;</option>
                    <option value="in-person">In-person</option>
                    <option value="online">Online (video call)</option>
                    <option value="not-sure">Not sure yet</option>
                  </select>
                </div>
                <div className={styles.field}>
                  <label className={styles.fieldLabel} htmlFor="lessons-who">Who will be taking lessons?</label>
                  <select id="lessons-who" className={styles.select} value={lessonForm.who} onChange={setLesson('who')} disabled={lessonStatus === 'loading'}>
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
                <select id="lessons-level" className={styles.select} value={lessonForm.level} onChange={setLesson('level')} disabled={lessonStatus === 'loading'}>
                  <option value="">Select one&hellip;</option>
                  <option value="complete-beginner">Complete beginner — never played before</option>
                  <option value="some-experience">A little experience — know a few chords</option>
                  <option value="returning">Returning after a break</option>
                  <option value="intermediate">Intermediate — looking to level up</option>
                </select>
              </div>
              <div className={styles.field}>
                <label className={styles.fieldLabel} htmlFor="lessons-goals">What style or goals interest you most?</label>
                <input id="lessons-goals" className={styles.input} type="text" placeholder="e.g. rock, fingerpicking, learning specific songs…" value={lessonForm.goals} onChange={setLesson('goals')} disabled={lessonStatus === 'loading'} />
              </div>
              <div className={styles.field}>
                <label className={styles.fieldLabel} htmlFor="lessons-message">Anything else I should know?</label>
                <textarea id="lessons-message" className={styles.textarea} rows={4} value={lessonForm.message} onChange={setLesson('message')} disabled={lessonStatus === 'loading'} />
              </div>
              {lessonStatus === 'error' && (
                <p className={styles.errorText}>Something went wrong. Please try again or email me directly.</p>
              )}
              <button type="submit" className="btn-primary" disabled={lessonStatus === 'loading'}>
                {lessonStatus === 'loading' ? 'Sending…' : 'Send inquiry'}
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
