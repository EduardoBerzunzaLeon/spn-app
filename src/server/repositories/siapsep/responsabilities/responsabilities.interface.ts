import { Fortnights, PaymentCode, Rfc, UVersion } from '../interfaces';

export interface ResponsabilitiesI extends UVersion, Rfc, PaymentCode, Fortnights {
  qna_proc: number;
  concepto: string;
  imp_resp: number | null;
  imp_resp_apl: number | null;
}
