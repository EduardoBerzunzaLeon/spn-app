import { Highlight, List } from '@mantine/core';

import type { rfcList } from './RefundWrapperRfcList';

import { IconList } from '~/features/ui';

interface Props {
  rfcList: rfcList[];
  gFilter: string;
  type?: 'success' | 'error';
}

export const RfcRefundList = ({ rfcList, gFilter, type = 'success' }: Props) => (
  <List spacing="xs" size="sm" center icon={<IconList type={type} />}>
    {rfcList?.map(({ rfc, paymentCode, type, error }) => (
      <List.Item key={`${rfc}-${paymentCode}-${type}`}>
        <Highlight highlight={gFilter}>{`RFC: ${rfc}`}</Highlight>
        Tipo: <span className="font-bold">{type}</span> -{error && ' Error: '}
        {error && <span className="font-bold">{error} - </span>}Plaza:{' '}
        <span className="font-bold">{paymentCode}</span>
      </List.Item>
    ))}
  </List>
);
