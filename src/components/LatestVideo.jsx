import { YOUTUBE_CHANNEL_URL, YOUTUBE_VIDEO_ID } from '../config';
import styles from './LatestVideo.module.css';

export default function LatestVideo() {
  return (
    <section id="video" className={styles.section}>
      <div className="container--wide">
        <span className="label">Latest video</span>
        <div className={styles.videoWrap}>
          <iframe
            src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}`}
            title="Craig Allen Music — Latest Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
          />
        </div>
        <p className={styles.note}>
          New video every week &mdash;{' '}
          <a href={YOUTUBE_CHANNEL_URL} target="_blank" rel="noopener noreferrer">
            subscribe on YouTube
          </a>.
        </p>
      </div>
    </section>
  );
}
