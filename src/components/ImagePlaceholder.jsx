import styles from './ImagePlaceholder.module.css';

export default function ImagePlaceholder({ label = 'Photo coming soon', aspectRatio = '16/9' }) {
  return (
    <div className={styles.placeholder} style={{ aspectRatio }}>
      <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <circle cx="12" cy="12" r="3" />
        <path d="M8.5 5l1.5-2h4l1.5 2" />
      </svg>
      <span className={styles.label}>{label}</span>
    </div>
  );
}
