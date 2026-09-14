import type { ComponentType } from "react";
import { AtomokChapter } from "./atomok";
import { PeriodusosChapter } from "./periodusos";
import { MolekulakChapter } from "./molekulak";
import { HalmazokChapter } from "./halmazok";
import { KolloidokChapter } from "./kolloidok";
import { ReakciokChapter } from "./reakciok";
import { SavakChapter } from "./savak";
import { ElektroChapter } from "./elektro";
import { SzervetlenChapter } from "./szervetlen";
import { SzervesChapter } from "./szerves";

export const CHAPTER_PAGES: Record<string, ComponentType> = {
  atomok: AtomokChapter,
  periodusos: PeriodusosChapter,
  molekulak: MolekulakChapter,
  halmazok: HalmazokChapter,
  kolloidok: KolloidokChapter,
  reakciok: ReakciokChapter,
  savak: SavakChapter,
  elektro: ElektroChapter,
  szervetlen: SzervetlenChapter,
  szerves: SzervesChapter,
};
