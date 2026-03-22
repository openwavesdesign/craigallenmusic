import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { youtubeLatestVideoPlugin } from './vite-plugin-youtube-latest.js';

export default defineConfig({
  plugins: [
    react(),
    youtubeLatestVideoPlugin('@CraigAllenMusic'),
  ],
});
