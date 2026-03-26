import { Fortnights, PaymentCode, Rfc, UVersion } from '../interfaces';


export interface EmployeePaymentCodeI extends UVersion, Rfc, PaymentCode, Fortnights {
  estatus_plaza: number;        // smallint - not null
  mot_mov: number;              // smallint - not null
  ban_pago: number;             // smallint - not null
  tipo_pago: number;            // smallint - not null
  num_hrs_pago: number;         // float - not null
  hrs_compat: number;           // float - not null
  nivel_sueldo: number;         // smallint - not null
  ban_camb_plaza: number;       // smallint - not null
  ban_plaza_fc: number;         // smallint - not null
  niv_puesto: number;           // smallint - not null
  niv_puesto_aux: string;       // char(2) - not null
  qna_fin_ul_lic: number;       // integer - not null
  ban_pa: number;               // smallint - not null
  ban_cptoexec: number;         // smallint - not null
  ban_cpspro: number;           // smallint - not null
  ban_cptoemppza: number;       // smallint - not null
  qna_ing_subsistema: number;   // integer - not null
  modelo: number;               // smallint - not null
  subsis: number;               // smallint - not null
  subsubsis: number;            // smallint - not null
  hrs_docente: number;          // float - not null
  zona_eco?: string;            // varchar(1,1) - nullable
  sobre_sueldo: number;         // money(19,4) - not null
  tipo_serv?: string;           // varchar(1,1) - nullable
}

export type EmployeePaymentCodeColumns = keyof EmployeePaymentCodeI;
