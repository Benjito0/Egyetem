import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Section({
  id,
  title,
  children,
}: {
  id?: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24">
      <h2 className="font-display text-2xl font-medium tracking-tight text-ink">{title}</h2>
      <div className="mt-4 space-y-4 text-base leading-relaxed text-ink">{children}</div>
    </section>
  );
}

export function Formula({
  children,
  caption,
}: {
  children: ReactNode;
  caption?: string;
}) {
  return (
    <figure className="overflow-x-auto rounded-lg bg-paper px-4 py-3 sm:px-5 sm:py-4">
      <div className="font-mono text-sm leading-relaxed text-ink sm:text-base">
        {children}
      </div>
      {caption ? (
        <figcaption className="mt-2 text-sm text-muted">{caption}</figcaption>
      ) : null}
    </figure>
  );
}

export function Example({ title, children }: { title: string; children: ReactNode }) {
  return (
    <aside className="rounded-xl bg-bg-elevated p-4 shadow-[var(--shadow-border)] sm:p-5">
      <p className="text-xs font-medium tracking-[0.14em] text-accent uppercase">
        Példa · {title}
      </p>
      <div className="mt-3 space-y-3 text-base leading-relaxed">{children}</div>
    </aside>
  );
}

export function BuildOn({ children }: { children: ReactNode }) {
  return (
    <aside className="border-l-2 border-accent pl-4">
      <p className="text-xs font-medium tracking-[0.14em] text-accent uppercase">
        Egyetemi kitekintés
      </p>
      <div className="mt-2 space-y-2 text-sm leading-relaxed text-muted">{children}</div>
    </aside>
  );
}

export function Note({ children }: { children: ReactNode }) {
  return (
    <p className="rounded-lg bg-paper px-4 py-3 text-sm leading-relaxed text-muted">{children}</p>
  );
}

export function KeyGrid({
  items,
}: {
  items: { k: string; v: ReactNode }[];
}) {
  return (
    <dl className="grid gap-px overflow-hidden rounded-xl bg-line sm:grid-cols-2">
      {items.map((it) => (
        <div key={it.k} className="bg-bg-elevated px-4 py-3">
          <dt className="text-xs font-medium tracking-wide text-muted uppercase">{it.k}</dt>
          <dd className="mt-1 text-sm leading-relaxed text-ink">{it.v}</dd>
        </div>
      ))}
    </dl>
  );
}

export function DataTable({
  head,
  rows,
  caption,
}: {
  head: string[];
  rows: ReactNode[][];
  caption?: string;
}) {
  return (
    <figure className="overflow-x-auto rounded-xl bg-bg-elevated shadow-[var(--shadow-border)]">
      <table className="w-full min-w-[28rem] text-left text-sm">
        <thead>
          <tr className="border-b border-line">
            {head.map((h) => (
              <th key={h} className="px-3 py-2.5 font-medium text-muted first:pl-4 last:pr-4">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-line last:border-0">
              {row.map((cell, j) => (
                <td
                  key={j}
                  className={cn(
                    "px-3 py-2.5 align-top text-ink first:pl-4 last:pr-4",
                    j === 0 && "font-medium",
                  )}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {caption ? (
        <figcaption className="border-t border-line px-4 py-2 text-xs text-muted">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

export function FigureFrame({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <figure className="overflow-hidden rounded-xl bg-bg-elevated shadow-[var(--shadow-border)]">
      <div className="px-4 pt-4 sm:px-5 sm:pt-5">{children}</div>
      <figcaption className="px-4 py-3 text-sm text-muted sm:px-5">{title}</figcaption>
    </figure>
  );
}
