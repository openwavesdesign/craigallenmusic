import { useEffect } from 'react';

const DEFAULT_TITLE = 'Craig Allen Music | Guitar Lessons & Recording — Montgomery County, PA';
const DEFAULT_DESC  = 'Guitar lessons for beginners of all ages — in-person in Montgomery County, PA or online. Also offering recording, mixing, and mastering from a home studio in the Philadelphia suburbs.';

function setMeta(selector, attr, value) {
  const el = document.querySelector(selector);
  if (el) el.setAttribute(attr, value);
}

export default function usePageMeta({ title, description }) {
  useEffect(() => {
    document.title = title;
    setMeta('meta[name="description"]',          'content', description);
    setMeta('meta[property="og:title"]',         'content', title);
    setMeta('meta[property="og:description"]',   'content', description);
    setMeta('meta[name="twitter:title"]',        'content', title);
    setMeta('meta[name="twitter:description"]',  'content', description);

    return () => {
      document.title = DEFAULT_TITLE;
      setMeta('meta[name="description"]',          'content', DEFAULT_DESC);
      setMeta('meta[property="og:title"]',         'content', DEFAULT_TITLE);
      setMeta('meta[property="og:description"]',   'content', DEFAULT_DESC);
      setMeta('meta[name="twitter:title"]',        'content', DEFAULT_TITLE);
      setMeta('meta[name="twitter:description"]',  'content', DEFAULT_DESC);
    };
  }, [title, description]);
}
