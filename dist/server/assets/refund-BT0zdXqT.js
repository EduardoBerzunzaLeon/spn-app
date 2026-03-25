import { n as useServerFn, t as serverFn } from "./functions-CGs5Ecf0.js";
import { n as isFunction, t as isEmpty } from "./core.validation-CEuDp-fu.js";
import { n as RefundUpdateNotesSchema } from "./refund.shared.schema-CT71zQRm.js";
import { a as refundQueries, c as IconError, d as DEFAULT_REFUND_SEARCH, i as refundKeys, l as withSizeIcon, n as Route, o as IconList, r as controlProcessQueries, s as IconSuccess, t as EmptySearch, u as AppBadge } from "./EmptySearch-C0dk0rbu.js";
import { n as useHandleSubmitForm, t as useAppForm } from "./useAppForm-CrLGEUKy.js";
import { t as toast } from "./toast-cuLdEX8g.js";
import { useMemo, useState } from "react";
import { useNavigate, useSearch } from "@tanstack/react-router";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { useMutation, useQuery, useQueryClient, useSuspenseQuery } from "@tanstack/react-query";
import { modals } from "@mantine/modals";
import { ActionIcon, Alert, Button, Flex, Group, Highlight, List, Menu, Stack, Text, Title, Tooltip } from "@mantine/core";
import { IconAdjustmentsOff, IconEdit, IconInfoCircle, IconInfoTriangle, IconPlus, IconRefresh, IconUpload } from "@tabler/icons-react/dist/esm/icons/index.mjs";
import { formOptions } from "@tanstack/react-form";
import { MRT_ShowHideColumnsButton, MRT_ToggleDensePaddingButton, MRT_ToggleFullScreenButton, MantineReactTable, useMantineReactTable } from "mantine-react-table";
import { MRT_Localization_ES } from "mantine-react-table/locales/es/index.cjs";
//#region src/features/ui/components/Icons/IconInfo.tsx
var IconInfo = withSizeIcon(IconInfoCircle);
//#endregion
//#region src/features/ui/components/Icons/IconWarning.tsx
var IconWarning = withSizeIcon(IconInfoTriangle);
//#endregion
//#region src/features/ui/components/Icons/IconRefresh.tsx
var IconRefresh$1 = withSizeIcon(IconRefresh);
//#endregion
//#region src/features/ui/components/Icons/IconSettingsOff.tsx
var IconSettingsOff = withSizeIcon(IconAdjustmentsOff);
//#endregion
//#region src/features/ui/components/Icons/IconEdit.tsx
var IconEdit$1 = withSizeIcon(IconEdit);
//#endregion
//#region src/features/ui/components/Icons/IconUpload.tsx
var IconUpload$1 = withSizeIcon(IconUpload);
//#endregion
//#region src/features/ui/components/Icons/IconPlus.tsx
var IconPlus$1 = withSizeIcon(IconPlus);
//#endregion
//#region src/features/refund/const/refund.const.tsx
var REFUND_LOG_COLUMNS = [
	{
		accessorKey: "consecutive",
		header: "Consecutivo",
		type: "number"
	},
	{
		accessorKey: "processFortnight",
		header: "Quincena Proceso",
		type: "number"
	},
	{
		accessorKey: "createdAt",
		id: "createdAt",
		header: "Fecha de creación",
		type: "date"
	},
	{
		accessorFn: (row) => row?.user?.name ?? "no user",
		id: "user.name",
		header: "Usuario"
	},
	{
		accessorKey: "rfcCreated",
		header: "RFC Creados",
		type: "number"
	},
	{
		accessorKey: "rfcDeletedResponsabilities",
		header: "RFC Eliminados Responsabilidades",
		type: "number"
	},
	{
		accessorKey: "rfcDeletedEmployeeConcept",
		header: "RFC Eliminados Empleados Concepto",
		type: "number"
	},
	{
		accessorKey: "rfcClosedTerm",
		header: "RFC Cierre Vigencia",
		type: "number"
	},
	{
		accessorKey: "rfcSuccesed",
		header: "RFC Exitosos",
		type: "number"
	},
	{
		accessorKey: "rfcFailed",
		header: "RFC errores",
		type: "number"
	},
	{
		accessorKey: "hasError",
		id: "hasError",
		header: "Error Status",
		Cell: ({ cell }) => {
			const value = cell.getValue() === "true" ? "Error" : "Sin error";
			return /* @__PURE__ */ jsx(AppBadge, {
				type: cell.getValue() === "true" ? "error" : "success",
				size: "md",
				children: value
			});
		},
		type: "boolean"
	},
	{
		accessorKey: "activeBefore",
		header: "Activos Antes",
		type: "number"
	},
	{
		accessorKey: "activeAfter",
		header: "Activos Ahora",
		type: "number"
	},
	{
		accessorKey: "notes",
		header: "Notas"
	}
];
//#endregion
//#region src/features/refund/form/refund.form.options.ts
var editNoteFormOptions = formOptions({ validators: { onChange: RefundUpdateNotesSchema } });
//#endregion
//#region src/features/refund/hooks/useRefundUpdateNotes.ts
var useRefundUpdateNotes = () => {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: useServerFn(serverFn.refund.updateNotes),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: refundKeys.lists() });
		}
	});
};
//#endregion
//#region src/features/refund/hooks/useRefundAlerts.ts
var useRefundAlerts = () => {
	const { data, isError, isFetching, error } = useQuery(refundQueries.lastConsecutive());
	const { data: fortnightSiapsep } = useSuspenseQuery(controlProcessQueries.fortnight());
	const { message, hasError } = useMemo(() => {
		const alert = {
			message: "",
			hasError: false
		};
		if (isFetching) return alert;
		if (isError || !data) {
			alert.message = error?.message || "No se encontro el último consecutivo en SICON";
			alert.hasError = true;
			return alert;
		}
		if (fortnightSiapsep.error) {
			alert.message = "El SIAPSEP esta offline";
			alert.hasError = true;
			return alert;
		}
		const { siconFortnight } = data;
		const siapsepCurrentFortnight = fortnightSiapsep.ordinaryFortnight.fortnight;
		const siconCurrentFortnight = siconFortnight.fortnight;
		if (siapsepCurrentFortnight !== siconCurrentFortnight) {
			alert.message = `Existe un desfase de quincenas entre el SIAPSEP (${siapsepCurrentFortnight}) y SICON (${siconCurrentFortnight})`;
			alert.hasError = true;
			return alert;
		}
		return alert;
	}, [data, isFetching]);
	const { messageWarning, hasWarning } = useMemo(() => {
		const alert = {
			messageWarning: "",
			hasWarning: false
		};
		if (isFetching) return alert;
		if (isError || !data) return alert;
		const { warning } = data;
		if (warning) {
			alert.messageWarning = warning;
			alert.hasWarning = true;
			return alert;
		}
		return alert;
	}, [data, isFetching]);
	const { messageInfo, hasInfo } = useMemo(() => {
		const alert = {
			messageInfo: "",
			hasInfo: false
		};
		if (!data || isError) return alert;
		const { siconFortnight, spnFortnight } = data;
		if (siconFortnight.fortnight === spnFortnight.fortnight && siconFortnight.consecutive === spnFortnight.consecutive) {
			alert.messageInfo = "La quincena y consecutivo coinciden, no hay nada que actualizar";
			alert.hasInfo = true;
			return alert;
		}
		return alert;
	}, []);
	return {
		hasError,
		hasInfo,
		hasWarning,
		isFetching,
		message,
		messageInfo,
		messageWarning,
		data
	};
};
//#endregion
//#region src/features/refund/components/RefundUpdateNotesForm.tsx
var RefundUpdateNotesForm = ({ id, notes, consecutive, processFortnight, onCancel }) => {
	const updateNotesMutation = useRefundUpdateNotes();
	const form = useAppForm({
		defaultValues: {
			notes,
			id
		},
		...editNoteFormOptions,
		onSubmit: ({ value }) => {
			updateNotesMutation.mutate({ data: value });
		}
	});
	const { handleSubmit } = useHandleSubmitForm(form);
	return /* @__PURE__ */ jsxs("form", {
		onSubmit: handleSubmit,
		method: "POST",
		children: [
			/* @__PURE__ */ jsxs(Text, {
				size: "sm",
				children: ["Quincena: ", /* @__PURE__ */ jsx("span", {
					className: "font-bold",
					children: processFortnight
				})]
			}),
			/* @__PURE__ */ jsxs(Text, {
				size: "sm",
				children: ["Consecutivo: ", /* @__PURE__ */ jsx("span", {
					className: "font-bold",
					children: consecutive
				})]
			}),
			/* @__PURE__ */ jsx(form.AppField, {
				name: "notes",
				children: (field) => /* @__PURE__ */ jsx(field.TextareaField, {
					autosize: true,
					minRows: 2,
					label: "Notas",
					placeholder: "Agrega notas del consecutivo",
					"data-autofocus": true,
					required: true
				})
			}),
			/* @__PURE__ */ jsxs(Group, {
				mt: "xl",
				justify: "flex-end",
				children: [/* @__PURE__ */ jsx(Button, {
					color: "gray",
					onClick: onCancel,
					children: "Cancelar"
				}), /* @__PURE__ */ jsx(form.AppForm, { children: /* @__PURE__ */ jsx(form.SubmitButton, {
					label: "Agregar Notas",
					isSubmitting: updateNotesMutation.isPending,
					leftSection: /* @__PURE__ */ jsx(IconPlus$1, {})
				}) })]
			})
		]
	});
};
//#endregion
//#region src/features/refund/components/RfcRefundList.tsx
var RfcRefundList = ({ rfcList, gFilter, type = "success" }) => {
	return /* @__PURE__ */ jsx(List, {
		spacing: "xs",
		size: "sm",
		center: true,
		icon: /* @__PURE__ */ jsx(IconList, { type }),
		children: rfcList?.map((rfc) => /* @__PURE__ */ jsxs(List.Item, { children: [
			/* @__PURE__ */ jsx(Highlight, {
				highlight: gFilter,
				children: `RFC: ${rfc.rfc}`
			}),
			"Tipo: ",
			/* @__PURE__ */ jsx("span", {
				className: "font-bold",
				children: rfc.type
			}),
			" -",
			rfc.error && " Error: ",
			rfc.error && /* @__PURE__ */ jsxs("span", {
				className: "font-bold",
				children: [rfc.error, " - "]
			}),
			"Plaza:",
			" ",
			/* @__PURE__ */ jsx("span", {
				className: "font-bold",
				children: rfc.paymentCode
			})
		] }, `${rfc.rfc}-${rfc.paymentCode}-${rfc.type}`))
	});
};
//#endregion
//#region src/features/refund/components/RefundWrapperRfcList.tsx
var RefundWrapperRfcList = ({ rfcListError, rfcListSuccess, gFilter }) => {
	if (!rfcListError && !rfcListSuccess) return /* @__PURE__ */ jsx("span", {
		className: "text-gray-500",
		children: "No hay RFCs asociados a este reintegro."
	});
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(RfcRefundList, {
		gFilter,
		rfcList: rfcListSuccess
	}), /* @__PURE__ */ jsx(RfcRefundList, {
		gFilter,
		rfcList: rfcListError,
		type: "error"
	})] });
};
//#endregion
//#region src/features/refund/components/RefundLogHistoryTable.tsx
var RefundLogHistoryTable = () => {
	const openModal = (props) => modals.open({
		title: "Agregar notas de reintegros (19)",
		children: /* @__PURE__ */ jsx(RefundUpdateNotesForm, {
			...props,
			onCancel: modals.closeAll
		})
	});
	const { table, search } = useTable({
		columns: REFUND_LOG_COLUMNS,
		from: Route.id,
		getData: refundQueries.logs,
		initialState: DEFAULT_REFUND_SEARCH,
		globalFilterPlaceHolder: "Buscar por RFC",
		renderDetailPanel: ({ row }) => {
			return /* @__PURE__ */ jsx(Group, {
				align: "flex-start",
				children: /* @__PURE__ */ jsx(RefundWrapperRfcList, {
					gFilter: search.gFilter,
					rfcListError: row.original.rfcErrors,
					rfcListSuccess: row.original.rfcSuccess
				})
			});
		},
		renderRowActionMenuItems: ({ row }) => /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(Menu.Item, {
			onClick: () => openModal(row.original),
			leftSection: /* @__PURE__ */ jsx(IconEdit$1, {}),
			children: "Editar notas"
		}) })
	});
	return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(MantineReactTable, { table }) });
};
//#endregion
//#region src/features/refund/components/RefundAlerts.tsx
var RefundAlerts = () => {
	const { hasError, message, hasWarning, messageWarning, hasInfo, messageInfo } = useRefundAlerts();
	return /* @__PURE__ */ jsxs(Stack, { children: [
		hasInfo && /* @__PURE__ */ jsx(Alert$1, {
			type: "info",
			title: "Los consecutivos de reintegros estan sincronizados",
			children: messageInfo
		}),
		hasError && /* @__PURE__ */ jsx(Alert$1, {
			type: "error",
			title: "Error en los consecutivos de reintegros",
			children: message
		}),
		hasWarning && /* @__PURE__ */ jsx(Alert$1, {
			type: "warning",
			title: "Desfase en los consecutivos de reintegros",
			children: messageWarning
		})
	] });
};
//#endregion
//#region src/features/refund/hooks/useRefundGenerateConsecutive.ts
var useRefundGenerateConsecutive = () => {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: useServerFn(serverFn.refund.generateConsecutive),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: refundKeys.consecutives() });
		}
	});
};
//#endregion
//#region src/features/refund/components/RefundGenerateConsecutiveBtn.tsx
var RefundGenerateConsecutiveBtn = () => {
	const { isFetching, hasError, hasInfo } = useRefundAlerts();
	const generateConsecutive = useRefundGenerateConsecutive();
	const isDisabled = isFetching || hasError || hasInfo;
	const openModal = useConfirmModal({
		onConfirm: () => generateConsecutive.mutate({}),
		cancelAlertText: "Generación cancelada"
	});
	return /* @__PURE__ */ jsx(Button, {
		disabled: isDisabled,
		leftSection: /* @__PURE__ */ jsx(IconUpload$1, {}),
		onClick: openModal,
		loading: generateConsecutive.isPending,
		children: "Cargar consecutivo"
	});
};
//#endregion
//#region src/features/ui/components/Alert/Alert.tsx
var alertTypes = {
	default: {
		icon: /* @__PURE__ */ jsx(IconInfo, {}),
		color: "blue"
	},
	info: {
		icon: /* @__PURE__ */ jsx(IconInfo, {}),
		color: "blue"
	},
	success: {
		icon: /* @__PURE__ */ jsx(IconSuccess, {}),
		color: "green"
	},
	warning: {
		icon: /* @__PURE__ */ jsx(IconWarning, {}),
		color: "yellow"
	},
	error: {
		icon: /* @__PURE__ */ jsx(IconError, {}),
		color: "red"
	}
};
var Alert$1 = ({ type = "default", isDissmisible, ...restProps }) => {
	const [isVisible, setIsVisible] = useState(true);
	const { icon, color } = alertTypes[type];
	const handleClose = () => setIsVisible(false);
	if (!isVisible) return null;
	return /* @__PURE__ */ jsx(Alert, {
		variant: "light",
		icon,
		color,
		withCloseButton: isDissmisible,
		onClose: handleClose,
		...restProps
	});
};
//#endregion
//#region src/features/ui/hooks/useConfirmModal.tsx
var useConfirmModal = ({ onConfirm, title, body, cancelAlertText, confirmText, cancelText }) => {
	const exactTitle = title || "Por favor confirmar esta acción";
	const exactBody = body || "Esta acción es tan importante que se requiere confirmarla. Por favor, haga clic en uno de estos botones para continuar.";
	const exactCancelAlertText = cancelAlertText || "Petición cancelada";
	const exactConfirmText = confirmText || "Confirmar";
	const exactCancelText = cancelText || "Cancelar";
	const openModal = () => modals.openConfirmModal({
		title: exactTitle,
		children: /* @__PURE__ */ jsx(Text, {
			size: "sm",
			children: exactBody
		}),
		labels: {
			confirm: exactConfirmText,
			cancel: exactCancelText
		},
		onCancel: () => toast.info(exactCancelAlertText),
		onConfirm: () => onConfirm()
	});
	return openModal;
};
//#endregion
//#region src/features/core/hooks/useTable/useTable.utils.ts
var COLUMNS_STRING_FILTER = [
	"startsWith",
	"endsWith",
	"contains",
	"equals",
	"notEquals"
];
var COLUMNS_NUMBER_FILTER = [
	"between",
	"equals",
	"notEquals",
	"greaterThan",
	"greaterThanOrEqualTo",
	"lessThan",
	"lessThanOrEqualTo"
];
var COLUMNS_REF = {
	string: COLUMNS_STRING_FILTER,
	boolean: ["equals"],
	number: COLUMNS_NUMBER_FILTER,
	date: COLUMNS_NUMBER_FILTER
};
var getColumns = (columns) => {
	return columns?.map((column) => {
		const type = column.type ?? "string";
		const columnFilterModeOptions = COLUMNS_REF[type];
		const filterFn = type === "string" ? "contains" : "equals";
		const columnTyped = {
			...column,
			columnFilterModeOptions,
			filterFn,
			meta: filterFn
		};
		if (type === "boolean") {
			columnTyped.filterVariant = "checkbox";
			columnTyped.enableColumnFilterModes = false;
			columnTyped.accessorFn = (row) => {
				if (typeof columnTyped.accessorKey === "string" && columnTyped.accessorKey in row) return row[columnTyped.accessorKey] ? "true" : "false";
				return "false";
			};
			return columnTyped;
		}
		if (type === "date") {
			columnTyped.filterVariant = "date";
			columnTyped.Cell = ({ cell }) => {
				return cell.getValue()?.toISOString().replace(/[TZ]/g, " ").slice(0, 19);
			};
			return columnTyped;
		}
		return columnTyped;
	}) ?? [];
};
var getColumnsFilter = (columns) => {
	return Object.fromEntries(columns.map(({ accessorKey, meta, id }) => [accessorKey ?? id, typeof meta === "string" ? meta : "contains"]));
};
var recreateFilters = (filters) => {
	return filters.map((filter) => {
		if (Array.isArray(filter.value) && filter.value.length === 2) return {
			...filter,
			value: filter.value,
			key: `${filter.value[0]} - ${filter.value[1]}`
		};
		return {
			...filter,
			value: String(filter.value),
			key: ""
		};
	});
};
//#endregion
//#region src/features/core/hooks/useTable/useTable.tsx
var useTable = ({ columns, from, initialState, getData, renderDetailPanel, globalFilterPlaceHolder, renderRowActions, renderRowActionMenuItems, enableGlobalFilter = true }) => {
	const { columnsTyped, columnsFilter } = useMemo(() => {
		const columnsTyped = getColumns(columns);
		return {
			columnsTyped,
			columnsFilter: getColumnsFilter(columnsTyped)
		};
	}, []);
	const search = useSearch({ from });
	const navigate = useNavigate();
	const { data, isLoading, isFetching, refetch } = useQuery(getData({ ...search }));
	const navigateSearch = (searchParams) => {
		navigate({
			to: ".",
			search: (prev) => ({
				...prev,
				...searchParams
			}),
			replace: true,
			resetScroll: false
		});
	};
	const handlePaginationChange = (pagination) => {
		const newPagination = isFunction(pagination) ? pagination({
			pageIndex: search.page,
			pageSize: search.limit
		}) : pagination;
		navigateSearch({
			page: newPagination.pageIndex,
			limit: newPagination.pageSize
		});
	};
	const handleFilterChange = (filters) => {
		navigateSearch({ filters: [...recreateFilters(isFunction(filters) ? filters(search.filters ? [...search.filters] : []) : filters)] });
	};
	const handlerFilterFnChange = (filterFns) => {
		navigateSearch({ filtersFn: isFunction(filterFns) ? filterFns(isEmpty(search.filtersFn) ? columnsFilter : search.filtersFn) : filterFns });
	};
	const handleSortChange = (sort) => {
		const [{ id, desc }] = isFunction(sort) ? sort([{
			id: "id",
			desc: true
		}]) : sort;
		navigateSearch({
			orderBy: id,
			order: desc ? "desc" : "asc"
		});
	};
	const handleGlobalFilterChange = (value) => {
		navigateSearch({ gFilter: value });
	};
	const fetchedData = data?.data ?? [];
	const totalRowCount = typeof data?.meta.totalRowCount === "number" && data.meta.totalRowCount >= 0 ? data.meta.totalRowCount : 0;
	const handleReset = () => {
		table.reset();
		navigateSearch({ ...initialState });
	};
	const table = useMantineReactTable({
		columns: columnsTyped,
		data: fetchedData,
		enableColumnFilterModes: true,
		enableColumnOrdering: true,
		enableColumnPinning: true,
		enableColumnResizing: true,
		enableGlobalFilter,
		enableRowActions: !!(renderRowActions || renderRowActionMenuItems),
		localization: MRT_Localization_ES,
		manualFiltering: true,
		manualPagination: true,
		manualSorting: true,
		onColumnFilterFnsChange: handlerFilterFnChange,
		onColumnFiltersChange: handleFilterChange,
		onGlobalFilterChange: handleGlobalFilterChange,
		onPaginationChange: handlePaginationChange,
		onSortingChange: handleSortChange,
		rowCount: totalRowCount,
		initialState: {
			showGlobalFilter: true,
			showColumnFilters: true,
			columnPinning: {
				left: ["mrt-row-expand"],
				right: ["mrt-row-actions"]
			}
		},
		mantineSearchTextInputProps: {
			placeholder: globalFilterPlaceHolder ?? "Buscar...",
			variant: "default"
		},
		displayColumnDefOptions: { "mrt-row-actions": { size: 100 } },
		mantineToolbarAlertBannerProps: !!data?.error?.message ? {
			color: "red",
			children: data.error.message,
			icon: /* @__PURE__ */ jsx(IconError, {}),
			title: "Error al cargar los datos"
		} : void 0,
		renderTopToolbarCustomActions: () => /* @__PURE__ */ jsxs(Flex, {
			gap: "xs",
			align: "center",
			children: [/* @__PURE__ */ jsx(Tooltip, {
				label: "Refrescar tabla",
				children: /* @__PURE__ */ jsx(ActionIcon, {
					onClick: () => refetch(),
					variant: "light",
					children: /* @__PURE__ */ jsx(IconRefresh$1, {})
				})
			}), /* @__PURE__ */ jsx(Tooltip, {
				label: "Reiniciar filtros y orden",
				children: /* @__PURE__ */ jsx(ActionIcon, {
					onClick: handleReset,
					variant: "light",
					children: /* @__PURE__ */ jsx(IconSettingsOff, {})
				})
			})]
		}),
		renderToolbarInternalActions: ({ table }) => /* @__PURE__ */ jsxs(Flex, {
			gap: "xs",
			align: "center",
			children: [
				/* @__PURE__ */ jsx(MRT_ShowHideColumnsButton, { table }),
				/* @__PURE__ */ jsx(MRT_ToggleDensePaddingButton, { table }),
				/* @__PURE__ */ jsx(MRT_ToggleFullScreenButton, { table })
			]
		}),
		renderEmptyRowsFallback: () => /* @__PURE__ */ jsx("div", {
			className: "p-4",
			children: /* @__PURE__ */ jsx(EmptySearch, {})
		}),
		renderRowActionMenuItems,
		renderRowActions,
		renderDetailPanel: fetchedData.length === 0 ? void 0 : renderDetailPanel,
		state: {
			columnFilterFns: isEmpty(search.filtersFn) ? columnsFilter : search.filtersFn,
			columnFilters: search.filters,
			globalFilter: search.gFilter,
			isLoading,
			pagination: {
				pageIndex: search.page,
				pageSize: search.limit
			},
			sorting: [{
				id: search.orderBy,
				desc: search.order === "desc"
			}],
			showAlertBanner: !!data?.error,
			showProgressBars: isFetching
		}
	});
	return {
		data,
		search,
		isLoading,
		isFetching,
		refetch,
		table
	};
};
//#endregion
//#region src/routes/_auth/(concepts)/refund/index.tsx?tsr-split=component
function RouteComponent() {
	const { data, isFetching } = useRefundAlerts();
	const text = !data || isFetching ? "Sin datos" : `Quincena Activa: ${data?.siconFortnight.fortnight} - Ultimo consecutivo: ${data?.siconFortnight.consecutive}`;
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx(RefundAlerts, {}),
		/* @__PURE__ */ jsxs(Group, {
			justify: "space-between",
			align: "center",
			mt: "md",
			mb: "md",
			children: [
				/* @__PURE__ */ jsx(Title, {
					order: 4,
					children: "Historial"
				}),
				/* @__PURE__ */ jsx(Text, { children: text }),
				/* @__PURE__ */ jsx(RefundGenerateConsecutiveBtn, {})
			]
		}),
		/* @__PURE__ */ jsx(RefundLogHistoryTable, {})
	] });
}
//#endregion
export { RouteComponent as component };
