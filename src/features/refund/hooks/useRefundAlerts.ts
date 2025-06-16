import { useMemo } from 'react';
import { useQuery, useSuspenseQuery } from '@tanstack/react-query';
import { controlProcessQueries } from '~/features/controlProcess';
import { refundQueries } from '~/features/refund';

export const useRefundAlerts = () => {
  const { data, isError, isFetching, error } = useQuery(refundQueries.lastConsecutive);
  const { data: fortnightSiapsep } = useSuspenseQuery(controlProcessQueries.fortnight());

  const { message, hasError } = useMemo(() => {
    if (isFetching) {
      return {
        message: '',
        hasError: false,
      };
    }

    if (isError || !data) {
      return {
        message: error?.message || 'No se encontro el último consecutivo en sicon',
        hasError: true,
      };
    }

    if (fortnightSiapsep.error) {
      return {
        message: 'El siapsep esta offline',
        hasError: true,
      };
    }

    const { siconFortnight } = data;

    if (String(fortnightSiapsep.ordinaryFortnight.fortnight) !== siconFortnight.fortnight) {
      return {
        message: 'Existe un desfase de quincenas entre el SIAPSEP y sicon',
        hasError: true,
      };
    }

    return {
      message: '',
      hasError: false,
    };
  }, [data, isFetching]);

  const { messageWarning, hasWarning } = useMemo(() => {
    if (isFetching) {
      return {
        messageWarning: '',
        hasWarning: false,
      };
    }

    if (isError || !data) {
      return {
        messageWarning: '',
        hasWarning: false,
      };
    }

    const { warning } = data;

    if (warning) {
      return {
        messageWarning: warning,
        hasWarning: true,
      };
    }

    return {
      messageWarning: '',
      hasWarning: false,
    };
  }, [data, isFetching]);

  return {
    isFetching,
    message,
    hasError,
    messageWarning,
    hasWarning,
  };
};
