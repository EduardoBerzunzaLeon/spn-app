import { Fortnights, UVersion } from '../interfaces';

export interface ControlProcess extends UVersion, Fortnights {
  qna_proc: number;
  cons_qna_proc: number;
  cve_mensaje: number;
  estatus_proc: string;
  tot_cheques_impr: number;
  tot_cheques_canc: number;
  tot_perc: number;
  tot_ded: number;
  operador: string;
  num_terminal: number;
  hora_captura: string | null;
}

export type GetCurrentFornightI = Pick<ControlProcess, 'qna_proc' | 'estatus_proc'>;

export type GetLastSecondaryFortnightI = Pick<GetCurrentFornightI, 'qna_proc'>;

export type GetOpenFornightsI = GetCurrentFornightI & { cons_qna_proc: number };
