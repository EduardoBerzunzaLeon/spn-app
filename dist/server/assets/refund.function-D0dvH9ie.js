import { n as __exportAll, t as ErrorApp } from "./errorApp.entity-Dp6qI9Fl.js";
import { r as createServerFn } from "../server.js";
import { n as RefundUpdateNotesSchema, t as RefundSearchSchema } from "./refund.shared.schema-CT71zQRm.js";
import { n as handlerError, t as errorMiddleware } from "./error.middleware-BWDQc52T.js";
import { n as core, t as repository } from "./repositories-DZX3SP4X.js";
import { t as controlProcess } from "./controlProcessFortnight-UPthPq9I.js";
import { t as createServerRpc } from "./createServerRpc-CmabSksO.js";
//#region src/shared/pagination/paginationHandlerError.ts
var withPaginationHandlerError = (handler) => {
	return async (ctx) => {
		try {
			return await handler(ctx);
		} catch (error) {
			const { message, status } = handlerError(error);
			return {
				data: [],
				meta: { totalRowCount: 0 },
				error: {
					message,
					code: status
				}
			};
		}
	};
};
//#endregion
//#region src/server/features/refund/services/refund.service.ts
var getSiapsepCount = async (fortnight) => {
	return await repository.siapsep.employeePaymentCodeConcept.refunds.getCount(fortnight);
};
var closeSiconCapture = async (siconId) => {
	await repository.sicon.refunds.updateStatus(siconId, 2);
};
//#endregion
//#region src/server/features/refund/services/index.ts
var services_exports = /* @__PURE__ */ __exportAll({
	closeSiconCapture: () => closeSiconCapture,
	getSiapsepCount: () => getSiapsepCount
});
//#endregion
//#region src/server/features/refund/useCases/getLogs.case.ts
var getLogs$1 = async (props) => {
	return await repository.spn.refunds.getLogs({ ...props });
};
//#endregion
//#region src/server/features/refund/useCases/updateNotes.case.ts
var updateNotes$1 = async (props) => {
	return await repository.spn.refunds.updateNotes(props);
};
//#endregion
//#region src/server/features/refund/useCases/getLastConsecutive.case.ts
var convertFortnightToNumber = (serverFortnight) => {
	const { consecutive, fortnight, ...rest } = serverFortnight;
	return {
		...rest,
		consecutive: Number(consecutive),
		fortnight: Number(fortnight)
	};
};
var verifyWarning = (fortnights) => {
	const { areEqualFortnights, differencesConsecutive, consecutive } = fortnights;
	if (areEqualFortnights && differencesConsecutive > 1 || differencesConsecutive < 0) return true;
	if (!areEqualFortnights && consecutive !== 1) return true;
	return false;
};
var getLastConsecutive$1 = async () => {
	const [[siconFortnightPre], [spnFortnightPre]] = await Promise.all([repository.sicon.refunds.getLastConsecutive(), repository.spn.refunds.getLastConsecutive()]);
	if (!siconFortnightPre || !siconFortnightPre.fortnight) throw ErrorApp.internal("No se encontraron consecutivos de SICON");
	const siconFortnight = convertFortnightToNumber(siconFortnightPre);
	if (!spnFortnightPre) return {
		siconFortnight,
		spnFortnight: spnFortnightPre,
		warning: "No se encontro consecutivo en SPN",
		isFirstCharge: true,
		areEqualFortnights: false,
		differencesConsecutive: 0
	};
	const spnFortnight = convertFortnightToNumber(spnFortnightPre);
	const areEqualFortnights = siconFortnight.fortnight === spnFortnight.fortnight;
	const differencesConsecutive = siconFortnight.consecutive - spnFortnight.consecutive;
	const fortnights = {
		siconFortnight,
		spnFortnight,
		warning: "",
		areEqualFortnights,
		differencesConsecutive,
		isFirstCharge: false
	};
	const warningIsImportant = verifyWarning({
		areEqualFortnights,
		differencesConsecutive,
		consecutive: siconFortnight.consecutive
	});
	if (!areEqualFortnights || differencesConsecutive !== 0) {
		const extraText = warningIsImportant && "La diferencia es mayor a un consecutivo, ¡VERIFICALO!";
		fortnights.warning = `Existe un desfase entre quincenas y consecutivos del SICON (quincena: ${siconFortnight.fortnight}, consecutivo: ${siconFortnight.consecutive})  y SPN (quincena: ${spnFortnight.fortnight}, consecutivo: ${spnFortnight.consecutive}). ${extraText}`;
	}
	return fortnights;
};
//#endregion
//#region src/server/features/refund/useCases/generateConsecutiveCase/constants.ts
var statusAviable = [
	"1",
	"4",
	"5",
	"6"
];
var status = {
	create: "1",
	close: "4",
	responsabilities: "5",
	other: "6"
};
var statusMapped = {
	"1": "creacion",
	"4": "cierre_vigencia",
	"5": "eliminacion_responsabilidades",
	"6": "borrado_otro_consecutivo"
};
var errorMapped = {
	notFound: "RFC no encontrado",
	notFoundEPC: "RFC no encontrado en EPC",
	notFoundPaycodeEPC: "RFC, plaza no encontrada en EPC"
};
//#endregion
//#region src/server/features/refund/useCases/generateConsecutiveCase/generateConsecutive.case.ts
var verifyRfcsExistsInEmployee = async (rfcCalculation, rfcs) => {
	await rfcCalculation.createUniqueRFCs(rfcs);
	const rfcsNotFounded = await rfcCalculation.getRfcNotInEmployee();
	const returnObject = {
		rfcsNotFounded,
		rfcErrors: [],
		hasError: false
	};
	if (rfcsNotFounded.length > 0) {
		await rfcCalculation.deleteRfcNotInEmployee();
		returnObject.rfcErrors.push(...rfcs.filter((item) => rfcsNotFounded.map((i) => i.rfc).includes(item.rfc)).map((i) => {
			return {
				...i,
				error: errorMapped["notFound"]
			};
		}));
		returnObject.hasError = true;
	}
	return returnObject;
};
var verifyCloseVigen = async ({ statusGrouped, fortnight }) => {
	const rfcErrors = [];
	const rfcSuccess = [];
	if (statusGrouped[status.close].length > 0) {
		const rfcNotEPC = await repository.siapsep.rfcPaymentCodeCalculation.refunds.getRfcNotEPC(fortnight);
		const rfcPaymentCodeNotEPC = await repository.siapsep.rfcPaymentCodeCalculation.refunds.getRfcPaymentCodeNotEPC(fortnight);
		statusGrouped[status.close].forEach((item) => {
			rfcNotEPC.forEach((rfcNotFounded) => {
				if (item.rfc === rfcNotFounded.rfc) rfcErrors.push({
					...item,
					error: errorMapped["notFoundEPC"]
				});
			});
			rfcPaymentCodeNotEPC.forEach((rfcCodeNotFounded) => {
				if (item.rfc === rfcCodeNotFounded.rfc && item.payCode === `${rfcCodeNotFounded.cod_pago}` && item.unit === `${rfcCodeNotFounded.unidad}` && item.subunit === `${rfcCodeNotFounded.subunidad}` && item.positionCategory === rfcCodeNotFounded.cat_puesto && item.hours === `${rfcCodeNotFounded.horas}` && item.consecutivePayment === `${rfcCodeNotFounded.cons_plaza}`) rfcErrors.push({
					...item,
					error: errorMapped["notFoundPaycodeEPC"]
				});
			});
			rfcSuccess.push(item);
		});
	}
	return {
		rfcErrors,
		rfcSuccess
	};
};
var groupByStatus = (data) => {
	return data.reduce((acc, item) => {
		if (!item.status) throw ErrorApp.badRequest(`El estado del rfc ${item.rfc} no es válido`);
		const statusString = `${item.status}`;
		if (!statusAviable.includes(statusString)) throw ErrorApp.badRequest("Existen un estatus diferente a 1,4,5,6, el sistema no puede procesarlas, favor de verificarlo.");
		if (item.status === 1 && !item.positionCategory) throw ErrorApp.badRequest(`El rfc ${item.rfc} no tiene categoría de puesto`);
		if (!acc[statusString]) acc[statusString] = [];
		acc[statusString].push(item);
		return acc;
	}, {
		"1": [],
		"4": [],
		"5": [],
		"6": []
	});
};
var getSiconCapture = async ({ id, fortnight }) => {
	const data = await repository.sicon.refunds.getCaptureByIdOpenClose(423);
	if (data.length < 0) throw ErrorApp.badRequest(`No se encontraron datos de captura para la quincena ${fortnight}`);
	return data;
};
var closeVigenRefunds = async ({ fortnight }) => {
	const beforeFortnight = core.fortnight.subtractFortnight(fortnight, 1);
	const [closeVigenByRfc, closeVigenByRfcAndCode] = await Promise.all([repository.siapsep.employeePaymentCodeConcept.refunds.closeVigencyByRfc(fortnight, beforeFortnight), repository.siapsep.employeePaymentCodeConcept.refunds.closeVigencyByRfcAndCode(fortnight, beforeFortnight)]);
	return closeVigenByRfc.count + closeVigenByRfcAndCode.count;
};
var deleteRefunds = async ({ fortnight }) => {
	const [deleteByRfc, deleteByRfcAndCode] = await Promise.all([repository.siapsep.employeePaymentCodeConcept.refunds.deleteByRfc(fortnight), repository.siapsep.employeePaymentCodeConcept.refunds.deleteByRfcAndCode(fortnight)]);
	return deleteByRfc.count + deleteByRfcAndCode.count;
};
var deleteInOtherConsecutive = async ({ statusGrouped, fortnight }) => {
	const rfcs = statusGrouped[status.other];
	const deletedInOtherConsecutiveSize = rfcs.length;
	const rfcSuccess = [];
	if (deletedInOtherConsecutiveSize > 0) {
		const rfcDeleteInOtherConsecutive = rfcs;
		const rfcPrepared = core.query.prepareToSQLBulkValues({
			columns: [
				"rfc",
				"payCode",
				"unit",
				"subunit",
				"positionCategory",
				"hours",
				"consecutivePayment",
				"status"
			],
			data: rfcs
		});
		await repository.siapsep.rfcPaymentCodeCalculation.deleteAll();
		await repository.siapsep.rfcPaymentCodeCalculation.createMany(rfcPrepared);
		await repository.siapsep.employeePaymentCodeConcept.refunds.deleteByRfcAndCode(fortnight);
		rfcSuccess.push(...rfcDeleteInOtherConsecutive);
	}
	return rfcSuccess;
};
var createRefunds = async ({ statusGrouped }) => {
	const returnObject = {
		created: 0,
		rfcSuccess: []
	};
	if (statusGrouped[status.create].length > 0) {
		const rfcCreateCodePayments = statusGrouped[status.create];
		const rfcPrepared = core.query.prepareToSQLBulkValues({
			columns: [
				"uVersion",
				"rfc",
				"payCode",
				"unit",
				"subunit",
				"positionCategory",
				"hours",
				"consecutivePayment",
				"conceptType",
				"concept",
				"fortnightEnd",
				"fortnightStart",
				"monthlyAmount",
				"document",
				"documentDate",
				"flag",
				"typeFlag",
				"applicationNumber"
			],
			data: rfcCreateCodePayments
		});
		returnObject.created = await repository.siapsep.employeePaymentCodeConcept.createMany(rfcPrepared);
		returnObject.rfcSuccess.push(...rfcCreateCodePayments);
	}
	return returnObject;
};
var createRecord = async ({ stats, rfcSuccess, rfcErrors }) => {
	const [{ createdId }] = await repository.spn.refunds.createOne(stats);
	if (rfcSuccess.length > 0) await repository.spn.refundRfcSuccess.createMany(rfcSuccess.map((item) => ({
		refundLogsId: createdId,
		rfc: item.rfc,
		paymentCode: item.payCode,
		type: statusMapped[`${item.status}`]
	})));
	if (rfcErrors.length > 0) await repository.spn.refundRfcFailed.createMany(rfcErrors.map((item) => ({
		refundLogsId: createdId,
		rfc: item.rfc,
		paymentCode: item.payCode,
		type: statusMapped[`${item.status}`],
		error: item.error
	})));
};
var initialStats = (fortnight, consecutive) => ({
	processFortnight: String(fortnight),
	consecutive,
	userId: "1",
	recordsCreated: 0,
	recordsDeletedResponsabilities: 0,
	recordsDeletedEmployeeConcept: 0,
	recordsClosedTerm: 0,
	recordsSuccesed: 0,
	recordsFailed: 0,
	hasError: false,
	activeBefore: 0,
	activeAfter: 0
});
var handleEmptyCreateOrCloseRecords = async ({ stats, rfcSuccess, rfcErrors, statusGrouped }) => {
	const createSize = statusGrouped[status.create].length;
	const closeTermSize = statusGrouped[status.close].length;
	let isEmpty = false;
	if (createSize === 0 && closeTermSize === 0) {
		stats.recordsFailed = rfcErrors.length;
		stats.recordsSuccesed = rfcSuccess.length;
		await createRecord({
			stats,
			rfcSuccess,
			rfcErrors
		});
		isEmpty = true;
	}
	return isEmpty;
};
var getServerFortnights = async () => {
	const initialSiapsep = await controlProcess.cases.getSiapsepInitialData();
	const initialSicon = await refund.cases.getLastConsecutive();
	const siapsepFortnight = initialSiapsep.currentFortnight.fortnight;
	const siconFortnight = initialSicon.siconFortnight.fortnight;
	const spnFortnight = initialSicon.spnFortnight.fortnight;
	if (siapsepFortnight === 0) throw ErrorApp.badRequest("La quincena del SIAPSEP no es válida o no hay ninguna abierta");
	if (!initialSicon.isFirstCharge && initialSicon.areEqualFortnights && initialSicon.spnFortnight.consecutive >= initialSicon.siconFortnight.consecutive) throw ErrorApp.badRequest("El consecutivo registrado en SPN es mayor o igual que en SICON");
	if (spnFortnight > siconFortnight) throw ErrorApp.badRequest("La quincena registrada en SPN es mayor que en SICON");
	if (initialSicon.areEqualFortnights && initialSicon.differencesConsecutive > 1) throw ErrorApp.badRequest("La diferencia de consecutivos es mayor a 1");
	if (siapsepFortnight !== siconFortnight) throw ErrorApp.badRequest("No coinciden las quincenas de SIAPSEP y SICON");
	return {
		siapsep: { fortnight: siapsepFortnight },
		sicon: initialSicon.siconFortnight,
		spn: initialSicon.spnFortnight
	};
};
var generateConsecutive$1 = async () => {
	const rfcCalculation = core.rfc.rfc2;
	const fortnights = await getServerFortnights();
	const { fortnight, consecutive } = fortnights.sicon;
	const stats = initialStats(fortnight, consecutive);
	const rfcErrors = [];
	const rfcSuccess = [];
	let rfcs = [...await getSiconCapture(fortnights.sicon)];
	const verifiedRfcs = await verifyRfcsExistsInEmployee(rfcCalculation, rfcs);
	rfcErrors.push(...verifiedRfcs.rfcErrors);
	stats.hasError = verifiedRfcs.hasError;
	rfcs = core.rfc.filterRfcs(rfcs, verifiedRfcs.rfcsNotFounded);
	if (rfcs.length === 0) throw ErrorApp.badRequest("No hay registros que procesar");
	const { count: currentRefundsCount } = await getSiapsepCount(fortnight);
	stats.activeBefore = currentRefundsCount;
	stats.activeAfter = currentRefundsCount;
	const statusGrouped = groupByStatus(rfcs);
	stats.recordsDeletedResponsabilities = await repository.siapsep.responsabilities.deleteByRfc(rfcCalculation.getTable());
	rfcSuccess.push(...statusGrouped[status.responsabilities]);
	if (await handleEmptyCreateOrCloseRecords({
		stats,
		rfcSuccess,
		rfcErrors,
		statusGrouped
	})) return stats;
	const rfcCodePayments = [...statusGrouped[status.create], ...statusGrouped[status.close]];
	await core.rfcPaymentCode.createRfcPaymentCodeCalculation({ data: rfcCodePayments });
	const closeVigenVerified = await verifyCloseVigen({
		statusGrouped,
		fortnight
	});
	rfcErrors.push(...closeVigenVerified.rfcErrors);
	rfcSuccess.push(...closeVigenVerified.rfcSuccess);
	stats.recordsClosedTerm = await closeVigenRefunds({ fortnight });
	stats.recordsDeletedEmployeeConcept = await deleteRefunds({ fortnight });
	const rfcsDeleted = await deleteInOtherConsecutive({
		statusGrouped,
		fortnight
	});
	rfcSuccess.push(...rfcsDeleted);
	const createdRefunds = await createRefunds({ statusGrouped });
	stats.recordsCreated = createdRefunds.created;
	rfcSuccess.push(...createdRefunds.rfcSuccess);
	stats.activeAfter = (await getSiapsepCount(fortnight)).count;
	stats.recordsFailed = rfcErrors.length;
	stats.recordsSuccesed = rfcSuccess.length;
	stats.hasError = rfcErrors.length > 0;
	await createRecord({
		stats,
		rfcSuccess,
		rfcErrors
	});
	return stats;
};
//#endregion
//#region src/server/features/refund/index.ts
var refund = {
	cases: /* @__PURE__ */ __exportAll({
		generateConsecutive: () => generateConsecutive$1,
		getLastConsecutive: () => getLastConsecutive$1,
		getLogs: () => getLogs$1,
		updateNotes: () => updateNotes$1
	}),
	services: services_exports
};
//#endregion
//#region src/server/features/refund/functions/refund.function.ts?tss-serverfn-split
var getLogs_createServerFn_handler = createServerRpc({
	id: "3a8b046a6b17237c61fe51b6b1b4dce61a449372089e3643605340d29c18d370",
	name: "getLogs",
	filename: "src/server/features/refund/functions/refund.function.ts"
}, (opts) => getLogs.__executeServer(opts));
var getLogs = createServerFn().inputValidator(RefundSearchSchema).handler(getLogs_createServerFn_handler, withPaginationHandlerError(async ({ data }) => {
	if (data.gFilter) {
		const rfcSuccess = [{
			id: "rfcSuccess.rfc",
			value: data.gFilter,
			key: ""
		}];
		const rfcError = [{
			id: "rfcFailed.rfc",
			value: data.gFilter,
			key: ""
		}];
		data.filters = [
			...data.filters,
			...rfcSuccess,
			...rfcError
		];
	}
	return await refund.cases.getLogs({ ...data });
}));
var updateNotes_createServerFn_handler = createServerRpc({
	id: "bb40340065fda55edc82e4ac76875189a8789a2af5fad102d8f7fc851a57cc37",
	name: "updateNotes",
	filename: "src/server/features/refund/functions/refund.function.ts"
}, (opts) => updateNotes.__executeServer(opts));
var updateNotes = createServerFn().middleware([errorMiddleware]).inputValidator(RefundUpdateNotesSchema).handler(updateNotes_createServerFn_handler, async ({ data }) => {
	await refund.cases.updateNotes(data);
	return { message: "Nota actualizada" };
});
var generateConsecutive_createServerFn_handler = createServerRpc({
	id: "053d4dc288a73d579e943aa393aafd874b31093f1ef6fbf9fc37b71d6dd9c3b8",
	name: "generateConsecutive",
	filename: "src/server/features/refund/functions/refund.function.ts"
}, (opts) => generateConsecutive.__executeServer(opts));
var generateConsecutive = createServerFn().middleware([errorMiddleware]).handler(generateConsecutive_createServerFn_handler, async () => {
	await refund.cases.generateConsecutive();
	return { message: "Consecutivo generado correctamente" };
});
var getLastConsecutive_createServerFn_handler = createServerRpc({
	id: "843602d617c198d99329114f6ac1f0f1511860d8a22c3c7e3370bf592f646853",
	name: "getLastConsecutive",
	filename: "src/server/features/refund/functions/refund.function.ts"
}, (opts) => getLastConsecutive.__executeServer(opts));
var getLastConsecutive = createServerFn().handler(getLastConsecutive_createServerFn_handler, async () => {
	return await refund.cases.getLastConsecutive();
});
//#endregion
export { generateConsecutive_createServerFn_handler, getLastConsecutive_createServerFn_handler, getLogs_createServerFn_handler, updateNotes_createServerFn_handler };
