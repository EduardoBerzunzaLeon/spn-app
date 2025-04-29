import { useSuspenseQuery } from '@tanstack/react-query';
import { controlSiconQueries } from '../query';
import { BadgeFortnightSicon } from './BadgeFortnightSicon';
import { AppBadge, IconServerError } from '~/features/ui';

export const InititalSicon = () => {
  const { data } = useSuspenseQuery(controlSiconQueries.fortnight());

  if (data.error || !data?.online) {
    return (
      <AppBadge type="error" leftSection={<IconServerError size={16} />} size="lg">
        Sicon Offline
      </AppBadge>
    );
  }

  return <BadgeFortnightSicon {...data.module} />;
};
