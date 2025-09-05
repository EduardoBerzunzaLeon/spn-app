export interface PaymentCode {
  cod_pago: number;
  unidad: number;
  subunidad: number;
  cat_puesto: string;
  horas: number;
  cons_plaza: number;
}

export interface Rfc {
  rfc: string;
}

export interface UVersion {
  u_version: string | null;
}

export interface Fortnights {
  qna_fin: number;
  qna_ini: number;
}
