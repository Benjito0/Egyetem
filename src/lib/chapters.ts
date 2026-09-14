export type ChapterGroup = "szerkezet" | "halmaz" | "reakcio" | "vegyuletek";

export type Chapter = {
  slug: string;
  n: string;
  title: string;
  lead: string;
  minutes: number;
  group: ChapterGroup;
};

export const GROUPS: Record<ChapterGroup, string> = {
  szerkezet: "Anyagszerkezet",
  halmaz: "Halmazok",
  reakcio: "Reakciók",
  vegyuletek: "Vegyületek",
};

export const CHAPTERS: Chapter[] = [
  {
    slug: "atomok",
    n: "01",
    title: "Az atomok felépítése",
    lead: "Alkotók, rendszám, izotóp, mól, elektronszerkezet.",
    minutes: 12,
    group: "szerkezet",
  },
  {
    slug: "periodusos",
    n: "02",
    title: "A periódusos rendszer",
    lead: "Csoportok, periódusok, periodikus tulajdonságok.",
    minutes: 8,
    group: "szerkezet",
  },
  {
    slug: "molekulak",
    n: "03",
    title: "Molekulák és kovalens kötés",
    lead: "Kötésfajták, polaritás, VSEPR, molekulageometria.",
    minutes: 14,
    group: "szerkezet",
  },
  {
    slug: "halmazok",
    n: "04",
    title: "Anyagi halmazok",
    lead: "Másodrendű kötések, gázok, folyadékok, rácstípusok.",
    minutes: 12,
    group: "halmaz",
  },
  {
    slug: "kolloidok",
    n: "05",
    title: "Kolloid állapot",
    lead: "Mérettartomány, típusok, Tyndall-effektus.",
    minutes: 7,
    group: "halmaz",
  },
  {
    slug: "reakciok",
    n: "06",
    title: "Kémiai reakciók és egyensúly",
    lead: "Sebesség, hőszínezet, típusok, dinamikus egyensúly.",
    minutes: 14,
    group: "reakcio",
  },
  {
    slug: "savak",
    n: "07",
    title: "Savak és lúgok",
    lead: "Brønsted, pH, erőség, puffer, vizes egyensúlyok.",
    minutes: 10,
    group: "reakcio",
  },
  {
    slug: "elektro",
    n: "08",
    title: "Elektrokémia",
    lead: "Elektródpotenciál, galvánelem, elektrolízis.",
    minutes: 10,
    group: "reakcio",
  },
  {
    slug: "szervetlen",
    n: "09",
    title: "Szervetlen kémia",
    lead: "H₂, oxigén, kén- és nitrogén-oxidok, karbonátok, fémek.",
    minutes: 14,
    group: "vegyuletek",
  },
  {
    slug: "szerves",
    n: "10",
    title: "Szerves kémiai alapok",
    lead: "Szénhidrogének, alkoholok, éterek, észterek.",
    minutes: 12,
    group: "vegyuletek",
  },
];

export function chapterBySlug(slug: string) {
  return CHAPTERS.find((c) => c.slug === slug);
}

export function neighbors(slug: string) {
  const i = CHAPTERS.findIndex((c) => c.slug === slug);
  return {
    prev: i > 0 ? CHAPTERS[i - 1] : undefined,
    next: i >= 0 && i < CHAPTERS.length - 1 ? CHAPTERS[i + 1] : undefined,
  };
}
