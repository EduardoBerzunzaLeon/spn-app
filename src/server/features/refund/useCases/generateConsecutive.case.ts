import { stat } from 'fs';
import { refund } from '..';
import { r } from 'node_modules/better-auth/dist/shared/better-auth.ClXlabtY';
import { controlProcess } from '../../controlProcessFortnight';
import { core } from '~/server/core';
import { refundErrorsEnum, refundTypesEnum } from '~/server/db/spn/schema';
import { repository } from '~/server/repositories';
import { EmployeePaymentCodeConceptI } from '~/server/repositories/siapsep/employeePaymentCodeConcept';
import { RefundLogsInsert } from '~/server/repositories/spn/refund';
import { ArrayElement, ErrorApp, ReturnArrayElement } from '~/shared';

//  ====================================
//  ========== ESTATUS =================
//  ====================================

//  0 - Sin Reintegro
//  1 - Capturado
//  2 - Existe en Empleado Plaza Concepto
//  3 - Existe en Responsabilidades
//  4 - Cierre de vigencia
//  5 - Eliminación de responsabilidades
//  6 - Borrado en otro consecutivo

type PrepareInsertEPCColumn = keyof ReturnArrayElement<
  typeof repository.sicon.refunds.getCaptureByIdOpenClose
>;

const status = {
  create: '1',
  close: '4',
  responsabilities: '5',
  other: '6',
};

const statusMapped: Record<string, (typeof refundTypesEnum.enumValues)[number]> = {
  '1': 'creacion',
  '4': 'cierre_vigencia',
  '5': 'eliminacion_responsabilidades',
  '6': 'borrado_otro_consecutivo',
};

const errorMapped: Record<string, (typeof refundErrorsEnum.enumValues)[number]> = {
  notFound: 'RFC no encontrado',
  notFoundEPC: 'RFC no encontrado en EPC',
  notFoundPaycodeEPC: 'RFC, plaza no encontrada en EPC',
};

const getServerFornitghts = async () => {
  const initialSiapsep = await controlProcess.cases.getSiapsepInitialData();
  const initialSicon = await refund.cases.getLastConsecutive();

  const siapsepFortnight = initialSiapsep.currentFortnight.fortnight;
  const siconFortnight = initialSicon.siconFortnight.fortnight;
  const spnFortnight = initialSicon.spnFortnight.fortnight;

  // TODO: ask if the correct fortnight is ordinary or current consecutive in SIAPSEP.
  if (siapsepFortnight === 0) {
    throw ErrorApp.badRequest('La quincena del SIAPSEP no es válida o no hay ninguna abierta');
  }

  if (
    !initialSicon.isFirstCharge &&
    initialSicon.areEqualFortnights &&
    initialSicon.spnFortnight.consecutive >= initialSicon.siconFortnight.consecutive
  ) {
    throw ErrorApp.badRequest('El consecutivo registrado en SPN es mayor o igual que en SICON');
  }

  if (spnFortnight > siconFortnight) {
    throw ErrorApp.badRequest('La quincena registrada en SPN es mayor que en SICON');
  }

  // TODO: ask if this is necessary
  if (initialSicon.areEqualFortnights && initialSicon.differencesConsecutive > 1) {
    throw ErrorApp.badRequest('La diferencia de consecutivos es mayor a 1');
  }

  if (siapsepFortnight !== siconFortnight) {
    throw ErrorApp.badRequest('No coinciden las quincenas de SIAPSEP y SICON');
  }

  return {
    siapsep: { fortnight: siapsepFortnight },
    sicon: initialSicon.siconFortnight,
    spn: initialSicon.spnFortnight,
  };
};

interface GetSiconCaptureI {
  id: number;
  fortnight: number;
}

const getSiconCapture = async ({ id, fortnight }: GetSiconCaptureI) => {
  // const data = await repository.sicon.refunds.getCaptureByIdOpenClose(id);
  const data = await repository.sicon.refunds.getCaptureByIdOpenClose(423);

  // TODO: ask if close de capture before or after verify this
  if (data.length < 0) {
    throw ErrorApp.badRequest(`No se encontraron datos de captura para la quincena ${fortnight}`);
  }

  return data;
};

const groupByStatus = (data: Awaited<ReturnType<typeof getSiconCapture>>) => {
  const grouped = data.reduce(
    (acc, item) => {
      if (!item.status) {
        throw ErrorApp.badRequest(`El estado del rfc ${item.rfc} no es válido`);
      }

      if (item.status === 3 || item.status === 2) {
        throw ErrorApp.badRequest(
          'Existen estatus 2 y/o 3, el sistema no puede procesarlas, favor de verificarlo.'
        );
      }

      if (item.status === 1 && !item.positionCategory) {
        throw ErrorApp.badRequest(`El rfc ${item.rfc} no tiene categoría de puesto`);
      }

      const statusString = `${item.status}`;

      if (!acc[statusString]) {
        acc[statusString] = [];
      }
      acc[statusString].push(item);
      return acc;
    },
    {} as Record<string, typeof data>
  );

  return grouped;
};

