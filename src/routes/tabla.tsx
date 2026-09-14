import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState, type CSSProperties } from "react";
import { AppShell } from "@/components/layout/app-shell";
import { ELEMENTS, type Elem } from "@/lib/elements";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/tabla")({ component: TablaPage });

function TablaPage() {
  const [sel, setSel] = useState<Elem>(ELEMENTS[5]);
  const main = useMemo(
    () => ELEMENTS.filter((e) => e.p <= 7 && e.g >= 1),
    [],
  );
  const lan = ELEMENTS.filter((e) => e.z >= 57 && e.z <= 71);
  const act = ELEMENTS.filter((e) => e.z >= 89 && e.z <= 103);

  return (
    <AppShell>
      <main className="px-4 py-8 sm:px-6 sm:py-10">
        <p className="text-xs font-medium tracking-[0.16em] text-accent uppercase">
          Interaktív
        </p>
        <h1 className="mt-2 font-display text-3xl font-medium tracking-tight sm:text-4xl">
          Periódusos táblázat
        </h1>
        <p className="mt-3 max-w-2xl text-muted">
          Kattints egy elemre. A mezők (s, p, d, f) halvány jelölése a
          vegyértékelektronok típusát mutatja.
        </p>
        <p className="mt-2 text-sm text-subtle lg:hidden">
          A táblázat szélesebb a kijelzőnél — húzd oldalra.
        </p>

        <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_16rem]">
          <div className="min-w-0 overflow-x-auto pb-2">
            <div
              className="grid w-[52rem] gap-px sm:w-full"
              style={{
                gridTemplateColumns: "repeat(18, minmax(0, 1fr))",
              }}
            >
              {Array.from({ length: 18 }, (_, i) => (
                <div
                  key={i}
                  className="pb-1 text-center font-mono text-xs text-subtle tabular-nums"
                >
                  {i + 1}
                </div>
              ))}
            </div>
            <div
              className="grid w-[52rem] gap-px sm:w-full"
              style={{
                gridTemplateColumns: "repeat(18, minmax(0, 1fr))",
                gridTemplateRows: "repeat(7, minmax(2.4rem, auto))",
              }}
            >
              {main.map((e) => (
                <ElementCell
                  key={e.z}
                  el={e}
                  selected={sel.z === e.z}
                  onSelect={setSel}
                  style={{ gridColumn: e.g, gridRow: e.p }}
                />
              ))}
            </div>
            <div
              className="mt-4 grid w-[52rem] gap-px sm:w-full"
              style={{ gridTemplateColumns: "repeat(15, minmax(0, 1fr))" }}
            >
              {lan.map((e) => (
                <ElementCell
                  key={e.z}
                  el={e}
                  selected={sel.z === e.z}
                  onSelect={setSel}
                />
              ))}
            </div>
            <div
              className="mt-1 grid w-[52rem] gap-px sm:w-full"
              style={{ gridTemplateColumns: "repeat(15, minmax(0, 1fr))" }}
            >
              {act.map((e) => (
                <ElementCell
                  key={e.z}
                  el={e}
                  selected={sel.z === e.z}
                  onSelect={setSel}
                />
              ))}
            </div>
          </div>

          <aside className="h-fit rounded-xl bg-bg-elevated p-5 shadow-[var(--shadow-border)]">
            <p className="font-mono text-xs text-muted tabular-nums">{sel.z}</p>
            <p className="font-display text-4xl font-medium tracking-tight">{sel.s}</p>
            <p className="mt-1 text-lg">{sel.n}</p>
            <dl className="mt-4 space-y-2 text-sm">
              <Row k="Ar" v={sel.ar} />
              <Row k="csoport" v={sel.g === 0 ? "f-mező" : String(sel.g)} />
              <Row
                k="periódus"
                v={
                  sel.p <= 7
                    ? String(sel.p)
                    : sel.p === 8
                      ? "6 (lantanoida)"
                      : "7 (aktinoida)"
                }
              />
              <Row k="mező" v={`${sel.block}-mező`} />
              <Row
                k="EN (Pauling)"
                v={sel.en === null ? "—" : sel.en.toFixed(2).replace(".", ",")}
              />
            </dl>
          </aside>
        </div>
      </main>
    </AppShell>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex justify-between gap-3 border-b border-line py-1.5 last:border-0">
      <dt className="text-muted">{k}</dt>
      <dd className="font-mono text-ink">{v}</dd>
    </div>
  );
}

function ElementCell({
  el,
  selected,
  onSelect,
  style,
}: {
  el: Elem;
  selected: boolean;
  onSelect: (e: Elem) => void;
  style?: CSSProperties;
}) {
  return (
    <button
      type="button"
      onClick={() => onSelect(el)}
      style={style}
      className={cn(
        "flex min-h-11 flex-col items-center justify-center rounded-sm px-0.5 py-1 text-center leading-none",
        selected ? "bg-accent text-accent-fg" : "bg-paper text-ink hover:bg-line",
        !selected && el.block === "d" && "bg-paper/80",
        !selected && el.block === "f" && "bg-line/70",
      )}
    >
      <span className="font-mono text-xs opacity-70 tabular-nums">{el.z}</span>
      <span className="text-xs font-medium">{el.s}</span>
    </button>
  );
}
