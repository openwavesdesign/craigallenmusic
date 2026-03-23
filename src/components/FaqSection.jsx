import { useState, useEffect } from 'react';
import styles from './FaqSection.module.css';

export default function FaqSection({ faqs, label = 'FAQ' }) {
  const [open, setOpen] = useState(null);

  // Inject FAQ structured data (JSON-LD)
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'faq-schema';
    script.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map(({ q, a }) => ({
        '@type': 'Question',
        name: q,
        acceptedAnswer: { '@type': 'Answer', text: a },
      })),
    });
    document.head.appendChild(script);
    return () => document.getElementById('faq-schema')?.remove();
  }, [faqs]);

  const toggle = (i) => setOpen(open === i ? null : i);

  return (
    <section className={styles.section}>
      <div className="container">
        <span className="label">{label}</span>
        <h2 className={styles.h2}>Frequently asked questions</h2>
        <dl className={styles.list}>
          {faqs.map(({ q, a }, i) => (
            <div key={i} className={`${styles.item} ${open === i ? styles.itemOpen : ''}`}>
              <dt>
                <button
                  className={styles.question}
                  onClick={() => toggle(i)}
                  aria-expanded={open === i}
                >
                  <span>{q}</span>
                  <span className={styles.icon} aria-hidden="true">
                    {open === i ? '−' : '+'}
                  </span>
                </button>
              </dt>
              <dd className={`${styles.answer} ${open === i ? styles.answerOpen : ''}`}>
                <p>{a}</p>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
