import tailwindcss from '@tailwindcss/vite';
// // import { defineConfig } from '@tanstack/react-start/config';
// import tsConfigPaths from 'vite-tsconfig-paths';

// export default defineConfig({
//   // server: {
//   //   preset: 'node-server',
//   // preset: 'cloudflare-pages',
//   // unenv: cloudflare,
//   // },
//   tsr: {
//     appDirectory: 'src',
//   },
//   vite: {
//     plugins: [
//       tsConfigPaths({
//         projects: ['./tsconfig.json'],
//       }),
//       tailwindcss(),
//     ],
//     resolve: {
//       alias: {
//         // /esm/icons/index.mjs only exports the icons statically, so no separate chunks are created
//         '@tabler/icons-react': '@tabler/icons-react/dist/esm/icons/index.mjs',
//       },
//     },
//   },
// });
import { tanstackStart } from '@tanstack/react-start/plugin/vite';
import viteReact from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import tsConfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [
    tsConfigPaths({ projects: ['./tsconfig.json'] }),
    tanstackStart({ customViteReactPlugin: true }),
    tailwindcss(),
    viteReact(),
  ],
  resolve: {
    alias: {
      // /esm/icons/index.mjs only exports the icons statically, so no separate chunks are created
      '@tabler/icons-react': '@tabler/icons-react/dist/esm/icons/index.mjs',
    },
  },
});
