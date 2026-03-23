import { useState } from 'react';
import ImagePlaceholder from '../components/ImagePlaceholder';
import usePageMeta from '../hooks/usePageMeta';
import styles from './ProductionPage.module.css';
import { CONTACT_FORM_URL } from '../config';

const SERVICES = [
  {
    id: 'recording',
    name: 'Recording',
    price: '$50 / hr',
    priceNote: '2-hr minimum',
    description:
      'Guitars, vocals, bass, acoustic instruments, and more. Full arrangement and session work available. Includes basic editing and comping.',
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
    description:
      'Full mix from your stems or session files. Includes up to 2 rounds of revisions and delivery in WAV + MP3.',
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
    description:
      'Loudness-targeted mastering for streaming, download, or physical release. Includes 2 revisions.',
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

// CUSTOMIZE: Replace with your actual projects
// Fields: artist, role, notes, link (optional)
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

export default function ProductionPage() {
  usePageMeta({
    title: 'Music Production — Recording, Mixing & Mastering | Craig Allen Music',
    description: 'Professional recording, mixing, and mastering from a home studio in Montgomery County, PA. Recording from $50/hr, mixing from $75/song, mastering from $40/song. EP and album packages available.',
  });

  const [status, setStatus] = useState('idle');
  const [form, setForm] = useState({
    name: '', email: '', phone: '',
    service: '', description: '', timeline: '', budget: '',
  });

  const set = (field) => (e) => setForm(f => ({ ...f, [field]: e.target.value }));

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch(CONTACT_FORM_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({ ...form, _subject: 'Production inquiry — Craig Allen Music' }),
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
          <span className="label">Services</span>
          <h1 className={styles.h1}>Production</h1>
          <p className={styles.sub}>
            Recording, mixing, and mastering from a home studio in Montgomery County, PA.
          </p>
        </div>
      </section>

      {/* ── Studio image ────────────────────────────────────────── */}
      <section className={styles.imageSection}>
        <div className="container--wide">
          <ImagePlaceholder label="Studio photo" aspectRatio="16/6" />
        </div>
      </section>

      {/* ── Services ────────────────────────────────────────────── */}
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

      {/* ── Packages ────────────────────────────────────────────── */}
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

      {/* ── Projects ────────────────────────────────────────────── */}
      <section className={styles.section}>
        <div className="container--wide">
          <span className="label">Portfolio</span>
          <h2 className={styles.h2}>Projects I&rsquo;ve worked on</h2>

          {/* Studio / gear image */}
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
            {/* CUSTOMIZE: Replace placeholder rows with your real projects */}
            {PROJECTS.map((p, i) => (
              <div key={i} className={styles.projectRow}>
                <span className={styles.projectArtist}>{p.artist}</span>
                <span className={styles.projectRole}>{p.role}</span>
                <span className={styles.projectNotes}>{p.notes}</span>
                <span className={styles.projectLink}>
                  {p.link ? (
                    <a href={p.link} target="_blank" rel="noopener noreferrer">
                      Listen &rarr;
                    </a>
                  ) : (
                    <span className={styles.projectLinkEmpty}>&mdash;</span>
                  )}
                </span>
              </div>
            ))}
          </div>
          <p className={styles.projectsNote}>
            {/* CUSTOMIZE: Add more rows above or remove this note */}
            More projects available on request.
          </p>
        </div>
      </section>

      {/* ── Contact form ────────────────────────────────────────── */}
      <section className={styles.section} id="contact">
        <div className="container">
          <span className="label">Get in touch</span>
          <h2 className={styles.h2}>Start a project</h2>
          <p className={styles.formIntro}>
            Tell me a bit about what you&rsquo;re working on and I&rsquo;ll get back to you within 24 hours.
          </p>

          {status === 'success' ? (
            <div className={styles.successBox}>
              <p className={styles.successText}>Message received &mdash; I&rsquo;ll be in touch soon!</p>
            </div>
          ) : (
            <form className={styles.form} onSubmit={handleSubmit} noValidate>
              <div className={styles.row2}>
                <div className={styles.field}>
                  <label className={styles.fieldLabel} htmlFor="prod-name">Name *</label>
                  <input
                    id="prod-name"
                    className={styles.input}
                    type="text"
                    value={form.name}
                    onChange={set('name')}
                    required
                    disabled={status === 'loading'}
                  />
                </div>
                <div className={styles.field}>
                  <label className={styles.fieldLabel} htmlFor="prod-email">Email *</label>
                  <input
                    id="prod-email"
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
                <label className={styles.fieldLabel} htmlFor="prod-service">Service interested in</label>
                <select
                  id="prod-service"
                  className={styles.select}
                  value={form.service}
                  onChange={set('service')}
                  disabled={status === 'loading'}
                >
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
                <textarea
                  id="prod-description"
                  className={styles.textarea}
                  rows={4}
                  placeholder="Genre, number of songs, where you are in the process, any reference tracks…"
                  value={form.description}
                  onChange={set('description')}
                  required
                  disabled={status === 'loading'}
                />
              </div>

              <div className={styles.row2}>
                <div className={styles.field}>
                  <label className={styles.fieldLabel} htmlFor="prod-timeline">Timeline</label>
                  <input
                    id="prod-timeline"
                    className={styles.input}
                    type="text"
                    placeholder="e.g. flexible, need it by June…"
                    value={form.timeline}
                    onChange={set('timeline')}
                    disabled={status === 'loading'}
                  />
                </div>
                <div className={styles.field}>
                  <label className={styles.fieldLabel} htmlFor="prod-budget">Budget (optional)</label>
                  <input
                    id="prod-budget"
                    className={styles.input}
                    type="text"
                    placeholder="e.g. $300–$500"
                    value={form.budget}
                    onChange={set('budget')}
                    disabled={status === 'loading'}
                  />
                </div>
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
