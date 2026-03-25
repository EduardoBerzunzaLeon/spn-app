import { a as IconConcept, n as AuthLayout, o as IconHome } from "./GroupServerBadge-CJSmRYoE.js";
import { forwardRef, useMemo } from "react";
import { Outlet, createLink, useMatches } from "@tanstack/react-router";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { Breadcrumbs, Button, Group, Title } from "@mantine/core";
//#region src/features/ui/components/AppLink/AppButtonLink.tsx
var CreatedButttonLinkComponent = createLink(forwardRef((props, ref) => /* @__PURE__ */ jsx(Button, {
	...props,
	ref,
	component: "a"
})));
var AppButtonLink = (props) => {
	return /* @__PURE__ */ jsx(CreatedButttonLinkComponent, {
		preload: "intent",
		...props
	});
};
//#endregion
//#region src/features/ui/components/MainHeader/BreadCrumbs.tsx
var ICONS = {
	home: IconHome,
	concept: IconConcept
};
var getIcon = (iconName) => {
	if (!iconName || !ICONS) return null;
	if (iconName in ICONS) return ICONS[iconName];
	return null;
};
var BreadCrumbs = ({ crumbs }) => {
	return /* @__PURE__ */ jsx(Breadcrumbs, { children: useMemo(() => crumbs.map(({ context: { crumb, iconName }, pathname }, i) => {
		const Icon = getIcon(iconName);
		return /* @__PURE__ */ jsx(AppButtonLink, {
			to: pathname,
			variant: i === crumbs.length - 1 ? "light" : "subtle",
			size: "xs",
			radius: "lg",
			leftSection: Icon ? /* @__PURE__ */ jsx(Icon, {}) : null,
			children: crumb
		}, crumb);
	}), []) });
};
//#endregion
//#region src/features/ui/components/MainHeader/MainHeader.tsx
var MainHeader = () => {
	const matches = useMatches().filter((match) => match.__beforeLoadContext?.crumb);
	const title = matches[matches.length - 1].context.crumb ?? "SIN TITULO";
	return /* @__PURE__ */ jsxs(Group, {
		justify: "space-between",
		pb: "md",
		children: [/* @__PURE__ */ jsx(Title, {
			order: 3,
			textWrap: "balance",
			children: title
		}), /* @__PURE__ */ jsx(BreadCrumbs, { crumbs: matches }, title)]
	});
};
//#endregion
//#region src/routes/_auth.tsx?tsr-split=component
function DashboardLayout() {
	return /* @__PURE__ */ jsx(AuthLayout, { children: /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(MainHeader, {}), /* @__PURE__ */ jsx(Outlet, {})] }) });
}
//#endregion
export { DashboardLayout as component };
