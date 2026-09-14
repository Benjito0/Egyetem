import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as cn } from "./router-CRYL6TQu.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/primitives-DcMqa70T.js
var import_jsx_runtime = require_jsx_runtime();
function Section({ id, title, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id,
		className: "scroll-mt-24",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "font-display text-2xl font-medium tracking-tight text-ink",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-4 space-y-4 text-base leading-relaxed text-ink",
			children
		})]
	});
}
function Formula({ children, caption }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
		className: "overflow-x-auto rounded-lg bg-paper px-4 py-3 sm:px-5 sm:py-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "font-mono text-sm leading-relaxed text-ink sm:text-base",
			children
		}), caption ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
			className: "mt-2 text-sm text-muted",
			children: caption
		}) : null]
	});
}
function Example({ title, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
		className: "rounded-xl bg-bg-elevated p-4 shadow-[var(--shadow-border)] sm:p-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "text-xs font-medium tracking-[0.14em] text-accent uppercase",
			children: ["Példa · ", title]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-3 space-y-3 text-base leading-relaxed",
			children
		})]
	});
}
function BuildOn({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
		className: "border-l-2 border-accent pl-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs font-medium tracking-[0.14em] text-accent uppercase",
			children: "Egyetemi kitekintés"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-2 space-y-2 text-sm leading-relaxed text-muted",
			children
		})]
	});
}
function Note({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "rounded-lg bg-paper px-4 py-3 text-sm leading-relaxed text-muted",
		children
	});
}
function KeyGrid({ items }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
		className: "grid gap-px overflow-hidden rounded-xl bg-line sm:grid-cols-2",
		children: items.map((it) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "bg-bg-elevated px-4 py-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
				className: "text-xs font-medium tracking-wide text-muted uppercase",
				children: it.k
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
				className: "mt-1 text-sm leading-relaxed text-ink",
				children: it.v
			})]
		}, it.k))
	});
}
function DataTable({ head, rows, caption }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
		className: "overflow-x-auto rounded-xl bg-bg-elevated shadow-[var(--shadow-border)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
			className: "w-full min-w-[28rem] text-left text-sm",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", {
				className: "border-b border-line",
				children: head.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
					className: "px-3 py-2.5 font-medium text-muted first:pl-4 last:pr-4",
					children: h
				}, h))
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: rows.map((row, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", {
				className: "border-b border-line last:border-0",
				children: row.map((cell, j) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
					className: cn("px-3 py-2.5 align-top text-ink first:pl-4 last:pr-4", j === 0 && "font-medium"),
					children: cell
				}, j))
			}, i)) })]
		}), caption ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
			className: "border-t border-line px-4 py-2 text-xs text-muted",
			children: caption
		}) : null]
	});
}
function FigureFrame({ title, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
		className: "overflow-hidden rounded-xl bg-bg-elevated shadow-[var(--shadow-border)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "px-4 pt-4 sm:px-5 sm:pt-5",
			children
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
			className: "px-4 py-3 text-sm text-muted sm:px-5",
			children: title
		})]
	});
}
//#endregion
export { Formula as a, Section as c, FigureFrame as i, DataTable as n, KeyGrid as o, Example as r, Note as s, BuildOn as t };
