import {
  BuildOn,
  DataTable,
  Example,
  KeyGrid,
  Note,
  Section,
} from "@/components/content/primitives";
import { Quiz } from "@/components/content/quiz";
import { TrendDiagram } from "@/components/diagrams/diagrams";
import { Link } from "@tanstack/react-router";

export function PeriodusosChapter() {
  return (
    <div className="space-y-12">
      <Section title="Felépítés">
        <p>
          A periódusos rendszer az elemeket növekvő rendszám szerint rendezi. A
          hasonló vegyértékszerkezetű elemek függőleges{" "}
          <strong>csoportokba</strong> (1–18), a héjak kiépülése szerint
          vízszintes <strong>periódusokba</strong> (1–7) kerülnek.
        </p>
        <KeyGrid
          items={[
            { k: "s-mező", v: "1–2. csoport: alkálifémek, alkáliföldfémek (+ He)." },
            { k: "p-mező", v: "13–18. csoport: bór-csoporttól a nemesgázokig." },
            { k: "d-mező", v: "3–12. csoport: átmeneti fémek (vegyértékhéj (n−1)d ns)." },
            { k: "f-mező", v: "Lantanoidák és aktinoidák." },
          ]}
        />
        <p>
          A teljes, kattintható táblázat:{" "}
          <Link to="/tabla" className="text-accent underline-offset-4 hover:underline">
            periódusos táblázat
          </Link>
          .
        </p>
      </Section>

      <Section title="Periodikus tulajdonságok">
        <TrendDiagram />
        <DataTable
          head={["tulajdonság", "csoporton lefelé", "periódusban jobbra"]}
          rows={[
            ["atomsugár", "nő (új héj)", "csökken (nagyobb Z, ugyanaz a héj)"],
            ["ionizációs energia, I", "csökken", "nő (kivéve fél-/telt alhéj)"],
            ["elektronaffinitás", "általában csökken", "nő a halogének felé"],
            ["elektronegativitás, EN", "csökken", "nő (max. F)"],
            ["fémes jelleg", "nő", "csökken"],
          ]}
        />
        <Note>
          Ionizációs energia: az a minimális energia, amellyel a leggyengébben
          kötött elektron leszakítható a gázhalmazállapotú atomból. Az első I₁
          mindig kisebb, mint I₂ — a kationból nehezebb elektront elvenni.
        </Note>
        <Example title="Na és Cl egy periódusban">
          <p>
            Na: nagy sugár, kicsi I₁, kicsi EN → könnyen Na⁺. Cl: kis sugár, nagy
            I, nagy EN → szívesen Cl⁻. A ΔEN ≈ 2,2, ezért NaCl ionos. Ugyanez a
            logika magyarázza, miért oxidálódnak könnyen a bal oldali fémek, és
            miért oxidálószerek a jobb oldali nemfémek.
          </p>
        </Example>
        <BuildOn>
          <p>
            A effektív magtöltés (Z<sub>eff</sub> ≈ Z − S, Slater-szabály)
            kvantitatívan adja a trendeket. Az átmeneti fémeknél a 3d/4s
            közelsége miatt a oxidációs számok változatosak, a lantanoida-kontrakció
            pedig a 5. és 6. periódus d-elemeinek hasonló sugarát okozza.
          </p>
        </BuildOn>
      </Section>

      <Quiz
        slug="periodusos"
        items={[
          {
            q: "Melyik nő a periódusban balról jobbra?",
            options: ["atomsugár", "fémes jelleg", "elektronegativitás", "kation mérete azonos töltés mellett mindig"],
            answer: 2,
            why: "Jobbra nő Z_eff, a héj összehúzódik, EN és I nő, a fémes jelleg csökken.",
          },
          {
            q: "Az alkálifémek közös jellemzője:",
            options: [
              "ns² vegyértékszerkezet",
              "ns¹ vegyértékszerkezet, +1 ion",
              "mind diamágneses szilárd",
              "mind atomrácsot alkot",
            ],
            answer: 1,
            why: "1. csoport: ns¹, könnyen leadják az egy vegyértékelektront → M⁺. Fémrács, nem atomrács.",
          },
          {
            q: "A fluor elektronegativitása a legnagyobb, mert…",
            options: [
              "a legnagyobb a rendszáma",
              "kicsi a sugara és nagy a magtöltése a vegyértékhéjon",
              "nemesgázszerkezete van",
              "mindig −1 oxidációs számú",
            ],
            answer: 1,
            why: "A 2. periódusban kicsi a sugár, Z_eff nagy. A He nemesgáz, nincs értelmes EN-kötésképe.",
          },
        ]}
      />
    </div>
  );
}
