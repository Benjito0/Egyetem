import { useMemo, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { FigureFrame } from "@/components/content/primitives";

export function AtomModel() {
  const atoms = [
    { s: "H", z: 1, a: 1, shells: [1] },
    { s: "C", z: 6, a: 12, shells: [2, 4] },
    { s: "O", z: 8, a: 16, shells: [2, 6] },
    { s: "Na", z: 11, a: 23, shells: [2, 8, 1] },
    { s: "Cl", z: 17, a: 35, shells: [2, 8, 7] },
  ] as const;
  const [i, setI] = useState(2);
  const el = atoms[i];
  const n = el.a - el.z;

  return (
    <FigureFrame title={`${el.s} atom: Z = ${el.z}, A = ${el.a} (p⁺ = ${el.z}, n⁰ = ${n}, e⁻ = ${el.z})`}>
      <div className="flex flex-wrap items-center gap-2">
        {atoms.map((a, idx) => (
          <button
            key={a.s}
            type="button"
            onClick={() => setI(idx)}
            className={cn(
              "h-11 min-w-11 rounded-md px-3 font-mono text-sm",
              idx === i ? "bg-accent text-accent-fg" : "bg-paper text-ink",
            )}
          >
            {a.s}
          </button>
        ))}
      </div>
      <svg viewBox="0 0 360 220" className="mt-3 h-auto w-full" role="img" aria-label="Atommodell">
        <ellipse cx="150" cy="110" rx="128" ry="88" fill="none" className="stroke-line" strokeWidth="1" />
        {el.shells.map((_, si) => (
          <circle
            key={si}
            cx="150"
            cy="110"
            r={28 + si * 28}
            fill="none"
            className="stroke-accent"
            strokeWidth="1.2"
            opacity={0.55 + si * 0.15}
          />
        ))}
        <circle cx="150" cy="110" r="16" className="fill-ink" />
        <text x="150" y="114" textAnchor="middle" className="fill-accent-fg" fontSize="9" fontFamily="IBM Plex Mono">
          {el.z}p {n}n
        </text>
        {el.shells.flatMap((count, si) => {
          const r = 28 + si * 28;
          return Array.from({ length: Math.min(count, 8) }, (_, k) => {
            const ang = (-90 + (360 / Math.min(count, 8)) * k) * (Math.PI / 180);
            return (
              <circle
                key={`${si}-${k}`}
                cx={150 + r * Math.cos(ang)}
                cy={110 + r * Math.sin(ang)}
                r="4.2"
                className="fill-accent"
              />
            );
          });
        })}
        <g fontFamily="Source Sans 3" fontSize="12" className="fill-muted">
          <circle cx="300" cy="48" r="4.2" className="fill-accent" />
          <text x="310" y="52">elektron (e⁻)</text>
          <circle cx="300" cy="78" r="7" className="fill-ink" />
          <text x="314" y="82">mag (p⁺ + n⁰)</text>
          <text x="292" y="112">héj / pálya</text>
        </g>
      </svg>
    </FigureFrame>
  );
}

export function ParticleChart() {
  return (
    <FigureFrame title="Az atom alkotóinak relatív mérete és tömege (sematikus, nem méretarányos a mag–burok távolságra).">
      <svg viewBox="0 0 520 200" className="h-auto w-full" role="img">
        <text x="20" y="22" className="fill-muted" fontSize="11" fontFamily="Source Sans 3">
          tömeg (u)
        </text>
        {[
          { label: "proton", m: 1.007, x: 70, fill: "fill-ink" },
          { label: "neutron", m: 1.009, x: 200, fill: "fill-muted" },
          { label: "elektron", m: 0.00055, x: 330, fill: "fill-accent" },
        ].map((p) => {
          const h = p.label === "elektron" ? 8 : 118;
          return (
            <g key={p.label}>
              <rect x={p.x} y={150 - h} width="72" height={h} className={p.fill} rx="6" />
              <text
                x={p.x + 36}
                y="172"
                textAnchor="middle"
                className="fill-ink"
                fontSize="12"
                fontFamily="Source Sans 3"
              >
                {p.label}
              </text>
              <text
                x={p.x + 36}
                y="188"
                textAnchor="middle"
                className="fill-muted"
                fontSize="11"
                fontFamily="IBM Plex Mono"
              >
                {p.m} u
              </text>
            </g>
          );
        })}
        <text x="430" y="70" className="fill-muted" fontSize="11" fontFamily="Source Sans 3">
          e⁻ tömege
        </text>
        <text x="430" y="86" className="fill-muted" fontSize="11" fontFamily="Source Sans 3">
          ≈ 1/1836 u
        </text>
      </svg>
    </FigureFrame>
  );
}

export function TrendDiagram() {
  return (
    <FigureFrame title="Periodikus trendek: a nyíl iránya a növekedést mutatja.">
      <svg viewBox="0 0 420 220" className="h-auto w-full" role="img">
        <rect x="48" y="36" width="280" height="140" rx="10" className="fill-paper stroke-line" />
        {[0, 1, 2, 3].map((r) =>
          [0, 1, 2, 3, 4, 5].map((c) => (
            <rect
              key={`${r}-${c}`}
              x={64 + c * 40}
              y={50 + r * 28}
              width="28"
              height="20"
              rx="3"
              className="fill-bg-elevated stroke-line"
            />
          )),
        )}
        <path d="M48 196 L328 196" className="stroke-accent" strokeWidth="1.6" markerEnd="url(#arr)" />
        <path d="M36 176 L36 36" className="stroke-accent" strokeWidth="1.6" markerEnd="url(#arr)" />
        <defs>
          <marker id="arr" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
            <path d="M0 0 L8 4 L0 8 Z" className="fill-accent" />
          </marker>
        </defs>
        <text x="150" y="212" className="fill-ink" fontSize="12" fontFamily="Source Sans 3">
          csoport → EN, I, EA nő
        </text>
        <text
          x="18"
          y="130"
          className="fill-ink"
          fontSize="12"
          fontFamily="Source Sans 3"
          transform="rotate(-90 18 130)"
        >
          periódus ↓ sugár nő, EN csökken
        </text>
        <text x="348" y="70" className="fill-muted" fontSize="11" fontFamily="Source Sans 3">
          F: legnagyobb EN
        </text>
        <text x="348" y="110" className="fill-muted" fontSize="11" fontFamily="Source Sans 3">
          Cs: legnagyobb
        </text>
        <text x="348" y="126" className="fill-muted" fontSize="11" fontFamily="Source Sans 3">
          atomsugár
        </text>
      </svg>
    </FigureFrame>
  );
}

export function BondTypes() {
  return (
    <FigureFrame title="Kovalens kötés: σ-váz, π-felhő, datív elektronpár, delokalizált π-rendszer.">
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        <MiniBond title="egyszeres σ">
          <circle cx="40" cy="40" r="16" className="fill-paper stroke-ink" />
          <circle cx="88" cy="40" r="16" className="fill-paper stroke-ink" />
          <line x1="56" y1="40" x2="72" y2="40" className="stroke-accent" strokeWidth="3" />
          <text x="40" y="44" textAnchor="middle" fontSize="12" className="fill-ink">
            H
          </text>
          <text x="88" y="44" textAnchor="middle" fontSize="12" className="fill-ink">
            H
          </text>
        </MiniBond>
        <MiniBond title="kétszeres σ+π">
          <circle cx="40" cy="40" r="16" className="fill-paper stroke-ink" />
          <circle cx="88" cy="40" r="16" className="fill-paper stroke-ink" />
          <line x1="56" y1="35" x2="72" y2="35" className="stroke-accent" strokeWidth="2.2" />
          <line x1="56" y1="45" x2="72" y2="45" className="stroke-accent" strokeWidth="2.2" />
          <text x="40" y="44" textAnchor="middle" fontSize="12" className="fill-ink">
            O
          </text>
          <text x="88" y="44" textAnchor="middle" fontSize="12" className="fill-ink">
            O
          </text>
        </MiniBond>
        <MiniBond title="datív">
          <circle cx="36" cy="40" r="16" className="fill-paper stroke-ink" />
          <circle cx="92" cy="40" r="16" className="fill-paper stroke-ink" />
          <line x1="52" y1="40" x2="76" y2="40" className="stroke-accent" strokeWidth="3" />
          <polygon points="70,34 82,40 70,46" className="fill-accent" />
          <text x="36" y="44" textAnchor="middle" fontSize="11" className="fill-ink">
            N
          </text>
          <text x="92" y="44" textAnchor="middle" fontSize="11" className="fill-ink">
            B
          </text>
        </MiniBond>
        <MiniBond title="delokalizált">
          <polygon
            points="64,12 92,32 81,64 47,64 36,32"
            className="fill-none stroke-ink"
            strokeWidth="1.4"
          />
          <circle cx="64" cy="40" r="10" className="fill-none stroke-accent" strokeWidth="1.6" />
        </MiniBond>
      </div>
    </FigureFrame>
  );
}

function MiniBond({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="rounded-lg bg-paper px-2 py-2">
      <p className="text-center font-mono text-xs text-muted">{title}</p>
      <svg viewBox="0 0 128 80" className="mx-auto mt-1 h-20 w-full" aria-hidden>
        {children}
      </svg>
    </div>
  );
}

const VSEPR = [
  { id: "ax2", name: "lineáris", ex: "CO₂, BeCl₂", polar: "nem, ha AX₂ azonos vég" },
  { id: "ax3", name: "síkháromszög", ex: "BF₃, SO₃", polar: "nem, ha azonos ligandum" },
  { id: "ax4", name: "tetraéder", ex: "CH₄, CCl₄", polar: "nem, ha azonos ligandum" },
  { id: "ax3e", name: "háromszög piramis", ex: "NH₃, PCl₃", polar: "igen" },
  { id: "ax2e2", name: "V-alak", ex: "H₂O, H₂S", polar: "igen" },
  { id: "ax5", name: "trig. bipiramis", ex: "PCl₅", polar: "nem, ha AX₅" },
  { id: "ax6", name: "oktaéder", ex: "SF₆", polar: "nem, ha AX₆" },
] as const;

function ShapeSvg({ id }: { id: string }) {
  const c = "fill-ink";
  const l = "stroke-accent";
  return (
    <svg viewBox="0 0 160 120" className="mx-auto h-36 w-full" aria-hidden>
      {id === "ax2" && (
        <>
          <line x1="18" y1="60" x2="142" y2="60" className={l} strokeWidth="3" />
          <circle cx="22" cy="60" r="8" className={c} />
          <circle cx="80" cy="60" r="11" className={c} />
          <circle cx="138" cy="60" r="8" className={c} />
        </>
      )}
      {id === "ax3" && (
        <>
          <line x1="80" y1="64" x2="80" y2="18" className={l} strokeWidth="3" />
          <line x1="80" y1="64" x2="28" y2="96" className={l} strokeWidth="3" />
          <line x1="80" y1="64" x2="132" y2="96" className={l} strokeWidth="3" />
          <circle cx="80" cy="64" r="11" className={c} />
          <circle cx="80" cy="16" r="8" className={c} />
          <circle cx="26" cy="98" r="8" className={c} />
          <circle cx="134" cy="98" r="8" className={c} />
        </>
      )}
      {id === "ax4" && (
        <>
          <line x1="80" y1="58" x2="80" y2="16" className={l} strokeWidth="3" />
          <line x1="80" y1="58" x2="28" y2="92" className={l} strokeWidth="3" />
          <line x1="80" y1="58" x2="132" y2="92" className={l} strokeWidth="3" />
          <line x1="80" y1="58" x2="80" y2="104" strokeDasharray="4 3" className={l} strokeWidth="2" />
          <circle cx="80" cy="58" r="11" className={c} />
          <circle cx="80" cy="14" r="8" className={c} />
          <circle cx="26" cy="94" r="8" className={c} />
          <circle cx="134" cy="94" r="8" className={c} />
          <circle cx="80" cy="106" r="7" className="fill-muted" />
        </>
      )}
      {id === "ax3e" && (
        <>
          <line x1="80" y1="58" x2="36" y2="100" className={l} strokeWidth="3" />
          <line x1="80" y1="58" x2="124" y2="100" className={l} strokeWidth="3" />
          <line x1="80" y1="58" x2="80" y2="108" strokeDasharray="4 3" className={l} strokeWidth="2" />
          <circle cx="80" cy="58" r="11" className={c} />
          <circle cx="36" cy="102" r="8" className={c} />
          <circle cx="124" cy="102" r="8" className={c} />
          <circle cx="80" cy="110" r="7" className="fill-muted" />
          <ellipse cx="80" cy="28" rx="10" ry="14" className="fill-accent/30 stroke-accent" />
        </>
      )}
      {id === "ax2e2" && (
        <>
          <line x1="80" y1="62" x2="32" y2="100" className={l} strokeWidth="3" />
          <line x1="80" y1="62" x2="128" y2="100" className={l} strokeWidth="3" />
          <circle cx="80" cy="62" r="11" className={c} />
          <circle cx="30" cy="102" r="8" className={c} />
          <circle cx="130" cy="102" r="8" className={c} />
          <ellipse cx="58" cy="30" rx="10" ry="14" className="fill-accent/30 stroke-accent" />
          <ellipse cx="102" cy="30" rx="10" ry="14" className="fill-accent/30 stroke-accent" />
        </>
      )}
      {id === "ax5" && (
        <>
          <line x1="80" y1="16" x2="80" y2="104" className={l} strokeWidth="3" />
          <line x1="28" y1="62" x2="132" y2="62" className={l} strokeWidth="3" />
          <line x1="48" y1="92" x2="112" y2="32" className={l} strokeWidth="2" />
          <circle cx="80" cy="62" r="11" className={c} />
          <circle cx="80" cy="14" r="7" className={c} />
          <circle cx="80" cy="106" r="7" className={c} />
          <circle cx="26" cy="62" r="7" className={c} />
          <circle cx="134" cy="62" r="7" className={c} />
          <circle cx="50" cy="94" r="7" className={c} />
        </>
      )}
      {id === "ax6" && (
        <>
          <line x1="80" y1="16" x2="80" y2="104" className={l} strokeWidth="3" />
          <line x1="28" y1="62" x2="132" y2="62" className={l} strokeWidth="3" />
          <line x1="44" y1="34" x2="116" y2="90" className={l} strokeWidth="2" />
          <circle cx="80" cy="62" r="11" className={c} />
          <circle cx="80" cy="14" r="7" className={c} />
          <circle cx="80" cy="106" r="7" className={c} />
          <circle cx="26" cy="62" r="7" className={c} />
          <circle cx="134" cy="62" r="7" className={c} />
          <circle cx="44" cy="34" r="7" className={c} />
          <circle cx="116" cy="90" r="7" className={c} />
        </>
      )}
    </svg>
  );
}

export function VseprExplorer() {
  const [id, setId] = useState<(typeof VSEPR)[number]["id"]>("ax2e2");
  const cur = VSEPR.find((v) => v.id === id)!;
  return (
    <FigureFrame title="VSEPR: a központi atom vegyértékelektronpárjai taszítják egymást, a geometria ebből adódik.">
      <div className="flex flex-wrap gap-2">
        {VSEPR.map((v) => (
          <button
            key={v.id}
            type="button"
            onClick={() => setId(v.id)}
            className={cn(
              "h-11 rounded-md px-3 text-sm",
              v.id === id ? "bg-accent text-accent-fg" : "bg-paper text-ink",
            )}
          >
            {v.name}
          </button>
        ))}
      </div>
      <ShapeSvg id={cur.id} />
      <p className="pb-1 text-sm text-ink">
        Példa: <span className="font-mono">{cur.ex}</span>
        <span className="text-muted"> · molekula polaritása: {cur.polar}</span>
      </p>
    </FigureFrame>
  );
}

export function LatticeGrid() {
  const items = [
    {
      t: "ionrács",
      e: "NaCl, CaO",
      d: "Ellentétes ionok, nagy rácsenergia. Magas op., olvadék/oldat vezet.",
    },
    {
      t: "atomrács",
      e: "gyémánt, SiO₂, SiC",
      d: "3D kovalens háló. Nagyon magas op., nem oldódik, szigetelő (kivéve grafit).",
    },
    {
      t: "molekularács",
      e: "jég, I₂, CO₂(sz)",
      d: "Molekulák közt másodrendű kötés. Alacsony op./fp., nem vezet.",
    },
    {
      t: "fémrács",
      e: "Fe, Cu, Al, Zn",
      d: "Delokalizált e⁻-tenger. Vezet, kovácsolható, változó keménység.",
    },
  ];
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {items.map((it) => (
        <article key={it.t} className="rounded-xl bg-bg-elevated p-4 shadow-[var(--shadow-border)]">
          <LatticeMini type={it.t} />
          <h3 className="mt-2 font-display text-lg font-medium">{it.t}</h3>
          <p className="font-mono text-xs text-accent">{it.e}</p>
          <p className="mt-2 text-sm leading-relaxed text-muted">{it.d}</p>
        </article>
      ))}
    </div>
  );
}

