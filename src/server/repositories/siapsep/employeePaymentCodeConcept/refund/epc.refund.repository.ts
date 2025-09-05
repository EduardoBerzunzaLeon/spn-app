import { getMany } from '../employeePaymentCodeConcept.repository';

export const getCount = async (fortnight: number) => {
  return await getMany({
    concept: '19',
    type: 'P',
    endFortnight: fortnight,
    isCount: true,
    endFortnightComparative: 'moreEqualThan',
  });
};
