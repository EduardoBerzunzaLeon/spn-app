import { useMemo } from 'react';
import { useQuery, useSuspenseQuery } from '@tanstack/react-query';
import { controlProcessQueries } from '~/features/controlProcess';
import { refundQueries } from '~/features/refund';

export const useRefundAlerts = () => {
  const { data, isError, isFetching, error } = useQuery(refundQueries.lastConsecutive);
  const { data: fortnightSiapsep } = useSuspenseQuery(controlProcessQueries.fortnight());

  const { message, hasError } = useMemo(() => {
    const alert = {
      message: '',
      hasError: false,
    };

    if (isFetching) {
      return alert;
    }

    if (isError || !data) {
      alert.message = error?.message || 'No se encontro el último consecutivo en sicon';
      alert.hasError = true;
      return alert;
    }

    if (fortnightSiapsep.error) {
      alert.message = 'El siapsep esta offline';
      alert.hasError = true;
      return alert;
    }

    const { siconFortnight } = data;

    if (String(fortnightSiapsep.ordinaryFortnight.fortnight) !== siconFortnight.fortnight) {
      alert.message = 'Existe un desfase de quincenas entre el SIAPSEP y sicon';
      alert.hasError = true;
      return alert;
    }

    return alert;
  }, [data, isFetching]);

  const { messageWarning, hasWarning } = useMemo(() => {
    const alert = {
      messageWarning: '',
      hasWarning: false,
    };

    if (isFetching) {
      return alert;
    }

    if (isError || !data) {
      return alert;
    }

    const { warning } = data;

    if (warning) {
      alert.messageWarning = warning;
      alert.hasWarning = true;
      return alert;
    }

    return alert;
  }, [data, isFetching]);

  const { messageInfo, hasInfo } = useMemo(() => {
    const alert = {
      messageInfo: '',
      hasInfo: false,
    };

    if (!data || isError) return alert;

    const { siconFortnight, spnFortnight } = data;

    if (
      siconFortnight.fortnight === spnFortnight.fortnight &&
      siconFortnight.consecutive === spnFortnight.consecutive
    ) {
      alert.messageInfo = 'La quincena y consecutivo coinciden, no hay nada que actualizar';
      alert.hasInfo = true;
      return alert;
    }

    return alert;
  }, []);

  return {
    hasError,
    hasInfo,
    hasWarning,
    isFetching,
    message,
    messageInfo,
    messageWarning,
    data,
  };
};
