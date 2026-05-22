interface ImportMetaEnv {
  readonly VITE_DSN_SENTRY: string;
  // Add other custom env variables here...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
