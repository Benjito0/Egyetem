import { useEffect, useState, type ReactNode } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { BookOpen, Menu, Table2, X } from "lucide-react";
import { CHAPTERS, GROUPS, type ChapterGroup } from "@/lib/chapters";
import { useProgress } from "@/lib/progress";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function AppShell({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <div className="min-h-dvh bg-bg text-ink">
      <header className="sticky top-0 z-40 border-b border-line/80 bg-bg/90 backdrop-blur-sm">
        <div className="mx-auto flex h-14 max-w-6xl items-center gap-3 px-4">
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            aria-label={open ? "Menü bezárása" : "Menü"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
          <Link to="/" className="flex items-baseline gap-2 no-underline">
            <span className="font-display text-lg font-medium tracking-tight">Kémia kompakt</span>
            <span className="hidden text-xs text-muted sm:inline">egyetemi alapjegyzet</span>
          </Link>
          <div className="ml-auto flex items-center gap-1">
            <Link
              to="/tabla"
              className="inline-flex h-11 items-center gap-2 rounded-md px-3 text-sm text-ink hover:bg-paper"
            >
              <Table2 className="size-4" />
              <span className="hidden sm:inline">Táblázat</span>
            </Link>
            <Link
              to="/kepletek"
              className="inline-flex h-11 items-center gap-2 rounded-md px-3 text-sm text-ink hover:bg-paper"
            >
              <BookOpen className="size-4" />
              <span className="hidden sm:inline">Képlettár</span>
            </Link>
          </div>
        </div>
      </header>

      {open ? (
        <div className="fixed inset-0 z-30 lg:hidden">
          <button
            type="button"
            className="absolute inset-0 bg-ink/30"
            aria-label="Háttér bezárása"
            onClick={() => setOpen(false)}
          />
          <nav className="absolute top-14 left-0 flex h-[calc(100dvh-3.5rem)] w-[min(20rem,88vw)] flex-col overflow-y-auto bg-bg-elevated p-4 shadow-[var(--shadow-border)]">
            <NavList />
          </nav>
        </div>
      ) : null}

      <div className="mx-auto grid max-w-6xl lg:grid-cols-[16.5rem_1fr]">
        <aside className="sticky top-14 hidden h-[calc(100dvh-3.5rem)] overflow-y-auto border-r border-line p-4 lg:block">
          <NavList />
        </aside>
        <div className="min-w-0">{children}</div>
      </div>
    </div>
  );
}

function NavList() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const read = useProgress((s) => s.read);
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => setHydrated(true), []);

  const groups = (Object.keys(GROUPS) as ChapterGroup[]).map((g) => ({
    g,
    items: CHAPTERS.filter((c) => c.group === g),
  }));

  return (
    <div className="space-y-6">
      {groups.map(({ g, items }) => (
        <div key={g}>
          <p className="px-2 text-[11px] font-medium tracking-[0.16em] text-subtle uppercase">
            {GROUPS[g]}
          </p>
          <ul className="mt-2 space-y-1">
            {items.map((c) => {
              const href = `/jegyzet/${c.slug}`;
              const active = pathname === href;
              const done = hydrated && read[c.slug];
              return (
                <li key={c.slug}>
                  <Link
                    to="/jegyzet/$slug"
                    params={{ slug: c.slug }}
                    className={cn(
                      "flex min-h-11 items-center gap-3 rounded-md px-2 text-sm no-underline",
                      active ? "bg-paper text-ink" : "text-muted hover:bg-paper hover:text-ink",
                    )}
                  >
                    <span className="w-5 font-mono text-[11px] text-accent">{c.n}</span>
                    <span className="flex-1 leading-snug">{c.title}</span>
                    {done ? (
                      <span className="size-1.5 rounded-full bg-accent" aria-hidden />
                    ) : null}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </div>
  );
}
