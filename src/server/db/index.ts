import { SiapsepConnection } from './siapsep/siapsep.connection';
import { db_sicon } from './sicon/sicon.connection';
import { db_spn } from './spn/spn.connection';

const db = {
  spn: db_spn,
  sicon: db_sicon,
  siapsep: new SiapsepConnection(),
};

export { db };
