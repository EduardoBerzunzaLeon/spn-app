import { n as __exportAll, t as ErrorApp } from "./errorApp.entity-Dp6qI9Fl.js";
import { t as isEmpty } from "./core.validation-CEuDp-fu.js";
import { a as user, c as reEmpleadosCapturados, i as refundRfcSuccess, n as refundLogs, o as modulos, r as refundRfcFailed, s as reAperturaCierre, t as db } from "./db-Bhy6Sg_R.js";
import { and, asc, between, count, desc, eq, getTableColumns, gt, gte, ilike, lt, lte, ne, notBetween, sql } from "drizzle-orm";
//#region src/server/repositories/siapsep/controlProcessFortnight/controlProcess.repository.ts
var getCurrentFortnight = async () => {
	return await db.siapsep.executeSingle({ query: `SELECT FIRST 1 qna_proc, estatus_proc
    FROM control_qna_proc WHERE cons_qna_proc =  0
    order by qna_proc desc` });
};
var getLastSecondaryFortnight = async () => {
	return await db.siapsep.executeSingle({ query: "SELECT max(qna_proc) as qna_proc FROM control_qna_proc WHERE cons_qna_proc != 0" });
};
var getNoClosedFornight = async () => {
	return await db.siapsep.execute({
		query: `SELECT qna_proc, estatus_proc, cons_qna_proc FROM control_qna_proc WHERE estatus_proc != ?`,
		args: ["Q"]
	});
};
//#endregion
//#region src/server/repositories/siapsep/controlProcessFortnight/index.ts
var controlProcessFortnight_exports = /* @__PURE__ */ __exportAll({
	getCurrentFortnight: () => getCurrentFortnight,
	getLastSecondaryFortnight: () => getLastSecondaryFortnight,
	getNoClosedFornight: () => getNoClosedFornight
});
//#endregion
//#region src/server/repositories/siapsep/employeePaymentCodeConcept/employeePaymentCodeConcept.repository.ts
var comparativeHash = {
	moreThan: ">",
	lessThan: "<",
	equals: "=",
	moreEqualThan: ">=",
	lessEqualThan: "<="
};
var getWhereClause = (props) => {
	const { type, concept, endFortnight, startFortnight, endFortnightComparative, startFortnightComparative } = props;
	const whereClauses = [];
	if (type) whereClauses.push(`perc_ded = '${type}'`);
	if (concept) whereClauses.push(`concepto = '${concept}'`);
	if (endFortnight !== void 0 && endFortnightComparative) whereClauses.push(`qna_fin ${comparativeHash[endFortnightComparative]} ${endFortnight}`);
	if (startFortnight !== void 0 && startFortnightComparative) whereClauses.push(`qna_ini ${comparativeHash[startFortnightComparative]} ${startFortnight}`);
	return whereClauses;
};
var getManyCount = async (props) => {
	const whereClauses = getWhereClause(props);
	return await db.siapsep.execute({ query: `SELECT COUNT(*) AS count FROM emp_plaza_cpto
    where ${whereClauses.join(" and ")} ` });
};
var getMany = async (props) => {
	const whereClauses = getWhereClause(props);
	return await db.siapsep.execute({ query: `SELECT * FROM emp_plaza_cpto
    where ${whereClauses.join(" and ")} ` });
};
var createMany$4 = async (args) => {
	return await db.siapsep.executeBulkInsert({
		table: "emp_plaza_cpto",
		columns: [
			"u_version",
			"rfc",
			"cod_pago",
			"unidad",
			"subunidad",
			"cat_puesto",
			"horas",
			"cons_plaza",
			"perc_ded",
			"concepto",
			"qna_fin",
			"qna_ini",
			"importe",
			"num_doc",
			"fec_doc",
			"ban_ins_cpto",
			"ban_tipo_cpto_ep",
			"num_aplic"
		],
		args
	});
};
//#endregion
//#region src/server/repositories/siapsep/employeePaymentCodeConcept/refund/epc.refund.repository.ts
var epc_refund_repository_exports = /* @__PURE__ */ __exportAll({
	closeVigencyByRfc: () => closeVigencyByRfc,
	closeVigencyByRfcAndCode: () => closeVigencyByRfcAndCode,
	deleteByRfc: () => deleteByRfc$1,
	deleteByRfcAndCode: () => deleteByRfcAndCode,
	getCount: () => getCount$1
});
var getCount$1 = async (fortnight) => {
	return await getManyCount({
		concept: "19",
		type: "D",
		endFortnight: fortnight,
		endFortnightComparative: "moreEqualThan"
	});
};
var closeVigencyByRfc = async (fortnight, closeFortnight) => {
	return await db.siapsep.execute({
		query: `merge into emp_plaza_cpto as em
        using spn_rfcplaza as sp
        on sp.rfc = em.rfc 
        and (sp.cod_pago is null or sp.cod_pago = 0)
        and em.concepto = '19'
        and em.perc_ded = 'D'
        and em.qna_ini <= ?
        and em.qna_fin >= ? 
        when matched then update set em.qna_fin = ?;
    `,
		args: [
			fortnight,
			fortnight,
			closeFortnight
		]
	});
};
var closeVigencyByRfcAndCode = async (fortnight, closeFortnight) => {
	return await db.siapsep.execute({
		query: `merge into emp_plaza_cpto as em
        using spn_rfcplaza as sp
        on sp.rfc = em.rfc  
        and sp.cod_pago = em.cod_pago
        and sp.unidad = em.unidad
        and sp.subunidad = em.subunidad
        and sp.cat_puesto = em.cat_puesto
        and sp.horas = em.horas
        and sp.cons_plaza = em.cons_plaza
        and em.qna_ini <= ?
        and em.qna_fin >= ? 
        and em.concepto = '19'
        and em.perc_ded = 'D'
        when matched then update set em.qna_fin = ?`,
		args: [
			fortnight,
			fortnight,
			closeFortnight
		]
	});
};
var deleteByRfc$1 = async (fortnight) => {
	return await db.siapsep.execute({
		query: `delete from emp_plaza_cpto
        where exists (
          select 1
          from spn_rfcplaza sp
          where sp.rfc = emp_plaza_cpto.rfc
          and (sp.cod_pago is null or sp.cod_pago = 0)
        )
        and concepto = '19'
        and perc_ded = 'D'
        and qna_ini = ?
        and qna_fin >= ?`,
		args: [fortnight, fortnight]
	});
};
var deleteByRfcAndCode = async (fortnight) => {
	return await db.siapsep.execute({
		query: `delete from emp_plaza_cpto em
        where exists (
          select 1
          from spn_rfcplaza sp
          where sp.rfc = em.rfc
           and sp.cod_pago = em.cod_pago
           and sp.unidad = em.unidad
           and sp.subunidad = em.subunidad
           and sp.cat_puesto = em.cat_puesto
           and sp.horas = em.horas
           and sp.cons_plaza = em.cons_plaza
        )
        and concepto = '19'
        and perc_ded = 'D'
        and qna_ini = ?
        and qna_fin >= ?`,
		args: [fortnight, fortnight]
	});
};
//#endregion
//#region src/server/repositories/siapsep/employeePaymentCodeConcept/index.ts
var employeePaymentCodeConcept_exports = /* @__PURE__ */ __exportAll({
	createMany: () => createMany$4,
	getMany: () => getMany,
	getManyCount: () => getManyCount,
	refunds: () => epc_refund_repository_exports
});
//#endregion
//#region src/server/repositories/siapsep/responsabilities/responsabilities.repository.ts
var deleteByRfc = async (rfcCalculationTable) => {
	return await db.siapsep.executeSet({ query: `DELETE FROM responsabilidades where rfc in (
        select rfc from ${rfcCalculationTable})` });
};
//#endregion
//#region src/server/repositories/siapsep/responsabilities/index.ts
var responsabilities_exports = /* @__PURE__ */ __exportAll({ deleteByRfc: () => deleteByRfc });
//#endregion
//#region src/server/repositories/siapsep/rfcCalculation/rfcCalculation.repository.ts
var getAll = async (table) => {
	return await db.siapsep.execute({ query: `SELECT rfc FROM ${table}` });
};
var deleteAll$1 = async (table) => {
	return await db.siapsep.executeSet({ query: `DELETE FROM ${table}` });
};
var createMany$3 = async (table, rfcs) => {
	return await db.siapsep.executeBulkInsert({
		table,
		columns: ["rfc"],
		args: rfcs
	});
};
var getNotInEmployee = async (table) => {
	return await db.siapsep.execute({ query: `SELECT rfc FROM ${table} WHERE rfc NOT IN (SELECT rfc FROM empleado) group by rfc` });
};
var deleteNotInEmployee = async (table) => {
	return await db.siapsep.executeSet({ query: `DELETE FROM ${table} WHERE rfc NOT IN (SELECT rfc FROM empleado)` });
};
//#endregion
//#region src/server/repositories/siapsep/rfcCalculation/index.ts
var rfcCalculation_exports = /* @__PURE__ */ __exportAll({
	createMany: () => createMany$3,
	deleteAll: () => deleteAll$1,
	deleteNotInEmployee: () => deleteNotInEmployee,
	getAll: () => getAll,
	getNotInEmployee: () => getNotInEmployee
});
//#endregion
//#region src/server/repositories/siapsep/rfcPaymentCodeCalculation/rfcPaymentCodeCalculation.repository.ts
var createMany$2 = async (args) => {
	return await db.siapsep.executeBulkInsert({
		table: "spn_rfcplaza",
		columns: [
			"rfc",
			"cod_pago",
			"unidad",
			"subunidad",
			"cat_puesto",
			"horas",
			"cons_plaza",
			"status"
		],
		args
	});
};
var deleteAll = async () => {
	return await db.siapsep.execute({ query: "DELETE FROM spn_rfcplaza" });
};
//#endregion
//#region src/server/repositories/siapsep/rfcPaymentCodeCalculation/refund/rpc_refund.repository.ts
var rpc_refund_repository_exports = /* @__PURE__ */ __exportAll({
	getRfcNotEPC: () => getRfcNotEPC,
	getRfcPaymentCodeNotEPC: () => getRfcPaymentCodeNotEPC
});
var getRfcNotEPC = async (fortnight) => {
	return await db.siapsep.execute({
		query: `SELECT a.rfc from spn_rfcplaza as a
            left join emp_plaza_cpto as b
            on a.rfc = b.rfc
            and b.concepto = 19 and b.perc_ded = 'D' and b.qna_fin >= ?
            where (a.cod_pago is null or a.cod_pago = 0) and a.status = 4
            and b.rfc is null`,
		args: [fortnight]
	});
};
var getRfcPaymentCodeNotEPC = async (fortnight) => {
	return await db.siapsep.execute({
		query: `SELECT a.* from spn_rfcplaza as a
            left join emp_plaza_cpto as b
            on a.rfc = b.rfc
            and a.cod_pago = b.cod_pago
            and a.unidad = b.unidad
            and a.subunidad = b.subunidad
            and a.cat_puesto = b.cat_puesto
            and a.horas = b.horas
            and a.cons_plaza = b.cons_plaza
            and b.concepto = 19 and b.perc_ded = 'D' and b.qna_fin >= ?
            where (a.cod_pago is not null or a.cod_pago != 0) and b.status = 4
            and b.rfc is null`,
		args: [fortnight]
	});
};
//#endregion
//#region src/server/repositories/siapsep/rfcPaymentCodeCalculation/index.ts
var rfcPaymentCodeCalculation_exports = /* @__PURE__ */ __exportAll({
	createMany: () => createMany$2,
	deleteAll: () => deleteAll,
	refunds: () => rpc_refund_repository_exports
});
//#endregion
//#region src/server/repositories/siapsep/index.ts
var siapsep_exports = /* @__PURE__ */ __exportAll({
	controlProcess: () => controlProcessFortnight_exports,
	employeePaymentCodeConcept: () => employeePaymentCodeConcept_exports,
	responsabilities: () => responsabilities_exports,
	rfcCalculation: () => rfcCalculation_exports,
	rfcPaymentCodeCalculation: () => rfcPaymentCodeCalculation_exports
});
//#endregion
//#region src/server/repositories/sicon/modules/modules.repository.ts
var getFortnightByModule = async (module) => {
	return await db.sicon.select({
		id: modulos.id,
		fortnight: modulos.quincena,
		status: modulos.estatus,
		name: modulos.nombre
	}).from(modulos).where(eq(modulos.nombre, module)).limit(1);
};
//#endregion
//#region src/server/repositories/sicon/modules/index.ts
var modules_exports = /* @__PURE__ */ __exportAll({ getFortnightByModule: () => getFortnightByModule });
//#endregion
//#region src/server/repositories/sicon/refunds/openCloseRefund.repository.ts
var getLastConsecutive$1 = async () => {
	return await db.sicon.select({
		id: reAperturaCierre.id,
		consecutive: reAperturaCierre.consecutivo,
		fortnight: reAperturaCierre.quincena,
		status: reAperturaCierre.estatus
	}).from(reAperturaCierre).orderBy(desc(reAperturaCierre.quincena), desc(reAperturaCierre.consecutivo)).limit(1);
};
var updateStatus = async (id, status) => {
	return await db.sicon.update(reAperturaCierre).set({ estatus: status }).where(eq(reAperturaCierre.id, id)).execute();
};
//#endregion
//#region src/server/repositories/sicon/refunds/refund.repository.ts
var getCaptureByIdOpenClose = async (idOpenClose) => {
	return await db.sicon.select({
		id: reEmpleadosCapturados.id,
		uVersion: sql`'#'`,
		rfc: reEmpleadosCapturados.rfc,
		payCode: sql`substr(${reEmpleadosCapturados.plaza},1,2)`,
		unit: sql`substr(${reEmpleadosCapturados.plaza},3,2)`,
		subunit: sql`substr(${reEmpleadosCapturados.plaza},5,2)`,
		positionCategory: sql`substr(${reEmpleadosCapturados.plaza},7,7)`,
		hours: sql`substr(${reEmpleadosCapturados.plaza},14,4)`,
		consecutivePayment: sql`substr(${reEmpleadosCapturados.plaza},18)`,
		conceptType: sql`'D'`,
		concept: sql`'19'`,
		fortnightEnd: reEmpleadosCapturados.quincenaFinConcepto,
		fortnightStart: reEmpleadosCapturados.quincenaInicioConcepto,
		monthlyAmount: reEmpleadosCapturados.importeMensual,
		document: sql`0`,
		documentDate: sql`ifnull(${reEmpleadosCapturados.modified}, ${reEmpleadosCapturados.created})`,
		flag: sql`0`,
		typeFlag: sql`0`,
		applicationNumber: sql`0`,
		paymentCode: reEmpleadosCapturados.plaza,
		biweeklyAmount: reEmpleadosCapturados.importeQuincenal,
		status: reEmpleadosCapturados.estatus,
		fortnight: reEmpleadosCapturados.quincena,
		idUser: reEmpleadosCapturados.idUser
	}).from(reEmpleadosCapturados).where(eq(reEmpleadosCapturados.idAperturaCierre, idOpenClose));
};
//#endregion
//#region src/server/repositories/sicon/refunds/index.ts
var refunds_exports = /* @__PURE__ */ __exportAll({
	getCaptureByIdOpenClose: () => getCaptureByIdOpenClose,
	getLastConsecutive: () => getLastConsecutive$1,
	updateStatus: () => updateStatus
});
//#endregion
//#region src/server/repositories/sicon/index.ts
var sicon_exports = /* @__PURE__ */ __exportAll({
	modules: () => modules_exports,
	refunds: () => refunds_exports
});
//#endregion
//#region src/server/core/fortnight/fortnight.service.ts
var getFortnight = (fortnight) => {
	return fortnight.toString().slice(-2);
};
var getYear = (fortnight) => {
	return fortnight.toString().slice(0, -2);
};
var addFortnight = (fortnight, quantity) => {
	if (getFortnight(fortnight) === "24" && quantity > 0) return fortnight + 76 + quantity;
	return fortnight + quantity;
};
var subtractFortnight = (fortnight, quantity) => {
	if (getFortnight(fortnight) === "01" && quantity > 0) return fortnight - 76 - quantity;
	return fortnight - quantity;
};
//#endregion
//#region src/server/core/fortnight/index.ts
var fortnight_exports = /* @__PURE__ */ __exportAll({
	addFortnight: () => addFortnight,
	getFortnight: () => getFortnight,
	getYear: () => getYear,
	subtractFortnight: () => subtractFortnight
});
//#endregion
//#region src/server/core/pagination/pagination.mapper.ts
var endsWith = (column, value) => {
	return ilike(column, `%${value}`);
};
var startsWith = (column, value) => {
	return ilike(column, `${value}%`);
};
var contains = (column, value) => {
	return ilike(column, `%${value}%`);
};
var validateType = (column, value) => {
	const validator = validTypesMap[column.dataType];
	if (validator) validator(value);
};
var getValidatedSQLMethods = (column, value, fn) => {
	validateType(column, value);
	return fn(column, value);
};
var validTypesMap = {
	number: (value) => {
		if (isNaN(Number(value))) throw ErrorApp.badRequest(`El valor "${value}" no es un número válido`);
	},
	date: (value) => {
		if (!(value instanceof Date)) throw ErrorApp.badRequest(`El valor "${value}" no es una fecha válida`);
	},
	boolean: (value) => {
		if (typeof value !== "boolean") throw ErrorApp.badRequest(`El valor "${value}" no es un booleano válido`);
	}
};
var methodsFilterMap = {
	endsWith,
	startsWith,
	contains,
	equals: (column, value) => getValidatedSQLMethods(column, value, eq),
	notEquals: (column, value) => getValidatedSQLMethods(column, value, ne),
	greaterThan: (column, value) => getValidatedSQLMethods(column, value, gt),
	lessThan: (column, value) => getValidatedSQLMethods(column, value, lt),
	greaterThanOrEqualTo: (column, value) => getValidatedSQLMethods(column, value, gte),
	lessThanOrEqualTo: (column, value) => getValidatedSQLMethods(column, value, lte)
};
var dateFilterMap = {
	contains: (column, start, end) => between(column, start, end),
	equals: (column, start, end) => between(column, start, end),
	notEquals: (column, start, end) => notBetween(column, start, end),
	greaterThan: (column, _, end) => gt(column, end),
	greaterThanOrEqualTo: (column, start) => gte(column, start),
	lessThan: (column, start) => lt(column, start),
	lessThanOrEqualTo: (column, _, end) => lte(column, end)
};
//#endregion
//#region src/server/core/pagination/pagination.service.ts
var getOrderBy = ({ schema, order, orderBy, joinSchemas }) => {
	const fn = order === "asc" ? asc : desc;
	if (!orderBy) return fn(schema.id);
	if (typeof orderBy !== "string") return orderBy;
	const { currentSchema, columnName } = getFilterSchema({
		id: orderBy,
		schema,
		joinSchemas
	});
	return fn(currentSchema[columnName]);
};
var getFilterSchema = ({ id, schema, joinSchemas = {} }) => {
	if (!id.includes(".")) return {
		currentSchema: schema,
		columnName: id
	};
	const idArray = id.split(".");
	if (idArray.length < 2) throw new Error(`El filtro ${id} no puede ser procesado`);
	const [table, columnName] = idArray;
	if (!(table in joinSchemas)) throw new Error(`La tabla ${table} no existe en la consulta`);
	if (!(columnName in joinSchemas[table].schema)) throw new Error(`La propiedad ${columnName} no se encontró en la consulta`);
	return {
		currentSchema: joinSchemas[table].schema,
		columnName
	};
};
var getFilters = ({ filters, filtersFn, schema, joinSchemas }) => {
	const filtersSQL = [];
	if (filters.length === 0) return filtersSQL;
	for (const { value, id } of filters) {
		const { currentSchema, columnName } = getFilterSchema({
			schema,
			id,
			joinSchemas
		});
		if (!(columnName in currentSchema)) throw ErrorApp.badRequest(`La columna ${columnName} no se encontró en la consulta`);
		const column = currentSchema[columnName];
		const filterFn = getFilterFn(column, filtersFn[id]);
		if (filterFn === "between" && Array.isArray(value)) {
			if (!value[0] || !value[1]) continue;
			const { start, end } = getBetweenData(column, value);
			filtersSQL.push(between(column, start, end));
			continue;
		}
		if (typeof value !== "string") throw ErrorApp.badRequest(`El valor ${value} no es un tipo válido`);
		if (column.dataType === "boolean") {
			const booleanValue = value === "true";
			filtersSQL.push(methodsFilterMap["equals"](column, booleanValue));
			continue;
		}
		if (column.dataType === "date") {
			const dateFilter = addDateFilter({
				column,
				value,
				filterFn
			});
			filtersSQL.push(dateFilter);
			continue;
		}
		if (!(filterFn in methodsFilterMap)) throw ErrorApp.badRequest(`El filtro ${filterFn} no está permitido para la columna ${columnName}`);
		filtersSQL.push(methodsFilterMap[filterFn](column, value));
	}
	return filtersSQL;
};
var getCount = async ({ schema, filters = [], joinSchemas = {} }) => {
	const query = db.spn.select({ count: count() }).from(schema).$dynamic();
	if (isEmpty(joinSchemas)) return await query.where(and(...filters));
	for (const key in joinSchemas) {
		const { schema, fieldJoin, fieldFrom, type } = joinSchemas[key];
		query[type](schema, eq(fieldFrom, fieldJoin));
	}
	return await query.where(and(...filters));
};
var addPagination = ({ qb, orderColumn, limit, page }) => {
	const offset = page <= 0 || limit <= 0 ? 0 : page * limit;
	return qb.orderBy(orderColumn).limit(limit).offset(offset);
};
async function withPagination(query, { page, limit, schema, joinSchemas, orderBy, filtersFn = {}, filters = [], order = "asc" }) {
	const orderByFn = getOrderBy({
		order,
		schema,
		orderBy,
		joinSchemas
	});
	const filtersSql = getFilters({
		filters,
		filtersFn,
		schema,
		joinSchemas
	});
	const queryFiltered = addPagination({
		page,
		limit,
		orderColumn: orderByFn,
		qb: query
	}).where(and(...filtersSql));
	const [data, total] = await Promise.all([queryFiltered, getCount({
		schema,
		filters: filtersSql,
		joinSchemas
	})]);
	return {
		data,
		meta: { totalRowCount: total[0].count }
	};
}
var getDateRange = (startDate, endDate) => {
	return {
		start: /* @__PURE__ */ new Date(`${startDate}T00:00:00.000Z`),
		end: /* @__PURE__ */ new Date(`${endDate}T23:59:59.999Z`)
	};
};
var getBetweenData = (column, values) => {
	if (column.dataType === "date") return getDateRange(values[0], values[1]);
	return {
		start: values[0],
		end: values[1]
	};
};
var addDateFilter = ({ column, value, filterFn }) => {
	const { start, end } = getDateRange(value, value);
	if (!(filterFn in dateFilterMap)) throw ErrorApp.badRequest(`El filtro ${filterFn} no está permitido para el tipo de dato fecha`);
	return dateFilterMap[filterFn](column, start, end);
};
var getFilterFn = (column, filterFn) => {
	if (column.dataType !== "string" && (filterFn === "contains" || !filterFn)) return "equals";
	if (!filterFn) return "contains";
	return filterFn;
};
//#endregion
//#region src/server/core/pagination/index.ts
var pagination_exports = /* @__PURE__ */ __exportAll({ withPagination: () => withPagination });
//#endregion
//#region src/server/core/query/query.service.ts
var getRelationalColumn = ({ subquery, as }) => {
	return sql`(
          SELECT json_agg(row_to_json(subquery))
          FROM (${subquery}) AS subquery
        )`.as(as);
};
var aliasedColumn = (column, alias) => {
	return column.getSQL().mapWith(column.mapFromDriverValue).as(alias);
};
//#endregion
//#region src/server/core/query/querySiapsep.service.ts
var prepareToSQLBulkValues = ({ columns, data, withoutNull }) => {
	return data.map((item) => columns.map((column) => {
		const columnString = String(column);
		if (!(column in item)) throw ErrorApp.badRequest(`La columna ${columnString} no existe en el registro`);
		if (withoutNull && item[column] === null) throw ErrorApp.badRequest(`La columna ${columnString} no puede ser nula`);
		const value = item[column];
		if (typeof value !== "string" && typeof value !== "number" && value !== null) throw ErrorApp.badRequest(`La columna ${String(column)} tiene un tipo de dato invalido`);
		return withoutNull ? value : value;
	}));
};
//#endregion
//#region src/server/core/query/index.ts
var query_exports = /* @__PURE__ */ __exportAll({
	aliasedColumn: () => aliasedColumn,
	getRelationalColumn: () => getRelationalColumn,
	prepareToSQLBulkValues: () => prepareToSQLBulkValues
});
//#endregion
//#region src/server/core/rfc/rfc.service.ts
var groupByRFC = (data) => {
	return data.reduce((acc, item) => {
		if (!item.rfc) throw ErrorApp.badRequest("Se encontro un RFC vacio");
		const rfc = item.rfc.trim().toUpperCase();
		if (rfc === "" || rfc.length < 13) throw ErrorApp.badRequest(`El RFC ${item.rfc} de la captura no es válido`);
		if (rfc in acc) return acc;
		acc.push(rfc);
		return acc;
	}, []);
};
var groupByRFCtoSQL = (data) => {
	return groupByRFC(data).map((data) => [data]);
};
var filterRfcs = (data, rfcToFilter) => {
	const rfcToFilterSet = new Set(rfcToFilter.map((item) => item.rfc));
	return data.filter((item) => !rfcToFilterSet.has(item.rfc));
};
//#endregion
//#region src/server/core/rfc/rfcCalculation.factory.ts
var rfcCalculationFactory = (rfcTable) => {
	let table = rfcTable;
	const setTable = (rfcTable) => {
		table = rfcTable;
	};
	const getTable = () => table;
	const getRfcs = async () => {
		return await repository.siapsep.rfcCalculation.getAll(table);
	};
	const createUniqueRFCs = async (rfcs) => {
		return await createRFCs(core.rfc.groupByRFCtoSQL(rfcs));
	};
	const createRFCs = async (rfcs) => {
		await repository.siapsep.rfcCalculation.deleteAll(table);
		return await repository.siapsep.rfcCalculation.createMany(table, rfcs);
	};
	const getRfcNotInEmployee = async () => {
		return await repository.siapsep.rfcCalculation.getNotInEmployee(table);
	};
	const deleteRfcNotInEmployee = async () => {
		return await repository.siapsep.rfcCalculation.deleteNotInEmployee(table);
	};
	return {
		deleteRfcNotInEmployee,
		getRfcNotInEmployee,
		getRfcs,
		createRFCs,
		createUniqueRFCs,
		setTable,
		getTable
	};
};
var rfc2 = rfcCalculationFactory("rfc2");
var rfc3 = rfcCalculationFactory("rfc3");
var rfcCalculation = rfcCalculationFactory("rfc_calculo");
//#endregion
//#region src/server/core/rfc/index.ts
var rfc_exports = /* @__PURE__ */ __exportAll({
	filterRfcs: () => filterRfcs,
	groupByRFC: () => groupByRFC,
	groupByRFCtoSQL: () => groupByRFCtoSQL,
	rfc2: () => rfc2,
	rfc3: () => rfc3,
	rfcCalculation: () => rfcCalculation
});
//#endregion
//#region src/server/core/rfcPaymentCode/rfcPaymentCode.service.ts
var createRfcPaymentCodeCalculation = async ({ data }) => {
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
		data
	});
	await repository.siapsep.rfcPaymentCodeCalculation.deleteAll();
	await repository.siapsep.rfcPaymentCodeCalculation.createMany(rfcPrepared);
};
//#endregion
//#region src/server/core/index.ts
var core = {
	pagination: pagination_exports,
	query: query_exports,
	rfc: rfc_exports,
	rfcPaymentCode: /* @__PURE__ */ __exportAll({ createRfcPaymentCodeCalculation: () => createRfcPaymentCodeCalculation }),
	fortnight: fortnight_exports
};
//#endregion
//#region src/server/repositories/spn/refund/refund.repository.ts
var getSubqueryRfcSuccess = () => {
	const subqueryRfcSuccess = db.spn.select({
		rfc: refundRfcSuccess.rfc,
		type: refundRfcSuccess.type,
		paymentCode: core.query.aliasedColumn(refundRfcSuccess.paymentCode, "paymentCode")
	}).from(refundRfcSuccess).where(eq(refundRfcSuccess.refundLogsId, refundLogs.id)).$dynamic();
	return core.query.getRelationalColumn({
		subquery: subqueryRfcSuccess,
		as: "rfcSuccess"
	});
};
var getSubqueryRfcFailed = () => {
	const subqueryRfcFailed = db.spn.select({
		rfc: refundRfcFailed.rfc,
		type: refundRfcFailed.type,
		error: refundRfcFailed.error,
		paymentCode: core.query.aliasedColumn(refundRfcFailed.paymentCode, "paymentCode")
	}).from(refundRfcFailed).where(eq(refundRfcFailed.refundLogsId, refundLogs.id)).$dynamic();
	return core.query.getRelationalColumn({
		subquery: subqueryRfcFailed,
		as: "rfcErrors"
	});
};
var getLogs = async (props) => {
	const { userId, ...columns } = getTableColumns(refundLogs);
	const rfcSuccess = getSubqueryRfcSuccess();
	const rfcErrors = getSubqueryRfcFailed();
	const query = db.spn.select({
		...columns,
		user: {
			id: user.id,
			name: user.name
		},
		rfcSuccess,
		rfcErrors
	}).from(refundLogs).leftJoin(user, eq(userId, user.id)).leftJoin(refundRfcSuccess, eq(refundLogs.id, refundRfcSuccess.refundLogsId)).leftJoin(refundRfcFailed, eq(refundLogs.id, refundRfcFailed.refundLogsId)).$dynamic();
	return await core.pagination.withPagination(query, {
		...props,
		schema: refundLogs,
		joinSchemas: {
			user: {
				schema: user,
				fieldJoin: user.id,
				fieldFrom: userId,
				type: "leftJoin"
			},
			rfcSuccess: {
				schema: refundRfcSuccess,
				fieldJoin: refundRfcSuccess.refundLogsId,
				fieldFrom: refundLogs.id,
				type: "leftJoin"
			},
			rfcFailed: {
				schema: refundRfcFailed,
				fieldJoin: refundRfcFailed.refundLogsId,
				fieldFrom: refundLogs.id,
				type: "leftJoin"
			}
		}
	});
};
var getLastConsecutive = async () => {
	return await db.spn.select({
		id: refundLogs.id,
		consecutive: refundLogs.consecutive,
		fortnight: refundLogs.processFortnight
	}).from(refundLogs).orderBy(desc(refundLogs.processFortnight), desc(refundLogs.consecutive)).limit(1);
};
var updateNotes = async ({ id, notes }) => {
	return await db.spn.update(refundLogs).set({ notes }).where(eq(refundLogs.id, id));
};
var createOne = async (data) => {
	return await db.spn.insert(refundLogs).values(data).returning({ createdId: refundLogs.id });
};
//#endregion
//#region src/server/repositories/spn/refund/index.ts
var refund_exports = /* @__PURE__ */ __exportAll({
	createOne: () => createOne,
	getLastConsecutive: () => getLastConsecutive,
	getLogs: () => getLogs,
	updateNotes: () => updateNotes
});
//#endregion
//#region src/server/repositories/spn/refund/refundRfcFailed.respository.ts
var refundRfcFailed_respository_exports = /* @__PURE__ */ __exportAll({ createMany: () => createMany$1 });
var createMany$1 = async (data) => {
	return await db.spn.insert(refundRfcFailed).values(data).returning({ insertedId: refundRfcFailed.id });
};
//#endregion
//#region src/server/repositories/spn/refund/refundRfcSuccess.repository.ts
var refundRfcSuccess_repository_exports = /* @__PURE__ */ __exportAll({ createMany: () => createMany });
var createMany = async (data) => {
	return await db.spn.insert(refundRfcSuccess).values(data).returning({ insertedId: refundRfcSuccess.id });
};
//#endregion
//#region src/server/repositories/index.ts
var repository = {
	siapsep: siapsep_exports,
	sicon: sicon_exports,
	spn: /* @__PURE__ */ __exportAll({
		refundRfcFailed: () => refundRfcFailed_respository_exports,
		refundRfcSuccess: () => refundRfcSuccess_repository_exports,
		refunds: () => refund_exports
	})
};
//#endregion
export { core as n, repository as t };
