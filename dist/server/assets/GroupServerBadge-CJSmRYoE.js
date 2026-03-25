import { n as useServerFn, t as serverFn } from "./functions-CGs5Ecf0.js";
import { n as isFunction } from "./core.validation-CEuDp-fu.js";
import { l as withSizeIcon, n as Route$2, o as IconList, r as controlProcessQueries, t as EmptySearch, u as AppBadge } from "./EmptySearch-C0dk0rbu.js";
import * as React from "react";
import { Suspense, createElement, forwardRef, memo, useMemo, useState } from "react";
import { createFileRoute, createLink, lazyRouteComponent, useChildMatches, useNavigate, useRouter } from "@tanstack/react-router";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { queryOptions, useMutation, useQueryClient, useSuspenseQuery } from "@tanstack/react-query";
import { ActionIcon, Anchor, AppShell, Box, Burger, Button, Collapse, Group, Kbd, List, Popover, ScrollArea, Skeleton, Stack, ThemeIcon, Title, UnstyledButton } from "@mantine/core";
import { nprogress } from "@mantine/nprogress";
import { IconCalendarDollar, IconChevronRight, IconGauge, IconHome, IconLogout, IconNotes, IconRefresh, IconSearch, IconServer, IconServerOff } from "@tabler/icons-react/dist/esm/icons/index.mjs";
import { Spotlight, spotlight } from "@mantine/spotlight";
import { useDisclosure } from "@mantine/hooks";
//#region src/features/auth/query/auth.queries.ts
var authKeys = { all: ["auth"] };
var authQueries = { user: () => queryOptions({
	queryKey: authKeys.all,
	queryFn: serverFn.auth.getUser
}) };
//#endregion
//#region src/features/auth/hooks/useSignOut.ts
var useSignOut = () => {
	const router = useRouter();
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: useServerFn(serverFn.auth.signOut),
		onSuccess: async () => {
			queryClient.resetQueries({ queryKey: authKeys.all });
			await router.invalidate({ sync: true });
		}
	});
};
//#endregion
//#region src/features/auth/components/SignOutButton.tsx
var SignOutButton = () => {
	const signOutMutation = useSignOut();
	const navigate = useNavigate();
	const handleLogout = (e) => {
		nprogress.start();
		e.preventDefault();
		signOutMutation.mutate({}, {
			onSuccess: () => navigate({ to: "/signin" }),
			onError: () => nprogress.complete()
		});
	};
	return /* @__PURE__ */ jsxs("a", {
		href: "#",
		className: "link",
		onClick: handleLogout,
		children: [/* @__PURE__ */ jsx(IconLogout, {
			className: "linkIcon",
			stroke: 1.5
		}), /* @__PURE__ */ jsx("span", { children: "Logout" })]
	});
};
//#endregion
//#region src/features/ui/components/AppLink/AppLink.tsx
var CreatedLinkComponent = createLink(React.forwardRef((props, ref) => {
	return /* @__PURE__ */ jsx(Anchor, {
		ref,
		...props
	});
}));
var AppLink = (props) => {
	return /* @__PURE__ */ jsx(CreatedLinkComponent, {
		preload: "intent",
		...props
	});
};
//#endregion
//#region src/features/ui/components/AppLink/AppSpotlighLink.tsx
var CreatedButttonLinkComponent = createLink(forwardRef((props, ref) => /* @__PURE__ */ jsx(Spotlight.Action, {
	...props,
	ref,
	component: "a"
})));
var AppSpotlightLink = (props) => {
	return /* @__PURE__ */ jsx(CreatedButttonLinkComponent, {
		preload: "intent",
		...props
	});
};
//#endregion
//#region src/features/ui/components/LinksGroup/LinkSingle.tsx
var LinkSingle = ({ icon: Icon, label, className }) => {
	return /* @__PURE__ */ jsxs(Box, {
		style: {
			display: "flex",
			alignItems: "center"
		},
		children: [/* @__PURE__ */ jsx(ThemeIcon, {
			variant: "light",
			size: 30,
			children: /* @__PURE__ */ jsx(Icon, { size: 18 })
		}), /* @__PURE__ */ jsx(Box, {
			ml: "md",
			className,
			children: label
		})]
	});
};
//#endregion
//#region src/features/ui/components/LinksGroup/LinkWrapper.tsx
var LinkWrapper = ({ link, children, matchRoute }) => {
	const childMatches = useChildMatches();
	const isMatch = useMemo(() => {
		if (link || !matchRoute) return false;
		return childMatches.some((match) => match.routeId.includes(matchRoute));
	}, [matchRoute, childMatches]);
	if (!link) return isFunction(children) ? children({ isActive: isMatch }) : children;
	return /* @__PURE__ */ jsx(AppLink, {
		to: link,
		underline: "never",
		activeOptions: { exact: true },
		children: ({ isActive }) => isFunction(children) ? children({ isActive }) : children
	});
};
//#endregion
//#region src/features/ui/components/LinksGroup/LinksGroups.tsx
var LinksGroup = memo(function LinksGroup({ icon, label, initiallyOpened, links, link, matchRoute }) {
	const hasLinks = Array.isArray(links);
	const [opened, setOpened] = useState(initiallyOpened || false);
	const items = (hasLinks ? links : []).map((link) => /* @__PURE__ */ jsx(AppLink, {
		className: "menu-link",
		to: link.link,
		underline: "never",
		activeProps: { style: { fontWeight: "bold" } },
		children: link.label
	}, link.label));
	return /* @__PURE__ */ jsx(LinkWrapper, {
		link,
		matchRoute,
		children: ({ isActive }) => /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(UnstyledButton, {
			onClick: () => setOpened((o) => !o),
			className: "control",
			children: /* @__PURE__ */ jsxs(Group, {
				justify: "space-between",
				gap: 0,
				children: [/* @__PURE__ */ jsx(LinkSingle, {
					icon,
					label,
					className: isActive ? "font-bold" : ""
				}), hasLinks && /* @__PURE__ */ jsx(IconChevronRight, {
					className: "chevron",
					stroke: 1.5,
					style: { transform: opened ? "rotate(-90deg)" : "none" }
				})]
			})
		}) }), hasLinks ? /* @__PURE__ */ jsx(Collapse, {
			in: opened,
			children: items
		}) : null] })
	});
});
//#endregion
//#region src/features/ui/components/Badges/ServerBadge.tsx
var ServerBadge = (props) => {
	return /* @__PURE__ */ jsx(AppBadge, {
		type: "success",
		size: "lg",
		leftSection: /* @__PURE__ */ jsx(IconServer, { size: 19 }),
		styles: { root: { cursor: "pointer" } },
		...props
	});
};
//#endregion
//#region src/features/ui/components/Icons/IconServerError.tsx
var IconServerError = withSizeIcon(IconServerOff);
//#endregion
//#region src/features/ui/components/Icons/IconHome.tsx
var IconHome$1 = withSizeIcon(IconHome);
//#endregion
//#region src/features/ui/components/Icons/IconConcept.tsx
var IconConcept = withSizeIcon(IconCalendarDollar);
//#endregion
//#region src/features/ui/components/Icons/IconSearch.tsx
var IconSearch$1 = withSizeIcon(IconSearch);
//#endregion
//#region src/features/ui/components/Badges/ErrorServerBadge.tsx
var ErrorServerBadge = ({ isFetching, refetch, label }) => {
	return /* @__PURE__ */ jsx(AppBadge, {
		type: "error",
		leftSection: /* @__PURE__ */ jsx(IconServerError, {}),
		size: "lg",
		rightSection: /* @__PURE__ */ jsx(ActionIcon, {
			variant: "transparent",
			"aria-label": "Settings",
			size: "sm",
			color: "red",
			loading: isFetching,
			onClick: () => refetch(),
			children: /* @__PURE__ */ jsx(IconRefresh, {})
		}),
		children: label
	});
};
//#endregion
//#region src/routes/_auth/(concepts)/forte/index.tsx
var $$splitComponentImporter$1 = () => import("./forte-KViX12FL.js");
var Route$1 = createFileRoute("/_auth/(concepts)/forte/")({
	component: lazyRouteComponent($$splitComponentImporter$1, "component"),
	beforeLoad: () => ({
		crumb: "Forte",
		iconName: "concept"
	}),
	head: () => ({ meta: [{ title: "Forte | SPN" }] })
});
//#endregion
//#region src/features/controlProcess/components/InitialSiapsep/BadgeFortnightSiapsep.tsx
var BadgeFortnightSiapsep = ({ title, fortnight, status, consecutive, error }) => {
	const badgeType = error ? "error" : "success";
	const badgeText = fortnight > 0 ? `${fortnight} - ${status}` : "Error";
	const consecutiveText = useMemo(() => {
		if (consecutive < 0) return "Invalido";
		return consecutive === 0 ? "Ordinaria" : `Complementaria ${consecutive}`;
	}, [consecutive]);
	const Icon = useMemo(() => {
		if (error) return /* @__PURE__ */ jsx(IconList, { type: "error" });
		return /* @__PURE__ */ jsx(IconList, { type: "success" });
	}, [error]);
	return /* @__PURE__ */ jsx(Group, {
		justify: "center",
		children: /* @__PURE__ */ jsxs(Popover, {
			width: 280,
			children: [/* @__PURE__ */ jsx(Popover.Target, { children: /* @__PURE__ */ jsx(ServerBadge, {
				type: badgeType,
				children: badgeText
			}) }), /* @__PURE__ */ jsx(Popover.Dropdown, { children: /* @__PURE__ */ jsxs(Stack, {
				align: "flex-start",
				justify: "center",
				gap: "md",
				children: [/* @__PURE__ */ jsx(Title, {
					order: 4,
					children: title
				}), /* @__PURE__ */ jsxs(List, {
					spacing: "xs",
					size: "sm",
					center: true,
					icon: Icon,
					children: [
						/* @__PURE__ */ jsxs(List.Item, { children: ["Quincena: ", /* @__PURE__ */ jsx("span", {
							className: "font-bold",
							children: fortnight
						})] }),
						/* @__PURE__ */ jsxs(List.Item, { children: ["Estatus: ", /* @__PURE__ */ jsx("span", {
							className: "font-bold",
							children: status
						})] }),
						/* @__PURE__ */ jsxs(List.Item, { children: ["Consecutivo: ", /* @__PURE__ */ jsx("span", {
							className: "font-bold",
							children: consecutiveText
						})] }),
						error && /* @__PURE__ */ jsxs(List.Item, { children: ["Error: ", error] })
					]
				})]
			}) })]
		})
	});
};
//#endregion
//#region src/features/controlProcess/components/InitialSiapsep/InititalSiapsep.tsx
var InititalSiapsep = () => {
	const { data, refetch, isFetching } = useSuspenseQuery(controlProcessQueries.fortnight());
	if (data.error || !data?.online) return /* @__PURE__ */ jsx(ErrorServerBadge, {
		isFetching,
		refetch,
		label: "SIAPSEP Offline"
	});
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(BadgeFortnightSiapsep, {
		...data.ordinaryFortnight,
		consecutive: 0,
		title: "Ultima Nomina Ordinaria del Control Proceso - SIAPSEP"
	}), /* @__PURE__ */ jsx(BadgeFortnightSiapsep, {
		...data.currentFortnight,
		title: "Nomina Actual de Control Proceso - SIAPSEP"
	})] });
};
//#endregion
//#region src/routes/_auth/index.tsx
var $$splitComponentImporter = () => import("./_auth-gEhn9MwA.js");
var Route = createFileRoute("/_auth/")({ component: lazyRouteComponent($$splitComponentImporter, "component") });
//#endregion
//#region src/utils/menu/menuLinks.ts
var getMenuLinks = () => [{
	label: "Dashboard",
	icon: IconGauge,
	link: Route.to
}, {
	label: "Conceptos",
	icon: IconNotes,
	initiallyOpened: false,
	matchRoute: Route$2?.id?.replace(Route$2.path, "") ?? "",
	links: [{
		label: "Reintegros",
		link: Route$2.to
	}, {
		label: "Forte",
		link: Route$1.to
	}]
}];
//#endregion
//#region src/features/ui/components/SideBarMenu/SideBarMenu.tsx
var SideBarMenu = () => {
	const menuLinks = useMemo(() => getMenuLinks(), []);
	const childMatches = useChildMatches();
	return /* @__PURE__ */ jsx(Fragment, { children: useMemo(() => {
		const childRoute = childMatches.length > 0 ? childMatches[0].routeId : "";
		return menuLinks.map((menu) => /* @__PURE__ */ createElement(LinksGroup, {
			...menu,
			key: menu.label,
			initiallyOpened: menu?.matchRoute ? childRoute.includes(menu.matchRoute) : false
		}));
	}, []) });
};
//#endregion
//#region src/features/ui/components/Searchbar/Searchbar.tsx
var actions = [
	{
		id: "home",
		label: "Dashboard",
		description: "Ver informacion completa acerca del estado actual del sistema",
		to: "/",
		leftSection: /* @__PURE__ */ jsx(IconHome$1, {
			size: 24,
			stroke: 1.5
		}),
		group: "home"
	},
	{
		id: "refund",
		label: "Reintegros",
		description: "Ver el estado de los reintegros (concepto 19)",
		to: "/refund",
		leftSection: /* @__PURE__ */ jsx(IconConcept, {
			size: 24,
			stroke: 1.5
		}),
		group: "conceptos"
	},
	{
		id: "forte",
		label: "Forte",
		description: "Ver el estado del forte (concepto 21)",
		to: "/forte",
		leftSection: /* @__PURE__ */ jsx(IconConcept, {
			size: 24,
			stroke: 1.5
		}),
		group: "conceptos"
	}
];
function Searchbar() {
	const [query, setQuery] = useState("");
	const items = useMemo(() => {
		const itemsObject = actions.filter((item) => {
			return item.label?.toLowerCase().includes(query.toLowerCase().trim()) || item.description?.toLowerCase().includes(query.toLowerCase().trim());
		}).slice(0, 5).reduce((acc, item) => {
			if (!acc[item.group]) acc[item.group] = [];
			acc[item.group].push(item);
			return acc;
		}, {});
		return Object.keys(itemsObject).map((item) => /* @__PURE__ */ jsx(Spotlight.ActionsGroup, {
			label: item.trim().toUpperCase(),
			children: itemsObject[item].map((action) => /* @__PURE__ */ jsx(AppSpotlightLink, {
				label: action.label,
				description: action.description,
				leftSection: action.leftSection,
				highlightQuery: true,
				to: action.to
			}, action.id))
		}, item));
	}, [query]);
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx(Button, {
			variant: "default",
			visibleFrom: "sm",
			onClick: spotlight.open,
			leftSection: /* @__PURE__ */ jsx(IconSearch$1, {
				size: 14,
				stroke: 1.5
			}),
			rightSection: /* @__PURE__ */ jsx(Kbd, {
				size: "xs",
				mr: "4",
				children: "Ctrl + K"
			}),
			children: "Buscar"
		}),
		/* @__PURE__ */ jsx(Button, {
			variant: "default",
			onClick: spotlight.open,
			hiddenFrom: "sm",
			children: /* @__PURE__ */ jsx(IconSearch$1, {
				size: 14,
				stroke: 1.5
			})
		}),
		/* @__PURE__ */ jsxs(Spotlight.Root, {
			query,
			onQueryChange: setQuery,
			children: [/* @__PURE__ */ jsx(Spotlight.Search, {
				placeholder: "Buscar...",
				leftSection: /* @__PURE__ */ jsx(IconSearch$1, { stroke: 1.5 }),
				rightSection: /* @__PURE__ */ jsx(Kbd, {
					size: "xs",
					mr: "4",
					children: "esc"
				})
			}), /* @__PURE__ */ jsx(Spotlight.ActionsList, { children: items.length > 0 ? items : /* @__PURE__ */ jsx(Spotlight.Empty, { children: /* @__PURE__ */ jsx(EmptySearch, { query }) }) })]
		})
	] });
}
//#endregion
//#region src/features/ui/components/Skeleton/Skeleton.tsx
var Skeleton$1 = (props) => {
	return /* @__PURE__ */ jsx(Skeleton, { ...props });
};
//#endregion
//#region src/features/ui/components/Skeleton/SkeletonBadge.tsx
function SkeletonBadge({ quantity = 1 }) {
	return /* @__PURE__ */ jsx(Fragment, { children: Array.from({ length: quantity }).map((_, index) => /* @__PURE__ */ jsx(Skeleton$1, {
		height: 20,
		radius: "xl",
		width: 100
	}, index)) });
}
//#endregion
//#region src/features/ui/layouts/AuthLayout.tsx
var AuthLayout = ({ className, children }) => {
	const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
	const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(false);
	return /* @__PURE__ */ jsxs(AppShell, {
		header: { height: {
			base: 60,
			md: 70,
			lg: 80
		} },
		navbar: {
			width: { base: 250 },
			breakpoint: "sm",
			collapsed: {
				mobile: !mobileOpened,
				desktop: !desktopOpened
			}
		},
		padding: "md",
		children: [
			/* @__PURE__ */ jsx(AppShell.Header, { children: /* @__PURE__ */ jsxs(Group, {
				h: "100%",
				px: "md",
				justify: "space-between",
				children: [
					/* @__PURE__ */ jsx(Burger, {
						opened: mobileOpened,
						onClick: toggleMobile,
						hiddenFrom: "sm",
						size: "sm"
					}),
					/* @__PURE__ */ jsx(Burger, {
						opened: desktopOpened,
						onClick: toggleDesktop,
						visibleFrom: "sm",
						size: "sm"
					}),
					/* @__PURE__ */ jsx(Group, {
						visibleFrom: "sm",
						children: /* @__PURE__ */ jsx(GroupServerBadge, {})
					}),
					/* @__PURE__ */ jsx(Searchbar, {})
				]
			}) }),
			/* @__PURE__ */ jsxs(AppShell.Navbar, {
				p: "md",
				children: [
					/* @__PURE__ */ jsx(AppShell.Section, {
						hiddenFrom: "sm",
						className: "flex flex-row flex-wrap gap-2 justify-start items-center",
						children: /* @__PURE__ */ jsx(GroupServerBadge, {})
					}),
					/* @__PURE__ */ jsx(AppShell.Section, {
						grow: true,
						my: "md",
						component: ScrollArea,
						children: /* @__PURE__ */ jsx(SideBarMenu, {})
					}),
					/* @__PURE__ */ jsx(AppShell.Section, { children: /* @__PURE__ */ jsx(SignOutButton, {}) })
				]
			}),
			/* @__PURE__ */ jsx(AppShell.Main, {
				className,
				children
			})
		]
	});
};
//#endregion
//#region src/features/controlSicon/query/controlSicon.queries.ts
var controlSiconKeys = { all: ["sicon_status"] };
var controlSiconQueries = { fortnight: () => queryOptions({
	queryKey: controlSiconKeys.all,
	queryFn: serverFn.controlSicon.getFortnight
}) };
//#endregion
//#region src/features/controlSicon/components/BadgeFortnightSicon.tsx
var BadgeFortnightSicon = ({ status, name, fortnight }) => {
	return /* @__PURE__ */ jsxs(Popover, {
		width: 280,
		children: [/* @__PURE__ */ jsx(Popover.Target, { children: /* @__PURE__ */ jsxs(ServerBadge, { children: [fortnight, " - SICON"] }) }), /* @__PURE__ */ jsx(Popover.Dropdown, { children: /* @__PURE__ */ jsxs(Stack, {
			align: "flex-start",
			justify: "center",
			gap: "md",
			children: [/* @__PURE__ */ jsx(Title, {
				order: 4,
				children: "Quincena en Cargar tablas - SICON"
			}), /* @__PURE__ */ jsxs(List, {
				spacing: "xs",
				size: "sm",
				center: true,
				icon: /* @__PURE__ */ jsx(IconList, { type: "success" }),
				children: [
					/* @__PURE__ */ jsxs(List.Item, { children: ["Quincena: ", /* @__PURE__ */ jsx("span", {
						className: "font-bold",
						children: fortnight
					})] }),
					/* @__PURE__ */ jsxs(List.Item, { children: ["Estatus: ", /* @__PURE__ */ jsx("span", {
						className: "font-bold",
						children: status
					})] }),
					/* @__PURE__ */ jsxs(List.Item, { children: ["Nombre: ", /* @__PURE__ */ jsx("span", {
						className: "font-bold",
						children: name
					})] })
				]
			})]
		}) })]
	});
};
//#endregion
//#region src/features/controlSicon/components/InitialSicon.tsx
var InititalSicon = () => {
	const { data, refetch, isFetching } = useSuspenseQuery(controlSiconQueries.fortnight());
	if (data.error || !data?.online || !data?.module) return /* @__PURE__ */ jsx(ErrorServerBadge, {
		isFetching,
		refetch,
		label: "SICON Offline"
	});
	return /* @__PURE__ */ jsx(BadgeFortnightSicon, { ...data.module });
};
//#endregion
//#region src/features/core/components/badges/GroupServerBadge.tsx
var GroupServerBadge = () => {
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(Suspense, {
		fallback: /* @__PURE__ */ jsx(SkeletonBadge, { quantity: 1 }),
		children: /* @__PURE__ */ jsx(InititalSiapsep, {})
	}), /* @__PURE__ */ jsx(Suspense, {
		fallback: /* @__PURE__ */ jsx(SkeletonBadge, { quantity: 1 }),
		children: /* @__PURE__ */ jsx(InititalSicon, {})
	})] });
};
//#endregion
export { IconConcept as a, Route$1 as i, AuthLayout as n, IconHome$1 as o, Route as r, authQueries as s, controlSiconQueries as t };