function LatticeMini({ type }: { type: string }) {
  return (
    <svg viewBox="0 0 160 72" className="h-16 w-full" aria-hidden>
      {type === "ionrács" &&
        [0, 1, 2, 3].flatMap((r) =>
          [0, 1, 2, 3, 4].map((c) => (
            <circle
              key={`${r}-${c}`}
              cx={18 + c * 28}
              cy={16 + r * 16}
              r={r % 2 === c % 2 ? 7 : 5}
              className={r % 2 === c % 2 ? "fill-ink" : "fill-accent"}
            />
          )),
        )}
      {type === "atomrács" && (
        <>
          {[
            [20, 36],
            [50, 16],
            [50, 56],
            [80, 36],
            [110, 16],
            [110, 56],
            [140, 36],
          ].map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r="7" className="fill-ink" />
          ))}
          <path
            d="M20 36 L50 16 L80 36 L50 56 Z M80 36 L110 16 L140 36 L110 56 Z M50 16 L110 16 M50 56 L110 56"
            className="stroke-accent"
            fill="none"
            strokeWidth="1.6"
          />
        </>
      )}
      {type === "molekularács" &&
        [
          [28, 24],
          [70, 22],
          [112, 26],
          [46, 52],
          [92, 50],
          [134, 54],
        ].map(([x, y], i) => (
          <g key={i}>
            <circle cx={x} cy={y} r="6" className="fill-ink" />
            <circle cx={x + 12} cy={y + 4} r="6" className="fill-accent" />
          </g>
        ))}
      {type === "fémrács" &&
        [0, 1, 2].flatMap((r) =>
          [0, 1, 2, 3, 4].map((c) => (
            <circle
              key={`${r}-${c}`}
              cx={20 + c * 28 + (r % 2) * 14}
              cy={18 + r * 18}
              r="8"
              className="fill-ink"
              opacity="0.85"
            />
          )),
        )}
    </svg>
  );
}

