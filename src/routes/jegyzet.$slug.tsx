import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { AppShell } from "@/components/layout/app-shell";
import { CHAPTER_PAGES } from "@/content";
import { chapterBySlug, neighbors } from "@/lib/chapters";
import { useProgress } from "@/lib/progress";

export const Route = createFileRoute("/jegyzet/$slug")({
  component: ChapterPage,
});

function ChapterPage() {
  const { slug } = Route.useParams();
  const chapter = chapterBySlug(slug);
  const Page = CHAPTER_PAGES[slug];
  const markRead = useProgress((s) => s.markRead);

  useEffect(() => {
    if (chapter) markRead(chapter.slug);
  }, [chapter, markRead]);

  if (!chapter || !Page) throw notFound();

  const { prev, next } = neighbors(slug);

  return (
    <AppShell>
      <article className="px-4 py-8 sm:px-8 sm:py-10">
        <p className="text-xs font-medium tracking-[0.16em] text-accent uppercase">
          {chapter.n} · {chapter.minutes} perc
        </p>
        <h1 className="mt-2 max-w-2xl font-display text-3xl font-medium tracking-tight sm:text-4xl">
          {chapter.title}
        </h1>
        <p className="mt-3 max-w-2xl text-lg text-muted">{chapter.lead}</p>
        <div className="mt-10 max-w-2xl">
          <Page />
        </div>
        <nav className="mt-16 flex max-w-2xl flex-col gap-3 border-t border-line pt-8 sm:flex-row sm:justify-between">
          {prev ? (
            <Link
              to="/jegyzet/$slug"
              params={{ slug: prev.slug }}
              className="inline-flex min-h-11 items-center gap-2 text-sm text-ink no-underline"
            >
              <ArrowLeft className="size-4" />
              {prev.title}
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link
              to="/jegyzet/$slug"
              params={{ slug: next.slug }}
              className="inline-flex min-h-11 items-center gap-2 text-sm text-ink no-underline sm:ml-auto"
            >
              {next.title}
              <ArrowRight className="size-4" />
            </Link>
          ) : (
            <Link to="/" className="inline-flex min-h-11 items-center gap-2 text-sm text-accent no-underline sm:ml-auto">
              Vissza a térképhez
              <ArrowRight className="size-4" />
            </Link>
          )}
        </nav>
      </article>
    </AppShell>
  );
}
