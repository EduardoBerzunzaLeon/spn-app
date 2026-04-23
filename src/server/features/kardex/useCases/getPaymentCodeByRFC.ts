import { repository } from '~/server/repositories';

export const getPaymentCodeByRFC = async (rfc: string) =>
  await repository.siapsep.employeePaymentCode.getManyByRFC(rfc);
