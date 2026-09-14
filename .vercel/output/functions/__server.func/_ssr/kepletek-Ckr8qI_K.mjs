import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as AppShell } from "./router-CRYL6TQu.mjs";
import { a as Formula, c as Section } from "./primitives-DcMqa70T.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/kepletek-Ckr8qI_K.js
var import_jsx_runtime = require_jsx_runtime();
function KepletekPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-2xl px-4 py-8 sm:px-8 sm:py-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-medium tracking-[0.16em] text-accent uppercase",
				children: "Egy lapra"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-display text-3xl font-medium tracking-tight sm:text-4xl",
				children: "Képlettár"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-muted",
				children: "A jegyzetben előforduló összefüggések egy helyen. Értékek 25 °C-ra, hacsak mást nem írunk."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 space-y-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
						title: "Anyagmennyiség",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Formula, {
							caption: "NA = 6,022·10²³ mol⁻¹ · R = 8,314 J/(mol·K) · Vm(25 °C, 1 bar) ≈ 24,8 dm³/mol",
							children: [
								"n = m / M = N / N",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "A" }),
								" = V / V",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "m" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"pV = nRT"
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
						title: "Szerkezet",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Formula, { children: [
							"A = Z + N",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "neutron" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"Ar = Σ (w",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "i" }),
							" · A",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "i" }),
							")",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"ΔEN → kötéspolaritás · VSEPR → alak · Σμ → molekulapolaritás"
						] })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
						title: "Termokémia és kinetika",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Formula, { children: [
							"Δ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "r" }),
							"H° = Σ ν Δ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "f" }),
							"H°(termékek) − Σ ν Δ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "f" }),
							"H°(reaktánsok)",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"v = k [A]",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sup", { children: "α" }),
							"[B]",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sup", { children: "β" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"k = A e",
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("sup", { children: [
								"−E",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "a" }),
								"/RT"
							] })
						] })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
						title: "Egyensúly",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Formula, {
							caption: "ΔG° = −RT ln K · Le Chatelier: a zavarás ellen dolgozik a rendszer.",
							children: [
								"aA + bB ⇌ cC + dD",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"K = [C]",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sup", { children: "c" }),
								"[D]",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sup", { children: "d" }),
								" / [A]",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sup", { children: "a" }),
								"[B]",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sup", { children: "b" })
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
						title: "Sav–bázis",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Formula, {
							caption: "25 °C. Konjugált párra pKa + pKb = 14.",
							children: [
								"K",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "w" }),
								" = [H",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "3" }),
								"O⁺][OH⁻] = 1,0·10⁻¹⁴",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"pH = −lg [H",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "3" }),
								"O⁺] · pH + pOH = 14",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"K",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "a" }),
								" = [H",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "3" }),
								"O⁺][A⁻]/[HA]",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"pH = pK",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "a" }),
								" + lg ([A⁻]/[HA])"
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
						title: "Elektrokémia",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Formula, {
							caption: "F = 96485 C/mol · Q = I·t",
							children: [
								"E = ε",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "katód" }),
								" − ε",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "anód" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"ε = ε° − (0,059 V / n) lg Q",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"m = (M · I · t) / (z · F)"
							]
						})
					})
				]
			})
		]
	}) });
}
//#endregion
export { KepletekPage as component };
