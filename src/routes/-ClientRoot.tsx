'use client';

import { scan } from 'react-scan';

scan({
  enabled: true,
});

export function ClientRoot({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
