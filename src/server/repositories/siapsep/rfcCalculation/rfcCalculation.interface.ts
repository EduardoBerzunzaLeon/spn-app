import { Rfc } from '../interfaces';

export type RfcCalculationI = Rfc;

export type RfcCalculationColumns = keyof RfcCalculationI;

export type RfcCalculationTables = 'rfc_calculo' | 'rfc2' | 'rfc3';
