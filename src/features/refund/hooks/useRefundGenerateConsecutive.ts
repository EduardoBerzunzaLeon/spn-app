import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useServerFn } from '@tanstack/react-start';
import { refundKeys } from '../query';
import { serverFn } from '~/server/functions';

export const useRefundGenerateConsecutive = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: useServerFn(serverFn.refund.generateConsecutive),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: refundKeys.consecutives() });
    },
  });
};
