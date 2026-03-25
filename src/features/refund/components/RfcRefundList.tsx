import { Highlight, List } from '@mantine/core';
import { rfcList } from './RefundWrapperRfcList';
import { IconList } from '~/features/ui';

interface Props {
  rfcList: rfcList[];
  gFilter: string;
  type?: 'success' | 'error';
}

export const RfcRefundList = ({ rfcList, gFilter, type = 'success' }: Props) => {
  return (
    <List spacing="xs" size="sm" center icon={<IconList type={type} />}>
      {rfcList?.map((rfc) => (
        <List.Item key={`${rfc.rfc}-${rfc.paymentCode}-${rfc.type}`}>
          <Highlight highlight={gFilter}>{`RFC: ${rfc.rfc}`}</Highlight>
          Tipo: <span className="font-bold">{rfc.type}</span> -{rfc.error && ' Error: '}
          {rfc.error && <span className="font-bold">{rfc.error} - </span>}Plaza:{' '}
          <span className="font-bold">{rfc.paymentCode}</span>
        </List.Item>
      ))}
    </List>
  );
};
