/**
 * vite-plugin-youtube-latest
 *
 * At build/dev-server start, fetches the channel's public RSS feed and
 * resolves the virtual module `virtual:youtube-latest` to export the
 * latest video ID. No API key required.
 *
 * How it works:
 *   1. Fetch the channel page to extract the channel ID (UC…)
 *   2. Fetch https://www.youtube.com/feeds/videos.xml?channel_id=…
 *   3. Parse the first <yt:videoId> from the feed
 *   4. Expose it as `export const LATEST_VIDEO_ID = "…"`
 *
 * The video ID is resolved once at startup. Redeploy / restart dev server
 * to pick up a new video. Pair this with a deploy webhook triggered by
 * new YouTube uploads for a fully automated flow.
 */

const VIRTUAL_ID = 'virtual:youtube-latest';
const RESOLVED_ID = '\0' + VIRTUAL_ID;

export function youtubeLatestVideoPlugin(channelHandle) {
  let latestVideoId = null;

  async function fetchLatestVideoId() {
    // --- Step 1: resolve channel handle → channel ID ---
    const pageUrl = `https://www.youtube.com/${channelHandle}`;
    const pageRes = await fetch(pageUrl, {
      headers: {
        // Identify as a browser so YouTube serves the full HTML
        'User-Agent':
          'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)',
      },
    });

    if (!pageRes.ok) {
      throw new Error(`Channel page returned ${pageRes.status}: ${pageUrl}`);
    }

    const html = await pageRes.text();

    // YouTube embeds the channel ID in multiple places; try them all.
    const channelIdPatterns = [
      /"channelId":"(UC[\w-]+)"/,
      /channel_id=(UC[\w-]+)/,
      /"externalId":"(UC[\w-]+)"/,
    ];

    let channelId = null;
    for (const pattern of channelIdPatterns) {
      const m = html.match(pattern);
      if (m) { channelId = m[1]; break; }
    }

    if (!channelId) {
      throw new Error('Could not extract channel ID from page HTML');
    }

    // --- Step 2: fetch the public RSS feed ---
    const rssUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`;
    const rssRes = await fetch(rssUrl);

    if (!rssRes.ok) {
      throw new Error(`RSS feed returned ${rssRes.status}: ${rssUrl}`);
    }

    const xml = await rssRes.text();

    // --- Step 3: extract first videoId entry ---
    const videoIdMatch = xml.match(/<yt:videoId>([^<]+)<\/yt:videoId>/);
    if (!videoIdMatch) {
      throw new Error('No <yt:videoId> found in RSS feed');
    }

    return videoIdMatch[1];
  }

  return {
    name: 'youtube-latest-video',

    async buildStart() {
      try {
        latestVideoId = await fetchLatestVideoId();
        console.log(`[youtube-latest] Latest video: https://youtu.be/${latestVideoId}`);
      } catch (err) {
        console.warn(`[youtube-latest] Could not fetch latest video: ${err.message}`);
        console.warn('[youtube-latest] Falling back to placeholder — set YOUTUBE_VIDEO_ID manually if needed.');
        latestVideoId = null;
      }
    },

    resolveId(id) {
      if (id === VIRTUAL_ID) return RESOLVED_ID;
    },

    load(id) {
      if (id === RESOLVED_ID) {
        return `export const LATEST_VIDEO_ID = ${JSON.stringify(latestVideoId)};`;
      }
    },
  };
}
