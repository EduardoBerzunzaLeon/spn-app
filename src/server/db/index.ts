import { SiapsepConnection } from './siapsep/siapsep.connection';
import { db_spn } from './spn/spn.connection';

const db = {
  spn: db_spn,
  siapsep: new SiapsepConnection(),
};

export { db };
