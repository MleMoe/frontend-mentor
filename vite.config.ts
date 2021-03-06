import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    modules: {
      localsConvention: 'camelCaseOnly',
    },
  },
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        tipCaculator: resolve(__dirname, 'pages/tip-calculator/index.html'),
        timeTrackingDashboard: resolve(
          __dirname,
          'pages/time-tracking-dashboard/index.html'
        ),
        sunnysideAgencyLandingPage: resolve(
          __dirname,
          'pages/sunnyside-agency-landing-page/index.html'
        ),
      },
    },
  },
});
