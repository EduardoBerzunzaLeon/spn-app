import * as v from "valibot";
//#region src/shared/pagination/pagination.shared.schema.ts
var Order = ["desc", "asc"];
var FilterSingleValueSchema = v.pipe(v.string(), v.trim(), v.toLowerCase());
var FilterBetweenValueSchema = v.pipe(v.array(v.optional(FilterSingleValueSchema, "")), v.length(2));
var FilterSchema = v.array(v.object({
	id: v.pipe(v.string(), v.trim()),
	value: v.union([
		FilterSingleValueSchema,
		FilterBetweenValueSchema,
		v.string()
	]),
	key: v.optional(v.string(), "")
}));
var OrderSchema = v.picklist(Order);
var FilterFnSchema = v.record(v.string(), v.string());
var getSearchSchema = (orderBy = "id") => v.object({
	limit: v.optional(v.fallback(v.number(), 10), 10),
	page: v.optional(v.fallback(v.number(), 0), 0),
	gFilter: v.optional(v.fallback(v.pipe(v.string(), v.trim()), ""), ""),
	orderBy: v.optional(v.fallback(v.pipe(v.string(), v.trim()), orderBy), orderBy),
	order: v.optional(v.fallback(OrderSchema, "desc"), "desc"),
	filters: v.optional(v.fallback(FilterSchema, []), []),
	filtersFn: v.optional(v.fallback(FilterFnSchema, {}), {})
});
//#endregion
//#region src/shared/refund/refund.shared.schema.ts
var RefundUpdateNotesSchema = v.object({
	id: v.pipe(v.number(), v.toMinValue(1), v.integer()),
	notes: v.fallback(v.pipe(v.string(), v.trim()), "")
});
var RefundSearchSchema = getSearchSchema("processFortnight");
//#endregion
export { RefundUpdateNotesSchema as n, RefundSearchSchema as t };