export function EnergyProfile() {
  const [exo, setExo] = useState(true);
  return (
    <FigureFrame title="Reakcióenergia-profil. A katalizátor az Ea-t csökkenti, ΔH-t nem.">
      <div className="flex gap-2">
        <button
          type="button"
          className={cn("h-11 rounded-md px-3 text-sm", exo ? "bg-accent text-accent-fg" : "bg-paper")}
          onClick={() => setExo(true)}
        >
          exoterm
        </button>
        <button
          type="button"
          className={cn("h-11 rounded-md px-3 text-sm", !exo ? "bg-accent text-accent-fg" : "bg-paper")}
          onClick={() => setExo(false)}
        >
          endoterm
        </button>
      </div>
      <svg viewBox="0 0 420 180" className="mt-2 h-auto w-full" role="img">
        <line x1="40" y1="20" x2="40" y2="160" className="stroke-line" />
        <line x1="40" y1="160" x2="400" y2="160" className="stroke-line" />
        <text x="16" y="18" className="fill-muted" fontSize="11" fontFamily="Source Sans 3">
          E
        </text>
        {exo ? (
          <path d="M50 70 C120 70 140 28 200 28 C260 28 280 120 370 120" fill="none" className="stroke-ink" strokeWidth="2" />
        ) : (
          <path d="M50 120 C120 120 140 28 200 28 C260 28 280 70 370 70" fill="none" className="stroke-ink" strokeWidth="2" />
        )}
        <path
          d="M50 70 C120 70 150 48 200 48 C250 48 280 120 370 120"
          fill="none"
          className="stroke-accent"
          strokeWidth="1.6"
          strokeDasharray="5 4"
          opacity={exo ? 1 : 0}
        />
        <text x="188" y="18" className="fill-muted" fontSize="11" fontFamily="IBM Plex Mono">
          Ea
        </text>
        <text x="300" y={exo ? 100 : 100} className="fill-accent" fontSize="11" fontFamily="IBM Plex Mono">
          ΔᵣH {exo ? "< 0" : "> 0"}
        </text>
        <text x="48" y={exo ? 62 : 150} className="fill-muted" fontSize="11">
          reaktánsok
        </text>
        <text x="330" y={exo ? 138 : 58} className="fill-muted" fontSize="11">
          termékek
        </text>
      </svg>
    </FigureFrame>
  );
}

