import { create } from "zustand";
import { persist } from "zustand/middleware";

type ProgressState = {
  read: Record<string, boolean>;
  quiz: Record<string, number>;
  markRead: (slug: string) => void;
  setQuiz: (slug: string, score: number) => void;
};

export const useProgress = create<ProgressState>()(
  persist(
    (set) => ({
      read: {},
      quiz: {},
      markRead: (slug) =>
        set((s) => ({ read: { ...s.read, [slug]: true } })),
      setQuiz: (slug, score) =>
        set((s) => ({ quiz: { ...s.quiz, [slug]: score } })),
    }),
    { name: "kemia-kompakt-progress" },
  ),
);
