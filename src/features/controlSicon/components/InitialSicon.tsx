import { useSuspenseQuery } from '@tanstack/react-query';
import { ActionIcon } from '@mantine/core';
import { controlSiconQueries } from '../query';
import { BadgeFortnightSicon } from './BadgeFortnightSicon';
import { ErrorServerBadge } from '~/features/ui/components';

// import { AppBadge, IconRefresh, IconServerError } from '~/features/ui';

// import { ErrorServerBadge } from '~/features/ui';

export const InititalSicon = () => {
  const { data, refetch, isFetching } = useSuspenseQuery(controlSiconQueries.fortnight());

  // console.log(data);
  // if (data.error || !data?.online || !data?.module) {
  //   return <ErrorServerBadge isFetching={isFetching} refetch={refetch} label="SICON Offline" />;
  // }

  // return <BadgeFortnightSicon {...data.module} />;
  // return <p>holiwis</p>;

  return <ErrorServerBadge isFetching={isFetching} refetch={refetch} label="SICON Offline" />;
  // return <p>holiwis</p>;
};