export function GalvanicCell() {
  return (
    <FigureFrame title="Daniell-elem: Zn | Zn²⁺ || Cu²⁺ | Cu. Az elektron a külső áramkörön a Zn-től a Cu-ig folyik.">
      <svg viewBox="0 0 520 210" className="h-auto w-full" role="img">
        <rect x="30" y="50" width="150" height="120" rx="8" className="fill-paper stroke-line" />
        <rect x="340" y="50" width="150" height="120" rx="8" className="fill-paper stroke-line" />
        <rect x="88" y="70" width="18" height="80" className="fill-muted" />
        <rect x="414" y="70" width="18" height="80" className="fill-ink" />
        <path d="M97 70 L97 28 L423 28 L423 70" fill="none" className="stroke-ink" strokeWidth="2" />
        <rect x="236" y="48" width="48" height="22" rx="4" className="fill-accent" />
        <text x="260" y="64" textAnchor="middle" className="fill-accent-fg" fontSize="11" fontFamily="IBM Plex Mono">
          V
        </text>
        <path d="M180 110 C210 70 310 150 340 110" fill="none" className="stroke-accent" strokeWidth="2" strokeDasharray="4 3" />
        <text x="105" y="40" className="fill-ink" fontSize="12" fontFamily="IBM Plex Mono">
          Zn anód (−)
        </text>
        <text x="378" y="40" className="fill-ink" fontSize="12" fontFamily="IBM Plex Mono">
          Cu katód (+)
        </text>
        <text x="46" y="188" className="fill-muted" fontSize="12">
          Zn → Zn²⁺ + 2 e⁻
        </text>
        <text x="318" y="188" className="fill-muted" fontSize="12">
          Cu²⁺ + 2 e⁻ → Cu
        </text>
        <text x="210" y="128" className="fill-accent" fontSize="11">
          sóhíd
        </text>
      </svg>
    </FigureFrame>
  );
}

