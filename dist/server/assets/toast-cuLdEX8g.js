import { toast } from "sonner";
//#region src/utils/toast/toast.ts
var error = (message) => {
	return toast.error("Error", { description: message });
};
var success = (message) => {
	return toast.success("Operación exitosa", { description: message });
};
var warning = (message) => {
	return toast.warning("Advertencia", { description: message });
};
var info = (message) => {
	return toast.warning("Información", { description: message });
};
var toast$1 = {
	error,
	success,
	warning,
	info
};
//#endregion
export { toast$1 as t };
