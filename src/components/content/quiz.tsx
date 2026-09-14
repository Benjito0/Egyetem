import { useState } from "react";
import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useProgress } from "@/lib/progress";
import { cn } from "@/lib/utils";

export type QuizItem = {
  q: string;
  options: string[];
  answer: number;
  why: string;
};

export function Quiz({ slug, items }: { slug: string; items: QuizItem[] }) {
  const [picked, setPicked] = useState<(number | null)[]>(() => items.map(() => null));
  const [done, setDone] = useState(false);
  const setQuiz = useProgress((s) => s.setQuiz);

  const score = picked.reduce<number>(
    (acc, p, i) => acc + (p === items[i].answer ? 1 : 0),
    0,
  );

  function submit() {
    const s = picked.reduce<number>(
      (acc, p, i) => acc + (p === items[i].answer ? 1 : 0),
      0,
    );
    setDone(true);
    setQuiz(slug, s);
  }

  function reset() {
    setPicked(items.map(() => null));
    setDone(false);
  }

  return (
    <section className="scroll-mt-24 border-t border-line pt-10">
      <h2 className="font-display text-2xl font-medium tracking-tight">Ellenőrző kérdések</h2>
      <p className="mt-2 text-sm text-muted">
        Három rövid kérdés. A válasz után magyarázatot is kapsz — ez a jegyzet része, nem vizsga.
      </p>
      <ol className="mt-6 space-y-8">
        {items.map((item, i) => (
          <li key={item.q}>
            <p className="font-medium">
              <span className="mr-2 font-mono text-sm text-accent">{i + 1}.</span>
              {item.q}
            </p>
            <div className="mt-3 grid gap-2">
              {item.options.map((opt, j) => {
                const selected = picked[i] === j;
                const correct = done && j === item.answer;
                const wrong = done && selected && j !== item.answer;
                return (
                  <button
                    key={opt}
                    type="button"
                    disabled={done}
                    onClick={() =>
                      setPicked((prev) => {
                        const next = [...prev];
                        next[i] = j;
                        return next;
                      })
                    }
                    className={cn(
                      "flex min-h-11 items-start gap-3 rounded-lg px-3 py-2.5 text-left text-sm shadow-[var(--shadow-border)] transition-[box-shadow,background-color] duration-150",
                      selected && !done && "bg-paper",
                      correct && "bg-ok/10",
                      wrong && "bg-bad/10",
                      !selected && !done && "bg-bg-elevated hover:shadow-[var(--shadow-border-hover)]",
                    )}
                  >
                    <span className="mt-0.5 font-mono text-xs text-muted">
                      {String.fromCharCode(65 + j)}
                    </span>
                    <span className="flex-1">{opt}</span>
                    {correct ? <Check className="mt-0.5 size-4 text-ok" /> : null}
                    {wrong ? <X className="mt-0.5 size-4 text-bad" /> : null}
                  </button>
                );
              })}
            </div>
            {done ? (
              <p className="mt-3 text-sm leading-relaxed text-muted">{item.why}</p>
            ) : null}
          </li>
        ))}
      </ol>
      <div className="mt-6 flex flex-wrap items-center gap-3">
        {!done ? (
          <Button
            onClick={submit}
            disabled={picked.some((p) => p === null)}
          >
            Ellenőrzés
          </Button>
        ) : (
          <>
            <p className="font-mono text-sm tabular-nums text-accent">
              {score}/{items.length} helyes
            </p>
            <Button variant="outline" onClick={reset}>
              Újra
            </Button>
          </>
        )}
      </div>
    </section>
  );
}
