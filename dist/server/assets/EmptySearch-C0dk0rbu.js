import { t as serverFn } from "./functions-CGs5Ecf0.js";
import { t as RefundSearchSchema } from "./refund.shared.schema-CT71zQRm.js";
import { useMemo } from "react";
import { createFileRoute, lazyRouteComponent, stripSearchParams } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { keepPreviousData, queryOptions } from "@tanstack/react-query";
import { Badge, Text, ThemeIcon } from "@mantine/core";
import { IconCircleCheck, IconInboxOff, IconXboxX } from "@tabler/icons-react/dist/esm/icons/index.mjs";
var DEFAULT_REFUND_SEARCH = {
	limit: 10,
	page: 0,
	orderBy: "id",
	gFilter: "",
	order: "desc",
	filters: [],
	filtersFn: {},
	orderBy: "processFortnight"
};
//#endregion
//#region src/features/ui/components/Badges/AppBadge.tsx
var AppBadge = ({ type, ...restProps }) => {
	const color = useMemo(() => {
		if (!type) return "blue";
		return {
			warning: "yellow",
			error: "red",
			success: "teal",
			info: "blue"
		}[type];
	}, [type]);
	return /* @__PURE__ */ jsx(Badge, {
		...restProps,
		color,
		variant: "outline"
	});
};
//#endregion
//#region src/features/ui/components/Icons/withSizeIcon.tsx
var withSizeIcon = (Icon) => {
	return (props) => /* @__PURE__ */ jsx(Icon, {
		size: 16,
		...props
	});
};
//#endregion
//#region src/features/ui/components/Icons/IconError.tsx
var IconError = withSizeIcon(IconXboxX);
//#endregion
//#region src/features/ui/components/Icons/IconSuccess.tsx
var IconSuccess = withSizeIcon(IconCircleCheck);
//#endregion
//#region src/features/ui/components/Icons/IconWrapper.tsx
var IconWrapper = (props) => {
	return /* @__PURE__ */ jsx(ThemeIcon, {
		...props,
		size: 24,
		radius: "xl"
	});
};
//#endregion
//#region src/features/ui/components/Icons/IconEmptySearch.tsx
var IconEmptySearch = withSizeIcon(IconInboxOff);
//#endregion
//#region src/features/ui/components/IconList/IconList.tsx
var IconList = ({ type }) => {
	const { color, Icon } = useMemo(() => {
		return {
			error: {
				color: "red",
				Icon: IconError
			},
			success: {
				color: "teal",
				Icon: IconSuccess
			},
			info: {
				color: "red",
				Icon: IconError
			},
			warning: {
				color: "red",
				Icon: IconError
			}
		}[type];
	}, [type]);
	return /* @__PURE__ */ jsx(IconWrapper, {
		color,
		size: 24,
		radius: "xl",
		children: /* @__PURE__ */ jsx(Icon, {})
	});
};
//#endregion
//#region src/features/refund/query/refund.queries.ts
var refundKeys = {
	all: ["refund"],
	consecutive: () => [...refundKeys.all, "consecutive"],
	consecutives: () => [...new Set([...refundKeys.consecutive(), ...refundKeys.lists()])],
	lists: () => [...refundKeys.all, "list"],
	list: (props) => [...refundKeys.lists(), { ...props }],
	detail: (id) => [...refundKeys.all, id]
};
var refundQueries = {
	logs: (props) => queryOptions({
		queryKey: refundKeys.list(props),
		queryFn: ({ signal }) => serverFn.refund.getLogs({
			data: { ...props },
			signal
		}),
		placeholderData: keepPreviousData
	}),
	lastConsecutive: () => queryOptions({
		queryKey: refundKeys.consecutive(),
		queryFn: ({ signal }) => serverFn.refund.getLastConsecutive({ signal })
	})
};
//#endregion
//#region src/features/controlProcess/query/controlProcess.queries.ts
var controlProcessKeys = { all: ["siapsep_status"] };
var controlProcessQueries = { fortnight: () => queryOptions({
	queryKey: controlProcessKeys.all,
	queryFn: serverFn.controlProcess.getFortnight
}) };
//#endregion
//#region src/routes/_auth/(concepts)/refund/index.tsx
var $$splitComponentImporter = () => import("./refund-BT0zdXqT.js");
var Route = createFileRoute("/_auth/(concepts)/refund/")({
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	validateSearch: RefundSearchSchema,
	beforeLoad: async ({ context, search }) => {
		context.queryClient.prefetchQuery(refundQueries.logs({ ...search }));
		context.queryClient.prefetchQuery(refundQueries.lastConsecutive());
		return {
			crumb: "Reintegros",
			iconName: "concept"
		};
	},
	search: { middlewares: [stripSearchParams(DEFAULT_REFUND_SEARCH)] },
	head: () => ({ meta: [{ title: "Reintegros | SPN" }] })
});
//#endregion
//#region src/features/ui/components/Searchbar/EmptySearch.tsx
var EmptySearch = ({ query }) => {
	return /* @__PURE__ */ jsxs("div", {
		className: "flex flex-col items-center justify-center gap-0 w-full",
		children: [/* @__PURE__ */ jsx(IconEmptySearch, {
			size: 90,
			stroke: 1.5
		}), /* @__PURE__ */ jsxs(Text, { children: ["No se encontraron resultados", query && /* @__PURE__ */ jsxs("span", {
			className: "font-bold",
			children: [
				" de \"",
				query,
				"\""
			]
		})] })]
	});
};
//#endregion
export { refundQueries as a, IconError as c, DEFAULT_REFUND_SEARCH as d, refundKeys as i, withSizeIcon as l, Route as n, IconList as o, controlProcessQueries as r, IconSuccess as s, EmptySearch as t, AppBadge as u };
