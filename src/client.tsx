/// <reference types="vinxi/types/client" />
import { scan } from 'react-scan';
import { StrictMode } from 'react';
import { StartClient } from '@tanstack/react-start';
import { hydrateRoot } from 'react-dom/client';
import { createRouter } from './router';

import './global-middleware';

scan({
  enabled: true,
});

const router = createRouter();

hydrateRoot(
  document,
  <StrictMode>
    <StartClient router={router} />
  </StrictMode>
);
