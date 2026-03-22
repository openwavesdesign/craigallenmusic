import { YOUTUBE_CHANNEL_URL } from '../config';
import { LATEST_VIDEO_ID } from 'virtual:youtube-latest';
import styles from './LatestVideo.module.css';

export default function LatestVideo() {
  if (!LATEST_VIDEO_ID) return null;

  return (
    <section id="video" className={styles.section}>
      <div className="container--wide">
        <span className="label">Latest video</span>
        <div className={styles.videoWrap}>
          <iframe
            src={`https://www.youtube.com/embed/${LATEST_VIDEO_ID}`}
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
