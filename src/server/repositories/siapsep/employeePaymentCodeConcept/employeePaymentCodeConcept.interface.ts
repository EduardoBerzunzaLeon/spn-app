import { Fortnights, PaymentCode, Rfc, UVersion } from '../interfaces';

export interface EmployeePaymentCodeConceptI extends UVersion, Rfc, PaymentCode, Fortnights {
  perc_ded: string;
  concepto: string;
  importe: number;
  num_doc: number;
  fec_doc: string;
  ban_ins_cpto: string;
  ban_tipo_cpto_ep: number;
  num_aplic: number;
}

export type EmployeePaymentCodeConceptColumns = keyof EmployeePaymentCodeConceptI;
