import { repository } from '~/server/repositories';

export const getSiapsepCount = async (fortnight: number) =>
  await repository.siapsep.employeePaymentCodeConcept.refunds.getCount(fortnight);

export const closeSiconCapture = async (siconId: number) => {
  await repository.sicon.refunds.updateStatus(siconId, 2);
};
