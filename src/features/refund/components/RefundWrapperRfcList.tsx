import { RfcRefundList } from './RfcRefundList';

export interface rfcList {
  rfc: string;
  type: string;
  plaza: string;
  error?: string;
}

interface Props {
  rfcListError: rfcList[];
  rfcListSuccess: rfcList[];
  gFilter: string;
}

const RefundWrapperRfcList = ({ rfcListError, rfcListSuccess, gFilter }: Props) => {
  if (!rfcListError && !rfcListSuccess) {
    return <span className="text-gray-500">No hay RFCs asociados a este reintegro.</span>;
  }

  return (
    <>
      <RfcRefundList gFilter={gFilter} rfcList={rfcListSuccess} />
      <RfcRefundList gFilter={gFilter} rfcList={rfcListError} type="error" />
    </>
  );
};

export default RefundWrapperRfcList;
