import { PaymentCode, Rfc } from '../interfaces';

export type RfcPaymentCodeCalculationI = Rfc & PaymentCode;

export type RfcPaymentCodeCalculationColumns = keyof RfcPaymentCodeCalculationI;
