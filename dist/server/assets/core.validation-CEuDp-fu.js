//#region src/shared/core/core.validation.ts
var isFunction = (value) => {
	return typeof value === "function";
};
var isObject = (value) => {
	return typeof value === "object" && typeof value !== "function" && value != void 0;
};
var isEmpty = (obj) => {
	return obj && Object.keys(obj).length === 0 && obj.constructor === Object;
};
//#endregion
export { isFunction as n, isObject as r, isEmpty as t };
