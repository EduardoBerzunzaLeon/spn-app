import { IconServer } from '@tabler/icons-react';

import { AppBadge, type AppBadgeProps } from './AppBadge';

interface Props extends AppBadgeProps {}

export const ServerBadge = (props: Props) => (
  <AppBadge
    type="success"
    size="lg"
    leftSection={<IconServer size={19} />}
    styles={{ root: { cursor: 'pointer' } }}
    {...props}
  />
);
