//#region \0rolldown/runtime.js
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
//#endregion
//#region src/shared/errors/errorApp.entity.ts
var ErrorApp = class ErrorApp extends Error {
	status;
	constructor(message, status) {
		super(message);
		this.name = this.constructor.name;
		this.status = status;
	}
	static badRequest(message) {
		return new ErrorApp(message, 400);
	}
	static unauthorized(message) {
		return new ErrorApp(message, 401);
	}
	static forbidden(message) {
		return new ErrorApp(message, 403);
	}
	static notFount(message) {
		return new ErrorApp(message, 404);
	}
	static internal(message) {
		return new ErrorApp(message, 500);
	}
};
//#endregion
export { __exportAll as n, ErrorApp as t };
