import { repository } from '~/server/repositories';

interface Props {
  limit: number,
  page: number,
  orderBy: string,
  order: 'asc'| 'desc',
}

export const getLogs = async (props: Props) => {
  return await repository.spn.refunds.getRefundLogs({ ...props });
};
