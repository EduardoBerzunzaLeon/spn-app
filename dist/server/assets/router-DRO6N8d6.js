import { t as auth } from "./auth-C7-WrATw.js";
import { r as isObject } from "./core.validation-CEuDp-fu.js";
import { l as withSizeIcon, n as Route$4, r as controlProcessQueries } from "./EmptySearch-C0dk0rbu.js";
import { i as Route$6, n as AuthLayout, o as IconHome$1, r as Route$5, s as authQueries, t as controlSiconQueries } from "./GroupServerBadge-CJSmRYoE.js";
import { t as toast$1 } from "./toast-cuLdEX8g.js";
import { useEffect } from "react";
import { ErrorComponent, HeadContent, Link, Outlet, Scripts, createFileRoute, createRootRouteWithContext, createRouter, lazyRouteComponent, redirect, rootRouteId, stripSearchParams, useMatch, useNavigate, useRouteContext, useRouter } from "@tanstack/react-router";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { MutationCache, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "sonner";
import { ModalsProvider } from "@mantine/modals";
import "dayjs/locale/es.js";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { Button, ColorSchemeScript, Container, Group, HoverCard, Image, MantineProvider, Menu, Popover, SimpleGrid, Stack, Text, Title, Tooltip, createTheme, mantineHtmlProps } from "@mantine/core";
import { NavigationProgress, nprogress } from "@mantine/nprogress";
import { IconArrowLoopLeft } from "@tabler/icons-react/dist/esm/icons/index.mjs";
import * as v from "valibot";
import { DatesProvider } from "@mantine/dates";
import { scan } from "react-scan";
import { setupRouterSsrQueryIntegration } from "@tanstack/react-router-ssr-query";
//#region node_modules/mantine-react-table/styles.css?url
var styles_default$4 = "/assets/styles-QkxHWnru.css";
//#endregion
//#region node_modules/@mantine/core/styles.css?url
var styles_default$3 = "/assets/styles-hRceUWu8.css";
//#endregion
//#region node_modules/@mantine/dates/styles.css?url
var styles_default$2 = "/assets/styles-Dk4DEkv-.css";
//#endregion
//#region node_modules/@mantine/nprogress/styles.css?url
var styles_default$1 = "/assets/styles-b9PXqAFV.css";
//#endregion
//#region node_modules/@mantine/spotlight/styles.css?url
var styles_default = "/assets/styles-E1S1lSLL.css";
//#endregion
//#region src/shared/core/core.shared.schema.ts
var RedirectSearchSchema = v.object({ redirectTo: v.optional(v.fallback(v.pipe(v.string(), v.trim()), "/"), "/") });
//#endregion
//#region src/features/core/components/errors/DefaultCatchBoundary.tsx
function DefaultCatchBoundary({ error }) {
	const router = useRouter();
	const isRoot = useMatch({
		strict: false,
		select: (state) => state.id === rootRouteId
	});
	return /* @__PURE__ */ jsxs("div", {
		className: "min-w-0 flex-1 p-4 flex flex-col items-center justify-center gap-6",
		children: [/* @__PURE__ */ jsx(ErrorComponent, { error }), /* @__PURE__ */ jsxs("div", {
			className: "flex gap-2 items-center flex-wrap",
			children: [/* @__PURE__ */ jsx("button", {
				type: "button",
				onClick: () => {
					router.invalidate();
				},
				className: "px-2 py-1 bg-gray-600 dark:bg-gray-700 rounded text-white uppercase font-extrabold",
				children: "Try Again"
			}), isRoot ? /* @__PURE__ */ jsx(Link, {
				to: "/",
				className: "px-2 py-1 bg-gray-600 dark:bg-gray-700 rounded text-white uppercase font-extrabold",
				children: "Home"
			}) : /* @__PURE__ */ jsx(Link, {
				to: "/",
				className: "px-2 py-1 bg-gray-600 dark:bg-gray-700 rounded text-white uppercase font-extrabold",
				onClick: (e) => {
					e.preventDefault();
					window.history.back();
				},
				children: "Go Back"
			})]
		})]
	});
}
//#endregion
//#region /Ghost-big.png
var Ghost_big_default = "/Ghost-big.png";
//#endregion
//#region src/features/ui/components/Icons/IconReturn.tsx
var IconReturn = withSizeIcon(IconArrowLoopLeft);
//#endregion
//#region src/utils/seo.ts
var seo = ({ title, description, keywords, image }) => {
	return [
		{ title },
		{
			name: "description",
			content: description
		},
		{
			name: "keywords",
			content: keywords
		},
		{
			name: "twitter:title",
			content: title
		},
		{
			name: "twitter:description",
			content: description
		},
		{
			name: "twitter:creator",
			content: "@tannerlinsley"
		},
		{
			name: "twitter:site",
			content: "@tannerlinsley"
		},
		{
			name: "og:type",
			content: "website"
		},
		{
			name: "og:title",
			content: title
		},
		{
			name: "og:description",
			content: description
		},
		...image ? [
			{
				name: "twitter:image",
				content: image
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "og:image",
				content: image
			}
		] : []
	];
};
//#endregion
//#region src/features/core/components/errors/NotFound.tsx
function NotFound() {
	const { user } = useRouteContext({ from: "__root__" });
	if (user) return /* @__PURE__ */ jsx(AuthLayout, {
		className: "flex align-center justify-center",
		children: /* @__PURE__ */ jsx(NotFundContainer, { className: "flex align-center justify-center" })
	});
	return /* @__PURE__ */ jsx(NotFundContainer, { className: "h-screen w-screen flex align-center justify-center" });
}
var NotFundContainer = ({ className }) => {
	const navigate = useNavigate();
	const handleReturn = () => {
		window.history.back();
	};
	const handleHome = () => {
		navigate({ to: "/" });
	};
	return /* @__PURE__ */ jsx(Container, {
		className,
		mt: 10,
		children: /* @__PURE__ */ jsxs(SimpleGrid, {
			spacing: {
				base: 40,
				sm: 80
			},
			cols: {
				base: 1,
				sm: 2
			},
			children: [
				/* @__PURE__ */ jsx(Stack, {
					hiddenFrom: "sm",
					align: "center",
					justify: "center",
					children: /* @__PURE__ */ jsx(Image, {
						alt: "not found error",
						src: Ghost_big_default,
						h: 200,
						w: "auto",
						fit: "contain"
					})
				}),
				/* @__PURE__ */ jsxs(Stack, {
					align: "center",
					justify: "center",
					children: [
						/* @__PURE__ */ jsx(Title, { children: "¡Buuu!" }),
						/* @__PURE__ */ jsx(Text, {
							c: "dimmed",
							size: "lg",
							children: "La página que desea acceder, no existe."
						}),
						/* @__PURE__ */ jsxs(Group, {
							justify: "center",
							children: [/* @__PURE__ */ jsx(Button, {
								leftSection: /* @__PURE__ */ jsx(IconHome$1, {}),
								size: "md",
								mt: "xl",
								onClick: handleHome,
								color: "gray",
								children: "Ir al Inicio"
							}), /* @__PURE__ */ jsx(Button, {
								leftSection: /* @__PURE__ */ jsx(IconReturn, {}),
								size: "md",
								mt: "xl",
								onClick: handleReturn,
								children: "Regresar"
							})]
						})
					]
				}),
				/* @__PURE__ */ jsx(Stack, {
					align: "center",
					justify: "center",
					children: /* @__PURE__ */ jsx(Image, {
						alt: "not found error",
						src: Ghost_big_default,
						visibleFrom: "sm",
						w: "auto",
						fit: "contain",
						mah: 300
					})
				})
			]
		})
	});
};
//#endregion
//#region src/styles/app.css?url
var app_default = "/assets/app-dp-fppKm.css";
//#endregion
//#region src/styles/links-groups.css?url
var links_groups_default = "/assets/links-groups-ClquSZxo.css";
//#endregion
//#region src/styles/sidebar.css?url
var sidebar_default = "/assets/sidebar-DwA_6InG.css";
//#endregion
//#region src/routes/-ClientRoot.tsx
scan({ enabled: true });
function ClientRoot({ children }) {
	const router = useRouter();
	useEffect(() => {
		const unsubscribeStart = router.subscribe("onBeforeLoad", ({ fromLocation, pathChanged }) => fromLocation && pathChanged && nprogress.start());
		const unsubscribeComplete = router.subscribe("onLoad", () => nprogress.complete());
		return () => {
			unsubscribeStart();
			unsubscribeComplete();
		};
	}, [router]);
	return /* @__PURE__ */ jsx(Fragment, { children });
}
//#endregion
//#region src/routes/__root.tsx
var Route$3 = createRootRouteWithContext()({
	beforeLoad: async ({ context }) => {
		return { user: await context.queryClient.ensureQueryData(authQueries.user()) };
	},
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			...seo({
				title: "SPN | SEDUC",
				description: `Sistema de Productos de Nomina`
			})
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default$3
			},
			{
				rel: "stylesheet",
				href: styles_default$1
			},
			{
				rel: "stylesheet",
				href: sidebar_default
			},
			{
				rel: "stylesheet",
				href: links_groups_default
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "stylesheet",
				href: styles_default$4
			},
			{
				rel: "stylesheet",
				href: styles_default$2
			},
			{
				rel: "stylesheet",
				href: app_default
			},
			{
				rel: "apple-touch-icon",
				sizes: "180x180",
				href: "/apple-touch-icon.png"
			},
			{
				rel: "icon",
				type: "image/png",
				sizes: "32x32",
				href: "/favicon-32x32.png"
			},
			{
				rel: "icon",
				type: "image/png",
				sizes: "16x16",
				href: "/favicon-16x16.png"
			},
			{
				rel: "manifest",
				href: "/site.webmanifest",
				color: "#fffff"
			},
			{
				rel: "icon",
				href: "/favicon.ico"
			}
		]
	}),
	errorComponent: (props) => {
		return /* @__PURE__ */ jsx(RootDocument, { children: /* @__PURE__ */ jsx(DefaultCatchBoundary, { ...props }) });
	},
	notFoundComponent: () => /* @__PURE__ */ jsx(NotFound, {}),
	component: RootComponent
});
function RootComponent() {
	return /* @__PURE__ */ jsx(RootDocument, { children: /* @__PURE__ */ jsx(ClientRoot, { children: /* @__PURE__ */ jsx(Outlet, {}) }) });
}
var theme = createTheme({
	defaultRadius: "md",
	cursorType: "pointer",
	components: {
		HoverCard: HoverCard.extend({ defaultProps: {
			shadow: "md",
			withArrow: true,
			arrowSize: 10
		} }),
		Popover: Popover.extend({ defaultProps: {
			shadow: "md",
			withArrow: true,
			arrowSize: 10
		} }),
		Menu: Menu.extend({ defaultProps: {
			shadow: "md",
			withArrow: true,
			arrowSize: 10,
			arrowPosition: "center"
		} }),
		Tooltip: Tooltip.extend({ defaultProps: {
			withArrow: true,
			arrowSize: 10,
			color: "#2E2E2E"
		} }),
		Button: Button.extend({ defaultProps: {
			variant: "light",
			loaderProps: { type: "dots" }
		} })
	}
});
function RootDocument({ children }) {
	return /* @__PURE__ */ jsxs("html", {
		lang: "es",
		...mantineHtmlProps,
		children: [/* @__PURE__ */ jsxs("head", { children: [/* @__PURE__ */ jsx(HeadContent, {}), /* @__PURE__ */ jsx(ColorSchemeScript, {
			nonce: "8IBTHwOdqNKAWeKl7plt8g==",
			defaultColorScheme: "dark"
		})] }), /* @__PURE__ */ jsxs("body", { children: [
			/* @__PURE__ */ jsxs(MantineProvider, {
				defaultColorScheme: "dark",
				theme,
				children: [/* @__PURE__ */ jsx(NavigationProgress, {}), /* @__PURE__ */ jsxs(ModalsProvider, { children: [/* @__PURE__ */ jsx(Toaster, { theme: "dark" }), /* @__PURE__ */ jsx(DatesProvider, {
					settings: {
						locale: "es",
						firstDayOfWeek: 0,
						weekendDays: [0]
					},
					children
				})] })]
			}),
			/* @__PURE__ */ jsx(TanStackRouterDevtools, { position: "bottom-right" }),
			/* @__PURE__ */ jsx(ReactQueryDevtools, { buttonPosition: "bottom-left" }),
			/* @__PURE__ */ jsx(Scripts, {})
		] })]
	});
}
//#endregion
//#region src/routes/signin.tsx
var $$splitComponentImporter$1 = () => import("./signin-BqXCQ2T-.js");
var Route$2 = createFileRoute("/signin")({
	component: lazyRouteComponent($$splitComponentImporter$1, "component"),
	validateSearch: RedirectSearchSchema,
	beforeLoad: async ({ context, search }) => {
		const { redirectTo } = search;
		if (context.user) throw redirect({ href: redirectTo });
	},
	search: { middlewares: [stripSearchParams({ redirectTo: "/" })] }
});
//#endregion
//#region src/routes/_auth.tsx
var $$splitComponentImporter = () => import("./_auth-RpCRvLp2.js");
var Route$1 = createFileRoute("/_auth")({
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	beforeLoad: async ({ context, location }) => {
		if (!context.user) throw redirect({
			to: "/signin",
			search: { redirectTo: location.href }
		});
		context.queryClient.prefetchQuery(controlProcessQueries.fortnight());
		context.queryClient.prefetchQuery(controlSiconQueries.fortnight());
		return {
			crumb: "Dashboard",
			iconName: "home"
		};
	},
	head: () => ({ meta: [{ title: "Dashboard | SPN" }] })
});
//#endregion
//#region src/routes/api/auth/$.ts
var Route = createFileRoute("/api/auth/$")({ server: { handlers: {
	GET: async ({ request }) => {
		return await auth.handler(request);
	},
	POST: async ({ request }) => {
		return await auth.handler(request);
	}
} } });
//#endregion
//#region src/routeTree.gen.ts
var SigninRoute = Route$2.update({
	id: "/signin",
	path: "/signin",
	getParentRoute: () => Route$3
});
var AuthRoute = Route$1.update({
	id: "/_auth",
	getParentRoute: () => Route$3
});
var AuthIndexRoute = Route$5.update({
	id: "/",
	path: "/",
	getParentRoute: () => AuthRoute
});
var ApiAuthSplatRoute = Route.update({
	id: "/api/auth/$",
	path: "/api/auth/$",
	getParentRoute: () => Route$3
});
var AuthconceptsRefundIndexRoute = Route$4.update({
	id: "/(concepts)/refund/",
	path: "/refund/",
	getParentRoute: () => AuthRoute
});
var AuthRouteChildren = {
	AuthIndexRoute,
	AuthconceptsForteIndexRoute: Route$6.update({
		id: "/(concepts)/forte/",
		path: "/forte/",
		getParentRoute: () => AuthRoute
	}),
	AuthconceptsRefundIndexRoute
};
var rootRouteChildren = {
	AuthRoute: AuthRoute._addFileChildren(AuthRouteChildren),
	SigninRoute,
	ApiAuthSplatRoute
};
var routeTree = Route$3._addFileChildren(rootRouteChildren)._addFileTypes();
//#endregion
//#region src/router.tsx
var handleErrorMessage = (errorMessage) => {
	if (!errorMessage) return "Error inmanegable, favor de verificar los logs";
	if (errorMessage.length > 100) return "Error demasiado largo, favor de verificar los logs";
	return errorMessage;
};
function getRouter() {
	const queryClient = new QueryClient({
		defaultOptions: { queries: {
			refetchOnWindowFocus: false,
			staleTime: 1e3 * 60,
			retry: 0
		} },
		mutationCache: new MutationCache({
			onError: (error) => {
				console.log({ errorMutation: error });
				const message = handleErrorMessage(error.message);
				return toast$1.error(message);
			},
			onSuccess: (data) => {
				const message = isObject(data) && typeof data?.message === "string" ? data.message : "";
				if (message) return toast$1.success(message);
			}
		})
	});
	const router = createRouter({
		routeTree,
		context: {
			queryClient,
			crumb: null,
			iconName: null
		},
		defaultPreload: "intent",
		defaultPreloadStaleTime: 0,
		defaultErrorComponent: DefaultCatchBoundary,
		defaultNotFoundComponent: () => /* @__PURE__ */ jsx(NotFound, {}),
		scrollRestoration: true,
		defaultStructuralSharing: true,
		notFoundMode: "fuzzy"
	});
	setupRouterSsrQueryIntegration({
		router,
		queryClient
	});
	return router;
}
//#endregion
export { getRouter };
