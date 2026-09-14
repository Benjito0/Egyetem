import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowRight, Table2, BookOpen } from "lucide-react";
import { AppShell } from "@/components/layout/app-shell";
import { CHAPTERS, GROUPS, type ChapterGroup } from "@/lib/chapters";
import { useProgress } from "@/lib/progress";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const read = useProgress((s) => s.read);
  const quiz = useProgress((s) => s.quiz);
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => setHydrated(true), []);

  const readCount = hydrated ? CHAPTERS.filter((c) => read[c.slug]).length : 0;
  const groups = (Object.keys(GROUPS) as ChapterGroup[]).map((g) => ({
    g,
    items: CHAPTERS.filter((c) => c.group === g),
  }));

  return (
    <AppShell>
      <main className="px-4 py-10 sm:px-8 sm:py-14">
        <p className="text-xs font-medium tracking-[0.18em] text-accent uppercase">
          Általános · szervetlen · szerves
        </p>
        <h1 className="mt-3 max-w-xl font-display text-4xl font-medium tracking-tight sm:text-5xl">
          Kémia, amire az egyetemet építed.
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
          Tömör, ábrás alapjegyzet a bemásolt témakörökből: atomoktól a
          kovalens kötésen, rácsokon és egyensúlyokon át a vasig, az észterig.
          Minden fejezetben példa, ábra és három ellenőrző kérdés — egyetemi
          kitekintéssel, nem tankönyvmásolattal.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            to="/jegyzet/$slug"
            params={{ slug: "atomok" }}
            className="inline-flex h-12 items-center gap-2 rounded-md bg-accent px-5 text-sm font-medium text-accent-fg no-underline"
          >
            Első fejezet
            <ArrowRight className="size-4" />
          </Link>
          <Link
            to="/tabla"
            className="inline-flex h-12 items-center gap-2 rounded-md px-5 text-sm font-medium text-ink no-underline shadow-[var(--shadow-border)]"
          >
            <Table2 className="size-4" />
            Periódusos táblázat
          </Link>
          <Link
            to="/kepletek"
            className="inline-flex h-12 items-center gap-2 rounded-md px-5 text-sm font-medium text-ink no-underline shadow-[var(--shadow-border)]"
          >
            <BookOpen className="size-4" />
            Képlettár
          </Link>
        </div>

        <div className="mt-10 max-w-xl">
          <div className="flex items-center justify-between text-sm text-muted">
            <span>Haladás</span>
            <span className="font-mono tabular-nums">
              {readCount}/{CHAPTERS.length} fejezet
            </span>
          </div>
          <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-paper">
            <div
              className="h-full rounded-full bg-accent transition-[width] duration-300"
              style={{ width: `${(readCount / CHAPTERS.length) * 100}%` }}
            />
          </div>
        </div>

        <div className="mt-14 space-y-12">
          {groups.map(({ g, items }) => (
            <section key={g}>
              <h2 className="font-display text-2xl font-medium tracking-tight">{GROUPS[g]}</h2>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {items.map((c) => {
                  const done = hydrated && read[c.slug];
                  const q = hydrated ? quiz[c.slug] : undefined;
                  return (
                    <Link
                      key={c.slug}
                      to="/jegyzet/$slug"
                      params={{ slug: c.slug }}
                      className={cn(
                        "group rounded-xl bg-bg-elevated p-5 no-underline shadow-[var(--shadow-border)] transition-[box-shadow] duration-150 hover:shadow-[var(--shadow-border-hover)]",
                      )}
                    >
                      <div className="flex items-baseline justify-between gap-3">
                        <span className="font-mono text-xs text-accent">{c.n}</span>
                        <span className="text-xs text-subtle">{c.minutes} perc</span>
                      </div>
                      <h3 className="mt-2 font-display text-xl font-medium tracking-tight text-ink">
                        {c.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted">{c.lead}</p>
                      <p className="mt-4 flex items-center gap-2 text-sm text-accent">
                        {done ? "Újraolvasás" : "Megnyitás"}
                        {q !== undefined ? (
                          <span className="font-mono text-xs text-muted">· {q}/3</span>
                        ) : null}
                        <ArrowRight className="size-3.5 transition-transform duration-150 group-hover:translate-x-0.5" />
                      </p>
                    </Link>
                  );
                })}
              </div>
            </section>
          ))}
        </div>

        <footer className="mt-16 border-t border-line pt-8 text-sm leading-relaxed text-muted">
          <p>
            A jegyzet a magyar érettségi témakörökre és az egyetemi általános
            kémia (pl. Benkő: Kémiai alapok) ívére épül. Saját összefoglaló,
            ábrákkal és számolt példákkal — nem másolt tankönyvszöveg.
          </p>
        </footer>
      </main>
    </AppShell>
  );
}
