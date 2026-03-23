import { useState } from 'react';
import usePageMeta from '../hooks/usePageMeta';
import { CONTACT_FORM_URL, YOUTUBE_CHANNEL_URL, INSTAGRAM_URL } from '../config';
import styles from './ContactPage.module.css';

const SOCIAL = [
  {
    name: 'Instagram',
    handle: '@craigallenmusic',
    url: INSTAGRAM_URL,
    description: 'Behind-the-scenes, clips, and updates',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    name: 'YouTube',
    handle: '@CraigAllenMusic',
    url: YOUTUBE_CHANNEL_URL,
    description: 'Guitar, home recording, and songwriting videos',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
];

export default function ContactPage() {
  usePageMeta({
    title: 'Contact | Craig Allen Music — Montgomery County, PA',
    description: 'Get in touch with Craig Allen for guitar lessons, music production inquiries, or general questions. Based in Montgomery County, PA — also available online.',
  });

  const [status, setStatus] = useState('idle');
  const [form, setForm] = useState({
    name: '', email: '', subject: '', message: '',
  });

  const set = (field) => (e) => setForm(f => ({ ...f, [field]: e.target.value }));

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch(CONTACT_FORM_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({ ...form, _subject: `Contact: ${form.subject || 'General inquiry'} — Craig Allen Music` }),
      });
      setStatus(res.ok ? 'success' : 'error');
    } catch {
      setStatus('error');
    }
  }

  return (
    <>
      {/* ── Page header ─────────────────────────────────────────── */}
      <section className={styles.header}>
        <div className="container">
          <span className="label">Get in touch</span>
          <h1 className={styles.h1}>Contact</h1>
          <p className={styles.sub}>
            Questions about lessons, a production project, or just want to say hi &mdash; reach out and I&rsquo;ll get back to you within 24 hours.
          </p>
        </div>
      </section>

      {/* ── Form + social layout ─────────────────────────────────── */}
      <section className={styles.body}>
        <div className={`container--wide ${styles.layout}`}>

          {/* Contact form */}
          <div className={styles.formCol}>
            <span className="label">Send a message</span>

            {status === 'success' ? (
              <div className={styles.successBox}>
                <p className={styles.successText}>Message received &mdash; I&rsquo;ll be in touch soon!</p>
              </div>
            ) : (
              <form className={styles.form} onSubmit={handleSubmit} noValidate>
                <div className={styles.row2}>
                  <div className={styles.field}>
                    <label className={styles.fieldLabel} htmlFor="contact-name">Name *</label>
                    <input
                      id="contact-name"
                      className={styles.input}
                      type="text"
                      value={form.name}
                      onChange={set('name')}
                      required
                      disabled={status === 'loading'}
                    />
                  </div>
                  <div className={styles.field}>
                    <label className={styles.fieldLabel} htmlFor="contact-email">Email *</label>
                    <input
                      id="contact-email"
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
                  <label className={styles.fieldLabel} htmlFor="contact-subject">What&rsquo;s this about?</label>
                  <select
                    id="contact-subject"
                    className={styles.select}
                    value={form.subject}
                    onChange={set('subject')}
                    disabled={status === 'loading'}
                  >
                    <option value="">Select one&hellip;</option>
                    <option value="guitar-lessons">Guitar lessons</option>
                    <option value="music-production">Music production</option>
                    <option value="general">General question</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className={styles.field}>
                  <label className={styles.fieldLabel} htmlFor="contact-message">Message *</label>
                  <textarea
                    id="contact-message"
                    className={styles.textarea}
                    rows={6}
                    value={form.message}
                    onChange={set('message')}
                    required
                    disabled={status === 'loading'}
                  />
                </div>

                {status === 'error' && (
                  <p className={styles.errorText}>
                    Something went wrong. Please try again or reach out on Instagram.
                  </p>
                )}

                <button
                  type="submit"
                  className="btn-primary"
                  disabled={status === 'loading'}
                >
                  {status === 'loading' ? 'Sending…' : 'Send message'}
                </button>
              </form>
            )}
          </div>

          {/* Social + info sidebar */}
          <aside className={styles.sidebar}>
            <div className={styles.sideSection}>
              <span className="label">Find me online</span>
              <div className={styles.socialList}>
                {SOCIAL.map((s) => (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialCard}
                  >
                    <span className={styles.socialIcon}>{s.icon}</span>
                    <span className={styles.socialInfo}>
                      <span className={styles.socialName}>{s.name}</span>
                      <span className={styles.socialHandle}>{s.handle}</span>
                      <span className={styles.socialDesc}>{s.description}</span>
                    </span>
                    <span className={styles.socialArrow}>&rarr;</span>
                  </a>
                ))}
              </div>
            </div>

            <div className={styles.sideSection}>
              <span className="label">Location</span>
              <p className={styles.locationText}>
                Based in <strong>Montgomery County, PA</strong> &mdash; in-person lessons and recording sessions available locally. Online lessons and remote mixing/mastering available everywhere.
              </p>
            </div>

            <div className={styles.sideSection}>
              <span className="label">Response time</span>
              <p className={styles.locationText}>
                I typically respond within 24 hours. For faster replies, DM me on Instagram.
              </p>
            </div>
          </aside>

        </div>
      </section>
    </>
  );
}
