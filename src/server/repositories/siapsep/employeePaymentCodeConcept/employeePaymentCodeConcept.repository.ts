import { db } from '~/server/db';

type TypeConcept = 'P' | 'D';
type Comparative = 'moreThan' | 'lessThan' | 'equals' | 'moreEqualThan' | 'lessEqualThan';

interface GetManyProps {
  type?: TypeConcept;
  concept?: string;
  endFortnight?: number;
  startFortnight?: number;
  endFortnightComparative?: Comparative;
  startFortnightComparative?: Comparative;
  isCount: boolean;
}

const comparativeHash: Record<Comparative, string> = {
  moreThan: '>',
  lessThan: '<',
  equals: '=',
  moreEqualThan: '>=',
  lessEqualThan: '<=',
};

export const getMany = async (props: GetManyProps) => {
  const {
    type,
    concept,
    endFortnight,
    startFortnight,
    endFortnightComparative,
    startFortnightComparative,
    isCount,
  } = props;

  const whereClauses: string[] = [];
  if (type) {
    whereClauses.push(`perc_ded = '${type}'`);
  }
  if (concept) {
    whereClauses.push(`concepto = '${concept}'`);
  }
  if (endFortnight !== undefined && endFortnightComparative) {
    whereClauses.push(`qna_fin ${comparativeHash[endFortnightComparative]} ${endFortnight}`);
  }
  if (startFortnight !== undefined && startFortnightComparative) {
    whereClauses.push(`qna_ini ${comparativeHash[startFortnightComparative]} ${startFortnight}`);
  }

  if (isCount) {
    return await db.siapsep.execute<number>({
      query: `SELECT COUNT(*) FROM emp_plaza_cpto
      where ${whereClauses.join(' and ')} `,
    });
  }

  return await db.siapsep.execute({
    query: `SELECT * FROM emp_plaza_cpto
    where ${whereClauses.join(' and ')} `,
  });
};
