import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { b as require_jsx_runtime, v as Link, z as notFound } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Check, c as ArrowLeft, s as ArrowRight, t as X } from "../_libs/lucide-react.mjs";
import { a as cn, i as Button, l as chapterBySlug, n as Route, o as useProgress, r as AppShell, u as neighbors } from "./router-CRYL6TQu.mjs";
import { a as Formula, c as Section, i as FigureFrame, n as DataTable, o as KeyGrid, r as Example, s as Note, t as BuildOn } from "./primitives-DcMqa70T.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/jegyzet._slug-qkpaYJij.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Quiz({ slug, items }) {
	const [picked, setPicked] = (0, import_react.useState)(() => items.map(() => null));
	const [done, setDone] = (0, import_react.useState)(false);
	const setQuiz = useProgress((s) => s.setQuiz);
	const score = picked.reduce((acc, p, i) => acc + (p === items[i].answer ? 1 : 0), 0);
	function submit() {
		const s = picked.reduce((acc, p, i) => acc + (p === items[i].answer ? 1 : 0), 0);
		setDone(true);
		setQuiz(slug, s);
	}
	function reset() {
		setPicked(items.map(() => null));
		setDone(false);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "scroll-mt-24 border-t border-line pt-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-2xl font-medium tracking-tight",
				children: "Ellenőrző kérdések"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-muted",
				children: "Három rövid kérdés. A válasz után magyarázatot is kapsz — ez a jegyzet része, nem vizsga."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "mt-6 space-y-8",
				children: items.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "font-medium",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "mr-2 font-mono text-sm text-accent",
							children: [i + 1, "."]
						}), item.q]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3 grid gap-2",
						children: item.options.map((opt, j) => {
							const selected = picked[i] === j;
							const correct = done && j === item.answer;
							const wrong = done && selected && j !== item.answer;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								disabled: done,
								onClick: () => setPicked((prev) => {
									const next = [...prev];
									next[i] = j;
									return next;
								}),
								className: cn("flex min-h-11 items-start gap-3 rounded-lg px-3 py-2.5 text-left text-sm shadow-[var(--shadow-border)] transition-[box-shadow,background-color] duration-150", selected && !done && "bg-paper", correct && "bg-ok/10", wrong && "bg-bad/10", !selected && !done && "bg-bg-elevated hover:shadow-[var(--shadow-border-hover)]"),
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mt-0.5 font-mono text-xs text-muted",
										children: String.fromCharCode(65 + j)
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "flex-1",
										children: opt
									}),
									correct ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "mt-0.5 size-4 text-ok" }) : null,
									wrong ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "mt-0.5 size-4 text-bad" }) : null
								]
							}, opt);
						})
					}),
					done ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm leading-relaxed text-muted",
						children: item.why
					}) : null
				] }, item.q))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 flex flex-wrap items-center gap-3",
				children: !done ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					onClick: submit,
					disabled: picked.some((p) => p === null),
					children: "Ellenőrzés"
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "font-mono text-sm tabular-nums text-accent",
					children: [
						score,
						"/",
						items.length,
						" helyes"
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					onClick: reset,
					children: "Újra"
				})] })
			})
		]
	});
}
function AtomModel() {
	const atoms = [
		{
			s: "H",
			z: 1,
			a: 1,
			shells: [1]
		},
		{
			s: "C",
			z: 6,
			a: 12,
			shells: [2, 4]
		},
		{
			s: "O",
			z: 8,
			a: 16,
			shells: [2, 6]
		},
		{
			s: "Na",
			z: 11,
			a: 23,
			shells: [
				2,
				8,
				1
			]
		},
		{
			s: "Cl",
			z: 17,
			a: 35,
			shells: [
				2,
				8,
				7
			]
		}
	];
	const [i, setI] = (0, import_react.useState)(2);
	const el = atoms[i];
	const n = el.a - el.z;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FigureFrame, {
		title: `${el.s} atom: Z = ${el.z}, A = ${el.a} (p⁺ = ${el.z}, n⁰ = ${n}, e⁻ = ${el.z})`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex flex-wrap items-center gap-2",
			children: atoms.map((a, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => setI(idx),
				className: cn("h-11 min-w-11 rounded-md px-3 font-mono text-sm", idx === i ? "bg-accent text-accent-fg" : "bg-paper text-ink"),
				children: a.s
			}, a.s))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 360 220",
			className: "mt-3 h-auto w-full",
			role: "img",
			"aria-label": "Atommodell",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
					cx: "150",
					cy: "110",
					rx: "128",
					ry: "88",
					fill: "none",
					className: "stroke-line",
					strokeWidth: "1"
				}),
				el.shells.map((_, si) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "150",
					cy: "110",
					r: 28 + si * 28,
					fill: "none",
					className: "stroke-accent",
					strokeWidth: "1.2",
					opacity: .55 + si * .15
				}, si)),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "150",
					cy: "110",
					r: "16",
					className: "fill-ink"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("text", {
					x: "150",
					y: "114",
					textAnchor: "middle",
					className: "fill-accent-fg",
					fontSize: "9",
					fontFamily: "IBM Plex Mono",
					children: [
						el.z,
						"p ",
						n,
						"n"
					]
				}),
				el.shells.flatMap((count, si) => {
					const r = 28 + si * 28;
					return Array.from({ length: Math.min(count, 8) }, (_, k) => {
						const ang = (-90 + 360 / Math.min(count, 8) * k) * (Math.PI / 180);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
							cx: 150 + r * Math.cos(ang),
							cy: 110 + r * Math.sin(ang),
							r: "4.2",
							className: "fill-accent"
						}, `${si}-${k}`);
					});
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
					fontFamily: "Source Sans 3",
					fontSize: "12",
					className: "fill-muted",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
							cx: "300",
							cy: "48",
							r: "4.2",
							className: "fill-accent"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
							x: "310",
							y: "52",
							children: "elektron (e⁻)"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
							cx: "300",
							cy: "78",
							r: "7",
							className: "fill-ink"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
							x: "314",
							y: "82",
							children: "mag (p⁺ + n⁰)"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
							x: "292",
							y: "112",
							children: "héj / pálya"
						})
					]
				})
			]
		})]
	});
}
function ParticleChart() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FigureFrame, {
		title: "Az atom alkotóinak relatív mérete és tömege (sematikus, nem méretarányos a mag–burok távolságra).",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 520 200",
			className: "h-auto w-full",
			role: "img",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: "20",
					y: "22",
					className: "fill-muted",
					fontSize: "11",
					fontFamily: "Source Sans 3",
					children: "tömeg (u)"
				}),
				[
					{
						label: "proton",
						m: 1.007,
						x: 70,
						fill: "fill-ink"
					},
					{
						label: "neutron",
						m: 1.009,
						x: 200,
						fill: "fill-muted"
					},
					{
						label: "elektron",
						m: 55e-5,
						x: 330,
						fill: "fill-accent"
					}
				].map((p) => {
					const h = p.label === "elektron" ? 8 : 118;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
							x: p.x,
							y: 150 - h,
							width: "72",
							height: h,
							className: p.fill,
							rx: "6"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
							x: p.x + 36,
							y: "172",
							textAnchor: "middle",
							className: "fill-ink",
							fontSize: "12",
							fontFamily: "Source Sans 3",
							children: p.label
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("text", {
							x: p.x + 36,
							y: "188",
							textAnchor: "middle",
							className: "fill-muted",
							fontSize: "11",
							fontFamily: "IBM Plex Mono",
							children: [p.m, " u"]
						})
					] }, p.label);
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: "430",
					y: "70",
					className: "fill-muted",
					fontSize: "11",
					fontFamily: "Source Sans 3",
					children: "e⁻ tömege"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: "430",
					y: "86",
					className: "fill-muted",
					fontSize: "11",
					fontFamily: "Source Sans 3",
					children: "≈ 1/1836 u"
				})
			]
		})
	});
}
function TrendDiagram() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FigureFrame, {
		title: "Periodikus trendek: a nyíl iránya a növekedést mutatja.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 420 220",
			className: "h-auto w-full",
			role: "img",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "48",
					y: "36",
					width: "280",
					height: "140",
					rx: "10",
					className: "fill-paper stroke-line"
				}),
				[
					0,
					1,
					2,
					3
				].map((r) => [
					0,
					1,
					2,
					3,
					4,
					5
				].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: 64 + c * 40,
					y: 50 + r * 28,
					width: "28",
					height: "20",
					rx: "3",
					className: "fill-bg-elevated stroke-line"
				}, `${r}-${c}`))),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M48 196 L328 196",
					className: "stroke-accent",
					strokeWidth: "1.6",
					markerEnd: "url(#arr)"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M36 176 L36 36",
					className: "stroke-accent",
					strokeWidth: "1.6",
					markerEnd: "url(#arr)"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("marker", {
					id: "arr",
					markerWidth: "8",
					markerHeight: "8",
					refX: "6",
					refY: "4",
					orient: "auto",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M0 0 L8 4 L0 8 Z",
						className: "fill-accent"
					})
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: "150",
					y: "212",
					className: "fill-ink",
					fontSize: "12",
					fontFamily: "Source Sans 3",
					children: "csoport → EN, I, EA nő"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: "18",
					y: "130",
					className: "fill-ink",
					fontSize: "12",
					fontFamily: "Source Sans 3",
					transform: "rotate(-90 18 130)",
					children: "periódus ↓ sugár nő, EN csökken"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: "348",
					y: "70",
					className: "fill-muted",
					fontSize: "11",
					fontFamily: "Source Sans 3",
					children: "F: legnagyobb EN"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: "348",
					y: "110",
					className: "fill-muted",
					fontSize: "11",
					fontFamily: "Source Sans 3",
					children: "Cs: legnagyobb"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: "348",
					y: "126",
					className: "fill-muted",
					fontSize: "11",
					fontFamily: "Source Sans 3",
					children: "atomsugár"
				})
			]
		})
	});
}
function BondTypes() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FigureFrame, {
		title: "Kovalens kötés: σ-váz, π-felhő, datív elektronpár, delokalizált π-rendszer.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid grid-cols-2 gap-3 sm:grid-cols-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(MiniBond, {
					title: "egyszeres σ",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
							cx: "40",
							cy: "40",
							r: "16",
							className: "fill-paper stroke-ink"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
							cx: "88",
							cy: "40",
							r: "16",
							className: "fill-paper stroke-ink"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
							x1: "56",
							y1: "40",
							x2: "72",
							y2: "40",
							className: "stroke-accent",
							strokeWidth: "3"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
							x: "40",
							y: "44",
							textAnchor: "middle",
							fontSize: "12",
							className: "fill-ink",
							children: "H"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
							x: "88",
							y: "44",
							textAnchor: "middle",
							fontSize: "12",
							className: "fill-ink",
							children: "H"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(MiniBond, {
					title: "kétszeres σ+π",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
							cx: "40",
							cy: "40",
							r: "16",
							className: "fill-paper stroke-ink"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
							cx: "88",
							cy: "40",
							r: "16",
							className: "fill-paper stroke-ink"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
							x1: "56",
							y1: "35",
							x2: "72",
							y2: "35",
							className: "stroke-accent",
							strokeWidth: "2.2"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
							x1: "56",
							y1: "45",
							x2: "72",
							y2: "45",
							className: "stroke-accent",
							strokeWidth: "2.2"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
							x: "40",
							y: "44",
							textAnchor: "middle",
							fontSize: "12",
							className: "fill-ink",
							children: "O"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
							x: "88",
							y: "44",
							textAnchor: "middle",
							fontSize: "12",
							className: "fill-ink",
							children: "O"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(MiniBond, {
					title: "datív",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
							cx: "36",
							cy: "40",
							r: "16",
							className: "fill-paper stroke-ink"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
							cx: "92",
							cy: "40",
							r: "16",
							className: "fill-paper stroke-ink"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
							x1: "52",
							y1: "40",
							x2: "76",
							y2: "40",
							className: "stroke-accent",
							strokeWidth: "3"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", {
							points: "70,34 82,40 70,46",
							className: "fill-accent"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
							x: "36",
							y: "44",
							textAnchor: "middle",
							fontSize: "11",
							className: "fill-ink",
							children: "N"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
							x: "92",
							y: "44",
							textAnchor: "middle",
							fontSize: "11",
							className: "fill-ink",
							children: "B"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(MiniBond, {
					title: "delokalizált",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", {
						points: "64,12 92,32 81,64 47,64 36,32",
						className: "fill-none stroke-ink",
						strokeWidth: "1.4"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: "64",
						cy: "40",
						r: "10",
						className: "fill-none stroke-accent",
						strokeWidth: "1.6"
					})]
				})
			]
		})
	});
}
function MiniBond({ title, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-lg bg-paper px-2 py-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-center font-mono text-xs text-muted",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
			viewBox: "0 0 128 80",
			className: "mx-auto mt-1 h-20 w-full",
			"aria-hidden": true,
			children
		})]
	});
}
var VSEPR = [
	{
		id: "ax2",
		name: "lineáris",
		ex: "CO₂, BeCl₂",
		polar: "nem, ha AX₂ azonos vég"
	},
	{
		id: "ax3",
		name: "síkháromszög",
		ex: "BF₃, SO₃",
		polar: "nem, ha azonos ligandum"
	},
	{
		id: "ax4",
		name: "tetraéder",
		ex: "CH₄, CCl₄",
		polar: "nem, ha azonos ligandum"
	},
	{
		id: "ax3e",
		name: "háromszög piramis",
		ex: "NH₃, PCl₃",
		polar: "igen"
	},
	{
		id: "ax2e2",
		name: "V-alak",
		ex: "H₂O, H₂S",
		polar: "igen"
	},
	{
		id: "ax5",
		name: "trig. bipiramis",
		ex: "PCl₅",
		polar: "nem, ha AX₅"
	},
	{
		id: "ax6",
		name: "oktaéder",
		ex: "SF₆",
		polar: "nem, ha AX₆"
	}
];
function ShapeSvg({ id }) {
	const c = "fill-ink";
	const l = "stroke-accent";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 160 120",
		className: "mx-auto h-36 w-full",
		"aria-hidden": true,
		children: [
			id === "ax2" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
					x1: "18",
					y1: "60",
					x2: "142",
					y2: "60",
					className: l,
					strokeWidth: "3"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "22",
					cy: "60",
					r: "8",
					className: c
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "80",
					cy: "60",
					r: "11",
					className: c
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "138",
					cy: "60",
					r: "8",
					className: c
				})
			] }),
			id === "ax3" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
					x1: "80",
					y1: "64",
					x2: "80",
					y2: "18",
					className: l,
					strokeWidth: "3"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
					x1: "80",
					y1: "64",
					x2: "28",
					y2: "96",
					className: l,
					strokeWidth: "3"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
					x1: "80",
					y1: "64",
					x2: "132",
					y2: "96",
					className: l,
					strokeWidth: "3"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "80",
					cy: "64",
					r: "11",
					className: c
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "80",
					cy: "16",
					r: "8",
					className: c
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "26",
					cy: "98",
					r: "8",
					className: c
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "134",
					cy: "98",
					r: "8",
					className: c
				})
			] }),
			id === "ax4" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
					x1: "80",
					y1: "58",
					x2: "80",
					y2: "16",
					className: l,
					strokeWidth: "3"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
					x1: "80",
					y1: "58",
					x2: "28",
					y2: "92",
					className: l,
					strokeWidth: "3"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
					x1: "80",
					y1: "58",
					x2: "132",
					y2: "92",
					className: l,
					strokeWidth: "3"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
					x1: "80",
					y1: "58",
					x2: "80",
					y2: "104",
					strokeDasharray: "4 3",
					className: l,
					strokeWidth: "2"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "80",
					cy: "58",
					r: "11",
					className: c
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "80",
					cy: "14",
					r: "8",
					className: c
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "26",
					cy: "94",
					r: "8",
					className: c
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "134",
					cy: "94",
					r: "8",
					className: c
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "80",
					cy: "106",
					r: "7",
					className: "fill-muted"
				})
			] }),
			id === "ax3e" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
					x1: "80",
					y1: "58",
					x2: "36",
					y2: "100",
					className: l,
					strokeWidth: "3"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
					x1: "80",
					y1: "58",
					x2: "124",
					y2: "100",
					className: l,
					strokeWidth: "3"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
					x1: "80",
					y1: "58",
					x2: "80",
					y2: "108",
					strokeDasharray: "4 3",
					className: l,
					strokeWidth: "2"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "80",
					cy: "58",
					r: "11",
					className: c
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "36",
					cy: "102",
					r: "8",
					className: c
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "124",
					cy: "102",
					r: "8",
					className: c
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "80",
					cy: "110",
					r: "7",
					className: "fill-muted"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
					cx: "80",
					cy: "28",
					rx: "10",
					ry: "14",
					className: "fill-accent/30 stroke-accent"
				})
			] }),
			id === "ax2e2" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
					x1: "80",
					y1: "62",
					x2: "32",
					y2: "100",
					className: l,
					strokeWidth: "3"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
					x1: "80",
					y1: "62",
					x2: "128",
					y2: "100",
					className: l,
					strokeWidth: "3"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "80",
					cy: "62",
					r: "11",
					className: c
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "30",
					cy: "102",
					r: "8",
					className: c
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "130",
					cy: "102",
					r: "8",
					className: c
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
					cx: "58",
					cy: "30",
					rx: "10",
					ry: "14",
					className: "fill-accent/30 stroke-accent"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
					cx: "102",
					cy: "30",
					rx: "10",
					ry: "14",
					className: "fill-accent/30 stroke-accent"
				})
			] }),
			id === "ax5" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
					x1: "80",
					y1: "16",
					x2: "80",
					y2: "104",
					className: l,
					strokeWidth: "3"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
					x1: "28",
					y1: "62",
					x2: "132",
					y2: "62",
					className: l,
					strokeWidth: "3"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
					x1: "48",
					y1: "92",
					x2: "112",
					y2: "32",
					className: l,
					strokeWidth: "2"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "80",
					cy: "62",
					r: "11",
					className: c
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "80",
					cy: "14",
					r: "7",
					className: c
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "80",
					cy: "106",
					r: "7",
					className: c
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "26",
					cy: "62",
					r: "7",
					className: c
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "134",
					cy: "62",
					r: "7",
					className: c
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "50",
					cy: "94",
					r: "7",
					className: c
				})
			] }),
			id === "ax6" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
					x1: "80",
					y1: "16",
					x2: "80",
					y2: "104",
					className: l,
					strokeWidth: "3"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
					x1: "28",
					y1: "62",
					x2: "132",
					y2: "62",
					className: l,
					strokeWidth: "3"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
					x1: "44",
					y1: "34",
					x2: "116",
					y2: "90",
					className: l,
					strokeWidth: "2"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "80",
					cy: "62",
					r: "11",
					className: c
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "80",
					cy: "14",
					r: "7",
					className: c
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "80",
					cy: "106",
					r: "7",
					className: c
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "26",
					cy: "62",
					r: "7",
					className: c
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "134",
					cy: "62",
					r: "7",
					className: c
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "44",
					cy: "34",
					r: "7",
					className: c
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "116",
					cy: "90",
					r: "7",
					className: c
				})
			] })
		]
	});
}
function VseprExplorer() {
	const [id, setId] = (0, import_react.useState)("ax2e2");
	const cur = VSEPR.find((v) => v.id === id);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FigureFrame, {
		title: "VSEPR: a központi atom vegyértékelektronpárjai taszítják egymást, a geometria ebből adódik.",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-wrap gap-2",
				children: VSEPR.map((v) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setId(v.id),
					className: cn("h-11 rounded-md px-3 text-sm", v.id === id ? "bg-accent text-accent-fg" : "bg-paper text-ink"),
					children: v.name
				}, v.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShapeSvg, { id: cur.id }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "pb-1 text-sm text-ink",
				children: [
					"Példa: ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-mono",
						children: cur.ex
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-muted",
						children: [" · molekula polaritása: ", cur.polar]
					})
				]
			})
		]
	});
}
function LatticeGrid() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid gap-3 sm:grid-cols-2",
		children: [
			{
				t: "ionrács",
				e: "NaCl, CaO",
				d: "Ellentétes ionok, nagy rácsenergia. Magas op., olvadék/oldat vezet."
			},
			{
				t: "atomrács",
				e: "gyémánt, SiO₂, SiC",
				d: "3D kovalens háló. Nagyon magas op., nem oldódik, szigetelő (kivéve grafit)."
			},
			{
				t: "molekularács",
				e: "jég, I₂, CO₂(sz)",
				d: "Molekulák közt másodrendű kötés. Alacsony op./fp., nem vezet."
			},
			{
				t: "fémrács",
				e: "Fe, Cu, Al, Zn",
				d: "Delokalizált e⁻-tenger. Vezet, kovácsolható, változó keménység."
			}
		].map((it) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "rounded-xl bg-bg-elevated p-4 shadow-[var(--shadow-border)]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LatticeMini, { type: it.t }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mt-2 font-display text-lg font-medium",
					children: it.t
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-xs text-accent",
					children: it.e
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm leading-relaxed text-muted",
					children: it.d
				})
			]
		}, it.t))
	});
}
function LatticeMini({ type }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 160 72",
		className: "h-16 w-full",
		"aria-hidden": true,
		children: [
			type === "ionrács" && [
				0,
				1,
				2,
				3
			].flatMap((r) => [
				0,
				1,
				2,
				3,
				4
			].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: 18 + c * 28,
				cy: 16 + r * 16,
				r: r % 2 === c % 2 ? 7 : 5,
				className: r % 2 === c % 2 ? "fill-ink" : "fill-accent"
			}, `${r}-${c}`))),
			type === "atomrács" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [[
				[20, 36],
				[50, 16],
				[50, 56],
				[80, 36],
				[110, 16],
				[110, 56],
				[140, 36]
			].map(([x, y], i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: x,
				cy: y,
				r: "7",
				className: "fill-ink"
			}, i)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M20 36 L50 16 L80 36 L50 56 Z M80 36 L110 16 L140 36 L110 56 Z M50 16 L110 16 M50 56 L110 56",
				className: "stroke-accent",
				fill: "none",
				strokeWidth: "1.6"
			})] }),
			type === "molekularács" && [
				[28, 24],
				[70, 22],
				[112, 26],
				[46, 52],
				[92, 50],
				[134, 54]
			].map(([x, y], i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: x,
				cy: y,
				r: "6",
				className: "fill-ink"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: x + 12,
				cy: y + 4,
				r: "6",
				className: "fill-accent"
			})] }, i)),
			type === "fémrács" && [
				0,
				1,
				2
			].flatMap((r) => [
				0,
				1,
				2,
				3,
				4
			].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: 20 + c * 28 + r % 2 * 14,
				cy: 18 + r * 18,
				r: "8",
				className: "fill-ink",
				opacity: "0.85"
			}, `${r}-${c}`)))
		]
	});
}
function EnergyProfile() {
	const [exo, setExo] = (0, import_react.useState)(true);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FigureFrame, {
		title: "Reakcióenergia-profil. A katalizátor az Ea-t csökkenti, ΔH-t nem.",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: cn("h-11 rounded-md px-3 text-sm", exo ? "bg-accent text-accent-fg" : "bg-paper"),
				onClick: () => setExo(true),
				children: "exoterm"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: cn("h-11 rounded-md px-3 text-sm", !exo ? "bg-accent text-accent-fg" : "bg-paper"),
				onClick: () => setExo(false),
				children: "endoterm"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 420 180",
			className: "mt-2 h-auto w-full",
			role: "img",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
					x1: "40",
					y1: "20",
					x2: "40",
					y2: "160",
					className: "stroke-line"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
					x1: "40",
					y1: "160",
					x2: "400",
					y2: "160",
					className: "stroke-line"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: "16",
					y: "18",
					className: "fill-muted",
					fontSize: "11",
					fontFamily: "Source Sans 3",
					children: "E"
				}),
				exo ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M50 70 C120 70 140 28 200 28 C260 28 280 120 370 120",
					fill: "none",
					className: "stroke-ink",
					strokeWidth: "2"
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M50 120 C120 120 140 28 200 28 C260 28 280 70 370 70",
					fill: "none",
					className: "stroke-ink",
					strokeWidth: "2"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M50 70 C120 70 150 48 200 48 C250 48 280 120 370 120",
					fill: "none",
					className: "stroke-accent",
					strokeWidth: "1.6",
					strokeDasharray: "5 4",
					opacity: exo ? 1 : 0
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: "188",
					y: "18",
					className: "fill-muted",
					fontSize: "11",
					fontFamily: "IBM Plex Mono",
					children: "Ea"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("text", {
					x: "300",
					y: exo ? 100 : 100,
					className: "fill-accent",
					fontSize: "11",
					fontFamily: "IBM Plex Mono",
					children: ["ΔᵣH ", exo ? "< 0" : "> 0"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: "48",
					y: exo ? 62 : 150,
					className: "fill-muted",
					fontSize: "11",
					children: "reaktánsok"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: "330",
					y: exo ? 138 : 58,
					className: "fill-muted",
					fontSize: "11",
					children: "termékek"
				})
			]
		})]
	});
}
function GalvanicCell() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FigureFrame, {
		title: "Daniell-elem: Zn | Zn²⁺ || Cu²⁺ | Cu. Az elektron a külső áramkörön a Zn-től a Cu-ig folyik.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 520 210",
			className: "h-auto w-full",
			role: "img",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "30",
					y: "50",
					width: "150",
					height: "120",
					rx: "8",
					className: "fill-paper stroke-line"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "340",
					y: "50",
					width: "150",
					height: "120",
					rx: "8",
					className: "fill-paper stroke-line"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "88",
					y: "70",
					width: "18",
					height: "80",
					className: "fill-muted"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "414",
					y: "70",
					width: "18",
					height: "80",
					className: "fill-ink"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M97 70 L97 28 L423 28 L423 70",
					fill: "none",
					className: "stroke-ink",
					strokeWidth: "2"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "236",
					y: "48",
					width: "48",
					height: "22",
					rx: "4",
					className: "fill-accent"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: "260",
					y: "64",
					textAnchor: "middle",
					className: "fill-accent-fg",
					fontSize: "11",
					fontFamily: "IBM Plex Mono",
					children: "V"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M180 110 C210 70 310 150 340 110",
					fill: "none",
					className: "stroke-accent",
					strokeWidth: "2",
					strokeDasharray: "4 3"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: "105",
					y: "40",
					className: "fill-ink",
					fontSize: "12",
					fontFamily: "IBM Plex Mono",
					children: "Zn anód (−)"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: "378",
					y: "40",
					className: "fill-ink",
					fontSize: "12",
					fontFamily: "IBM Plex Mono",
					children: "Cu katód (+)"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: "46",
					y: "188",
					className: "fill-muted",
					fontSize: "12",
					children: "Zn → Zn²⁺ + 2 e⁻"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: "318",
					y: "188",
					className: "fill-muted",
					fontSize: "12",
					children: "Cu²⁺ + 2 e⁻ → Cu"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: "210",
					y: "128",
					className: "fill-accent",
					fontSize: "11",
					children: "sóhíd"
				})
			]
		})
	});
}
function PhScale() {
	const [ph, setPh] = (0, import_react.useState)(7);
	const label = ph < 3 ? "erősen savas" : ph < 7 ? "savas" : ph === 7 ? "semleges" : ph < 11 ? "lúgos" : "erősen lúgos";
	const h = (0, import_react.useMemo)(() => Math.pow(10, -ph), [ph]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FigureFrame, {
		title: "pH-skála 25 °C-on. pH = −lg[H₃O⁺], pOH = −lg[OH⁻], pH + pOH = 14.",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex items-end justify-between gap-2",
				children: Array.from({ length: 15 }, (_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-1 flex-col items-center gap-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "w-full rounded-sm",
						style: {
							height: 10 + Math.abs(i - 7) * 6,
							background: i < 7 ? `color-mix(in oklab, var(--color-bad) ${70 - i * 8}%, var(--color-paper))` : i === 7 ? "var(--color-line)" : `color-mix(in oklab, var(--color-accent) ${(i - 7) * 10 + 20}%, var(--color-paper))`
						}
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-mono text-[10px] text-muted",
						children: i
					})]
				}, i))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "mt-4 block text-sm text-muted",
				children: [
					"pH = ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-mono text-ink tabular-nums",
						children: ph.toFixed(1)
					}),
					" · ",
					label
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				type: "range",
				min: 0,
				max: 14,
				step: .1,
				value: ph,
				onChange: (e) => setPh(Number(e.target.value)),
				className: "mt-2 w-full accent-[var(--color-accent)]"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-2 font-mono text-sm text-ink",
				children: [
					"[H₃O⁺] ≈ ",
					h.toExponential(2),
					" mol/dm³"
				]
			})
		]
	});
}
function FunctionalGroups() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid grid-cols-2 gap-2 sm:grid-cols-3",
		children: [
			{
				n: "alkán",
				f: "R–H",
				e: "etán"
			},
			{
				n: "alkén",
				f: "C=C",
				e: "etén"
			},
			{
				n: "alkin",
				f: "C≡C",
				e: "etin"
			},
			{
				n: "aromás",
				f: "Ar–H",
				e: "benzol"
			},
			{
				n: "alkohol",
				f: "R–OH",
				e: "etanol"
			},
			{
				n: "éter",
				f: "R–O–R′",
				e: "dietil-éter"
			},
			{
				n: "oxovegyület",
				f: "RCHO / R₂CO",
				e: "acetaldehid"
			},
			{
				n: "karbonsav",
				f: "R–COOH",
				e: "ecetsav"
			},
			{
				n: "észter",
				f: "R–COOR′",
				e: "etil-acetát"
			}
		].map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "rounded-lg bg-bg-elevated px-3 py-3 shadow-[var(--shadow-border)]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs tracking-wide text-muted uppercase",
					children: g.n
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 font-mono text-sm text-ink",
					children: g.f
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted",
					children: g.e
				})
			]
		}, g.n))
	});
}
function HBond() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FigureFrame, {
		title: "Hidrogénkötés: H a nagy EN-ú atomhoz (F, O, N) kovalensen, egy másik F/O/N nemkötő párjához gyengén kapcsolódik.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 420 130",
			className: "h-auto w-full",
			role: "img",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "70",
					cy: "64",
					r: "16",
					className: "fill-accent"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "130",
					cy: "64",
					r: "10",
					className: "fill-ink"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "250",
					cy: "64",
					r: "16",
					className: "fill-accent"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "310",
					cy: "64",
					r: "10",
					className: "fill-ink"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
					x1: "86",
					y1: "64",
					x2: "120",
					y2: "64",
					className: "stroke-ink",
					strokeWidth: "4"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
					x1: "140",
					y1: "64",
					x2: "234",
					y2: "64",
					className: "stroke-accent",
					strokeWidth: "2",
					strokeDasharray: "6 5"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
					x1: "266",
					y1: "64",
					x2: "300",
					y2: "64",
					className: "stroke-ink",
					strokeWidth: "4"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: "70",
					y: "70",
					textAnchor: "middle",
					className: "fill-accent-fg",
					fontSize: "12",
					children: "O"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: "130",
					y: "68",
					textAnchor: "middle",
					className: "fill-accent-fg",
					fontSize: "11",
					children: "H"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: "250",
					y: "70",
					textAnchor: "middle",
					className: "fill-accent-fg",
					fontSize: "12",
					children: "O"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: "310",
					y: "68",
					textAnchor: "middle",
					className: "fill-accent-fg",
					fontSize: "11",
					children: "H"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: "168",
					y: "50",
					className: "fill-accent",
					fontSize: "11",
					fontFamily: "Source Sans 3",
					children: "hidrogénkötés"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: "78",
					y: "108",
					className: "fill-muted",
					fontSize: "11",
					children: "kovalens"
				})
			]
		})
	});
}
function EnScale() {
	const [en, setEn] = (0, import_react.useState)(1.4);
	const kind = en < .4 ? "apoláris kovalens" : en < 1.7 ? "poláris kovalens" : "ionos jellegű";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FigureFrame, {
		title: "Kötéspolaritás a ΔEN (Pauling) alapján — irányadó, nem éles határ.",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "font-mono text-sm text-ink",
				children: [
					"ΔEN = ",
					en.toFixed(1),
					" → ",
					kind
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				type: "range",
				min: 0,
				max: 3.3,
				step: .1,
				value: en,
				onChange: (e) => setEn(Number(e.target.value)),
				className: "mt-2 w-full accent-[var(--color-accent)]"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 grid grid-cols-3 gap-2 text-center text-xs",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "rounded-md bg-paper px-2 py-2",
						children: "0–0,4 apoláris"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "rounded-md bg-paper px-2 py-2",
						children: "0,4–1,7 poláris"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "rounded-md bg-paper px-2 py-2",
						children: "1,7 fölött ionos"
					})
				]
			})
		]
	});
}
function AtomokChapter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				title: "Az atom alkotói",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Az atom pozitív magból és körülötte mozgó elektronokból áll. A mag protonokat (p⁺) és neutronokat (n⁰) tartalmaz; az elektronok (e⁻) a maghoz képest ~10⁴-szer nagyobb térrészt töltenek ki. Az atom mérete ~10⁻¹⁰ m (100 pm), a magé ~10⁻¹⁵ m." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ParticleChart, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataTable, {
						head: [
							"részecske",
							"töltés",
							"tömeg",
							"hely"
						],
						rows: [
							[
								"proton, p⁺",
								"+1,602·10⁻¹⁹ C  (+1 e)",
								"1,673·10⁻²⁷ kg  ≈ 1,007 u",
								"mag"
							],
							[
								"neutron, n⁰",
								"0",
								"1,675·10⁻²⁷ kg  ≈ 1,009 u",
								"mag"
							],
							[
								"elektron, e⁻",
								"−1,602·10⁻¹⁹ C  (−1 e)",
								"9,109·10⁻³¹ kg  ≈ 1/1836 u",
								"elektronburok"
							]
						],
						caption: "u = atomi tömegegység = 1,661·10⁻²⁷ kg = ¹²C tömegének 1/12-e."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Note, { children: "Semleges atomban a protonok száma megegyezik az elektronok számával. A kémiai viselkedést szinte kizárólag az elektronburok határozza meg; a mag a tömeget és a magreakciókat." })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				title: "Rendszám, tömegszám, izotóp",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KeyGrid, { items: [
						{
							k: "Rendszám, Z",
							v: "A protonok száma. Meghatározza, melyik elemről van szó. A periódusos rendszer sorszáma."
						},
						{
							k: "Tömegszám, A",
							v: "Protonok + neutronok száma a magban. Egész szám, nukleonok száma."
						},
						{
							k: "Izotóp",
							v: "Azonos Z, különböző A (tehát különböző neutronszám). Kémiailag majdnem azonosak, tömegük és magtulajdonságaik eltérnek."
						},
						{
							k: "Jelölés",
							v: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "font-mono",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sup", { children: "A" }),
										"E vagy ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sup", { children: "A" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "Z" }),
										"E"
									]
								}),
								", pl. ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "font-mono",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sup", { children: "12" }),
										"C, ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sup", { children: "14" }),
										"C, ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sup", { children: "35" }),
										"Cl"
									]
								}),
								"."
							] })
						}
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AtomModel, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Example, {
						title: "Klór izotópjai",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
							"A természetes klór ~75,8% ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono",
								children: "³⁵Cl"
							}),
							" (18 n) és ~24,2% ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono",
								children: "³⁷Cl"
							}),
							" (20 n). Mindkettő Z = 17, tehát ugyanaz az elem, de a relatív atomtömeg a keverék súlyozott átlaga:"
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Formula, {
							caption: "Ezért Ar(Cl) ≈ 35,45, nem egész szám.",
							children: "Ar(Cl) = 0,758·35 + 0,242·37 ≈ 35,45"
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				title: "Mól és atomtömeg",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						"A ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "mól" }),
						" az anyagmennyiség SI-egysége: 1 mol pontosan",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "font-mono",
							children: [
								"N",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "A" }),
								" = 6,02214076·10",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sup", { children: "23" })
							]
						}),
						" ",
						"darab részecskét tartalmaz (Avogadro-állandó). A",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "moláris tömeg" }),
						" (M) 1 mol anyag tömege, mértékegysége g/mol; számértéke megegyezik a relatív atom- vagy molekulatömeggel."
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Formula, { children: [
						"n = m / M = N / N",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "A" }),
						" = V / V",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "m" })
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						"A ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "relatív atomtömeg" }),
						" (A",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "r" }),
						") dimenziótlan: az atom átlagos tömegének és az atomi tömegegységnek a hányadosa. A természetes izotópelegy súlyozott átlaga — ezért C-re 12,01, nem 12."
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Example, {
						title: "Hány atom van 2,00 g vízben?",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
							"M(H",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "2" }),
							"O) = 18,02 g/mol, tehát n = 2,00 / 18,02 = 0,111 mol. N = n · N",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "A" }),
							" = 0,111 · 6,022·10",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sup", { children: "23" }),
							" = 6,68·10",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sup", { children: "22" }),
							" ",
							"molekulá, és molekulánként 3 atom → 2,00·10",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sup", { children: "23" }),
							" atom."
						] })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BuildOn, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						"Egyetemen a moláris mennyiségek (moláris hőkapacitás, moláris belsőenergia, kémiai potenciál μ = (∂G/∂n)) végig ezt a anyagmennyiség-fogalmat használják. A sztöchiometria mindig mólarány: 2 H",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "2" }),
						" + O",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "2" }),
						" → 2 H",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "2" }),
						"O azt jelenti, hogy 2 mol H",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "2" }),
						" 1 mol O",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "2" }),
						"-vel 2 mol vizet ad."
					] }) })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				title: "Elektronszerkezet",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						"Az elektronok nem „bolygók a mag körül”, hanem stacionárius állapotokban, ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "atompályákon (orbitálokon)" }),
						" írhatók le. Egy pályát négy kvantumszám jellemez:"
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataTable, {
						head: [
							"kvantumszám",
							"jele",
							"értékek",
							"jelentés"
						],
						rows: [
							[
								"fő",
								"n",
								"1, 2, 3, …",
								"héj, energia, méret"
							],
							[
								"mellék",
								"ℓ",
								"0 … n−1 (s,p,d,f)",
								"pálya alakja"
							],
							[
								"mágneses",
								"mℓ",
								"−ℓ … +ℓ",
								"térbeli orientáció"
							],
							[
								"spin",
								"ms",
								"+½ vagy −½",
								"saját impulzusmomentum"
							]
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Feltöltődés három szabállyal:" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "list-disc space-y-1 pl-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Energiaminimum (Aufbau):" }), " először a kisebb energiájú pályák telnek (1s → 2s → 2p → 3s → 3p → 4s → 3d …)."] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Pauli-elv:" }), " egy atomban nincs két elektron azonos mind a négy kvantumszámmal — pályánként max. 2 e⁻, ellentétes spinnel."] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Hund-szabály:" }), " degenerált pályákon (pl. a három 2p) először párhuzamos spinű, külön pályán álló elektronok épülnek be."] })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Example, {
						title: "Oxigén, nátrium, vas",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Formula, { children: [
							"O (Z=8): 1s² 2s² 2p⁴ · vegyérték: 2s² 2p⁴",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"Na (Z=11): [Ne] 3s¹ · könnyen ad le 1 e⁻ → Na⁺",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"Fe (Z=26): [Ar] 4s² 3d⁶ · jellemző oxidációs számok +2, +3"
						] })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BuildOn, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "A kvantummechanikai modell a Schrödinger-egyenlet stacionárius megoldásain alapul. A főhéjak energiája hidrogénszerű atomokban csak n-től függ (E ∝ −1/n²); többelektronos atomokban a pályák felhasadnak (2s energiája a 2p alatt van), mert a belső elektronok árnyékolnak. A vegyértékhéj szerkezete magyarázza a csoportok hasonlóságát." }) })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quiz, {
				slug: "atomok",
				items: [
					{
						q: "Mi különbözteti meg a ¹⁴C-t a ¹²C-től?",
						options: [
							"A protonok száma (rendszám)",
							"A neutronok száma (tömegszám)",
							"Az elektronok száma a semleges atomban",
							"A vegyértékhéj szerkezete"
						],
						answer: 1,
						why: "Izotópok: azonos Z (6), különböző A. ¹⁴C-ben 8 neutron, ¹²C-ben 6. A kémiai viselkedés közel azonos."
					},
					{
						q: "Hány mol atom van 12,0 g ¹²C-ben?",
						options: [
							"0,5 mol",
							"1,0 mol",
							"2,0 mol",
							"12 mol"
						],
						answer: 1,
						why: "Definíció szerint 12 g ¹²C pontosan 1 mol. (A természetes szén Ar-ja 12,01, ezért 12,0 g természetes C kicsit kevesebb, mint 1 mol.)"
					},
					{
						q: "A nitrogén (Z = 7) alapállapotú elektronszerkezete:",
						options: [
							"1s² 2s² 2p²",
							"1s² 2s² 2p³",
							"1s² 2s² 2p⁵",
							"1s² 2p⁵"
						],
						answer: 1,
						why: "7 elektron: 1s² 2s² 2p³. Hund szerint a 2p-n három párosítatlan e⁻ — ezért a N₂ hármas kötése és a N atom három vegyértéke."
					}
				]
			})
		]
	});
}
function PeriodusosChapter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				title: "Felépítés",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						"A periódusos rendszer az elemeket növekvő rendszám szerint rendezi. A hasonló vegyértékszerkezetű elemek függőleges",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "csoportokba" }),
						" (1–18), a héjak kiépülése szerint vízszintes ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "periódusokba" }),
						" (1–7) kerülnek."
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KeyGrid, { items: [
						{
							k: "s-mező",
							v: "1–2. csoport: alkálifémek, alkáliföldfémek (+ He)."
						},
						{
							k: "p-mező",
							v: "13–18. csoport: bór-csoporttól a nemesgázokig."
						},
						{
							k: "d-mező",
							v: "3–12. csoport: átmeneti fémek (vegyértékhéj (n−1)d ns)."
						},
						{
							k: "f-mező",
							v: "Lantanoidák és aktinoidák."
						}
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						"A teljes, kattintható táblázat:",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/tabla",
							className: "text-accent underline-offset-4 hover:underline",
							children: "periódusos táblázat"
						}),
						"."
					] })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				title: "Periodikus tulajdonságok",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendDiagram, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataTable, {
						head: [
							"tulajdonság",
							"csoporton lefelé",
							"periódusban jobbra"
						],
						rows: [
							[
								"atomsugár",
								"nő (új héj)",
								"csökken (nagyobb Z, ugyanaz a héj)"
							],
							[
								"ionizációs energia, I",
								"csökken",
								"nő (kivéve fél-/telt alhéj)"
							],
							[
								"elektronaffinitás",
								"általában csökken",
								"nő a halogének felé"
							],
							[
								"elektronegativitás, EN",
								"csökken",
								"nő (max. F)"
							],
							[
								"fémes jelleg",
								"nő",
								"csökken"
							]
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Note, { children: "Ionizációs energia: az a minimális energia, amellyel a leggyengébben kötött elektron leszakítható a gázhalmazállapotú atomból. Az első I₁ mindig kisebb, mint I₂ — a kationból nehezebb elektront elvenni." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Example, {
						title: "Na és Cl egy periódusban",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Na: nagy sugár, kicsi I₁, kicsi EN → könnyen Na⁺. Cl: kis sugár, nagy I, nagy EN → szívesen Cl⁻. A ΔEN ≈ 2,2, ezért NaCl ionos. Ugyanez a logika magyarázza, miért oxidálódnak könnyen a bal oldali fémek, és miért oxidálószerek a jobb oldali nemfémek." })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BuildOn, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						"A effektív magtöltés (Z",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "eff" }),
						" ≈ Z − S, Slater-szabály) kvantitatívan adja a trendeket. Az átmeneti fémeknél a 3d/4s közelsége miatt a oxidációs számok változatosak, a lantanoida-kontrakció pedig a 5. és 6. periódus d-elemeinek hasonló sugarát okozza."
					] }) })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quiz, {
				slug: "periodusos",
				items: [
					{
						q: "Melyik nő a periódusban balról jobbra?",
						options: [
							"atomsugár",
							"fémes jelleg",
							"elektronegativitás",
							"kation mérete azonos töltés mellett mindig"
						],
						answer: 2,
						why: "Jobbra nő Z_eff, a héj összehúzódik, EN és I nő, a fémes jelleg csökken."
					},
					{
						q: "Az alkálifémek közös jellemzője:",
						options: [
							"ns² vegyértékszerkezet",
							"ns¹ vegyértékszerkezet, +1 ion",
							"mind diamágneses szilárd",
							"mind atomrácsot alkot"
						],
						answer: 1,
						why: "1. csoport: ns¹, könnyen leadják az egy vegyértékelektront → M⁺. Fémrács, nem atomrács."
					},
					{
						q: "A fluor elektronegativitása a legnagyobb, mert…",
						options: [
							"a legnagyobb a rendszáma",
							"kicsi a sugara és nagy a magtöltése a vegyértékhéjon",
							"nemesgázszerkezete van",
							"mindig −1 oxidációs számú"
						],
						answer: 1,
						why: "A 2. periódusban kicsi a sugár, Z_eff nagy. A He nemesgáz, nincs értelmes EN-kötésképe."
					}
				]
			})
		]
	});
}
function MolekulakChapter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				title: "A kovalens kötés",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Kovalens kötés: közös elektronpár (vagy párok) két atom között. Akkor alakul ki, ha az EN-különbség nem túl nagy, és mindkét atomnak van párosítatlan elektronja vagy üres pályája. Jellemzői: kötéshossz, kötési energia, kötésszög, polaritás, rendűség." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BondTypes, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataTable, {
						head: [
							"fajta",
							"lényege",
							"példa"
						],
						rows: [
							[
								"egyszeres",
								"egy σ-kötés (tengelyszimmetrikus átfedés)",
								"H–H, C–C, C–H"
							],
							[
								"kétszeres",
								"σ + π (síkszimmetrikus átfedés)",
								"O=O, C=C, CO₂"
							],
							[
								"hármas",
								"σ + 2π",
								"N≡N, C≡C (etin)"
							],
							[
								"datív (koordinációs)",
								"mindkét elektront a donor adja; az akceptor üres pályát kínál",
								"H₃N→BF₃, H₃O⁺, [Cu(NH₃)₄]²⁺"
							],
							[
								"lokalizált",
								"az elektronpár két atomhoz köthető",
								"C–C alkánokban"
							],
							[
								"delokalizált",
								"a π-elektronok legalább 3 atomon osztoznak",
								"benzol, O₃, CO₃²⁻, grafit"
							]
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Note, { children: "A kötési energia nő, a kötéshossz csökken a rendűséggel: C–C (154 pm, ~348 kJ/mol), C=C (134 pm, ~614 kJ/mol), C≡C (120 pm, ~839 kJ/mol). A delokalizáció stabilizál (rezonanciaenergia)." })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				title: "A kötés polaritása",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						"Ha a két atom EN-ja különbözik, a kötő elektronpár a nagyobb EN-ú atom felé tolódik:",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "parciális töltések (δ+, δ−), kötési dipólus" }),
						". ΔEN = 0 → apoláris kovalens; közepes ΔEN → poláris kovalens; nagy ΔEN → ionos jelleg."
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EnScale, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Example, {
						title: "HCl, Cl₂, NaCl",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
							"Cl₂: ΔEN = 0, apoláris. HCl: ΔEN(Cl−H) = 3,16 − 2,20 = 0,96 → poláris kovalens, H",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sup", { children: "δ+" }),
							"–Cl",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sup", { children: "δ−" }),
							". NaCl: ΔEN ≈ 2,2, a vegyület ionrácsot alkot, nem molekulát."
						] })
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				title: "A molekulák térszerkezete és polaritása",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						"A ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "VSEPR" }),
						"-modell: a központi atom körül a vegyértékelektronpárok (kötő + nemkötő) taszítják egymást, és a lehető legnagyobb térállást veszik fel. A nemkötő pár erősebben taszít, mint a kötő — ezért az NH₃ kötésszöge 107°, a H₂O-é 104,5°, nem 109,5°."
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(VseprExplorer, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						"A ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "molekula polaritása" }),
						" a kötési dipólusok vektoriális összege. Szimmetrikus elrendezés (CO₂ lineáris, CCl₄ tetraéder, BF₃ síkháromszög) → apoláris molekula polaris kötésekkel is. Aszimmetria (H₂O, NH₃, CHCl₃) → poláris molekula."
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Example, {
						title: "Miért oldódik a HCl vízben, a CCl₄ miért nem?",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "HCl poláris molekula, a víz is — dipól–dipól + H-kötés, jó oldódás, ráadásul protolízis (HCl + H₂O → H₃O⁺ + Cl⁻). CCl₄ tetraéderes, kötési dipólusok kiejtik egymást: apoláris, vízben nem oldódik, apoláris oldószerekben (hexán) igen. „Hasonló a hasonlóban.”" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BuildOn, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Egyetemen a VSEPR-t a hibridizáció (sp, sp², sp³, sp³d, sp³d²) és a molekulapálya-elmélet (MO) egészíti ki. A O₂ MO-képe magyarázza a diradikalitást és a paramágnesességet — Lewis-képlettel ez nem látszik. A dipólusmomentum (μ, Debye) mérhető; μ = 0 a szimmetria bizonyítéka." }) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Formula, {
						caption: "Lewis-oktett: a 2. periódus elemei 8 vegyértékelektronra törekednek. Kivételek: H (2), Be/B (elektronhiányos), P/S (kiterjesztett oktett), gyökök (NO).",
						children: [
							"H₂O: kötésszög 104,5° · μ ≠ 0 · poláris",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"CO₂: 180° · μ = 0 · apoláris"
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quiz, {
				slug: "molekulak",
				items: [
					{
						q: "A datív kötés lényege:",
						options: [
							"az elektronpár három atomon delokalizálódik",
							"mindkét elektront az egyik atom adja",
							"csak ionok között jön létre",
							"mindig π-kötés"
						],
						answer: 1,
						why: "A donor nemkötő párt ad, az akceptor üres pályát. Koordinációs vegyületek, oxóniumion."
					},
					{
						q: "Melyik molekula poláris?",
						options: [
							"CO₂",
							"BF₃",
							"CCl₄",
							"NH₃"
						],
						answer: 3,
						why: "NH₃ piramisos, a nemkötő pár miatt a dipólusok nem ejtik ki egymást. A többi szimmetrikus."
					},
					{
						q: "A benzolban a C–C kötések:",
						options: [
							"váltakozó egyszeres és kétszeres",
							"mind egyszeres",
							"egyenértékű, delokalizált π-rendszer",
							"ionosak"
						],
						answer: 2,
						why: "Hat C, hat delokalizált π-elektron. Kötéshossz 139 pm, a C–C és C=C között. A Kekulé-kép csak rezonanciahatár."
					}
				]
			})
		]
	});
}
function HalmazokChapter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				title: "Másodrendű kötések",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Elsőrendű kötés (kovalens, ionos, fémes) a molekulán/rácson belül; másodrendű a molekulák, illetve a rácsépítő egységek között. Energia: ~1–40 kJ/mol, az elsőrendű ~100–1000 kJ/mol-lal szemben — ezért olvadnak/forrnak a molekularácsos anyagok alacsony hőmérsékleten." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataTable, {
						head: [
							"kölcsönhatás",
							"mikor",
							"erősség",
							"példa"
						],
						rows: [
							[
								"diszperziós (London)",
								"minden molekulánál; apolárisoknál ez az egyetlen",
								"gyenge, nő a polarizálhatósággal (méret)",
								"I₂ > Br₂ > Cl₂; nemesgázok"
							],
							[
								"dipól–dipól",
								"állandó dipólusú molekulák",
								"közepes",
								"HCl, CH₃Cl, aceton"
							],
							[
								"hidrogénkötés",
								"H kötve F, O vagy N-hez + másik F/O/N nemkötő párja",
								"legerősebb másodrendű",
								"víz, HF, NH₃, alkoholok, DNS-bázispárok"
							]
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HBond, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Example, {
						title: "Miért magas a víz forráspontja?",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Az H₂S, H₂Se, H₂Te fp.-ja a moláris tömeggel nő. Az H₂O „kilóg”: 100 °C, nem ~−80 °C. Ok: molekulaanként két H-donor és két akceptor — 3D hidrogénkötés-háló. Ugyanez magyarázza a víz nagy fajhőjét, a jég rácsát és a sűrűséganomáliát." })
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				title: "Gázok",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Ideális gáz: a részecskék pontszerűek, nincs kölcsönhatás, a ütközések rugalmasak. Jó közelítés alacsony nyomáson, magas T-n." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Formula, {
						caption: "R = 8,314 J/(mol·K). Standard: 1 bar, 25 °C-on Vm ≈ 24,8 dm³/mol. (Régi STP: 22,4 dm³/mol, 0 °C, 1 atm.)",
						children: "pV = nRT"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						"Dalton: p",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "össz" }),
						" = Σ p",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "i" }),
						". A gázok kitöltik a teret, összenyomhatók, keverednek. Reális gázoknál van der Waals-korrekció (saját térfogat + vonzás)."
					] })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				title: "Folyadékok",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Közeli rend, távoli rendezetlenség. Állandó térfogat, változó alak. A viszkozitás, felületi feszültség, gőznyomás a másodrendű kötésektől függ. Forráspont: a gőznyomás eléri a külső nyomást." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Note, { children: "Polaritás és H-kötés → magas fp., jó oldószer poláris anyagokra. Apoláris folyadék (hexán) apoláris oldottakra. A „hasonló a hasonlóban” az oldáshő és az entrópia kompromisszuma." })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				title: "Szilárd anyagok — rácstípusok",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Kristályos szilárd: hosszú távú rend. Amorf (üveg): csak közeli rend, nincs éles op. Négy ideális rácstípus — a makroszkópos tulajdonságok ebből olvashatók ki." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LatticeGrid, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataTable, {
						head: [
							"rács",
							"rácsépítő",
							"op./keménység",
							"vezetés",
							"oldódás"
						],
						rows: [
							[
								"ionrács",
								"ionok",
								"magas / kemény, rideg",
								"szilárdan nem, olvadék/oldat igen",
								"poláris oldószer"
							],
							[
								"atomrács",
								"atomok, kovalens",
								"nagyon magas / nagyon kemény",
								"szigetelő (grafit kivétel)",
								"nem oldódik"
							],
							[
								"molekularács",
								"molekulák",
								"alacsony / lágy",
								"szigetelő",
								"hasonló oldószer"
							],
							[
								"fémrács",
								"atomtörzsek + e⁻",
								"változó",
								"jól (hő + elektromosság)",
								"nem (kémiai oldódás savban)"
							]
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Example, {
						title: "Gyémánt vs. grafit vs. I₂ vs. NaCl vs. Fe",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Gyémánt: sp³ atomrács, szigetelő, legkeményebb. Grafit: réteges, sp², delokalizált e⁻ → vezet, puha. I₂: molekularács, szublimál, lila gőz. NaCl: ionrács, vizes oldata vezet. Fe: fémrács, kovácsolható, vezet — ezért kábel helyett inkább szerkezeti fém, a Cu jobb vezető." })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BuildOn, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Bragg-diffraction, rácsenergia (Born–Haber-ciklus), sávmodell (vezető / félvezető / szigetelő: a tiltott sáv szélessége). A grafit és a fémek vezetése a delokalizált elektronok sávjából jön, nem ionmozgásból." }) })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quiz, {
				slug: "halmazok",
				items: [
					{
						q: "Melyik rácstípusra jellemző a magas olvadáspont és a szilárd fázisban szigetelő viselkedés, olvadékként viszont vezetés?",
						options: [
							"atomrács",
							"ionrács",
							"molekularács",
							"fémrács"
						],
						answer: 1,
						why: "Ionrács: a szilárdban az ionok rögzítettek, olvadékban/oldatban mozognak → elektrolit."
					},
					{
						q: "A hidrogénkötés feltétele:",
						options: [
							"bármely polaris molekula",
							"H kötve C-hez",
							"H kötve F, O vagy N-hez, és másik F/O/N nemkötő párja",
							"csak vízben"
						],
						answer: 2,
						why: "A nagy EN és a kis méret kell: F, O, N. A CH-kötés nem ad klasszikus H-kötést."
					},
					{
						q: "Az I₂ magasabb hőmérsékleten olvad, mint a Cl₂, mert…",
						options: [
							"ionrácsos",
							"hidrogénkötése van",
							"nagyobb a polarizálhatósága, erősebb a diszperziós kölcsönhatás",
							"hármas kötést tartalmaz"
						],
						answer: 2,
						why: "Mindkettő apoláris molekularács. A nagyobb elektronfelhő erősebben polarizálható → erősebb London-erő."
					}
				]
			})
		]
	});
}
function KolloidokChapter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				title: "A kolloid állapot",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"Az anyagi rendszerek a diszpergált részecske mérete szerint:",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "homogén oldat" }),
					" (1 nm alatt, ionok/molekulák),",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "kolloid" }),
					" (~1–500 nm), ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "durva diszperzió" }),
					" ",
					"(500 nm felett, ülepedik). A kolloid nem külön halmazállapot, hanem diszperzitásfok: a határfelület óriási, ezért a felületi jelenségek (adszorpció, töltés, stabilitás) döntők."
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KeyGrid, { items: [
					{
						k: "Tyndall-effektus",
						v: "A fénysugár a kolloid részecskéken szóródik, az oldatban „útja látszik”. Valódi oldatban nem."
					},
					{
						k: "Brown-mozgás",
						v: "A közeg molekuláinak ütközései miatt a kolloid részecskék rendezetlenül mozognak — ez gátolja az ülepedést."
					},
					{
						k: "Adszorpció",
						v: "A nagy fajlagos felület ionokat, molekulákat köt meg. Innen a töltés és a stabilitás."
					},
					{
						k: "Koaguláció",
						v: "A védő töltés/szolvátburok megszűnik (sók, pH, hő) → a részecskék összetapadnak, kicsapódnak."
					}
				] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				title: "Típusok",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "A kolloidokat a diszpergált fázis és a diszperziós közeg halmazállapota szerint osztályozzuk:" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataTable, {
						head: [
							"név",
							"diszpergált",
							"közeg",
							"példa"
						],
						rows: [
							[
								"köd",
								"folyadék",
								"gáz",
								"köd, spray"
							],
							[
								"füst",
								"szilárd",
								"gáz",
								"füst, por a levegőben"
							],
							[
								"hab",
								"gáz",
								"folyadék",
								"tejszínhab, szappanhab"
							],
							[
								"szilárd hab",
								"gáz",
								"szilárd",
								"habkő, hungarocell"
							],
							[
								"emulzió",
								"folyadék",
								"folyadék",
								"tej, majonéz, nyersolaj–víz"
							],
							[
								"szol",
								"szilárd",
								"folyadék",
								"Ag-szol, keményítőcsiriz, tojásfehérje"
							],
							[
								"gél",
								"folyadék",
								"szilárd háló",
								"kocsonya, zselatin, szilika-gél"
							],
							[
								"szilárd szol",
								"szilárd",
								"szilárd",
								"színes üveg, rubinüveg"
							]
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Note, { children: "Liofil (oldószerkedvelő, pl. fehérje vízben): spontán kolloid, szolvátburok véd. Liofób (pl. fém-szol): csak stabilizátorral (töltés) marad kolloid, könnyen koagulál." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Example, {
						title: "Tej, köd, tojásfehérje",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "A tej emulzió (zsírcseppek vízben) + fehérjekolloid; sav/oltóanyag koaguláltatja (túró). A köd folyadékcseppek levegőben — Tyndall-szórás miatt fehér. A tojásfehérje liofil kolloid: hőre denaturálódik, a hálózat gél (főtt tojás)." })
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quiz, {
				slug: "kolloidok",
				items: [
					{
						q: "A Tyndall-effektus azért jellemző a kolloidokra, mert…",
						options: [
							"a részecskék ionosak",
							"a részecskeméret a látható fény hullámhosszának nagyságrendje, szóródik a fény",
							"mindig színesek",
							"vezetik az áramot"
						],
						answer: 1,
						why: "1–500 nm: a látható fény (400–800 nm) szóródik. Az oldott ionok (~0,1 nm) nem adnak Tyndall-képet."
					},
					{
						q: "A majonéz kolloid típusa:",
						options: [
							"szol",
							"hab",
							"emulzió",
							"köd"
						],
						answer: 2,
						why: "Olajcseppek vizes közegben (emulzió), lecitin/tojássárgája mint emulgeálószer."
					},
					{
						q: "A liofób szolokat sóval kicsaphatjuk, mert…",
						options: [
							"a só H-kötést bont",
							"az ellenionok semlegesítik a védő töltést",
							"a só növeli a Brown-mozgást",
							"mindig endoterm"
						],
						answer: 1,
						why: "A részecskék azonos töltése taszít. Elektrolit → a kettős réteg összenyomódik, koaguláció."
					}
				]
			})
		]
	});
}
function ReakciokChapter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				title: "Reakciósebesség",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "A reakciósebesség az egységnyi idő alatt bekövetkező koncentrációváltozás. Homogén gáz/oldatreakcióknál:" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Formula, {
						caption: "A k sebességi állandó T-függő. Az exponensek (reakciórend) kísérleti adat, nem a sztöchiometriai együttható.",
						children: [
							"v = k · [A]",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sup", { children: "α" }),
							" [B]",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sup", { children: "β" })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "A sebességet növeli:" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "list-disc space-y-1 pl-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "koncentráció / nyomás (több ütközés)," }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
								"hőmérséklet (több molekula éri el az E",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "a" }),
								"-t — Arrhenius),"
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
								"katalizátor (más út, kisebb E",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "a" }),
								", ΔH változatlan),"
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "heterogén reakciónál a felület (porítás)." })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Formula, {
						caption: "Arrhenius: k meredeken nő T-vel. R = 8,314 J/(mol·K).",
						children: ["k = A · e", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("sup", { children: [
							"−E",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "a" }),
							"/RT"
						] })]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				title: "Hőszínezet",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EnergyProfile, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Exoterm" }),
						" (Δ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "r" }),
						"H negatív): a rendszer hőt ad le, a termékek kötései összességében erősebbek (égés, semlegesítés).",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Endoterm" }),
						" (Δ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "r" }),
						"H pozitív): hőt vesz fel (mészkő bontása, fotoszintézis bruttó). Hess tétele: ΔH útfüggetlen, a képződési enthalpiákból számolható."
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Formula, { children: [
						"Δ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "r" }),
						"H° = Σ ν Δ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "f" }),
						"H°(termék) − Σ ν Δ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "f" }),
						"H°(reaktáns)"
					] })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				title: "Reakciótípusok",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataTable, {
					head: [
						"típus",
						"mi történik",
						"példa"
					],
					rows: [
						[
							"egyesülés",
							"A + B → C",
							"2 H₂ + O₂ → 2 H₂O"
						],
						[
							"bomlás",
							"C → A + B",
							"2 HgO → 2 Hg + O₂"
						],
						[
							"helyettesítés",
							"elem + vegyület",
							"Zn + 2 HCl → ZnCl₂ + H₂"
						],
						[
							"kettős helyettesítés",
							"ioncsere",
							"AgNO₃ + NaCl → AgCl↓ + NaNO₃"
						],
						[
							"sav–bázis",
							"protonátadás (Brønsted)",
							"HCl + NH₃ → NH₄⁺ + Cl⁻"
						],
						[
							"redoxi",
							"elektronátadás, oxidációs szám változik",
							"2 Fe + 3 Cl₂ → 2 FeCl₃"
						],
						[
							"csapadék",
							"oldhatatlan só",
							"Ba²⁺ + SO₄²⁻ → BaSO₄↓"
						],
						[
							"komplexképződés",
							"datív kötésű összetett ion",
							"Cu²⁺ + 4 NH₃ → [Cu(NH₃)₄]²⁺"
						]
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				title: "Dinamikus egyensúly",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						"Zárt rendszerben az oda- és visszaalakulás sebessége kiegyenlítődik: a koncentrációk állandók, de a folyamat nem áll le. Az",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "egyensúlyi állandó" }),
						" csak T függvénye."
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Formula, {
						caption: "Tiszta szilárd/folyadék aktivitása ≈ 1, ezért kimarad K-ból (heterogén egyensúly).",
						children: [
							"a A + b B ⇌ c C + d D",
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
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Le Chatelier:" }), " az egyensúlyi rendszer a zavarás hatását csökkentő irányba tolódik."] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataTable, {
						head: ["zavarás", "eltolódás"],
						rows: [
							["termék elvétele / reaktáns adása", "termékképződés felé"],
							["nyomásnővés (gáz, Δn ≠ 0)", "kisebb mólszámú oldal felé"],
							["T-emelés", "endoterm irányba (K változik)"],
							["katalizátor", "K nem változik, csak gyorsabban áll be"]
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Example, {
						title: "Haber–Bosch: N₂ + 3 H₂ ⇌ 2 NH₃, ΔH < 0",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Termékképződés: alacsony T (de akkor lassú) + magas p (4 mol gáz → 2 mol). Ipari kompromisszum: ~400–500 °C, 150–300 bar, Fe-katalizátor, NH₃ folyamatos elvétele." })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BuildOn, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						"ΔG° = −RT ln K. Ha ΔG° negatív, K nagyobb 1-nél (termékoldali egyensúly). A van ’t Hoff-egyenlet adja K(T)-t. Vizes közegben külön egyensúlyok: savi K",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "a" }),
						", bázis K",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "b" }),
						", víz K",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "w" }),
						", oldhatósági K",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "sp" }),
						", komplex K",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "st" }),
						" — mind K speciális esete."
					] }) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Note, { children: "Egyetemi gyakorlat: mindig írd fel a K kifejezését, ellenőrizd a fázisokat, és Le Chatelierrel csak kvalitatívan jósolj — a szám K-ból jön." })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quiz, {
				slug: "reakciok",
				items: [
					{
						q: "A katalizátor…",
						options: [
							"megnöveli ΔH-t",
							"csökkenti Ea-t, K-t nem változtatja",
							"az egyensúlyt mindig a termék felé tolja",
							"csak heterogén reakcióban hat"
						],
						answer: 1,
						why: "Más mechanizmus, kisebb aktiválási energia mindkét irányban. K = k_oda/k_vissza változatlan."
					},
					{
						q: "Exoterm egyensúlyi reakciónál a T emelése…",
						options: [
							"növeli K-t",
							"csökkenti K-t (reaktánsok felé)",
							"nem hat K-ra",
							"mindig megállítja a reakciót"
						],
						answer: 1,
						why: "Le Chatelier: a rendszer a hőelnyelő (endoterm, visszaalakuló) irányba megy. K csökken."
					},
					{
						q: "A 2 SO₂ + O₂ ⇌ 2 SO₃ egyensúlynál a nyomás növelése…",
						options: [
							"SO₃ felé visz (3 mol gáz → 2)",
							"SO₂ felé visz",
							"nincs hatása, mert K csak T-függő, a helyzet sem változik",
							"csak katalizátorral hat"
						],
						answer: 0,
						why: "K valóban csak T-függő, de a parciális nyomások aránya eltolódik a kisebb mólszám felé. Az ipari kénsavgyártás ezt használja."
					}
				]
			})
		]
	});
}
function SavakChapter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				title: "Fogalmak",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataTable, {
						head: [
							"elmélet",
							"sav",
							"bázis"
						],
						rows: [
							[
								"Arrhenius",
								"H⁺-t ad vízben",
								"OH⁻-t ad vízben"
							],
							[
								"Brønsted–Lowry",
								"protonleadó",
								"protonfelvevő"
							],
							[
								"Lewis",
								"elektronpár-akceptor",
								"elektronpár-donor"
							]
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Minden Brønsted-sav–bázis pár konjugált: HA / A⁻, B / BH⁺. A víz amfoter: sav is, bázis is." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Formula, { children: [
						"H",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "2" }),
						"O + H",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "2" }),
						"O ⇌ H",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "3" }),
						"O⁺ + OH⁻",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"K",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "w" }),
						" = [H",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "3" }),
						"O⁺][OH⁻] = 1,0·10⁻¹⁴ (25 °C)"
					] })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				title: "pH, erőség",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhScale, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Formula, { children: [
						"pH = −lg [H",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "3" }),
						"O⁺] · pOH = −lg [OH⁻] · pH + pOH = 14 (25 °C)"
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataTable, {
						head: [
							"",
							"erős",
							"gyenge"
						],
						rows: [[
							"sav",
							"teljesen disszociál: HCl, HBr, HI, HNO₃, H₂SO₄ (1.), HClO₄",
							"részlegesen: CH₃COOH, H₂CO₃, H₂SO₃, H₃PO₄, HF"
						], [
							"bázis",
							"NaOH, KOH, Ba(OH)₂, Ca(OH)₂",
							"NH₃, aminok, CO₃²⁻, CH₃COO⁻"
						]]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Formula, {
						caption: "Minél kisebb a pKa, annál erősebb a sav. pKa + pKb = 14 konjugált párra.",
						children: [
							"K",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "a" }),
							" = [H₃O⁺][A⁻]/[HA] · pK",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "a" }),
							" = −lg K",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "a" })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Example, {
						title: "0,10 M HCl és 0,10 M ecetsav",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
							"HCl: [H₃O⁺] = 0,10 → pH = 1,00. Ecetsav (K",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "a" }),
							" = 1,8·10⁻⁵): [H₃O⁺] ≈ √(K",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "a" }),
							"·c) = √(1,8·10⁻⁶) ≈ 1,3·10⁻³ → pH ≈ 2,9. Azonos koncentráció, három nagyságrendnyi különbség a [H₃O⁺]-ben."
						] })
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				title: "Vizes egyensúlyok, sók, puffer",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Semlegesítés: sav + bázis → só + víz. A só oldatának kémhatása a ionok hidrolízisétől függ." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataTable, {
						head: ["só", "oldat"],
						rows: [
							["erős sav + erős bázis (NaCl, KNO₃)", "semleges"],
							["erős sav + gyenge bázis (NH₄Cl)", "savas (NH₄⁺ hidrolizál)"],
							["gyenge sav + erős bázis (CH₃COONa, Na₂CO₃)", "lúgos (anion hidrolizál)"],
							["gyenge + gyenge", "a két K versenye"]
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Puffer:" }), " gyenge sav + konjugált bázisa (vagy gyenge bázis + konjugált sav). Kis mennyiségű H⁺/OH⁻-t elnyel, a pH kevéssé változik."] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Formula, {
						caption: "Henderson–Hasselbalch — a vér pH-ja (~7,4) a H₂CO₃/HCO₃⁻ pufferen áll.",
						children: [
							"pH = pK",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "a" }),
							" + lg ([A⁻]/[HA])"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BuildOn, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						"Többértékű savak lépcsős K",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "a1" }),
						" nagyobb, mint K",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "a2" }),
						", az pedig K",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "a3" }),
						"-nál. Titrálási görbe, ekvivalenciapont, indikátor (pK",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "in" }),
						"az átcsapási tartományban). Az oldhatósági szorzat: K",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "sp" }),
						"(AgCl) = [Ag⁺][Cl⁻]; közös ion elnyomja az oldódást."
					] }) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Note, { children: "Savmaradék: Cl⁻ klorid, SO₄²⁻ szulfát, SO₃²⁻ szulfit, NO₃⁻ nitrát, NO₂⁻ nitrit, CO₃²⁻ karbonát, HCO₃⁻ hidrogén-karbonát, CH₃COO⁻ acetát." })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quiz, {
				slug: "savak",
				items: [
					{
						q: "A Brønsted szerint a NH₃…",
						options: [
							"sav, mert van H-je",
							"bázis, mert protont vesz fel (NH₄⁺)",
							"sem sav, sem bázis",
							"csak Lewis-bázis, Brønsted szerint nem"
						],
						answer: 1,
						why: "NH₃ + H⁺ → NH₄⁺. (Egyben Lewis-bázis is a nemkötő pár miatt.)"
					},
					{
						q: "Na₂CO₃ vizes oldata lúgos, mert…",
						options: [
							"a Na⁺ hidrolizál",
							"a CO₃²⁻ protonokat vesz fel a vízből, OH⁻ marad",
							"erős sav sója",
							"mindig pH = 7 a sóknál"
						],
						answer: 1,
						why: "CO₃²⁻ + H₂O ⇌ HCO₃⁻ + OH⁻. Gyenge sav (H₂CO₃) erős bázissal alkotott sója."
					},
					{
						q: "Egy HA/A⁻ puffer pH-ja akkor egyenlő pKa-val, ha…",
						options: [
							"[HA] ≫ [A⁻]",
							"[HA] = [A⁻]",
							"a puffer savas",
							"K_w = Ka"
						],
						answer: 1,
						why: "Henderson–Hasselbalch: lg(1) = 0 → pH = pKa. Ez a puffer kapacitásának maximuma is."
					}
				]
			})
		]
	});
}
function ElektroChapter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				title: "Elektródpotenciál",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Az elektródpotenciál az elektród és az elektrolit közti potenciálkülönbség. A standard elektródpotenciál (ε°) a standard hidrogénelektródhoz (pH₂ = 1 bar, [H⁺] = 1 M, 25 °C, ε° = 0) viszonyított érték. Minél pozitívabb ε°, annál jobb oxidálószer a oxidált forma." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataTable, {
						head: [
							"elektród",
							"ε° (V)",
							"jelentés"
						],
						rows: [
							[
								"Li⁺/Li",
								"−3,04",
								"legerősebb redukálószer (a fém)"
							],
							[
								"Zn²⁺/Zn",
								"−0,76",
								"Zn redukál, maga oxidálódik"
							],
							[
								"H⁺/H₂",
								"0,00",
								"vonatkoztatási elektród"
							],
							[
								"Cu²⁺/Cu",
								"+0,34",
								"Cu²⁺ oxidálószer Zn-hez képest"
							],
							[
								"O₂/H₂O (savas)",
								"+1,23",
								"erős oxidálószer"
							],
							[
								"F₂/F⁻",
								"+2,87",
								"legerősebb oxidálószer"
							]
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Formula, {
						caption: "Nernst-egyenlet 25 °C-on, n = átadott e⁻ száma. Q a reakcióhányados.",
						children: "ε = ε° − (0,059 V / n) · lg Q"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				title: "Galvánelemek",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Spontán redoxi: a két elektród szétválasztva, az elektron a külső áramkörön folyik. Anód: oxidáció (−), katód: redukció (+). A cella elektromotoros ereje:" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Formula, { children: [
						"E",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "MF" }),
						" = ε",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "katód" }),
						" − ε",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "anód" }),
						" = ε",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "jobb" }),
						" − ε",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "bal" })
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GalvanicCell, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Example, {
						title: "Daniell-elem számolva",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
							"Zn | Zn²⁺ (1 M) || Cu²⁺ (1 M) | Cu",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"E° = 0,34 − (−0,76) = 1,10 V. Bruttó: Zn + Cu²⁺ → Zn²⁺ + Cu. Ha [Cu²⁺] csökken, Nernst szerint E csökken; az elem „kimerül”."
						] })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Note, { children: "Celladiagram: balra az anód. Sóhíd: ionvándorlás, töltéskiegyenlítés, a két oldat nem keveredik el." })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				title: "Elektrolízis",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Külső feszültséggel nemspontán redoxit kényszerítünk. Itt az anód a (+) (oxidáció), a katód a (−) (redukció) — a polaritás a galvánelemhez képest felcserélődik a külső forrás miatt." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataTable, {
						head: [
							"rendszer",
							"katód (−)",
							"anód (+)"
						],
						rows: [
							[
								"olvadék NaCl",
								"Na⁺ + e⁻ → Na",
								"2 Cl⁻ → Cl₂ + 2 e⁻"
							],
							[
								"vizes NaCl (cc.)",
								"2 H₂O + 2 e⁻ → H₂ + 2 OH⁻",
								"2 Cl⁻ → Cl₂ + 2 e⁻"
							],
							[
								"vizes CuSO₄, Cu-anód",
								"Cu²⁺ + 2 e⁻ → Cu",
								"Cu → Cu²⁺ + 2 e⁻ (finomítás)"
							],
							[
								"víz (savanyított)",
								"2 H⁺ + 2 e⁻ → H₂",
								"2 H₂O → O₂ + 4 H⁺ + 4 e⁻"
							]
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Faraday-törvények:" }), " a kivált anyag mennyisége az áthaladt töltéssel arányos."] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Formula, {
						caption: "F = 96485 C/mol. n(e⁻) = Q/F = I·t/F. 1 mol e⁻ 1 mol Na-t, ½ mol Cu-t, ¼ mol O₂-t redukál/oxidál a sztöchiometria szerint.",
						children: "m = (M · I · t) / (z · F)"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BuildOn, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "A bomlásfeszültség ≈ |E°| + túlfeszültség (kinetikai extra a gázfejlődésnél: H₂/O₂ a Hg-n, grafiton másképp viselkedik — ezért vizes NaCl-ból Cl₂ fejlődik, nem O₂). Akkumulátor: tölthető galvánelem (PbO₂/Pb, Li-ion)." }) })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quiz, {
				slug: "elektro",
				items: [
					{
						q: "A Daniell-elem anódján…",
						options: [
							"Cu²⁺ redukálódik",
							"Zn oxidálódik",
							"a sóhíd elektronokat vezet",
							"O₂ fejlődik"
						],
						answer: 1,
						why: "Zn a negatívabb ε°-ú fém: oxidálódik, oldódik. A sóhíd ionokat vezet, nem elektronokat."
					},
					{
						q: "Az ε°(F₂/F⁻) nagyon pozitív, ezért a F₂…",
						options: [
							"erős redukálószer",
							"erős oxidálószer",
							"nem reagál",
							"csak anódon válik ki vízből mindig"
						],
						answer: 1,
						why: "Pozitív ε° = az oxidált forma (F₂) szívesen vesz fel e⁻-t. A fluor soha nem állítható elő vizes elektrolízissel (vizet oxidál)."
					},
					{
						q: "2,00 A, 965 s alatt elméletileg hány mol e⁻ halad át?",
						options: [
							"0,010 mol",
							"0,020 mol",
							"1,00 mol",
							"2,00 mol"
						],
						answer: 1,
						why: "Q = I·t = 1930 C. n(e⁻) = Q/F ≈ 1930/96485 ≈ 0,020 mol."
					}
				]
			})
		]
	});
}
function SzervetlenChapter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				title: "Hidrogén",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KeyGrid, { items: [
					{
						k: "Szerkezet",
						v: "H₂, apoláris, egyszeres σ, molekularács (nagyon alacsony op./fp.)."
					},
					{
						k: "Előállítás",
						v: "Labor: Zn + 2 HCl → ZnCl₂ + H₂. Ipar: földgáz + H₂O (reformálás), víz elektrolízise."
					},
					{
						k: "Kémia",
						v: "Ég: 2 H₂ + O₂ → 2 H₂O (durranógáz). Redukálószer (volfrám, margarin hidrogénezés). Nemfémekkel HCl, NH₃, H₂S, H₂O."
					},
					{
						k: "Izotópok",
						v: "¹H protium, ²H deutérium (D₂O), ³H trícium (radioaktív)."
					}
				] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				title: "Oxigén és ózon",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataTable, {
						head: [
							"",
							"O₂",
							"O₃ (ózon)"
						],
						rows: [
							[
								"molekula",
								"apoláris, kettős (MO: diradikál, paramágneses)",
								"hajlított, poláris, delokalizált"
							],
							[
								"szerep",
								"légzés, égés",
								"UV-szűrő a sztratoszférában; talajközelben mérgező"
							],
							[
								"oxidálás",
								"közepes (lassú, T-vel nő)",
								"erős oxidálószer"
							]
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Formula, { children: [
						"3 O",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "2" }),
						" ⇌ 2 O",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "3" }),
						" · ΔH pozitív (UV vagy csendes kisülés)"
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Égés: gyors redoxi O₂-vel, lánggal. A nemesgázok és a nemesfémek (Au, Pt) nem égnek. A levegő ~21% O₂, ~78% N₂." })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				title: "Kén-oxidok és kénsav",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "A kén égésekor SO₂ (szúrós, savas eső, tartósítószer). További oxidáció V₂O₅-katalizátorral: SO₃. Mindkettő savanhidrid." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Formula, { children: [
						"S + O",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "2" }),
						" → SO",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "2" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"2 SO",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "2" }),
						" + O",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "2" }),
						" ⇌ 2 SO",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "3" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"SO",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "2" }),
						" + H",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "2" }),
						"O ⇌ H",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "2" }),
						"SO",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "3" }),
						" (kénessav, gyenge, redoxiaktív)",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"SO",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "3" }),
						" + H",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "2" }),
						"O → H",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "2" }),
						"SO",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "4" }),
						" (ipar: SO₃ oleumba, majd hígítás)"
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataTable, {
						head: [
							"",
							"H₂SO₃",
							"H₂SO₄"
						],
						rows: [
							[
								"erőség",
								"gyenge, kétértékű",
								"erős (első proton), vízelvonó, oxidáló (cc., forró)"
							],
							[
								"sók",
								"szulfit, hidrogén-szulfit",
								"szulfát, hidrogén-szulfát"
							],
							[
								"jellemző",
								"redukálószer (I₂-t elszíntelenít)",
								"akkumulátor, műtrágya, vízelvonás (cukor szenesedik)"
							]
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Note, { children: "A cc. kénsav char-olja a szerves anyagot (vízelvonás), a híg savval a reaktív fémek H₂-t fejlesztenek. Ólmot passziválja — ezért ólomakku." })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				title: "Nitrogén-oxidok",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "A N₂ apoláris, hármas kötés: kinetikailag inert (levegő 78%-a). Magas T-n (villám, motor) oxidok:" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Formula, { children: [
						"N",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "2" }),
						" + O",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "2" }),
						" ⇌ 2 NO · ΔH pozitív",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"2 NO + O",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "2" }),
						" → 2 NO",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "2" }),
						" (barna, dimerizál N₂O₄-gyé)"
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "NO: színtelen gyök, élettani hírvivő, levegőn azonnal NO₂. NO₂: barna, savas eső, szmog; vízzel HNO₂ + HNO₃. A salétromsav erős sav és oxidálószer (cc. + Cu → NO₂, híg + Cu → NO)." })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				title: "Szén-oxidok, karbonátok",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataTable, {
						head: [
							"",
							"CO",
							"CO₂"
						],
						rows: [
							[
								"molekula",
								"poláris, hármas jellegű, mérgező (Hb)",
								"lineáris, apoláris, nem ég, üvegház"
							],
							[
								"előállítás",
								"C + kevés O₂ (generátorgáz); HCOOH bontás",
								"C + O₂, karbonát + sav, égés, légzés"
							],
							[
								"kémia",
								"redukálószer (kohászat: Fe₂O₃ + 3 CO → 2 Fe + 3 CO₂)",
								"CO₂ + H₂O ⇌ H₂CO₃ gyenge sav"
							]
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Formula, { children: [
						"CO",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "2" }),
						" + H",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "2" }),
						"O ⇌ H",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "2" }),
						"CO",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "3" }),
						" ⇌ H⁺ + HCO",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "3" }),
						"⁻ ⇌ 2 H⁺ + CO",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "3" }),
						"²⁻"
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Karbonátok" }),
						" (CO₃²⁻): mészkő, szóda. Savval pezsegnek (CO₂). Hőre bontás: CaCO₃ → CaO + CO₂ (mészégetés).",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Hidrogén-karbonátok" }),
						" (HCO₃⁻): NaHCO₃ (szódabikarbóna) hőre/ savra CO₂ — sütőpor, gyomorsav. A HCO₃⁻ amfoter: savban CO₂, lúgban CO₃²⁻. A barlangok cseppköve a Ca(HCO₃)₂ ⇌ CaCO₃ + CO₂ + H₂O egyensúly."
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Example, {
						title: "Mészkő + sósav",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Formula, { children: [
							"CaCO",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "3" }),
							" + 2 HCl → CaCl",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "2" }),
							" + H",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "2" }),
							"O + CO",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "2" }),
							"↑"
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "A pezsgés a karbonátok/ hidrogén-karbonátok gyors azonosítója." })]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				title: "Fémek: vas, alumínium, cink",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataTable, {
						head: [
							"",
							"Fe",
							"Al",
							"Zn"
						],
						rows: [
							[
								"rács / ion",
								"fémrács; Fe²⁺, Fe³⁺",
								"fémrács; Al³⁺",
								"fémrács; Zn²⁺"
							],
							[
								"előfordulás",
								"hematit Fe₂O₃, magnetit",
								"bauxit",
								"szfalerit ZnS"
							],
							[
								"előállítás",
								"kohó: C/CO redukál, nyersvas → acél",
								"Al₂O₃ olvadékelektrolízis (Hall–Héroult)",
								"ZnO + C, vagy elektrolízis"
							],
							[
								"víz / sav",
								"nem tiszta vízzel; HCl-ból H₂; cc. HNO₃ passzivál",
								"passzív oxidréteg; savból H₂; lúgból is ([Al(OH)₄]⁻)",
								"savból H₂; lúgból is ([Zn(OH)₄]²⁻)"
							],
							[
								"használat",
								"szerkezeti acél, rozsda Fe₂O₃·nH₂O",
								"könnyűszerkezet, vezeték, Al₂O₃ védőréteg",
								"horganyzás (katódos védelem), ötvözet"
							]
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Az Al és Zn amfoter: savban és lúgban is oldódnak. A Fe nem amfoter. A vas rozsdásodása oxigén + víz + elektrolit: helyi galvánelemek a felületen. Horganyzás: a Zn-nek negatívabb ε°-ja, ő oldódik, a Fe védett." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Formula, { children: [
						"4 Al + 3 O",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "2" }),
						" → 2 Al",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "2" }),
						"O",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "3" }),
						" (védő, tömör)",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"4 Fe + 3 O",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "2" }),
						" + n H",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "2" }),
						"O → 2 Fe",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "2" }),
						"O",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "3" }),
						"·nH",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "2" }),
						"O (porózus rozsda)",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"2 Al + 2 NaOH + 6 H",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "2" }),
						"O → 2 Na[Al(OH)",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "4" }),
						"] + 3 H",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "2" })
					] })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quiz, {
				slug: "szervetlen",
				items: [
					{
						q: "A CO miért mérgező?",
						options: [
							"savas esőt okoz",
							"a hemoglobinhoz a O₂-nél erősebben köt, kiszorítja",
							"ózonkárosító",
							"radioaktív"
						],
						answer: 1,
						why: "Karboxihemoglobin. A CO₂ nem kötődik így; fulladást a koncentráció/oxigénhiány okoz, nem Hb-méregként."
					},
					{
						q: "Melyik fém oldódik NaOH-ban is?",
						options: [
							"Fe",
							"Cu",
							"Al",
							"Ag"
						],
						answer: 2,
						why: "Al (és Zn) amfoter. A passzív Al₂O₃ lúgban tetrahidroxo-alumináttá oldódik, H₂ fejlődik."
					},
					{
						q: "A szódabikarbóna (NaHCO₃) savval…",
						options: [
							"H₂-t fejleszt",
							"CO₂-t fejleszt",
							"O₂-t fejleszt",
							"nem reagál"
						],
						answer: 1,
						why: "HCO₃⁻ + H⁺ → CO₂ + H₂O. Ugyanez a mészbarlang és a sütőpor kémiája."
					}
				]
			})
		]
	});
}
function SzervesChapter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				title: "Alapfogalmak",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Szerves kémia: a szénvegyületek kémiája (kivéve a CO, CO₂, karbonátok, karbidok — ezeket a szervetlenhez soroljuk). A szén négy kovalens kötést létesít, láncokat, gyűrűket, többszörös kötéseket alkot — ezért a vegyületek száma óriási." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataTable, {
						head: [
							"fogalom",
							"jelentés",
							"példa"
						],
						rows: [
							[
								"konstitúció",
								"atomok kapcsolódási sorrendje",
								"etanol vs. dimetil-éter"
							],
							[
								"izoméria",
								"azonos összegképlet, eltérő szerkezet",
								"C₄H₁₀: bután / 2-metilpropán"
							],
							[
								"homológ sor",
								"CH₂-vel bővülő sor, hasonló kémia",
								"alkánok CₙH₂ₙ₊₂"
							],
							[
								"funkciós csoport",
								"a reakciókért felelős atomcsoport",
								"–OH, –COOH, –CHO"
							],
							[
								"telített / telítetlen",
								"csak egyszeres / van C=C vagy C≡C",
								"etán / etén, etin"
							],
							[
								"aromás",
								"delokalizált gyűrűs π-rendszer",
								"benzol, C₆H₆"
							]
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FunctionalGroups, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Note, { children: "Konstitúciós izomerek: ugyanaz az összegképlet, más kapcsolódás. Konformerek: kötés körüli elfordulás. Sztereoizomerek (egyetem): geometriai (cisz–transz) és optikai (királis C, enantiomerek)." })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				title: "Szénhidrogének",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataTable, {
						head: [
							"sor",
							"képlet",
							"kötés",
							"jellemző reakció"
						],
						rows: [
							[
								"alkánok",
								"CₙH₂ₙ₊₂",
								"csak σ, tetraéderes C",
								"gyökös szubsztitúció (X₂, fény), égés"
							],
							[
								"alkének",
								"CₙH₂ₙ",
								"C=C (σ+π)",
								"addíció (H₂, HX, X₂, H₂O), polimerizáció"
							],
							[
								"alkinek",
								"CₙH₂ₙ₋₂",
								"C≡C",
								"addíció (két lépésben), gyenge sav (etin + Na)"
							],
							[
								"aromás",
								"CₙHₙ (benzol C₆H₆)",
								"delokalizált π",
								"elektrofil szubsztitúció (nitrálás, Br₂/Fe), nem addíció"
							]
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Example, {
						title: "Etén vs. etán vs. benzol",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Etán: inert, Br₂-vel csak UV-fényre (HBr + brómetán). Etén: Br₂-vizet azonnal elszíntelenít (addíció, telítetlenség próbája). Benzol: Br₂-t csak katalizátorral (FeBr₃) szubsztituál, a delokalizáció megmarad — ezért nem „ciklohexatrién”." })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Formula, { children: [
						"CH",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "2" }),
						"=CH",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "2" }),
						" + H",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "2" }),
						"O → CH",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "3" }),
						"CH",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "2" }),
						"OH (kénsav, ipari etanol)",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"n CH",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "2" }),
						"=CH",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "2" }),
						" → (–CH",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "2" }),
						"–CH",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "2" }),
						"–)",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "n" }),
						" polietilén"
					] })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				title: "Alkoholok, éterek, észterek",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataTable, {
						head: [
							"csoport",
							"funkció",
							"tulajdonság",
							"példa"
						],
						rows: [
							[
								"alkoholok",
								"R–OH",
								"H-kötés: magas fp., vízoldhatóság a rövid láncúaknál. Primer/szekunder/tercier.",
								"metanol (mérgező), etanol, glicerin"
							],
							[
								"éterek",
								"R–O–R′",
								"Nincs H-donor: alacsonyabb fp., gyengén poláris, jó oldószerek.",
								"dietil-éter, MTBE"
							],
							[
								"észterek",
								"R–COOR′",
								"Karbonsav + alkohol − víz. Gyümölcsillat, zsír/olaj = glicerin-észterek.",
								"etil-acetát, trigliceridek"
							]
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Az etanol oxidációja: primer alkohol → aldehid → karbonsav (ecetsav, borecet). A tercier alkohol nem oxidálódik a C–OH mentén (nincs leszakítható H a C-n). Éterek viszonylag inertsek, gyúlékonyak." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Formula, {
						caption: "Észterképzés (egyensúly, savkatalízis). A visszaalakulás: hidrolízis; lúgosan: elszappanosítás.",
						children: [
							"CH",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "3" }),
							"COOH + CH",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "3" }),
							"CH",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "2" }),
							"OH ⇌ CH",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "3" }),
							"COOCH",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "2" }),
							"CH",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "3" }),
							" + H",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "2" }),
							"O"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Example, {
						title: "Etanol és dimetil-éter: C₂H₆O",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Konstitúciós izomerek. Etanol: H-kötés, fp. 78 °C, Na-mal H₂, oxidálható. Dimetil-éter: nincs OH, fp. −25 °C, Na-mal nem reagál. Az OH tehát nem „csak oxigén”, hanem H-donor funkciós csoport." })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BuildOn, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						"Egyetemen: nomenklatúra (IUPAC), reakciómechanizmusok (S",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "N" }),
						"1/S",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "N" }),
						"2, E1/E2, elektrofil aromás szubsztitúció), spektroszkópia (IR: OH, C=O; NMR). A biomolekulák mind funkciós csoportok kombinációi: cukrok (poli-alkohol + oxo), zsírok (észter), fehérjék (amid), DNS (észter + aromás bázisok)."
					] }) })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quiz, {
				slug: "szerves",
				items: [
					{
						q: "Az etén Br₂-vizet elszíntelenít, mert…",
						options: [
							"gyökös szubsztitúció",
							"a π-kötésre addíció történik",
							"sav-bázis reakció",
							"aromás szubsztitúció"
						],
						answer: 1,
						why: "A C=C π-kötése felhasad, 1,2-dibrómetán keletkezik. Az alkánok és a benzol ezt nem adják (utóbbi csak katalizátorral szubsztituál)."
					},
					{
						q: "Az etanol és a dimetil-éter viszonya:",
						options: [
							"izotópok",
							"homológok",
							"konstitúciós izomerek",
							"azonos funkciós csoport"
						],
						answer: 2,
						why: "C₂H₆O mindkettő, más kapcsolódás: CH₃CH₂OH vs. CH₃OCH₃."
					},
					{
						q: "Az észterképzés fordítottja lúgos közegben:",
						options: [
							"polimerizáció",
							"elszappanosítás",
							"addíció",
							"aromatizáció"
						],
						answer: 1,
						why: "Zsírok + NaOH → glicerin + zsírsav-nátriumsók (szappan). Savas hidrolízis egyensúly, a lúgos irreverzibilis (a karboxilát nem észteresedik vissza)."
					}
				]
			})
		]
	});
}
var CHAPTER_PAGES = {
	atomok: AtomokChapter,
	periodusos: PeriodusosChapter,
	molekulak: MolekulakChapter,
	halmazok: HalmazokChapter,
	kolloidok: KolloidokChapter,
	reakciok: ReakciokChapter,
	savak: SavakChapter,
	elektro: ElektroChapter,
	szervetlen: SzervetlenChapter,
	szerves: SzervesChapter
};
function ChapterPage() {
	const { slug } = Route.useParams();
	const chapter = chapterBySlug(slug);
	const Page = CHAPTER_PAGES[slug];
	const markRead = useProgress((s) => s.markRead);
	(0, import_react.useEffect)(() => {
		if (chapter) markRead(chapter.slug);
	}, [chapter, markRead]);
	if (!chapter || !Page) throw notFound();
	const { prev, next } = neighbors(slug);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "px-4 py-8 sm:px-8 sm:py-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-xs font-medium tracking-[0.16em] text-accent uppercase",
				children: [
					chapter.n,
					" · ",
					chapter.minutes,
					" perc"
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 max-w-2xl font-display text-3xl font-medium tracking-tight sm:text-4xl",
				children: chapter.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 max-w-2xl text-lg text-muted",
				children: chapter.lead
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 max-w-2xl",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Page, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "mt-16 flex max-w-2xl flex-col gap-3 border-t border-line pt-8 sm:flex-row sm:justify-between",
				children: [prev ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/jegyzet/$slug",
					params: { slug: prev.slug },
					className: "inline-flex min-h-11 items-center gap-2 text-sm text-ink no-underline",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-4" }), prev.title]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}), next ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/jegyzet/$slug",
					params: { slug: next.slug },
					className: "inline-flex min-h-11 items-center gap-2 text-sm text-ink no-underline sm:ml-auto",
					children: [next.title, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "inline-flex min-h-11 items-center gap-2 text-sm text-accent no-underline sm:ml-auto",
					children: ["Vissza a térképhez", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
				})]
			})
		]
	}) });
}
//#endregion
export { ChapterPage as component };
