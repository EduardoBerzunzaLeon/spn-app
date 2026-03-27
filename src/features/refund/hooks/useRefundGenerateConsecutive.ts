import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useServerFn } from '@tanstack/react-start';
import { refundKeys } from '../query';
import { serverFn } from '~/server/functions';

export const useRefundGenerateConsecutive = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: useServerFn(serverFn.refund.generateConsecutive),
    onSuccess: () => {
      console.log('successed generate consecutive');
      queryClient.invalidateQueries({ queryKey: refundKeys.consecutive() });
      queryClient.invalidateQueries({ queryKey: refundKeys.lists() });
      // queryClient.invalidateQueries({ queryKey: refundKeys.all });
      // queryClient.invalidateQueries({ queryKey: controlProcessKeys.all });
      // queryClient.invalidateQueries({ queryKey: controlSiconKeys.all });
      
      // queryClient.invalidateQueries({ queryKey: .all });
    },
  });
};
