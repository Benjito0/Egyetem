import { Link } from "@tanstack/react-router";
import { AppShell } from "@/components/layout/app-shell";

export function NotFound() {
  return (
    <AppShell>
      <main className="px-4 py-16 sm:px-8">
        <h1 className="font-display text-3xl font-medium tracking-tight">Nincs ilyen oldal</h1>
        <p className="mt-3 text-muted">A keresett fejezet vagy cím nem része a jegyzetnek.</p>
        <Link
          to="/"
          className="mt-6 inline-flex h-11 items-center text-sm text-accent underline-offset-4 hover:underline"
        >
          Vissza a tartalomjegyzékhez
        </Link>
      </main>
    </AppShell>
  );
}