export function PhScale() {
  const [ph, setPh] = useState(7);
  const label =
    ph < 3 ? "erősen savas" : ph < 7 ? "savas" : ph === 7 ? "semleges" : ph < 11 ? "lúgos" : "erősen lúgos";
  const h = useMemo(() => Math.pow(10, -ph), [ph]);
  return (
    <FigureFrame title="pH-skála 25 °C-on. pH = −lg[H₃O⁺], pOH = −lg[OH⁻], pH + pOH = 14.">
      <div className="flex items-end justify-between gap-2">
        {Array.from({ length: 15 }, (_, i) => (
          <div key={i} className="flex flex-1 flex-col items-center gap-1">
            <div
              className="w-full rounded-sm"
              style={{
                height: 10 + Math.abs(i - 7) * 6,
                background:
                  i < 7
                    ? `color-mix(in oklab, var(--color-bad) ${70 - i * 8}%, var(--color-paper))`
                    : i === 7
                      ? "var(--color-line)"
                      : `color-mix(in oklab, var(--color-accent) ${(i - 7) * 10 + 20}%, var(--color-paper))`,
              }}
            />
            <span className="font-mono text-[10px] text-muted">{i}</span>
          </div>
        ))}
      </div>
      <label className="mt-4 block text-sm text-muted">
        pH = <span className="font-mono text-ink tabular-nums">{ph.toFixed(1)}</span> · {label}
      </label>
      <input
        type="range"
        min={0}
        max={14}
        step={0.1}
        value={ph}
        onChange={(e) => setPh(Number(e.target.value))}
        className="mt-2 w-full accent-[var(--color-accent)]"
      />
      <p className="mt-2 font-mono text-sm text-ink">
        [H₃O⁺] ≈ {h.toExponential(2)} mol/dm³
      </p>
    </FigureFrame>
  );
}

