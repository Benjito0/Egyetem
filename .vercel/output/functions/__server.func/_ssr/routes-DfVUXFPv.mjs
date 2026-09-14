import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as BookOpen, r as Table2, s as ArrowRight } from "../_libs/lucide-react.mjs";
import { a as cn, c as GROUPS, o as useProgress, r as AppShell, s as CHAPTERS } from "./router-CRYL6TQu.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DfVUXFPv.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Home() {
	const read = useProgress((s) => s.read);
	const quiz = useProgress((s) => s.quiz);
	const [hydrated, setHydrated] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => setHydrated(true), []);
	const readCount = hydrated ? CHAPTERS.filter((c) => read[c.slug]).length : 0;
	const groups = Object.keys(GROUPS).map((g) => ({
		g,
		items: CHAPTERS.filter((c) => c.group === g)
	}));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "px-4 py-10 sm:px-8 sm:py-14",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-medium tracking-[0.18em] text-accent uppercase",
				children: "Általános · szervetlen · szerves"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 max-w-xl font-display text-4xl font-medium tracking-tight sm:text-5xl",
				children: "Kémia, amire az egyetemet építed."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-5 max-w-2xl text-lg leading-relaxed text-muted",
				children: "Tömör, ábrás alapjegyzet a bemásolt témakörökből: atomoktól a kovalens kötésen, rácsokon és egyensúlyokon át a vasig, az észterig. Minden fejezetben példa, ábra és három ellenőrző kérdés — egyetemi kitekintéssel, nem tankönyvmásolattal."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 flex flex-wrap gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/jegyzet/$slug",
						params: { slug: "atomok" },
						className: "inline-flex h-12 items-center gap-2 rounded-md bg-accent px-5 text-sm font-medium text-accent-fg no-underline",
						children: ["Első fejezet", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/tabla",
						className: "inline-flex h-12 items-center gap-2 rounded-md px-5 text-sm font-medium text-ink no-underline shadow-[var(--shadow-border)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Table2, { className: "size-4" }), "Periódusos táblázat"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/kepletek",
						className: "inline-flex h-12 items-center gap-2 rounded-md px-5 text-sm font-medium text-ink no-underline shadow-[var(--shadow-border)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, { className: "size-4" }), "Képlettár"]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 max-w-xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between text-sm text-muted",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Haladás" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "font-mono tabular-nums",
						children: [
							readCount,
							"/",
							CHAPTERS.length,
							" fejezet"
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-2 h-1.5 overflow-hidden rounded-full bg-paper",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-full rounded-full bg-accent transition-[width] duration-300",
						style: { width: `${readCount / CHAPTERS.length * 100}%` }
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 space-y-12",
				children: groups.map(({ g, items }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl font-medium tracking-tight",
					children: GROUPS[g]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-5 grid gap-3 sm:grid-cols-2",
					children: items.map((c) => {
						const done = hydrated && read[c.slug];
						const q = hydrated ? quiz[c.slug] : void 0;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/jegyzet/$slug",
							params: { slug: c.slug },
							className: cn("group rounded-xl bg-bg-elevated p-5 no-underline shadow-[var(--shadow-border)] transition-[box-shadow] duration-150 hover:shadow-[var(--shadow-border-hover)]"),
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-baseline justify-between gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-mono text-xs text-accent",
										children: c.n
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-xs text-subtle",
										children: [c.minutes, " perc"]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-2 font-display text-xl font-medium tracking-tight text-ink",
									children: c.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm leading-relaxed text-muted",
									children: c.lead
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-4 flex items-center gap-2 text-sm text-accent",
									children: [
										done ? "Újraolvasás" : "Megnyitás",
										q !== void 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "font-mono text-xs text-muted",
											children: [
												"· ",
												q,
												"/3"
											]
										}) : null,
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-3.5 transition-transform duration-150 group-hover:translate-x-0.5" })
									]
								})
							]
						}, c.slug);
					})
				})] }, g))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "mt-16 border-t border-line pt-8 text-sm leading-relaxed text-muted",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "A jegyzet a magyar érettségi témakörökre és az egyetemi általános kémia (pl. Benkő: Kémiai alapok) ívére épül. Saját összefoglaló, ábrákkal és számolt példákkal — nem másolt tankönyvszöveg." })
			})
		]
	}) });
}
//#endregion
export { Home as component };