const filterRfcs = (
  data: Awaited<ReturnType<typeof getSiconCapture>>,
  rfcNotFounded: { rfc: string }[]
) => {
  const rfcNotFoundedSet = new Set(rfcNotFounded.map((item) => item.rfc));
  return data.filter((item) => !rfcNotFoundedSet.has(item.rfc));
};

// const separateEmptyCodePayment = (data: Awaited<ReturnType<typeof getSiconCapture>>) => {};

// -- "cierre_vigencia" | "creacion" | "eliminacion_responsabilidades";

export const generateConsecutive = async () => {
  const rfcCalculation = core.rfc.rfc2;

  const fortnights = await getServerFornitghts();

  // TODO: lOCAL SICON IS MANDATORY
  // await repository.sicon.refunds.updateStatus(fortnights.sicon.id, 2);

  const { fortnight, consecutive } = fortnights.sicon;
  const fortnightString = String(fortnight);

  const stats: RefundLogsInsert = {
    processFortnight: fortnightString,
    consecutive,
    userId: '1',
    recordsCreated: 0,
    recordsDeletedResponsabilities: 0,
    recordsDeletedEmployeeConcept: 0,
    recordsClosedTerm: 0,
    recordsSuccesed: 0,
    recordsFailed: 0,
    hasError: false,
    activeBefore: 0,
    activeAfter: 0,
  };

  const data = await getSiconCapture(fortnights.sicon);
  let rfcs = [...data];
  // Agregar RFC unicos en rfc_calculo
  const rfcUniques = core.rfc.groupByRFCtoSQL(rfcs);
  await rfcCalculation.insertRFCs(rfcUniques);

  const rfcsNotFounded = await rfcCalculation.getRfcNotInEmployee();
  const rfcErrors: (ReturnArrayElement<typeof getSiconCapture> & {
    error: (typeof refundErrorsEnum.enumValues)[number];
  })[] = [];
  const rfcSuccess: ReturnArrayElement<typeof getSiconCapture>[] = [];

  if (rfcsNotFounded.length > 0) {
    await rfcCalculation.deleteRfcNotInEmployee();

    rfcErrors.push(
      ...rfcs
        .filter((item) => rfcsNotFounded.map((i) => i.rfc).includes(item.rfc))
        .map((i) => {
          return {
            ...i,
            error: errorMapped['notFound'],
          };
        })
    );
    stats.hasError = true;
    rfcs = filterRfcs(rfcs, rfcsNotFounded);
  }

  if (rfcs.length === 0) {
    throw ErrorApp.badRequest('No hay registros que procesar');
  }

  const currentRefunds =
    await repository.siapsep.employeePaymentCodeConcept.refunds.getCount(fortnight);

  stats.activeBefore = currentRefunds.count;
  stats.activeAfter = currentRefunds.count;

  // TODO: eliminar de responsabilidades
  const recordsDeletedResponsabilities =
    await repository.siapsep.responsabilities.deleteByRfc('rfc2');
  stats.recordsDeletedResponsabilities = recordsDeletedResponsabilities;

  const statusGrouped = groupByStatus(rfcs);

  const createSize = statusGrouped[status.create]?.length ?? 0;
  const closeTermSize = statusGrouped[status.close]?.length ?? 0;

  rfcSuccess.push(...(statusGrouped[status.responsabilities] ?? []));

  if (createSize === 0 && closeTermSize === 0) {
    stats.recordsFailed = rfcErrors.length;
    stats.recordsSuccesed = rfcSuccess.length;
    await createRecord({
      stats,
      rfcSuccess,
      rfcErrors,
    });

    return stats;
  }

  const rfcCodePayments = [
    ...(statusGrouped[status.create] ?? []),
    ...(statusGrouped[status.close] ?? []),
  ];

  const rfcPrepared = core.rfc.prepareToSQLBulkValues({
    columns: [
      'rfc',
      'payCode',
      'unit',
      'subunit',
      'positionCategory',
      'hours',
      'consecutivePayment',
      'status',
    ],
    data: rfcCodePayments,
  });

  await repository.siapsep.rfcPaymentCodeCalculation.deleteAll();
  await repository.siapsep.rfcPaymentCodeCalculation.createMany(rfcPrepared);

  // rfcErrors.push(...(statusGrouped[status.close].map))

  if (statusGrouped[status.close].length > 0) {
    const rfcNotEPC =
      await repository.siapsep.rfcPaymentCodeCalculation.refunds.getRfcNotEPC(fortnight);

    const rfcPaymentCodeNotEPC =
      await repository.siapsep.rfcPaymentCodeCalculation.refunds.getRfcPaymentCodeNotEPC(fortnight);

    statusGrouped[status.close].forEach((item) => {
      rfcNotEPC.forEach((rfcNotFounded) => {
        if (item.rfc === rfcNotFounded.rfc) {
          rfcErrors.push({ ...item, error: errorMapped['notFoundEPC'] });
        }
      });

      rfcPaymentCodeNotEPC.forEach((rfcCodeNotFounded) => {
        if (
          item.rfc === rfcCodeNotFounded.rfc &&
          item.payCode === `${rfcCodeNotFounded.cod_pago}` &&
          item.unit === `${rfcCodeNotFounded.unidad}` &&
          item.subunit === `${rfcCodeNotFounded.subunidad}` &&
          item.positionCategory === rfcCodeNotFounded.cat_puesto &&
          item.hours === `${rfcCodeNotFounded.horas}` &&
          item.consecutivePayment === `${rfcCodeNotFounded.cons_plaza}`
        ) {
          rfcErrors.push({ ...item, error: errorMapped['notFoundPaycodeEPC'] });
        }
      });
      rfcSuccess.push(item);
    });
  }

  const closeVigenByRfc =
    await repository.siapsep.employeePaymentCodeConcept.refunds.closeVigencyByRfc(
      fortnight,
      fortnight - 1 // TODO create delete one fortnight
    );

  const closeVigenByRfcAndCode =
    await repository.siapsep.employeePaymentCodeConcept.refunds.closeVigencyByRfcAndCode(
      fortnight,
      fortnight - 1
    );

  stats.recordsClosedTerm = closeVigenByRfc.count + closeVigenByRfcAndCode.count;

  const deleteByRfc =
    await repository.siapsep.employeePaymentCodeConcept.refunds.deleteByRfc(fortnight);

  const deleteByRfcAndCode =
    await repository.siapsep.employeePaymentCodeConcept.refunds.deleteByRfcAndCode(fortnight);

  stats.recordsDeletedEmployeeConcept = deleteByRfc.count + deleteByRfcAndCode.count;

  const deletedInOtherConsecutiveSize = statusGrouped[status.other]?.length ?? 0;

  if (deletedInOtherConsecutiveSize > 0) {
    const rfcDeleteInOtherConsecutive = statusGrouped[status.other];
    const rfcPrepared = core.rfc.prepareToSQLBulkValues({
      columns: [
        'rfc',
        'payCode',
        'unit',
        'subunit',
        'positionCategory',
        'hours',
        'consecutivePayment',
        'status',
      ],
      data: statusGrouped[status.other],
    });

    await repository.siapsep.rfcPaymentCodeCalculation.deleteAll();
    await repository.siapsep.rfcPaymentCodeCalculation.createMany(rfcPrepared);
    await repository.siapsep.employeePaymentCodeConcept.refunds.deleteByRfcAndCode(fortnight);

    rfcSuccess.push(...rfcDeleteInOtherConsecutive);
  }

  if (statusGrouped[status.create].length > 0) {
    const rfcCreateCodePayments = statusGrouped[status.create];
    const columns: PrepareInsertEPCColumn[] = [
      'uVersion',
      'rfc',
      'payCode',
      'unit',
      'subunit',
      'positionCategory',
      'hours',
      'consecutivePayment',
      'conceptType',
      'concept',
      'fortnightEnd',
      'fortnightStart',
      'monthlyAmount',
      'document',
      'documentDate',
      'flag',
      'typeFlag',
      'applicationNumber',
    ];

    const rfcPrepared = core.rfc.prepareToSQLBulkValues({
      columns,
      data: rfcCreateCodePayments,
    });
    const created = await repository.siapsep.employeePaymentCodeConcept.createMany(rfcPrepared);
    stats.recordsCreated = created;
    rfcSuccess.push(...rfcCreateCodePayments);
  }

  const lastRefunds =
    await repository.siapsep.employeePaymentCodeConcept.refunds.getCount(fortnight);
  stats.activeAfter = lastRefunds.count;
  stats.recordsFailed = rfcErrors.length;
  stats.recordsSuccesed = rfcSuccess.length;
  stats.hasError = rfcErrors.length > 0;

  await createRecord({
    stats,
    rfcSuccess,
    rfcErrors,
  });

  return stats;
};

interface CreateRecordI {
  stats: RefundLogsInsert;
  rfcSuccess: ReturnArrayElement<typeof getSiconCapture>[];
  rfcErrors: (ReturnArrayElement<typeof getSiconCapture> & {
    error: (typeof refundErrorsEnum.enumValues)[number];
  })[];
}

const createRecord = async ({ stats, rfcSuccess, rfcErrors }: CreateRecordI) => {
  const [{ insertedId }] = await repository.spn.refunds.createOne(stats);

  if (rfcSuccess.length > 0) {
    await repository.spn.refundRfcSuccess.createMany(
      rfcSuccess.map((item) => ({
        refundLogsId: insertedId,
        rfc: item.rfc,
        paymentCode: item.payCode,
        type: statusMapped[`${item.status}` as keyof typeof statusMapped],
      }))
    );
  }

  if (rfcErrors.length > 0) {
    await repository.spn.refundRfcFailed.createMany(
      rfcErrors.map((item) => ({
        refundLogsId: insertedId,
        rfc: item.rfc,
        paymentCode: item.payCode,
        type: statusMapped[`${item.status}` as keyof typeof statusMapped],
        error: item.error,
      }))
    );
  }
};