export function FunctionalGroups() {
  const groups = [
    { n: "alkán", f: "R–H", e: "etán" },
    { n: "alkén", f: "C=C", e: "etén" },
    { n: "alkin", f: "C≡C", e: "etin" },
    { n: "aromás", f: "Ar–H", e: "benzol" },
    { n: "alkohol", f: "R–OH", e: "etanol" },
    { n: "éter", f: "R–O–R′", e: "dietil-éter" },
    { n: "oxovegyület", f: "RCHO / R₂CO", e: "acetaldehid" },
    { n: "karbonsav", f: "R–COOH", e: "ecetsav" },
    { n: "észter", f: "R–COOR′", e: "etil-acetát" },
  ];
  return (
    <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
      {groups.map((g) => (
        <article key={g.n} className="rounded-lg bg-bg-elevated px-3 py-3 shadow-[var(--shadow-border)]">
          <p className="text-xs tracking-wide text-muted uppercase">{g.n}</p>
          <p className="mt-1 font-mono text-sm text-ink">{g.f}</p>
          <p className="text-xs text-muted">{g.e}</p>
        </article>
      ))}
    </div>
  );
}

export function HBond() {
  return (
    <FigureFrame title="Hidrogénkötés: H a nagy EN-ú atomhoz (F, O, N) kovalensen, egy másik F/O/N nemkötő párjához gyengén kapcsolódik.">
      <svg viewBox="0 0 420 130" className="h-auto w-full" role="img">
        <circle cx="70" cy="64" r="16" className="fill-accent" />
        <circle cx="130" cy="64" r="10" className="fill-ink" />
        <circle cx="250" cy="64" r="16" className="fill-accent" />
        <circle cx="310" cy="64" r="10" className="fill-ink" />
        <line x1="86" y1="64" x2="120" y2="64" className="stroke-ink" strokeWidth="4" />
        <line x1="140" y1="64" x2="234" y2="64" className="stroke-accent" strokeWidth="2" strokeDasharray="6 5" />
        <line x1="266" y1="64" x2="300" y2="64" className="stroke-ink" strokeWidth="4" />
        <text x="70" y="70" textAnchor="middle" className="fill-accent-fg" fontSize="12">
          O
        </text>
        <text x="130" y="68" textAnchor="middle" className="fill-accent-fg" fontSize="11">
          H
        </text>
        <text x="250" y="70" textAnchor="middle" className="fill-accent-fg" fontSize="12">
          O
        </text>
        <text x="310" y="68" textAnchor="middle" className="fill-accent-fg" fontSize="11">
          H
        </text>
        <text x="168" y="50" className="fill-accent" fontSize="11" fontFamily="Source Sans 3">
          hidrogénkötés
        </text>
        <text x="78" y="108" className="fill-muted" fontSize="11">
          kovalens
        </text>
      </svg>
    </FigureFrame>
  );
}

export function EnScale() {
  const [en, setEn] = useState(1.4);
  const kind = en < 0.4 ? "apoláris kovalens" : en < 1.7 ? "poláris kovalens" : "ionos jellegű";
  return (
    <FigureFrame title="Kötéspolaritás a ΔEN (Pauling) alapján — irányadó, nem éles határ.">
      <p className="font-mono text-sm text-ink">
        ΔEN = {en.toFixed(1)} → {kind}
      </p>
      <input
        type="range"
        min={0}
        max={3.3}
        step={0.1}
        value={en}
        onChange={(e) => setEn(Number(e.target.value))}
        className="mt-2 w-full accent-[var(--color-accent)]"
      />
      <div className="mt-3 grid grid-cols-3 gap-2 text-center text-xs">
        <div className="rounded-md bg-paper px-2 py-2">0–0,4 apoláris</div>
        <div className="rounded-md bg-paper px-2 py-2">0,4–1,7 poláris</div>
        <div className="rounded-md bg-paper px-2 py-2">1,7 fölött ionos</div>
      </div>
    </FigureFrame>
  );
}
