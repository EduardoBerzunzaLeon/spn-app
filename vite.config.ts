import { sentryTanstackStart } from '@sentry/tanstackstart-react/vite';
import tailwindcss from '@tailwindcss/vite';
import { tanstackStart } from '@tanstack/react-start/plugin/vite';
import viteReact from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [
    tanstackStart(),
    viteReact(),
    tailwindcss(),
    sentryTanstackStart({
      org: 'eduardo-berzunza',
      project: 'javascript-tanstackstart-react',
      authToken: process.env.SENTRY_AUTH_TOKEN,
    }),
  ],
  resolve: {
    tsconfigPaths: true,
    alias: {
      // /esm/icons/index.mjs only exports the icons statically, so no separate chunks are created
      '@tabler/icons-react': '@tabler/icons-react/dist/esm/icons/index.mjs',
    },
  },
});
