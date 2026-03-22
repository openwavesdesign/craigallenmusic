import { useState } from 'react';
import { KIT_FORM_ID } from '../config';
import styles from './OptIn.module.css';

export default function OptIn() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  async function handleSubmit(e) {
    e.preventDefault();
    if (!email.trim()) return;

    setStatus('loading');

    try {
      const res = await fetch(
        `https://app.kit.com/forms/${KIT_FORM_ID}/subscriptions`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams({ email_address: email.trim() }),
        }
      );

      // Kit returns 200/201 on success
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
    <section id="optin" className={styles.section}>
      <div className="container">
        <span className="label">Free download</span>
        <h2 className={styles.headline}>
          Get the Free Home Studio<br />Starter Guide
        </h2>
        <p className={styles.sub}>
          A practical PDF on recording decent music at home &mdash; no gear porn,
          just real-world advice from a working musician.
        </p>

        {status === 'success' ? (
          <p className={styles.success} role="status">
            Check your inbox and click the confirmation link to complete your subscription &mdash; the guide will be on its way once confirmed.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className={styles.form} noValidate>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              autoComplete="email"
              aria-label="Email address"
              disabled={status === 'loading'}
            />
            <button type="submit" disabled={status === 'loading'}>
              {status === 'loading' ? 'Sending…' : 'Send me the guide.'}
            </button>
          </form>
        )}

        {status === 'error' && (
          <p className={styles.errorMsg} role="alert">
            Something went wrong &mdash;{' '}
            <button className={styles.retryBtn} onClick={() => setStatus('idle')}>
              try again
            </button>
            .
          </p>
        )}

        {status !== 'success' && (
          <p className={styles.fine}>Free. No spam. Unsubscribe anytime.</p>
        )}
      </div>
    </section>
  );
}
