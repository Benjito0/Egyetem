import {
  BuildOn,
  DataTable,
  Example,
  Formula,
  Note,
  Section,
} from "@/components/content/primitives";
import { Quiz } from "@/components/content/quiz";
import { BondTypes, EnScale, VseprExplorer } from "@/components/diagrams/diagrams";

export function MolekulakChapter() {
  return (
    <div className="space-y-12">
      <Section title="A kovalens kötés">
        <p>
          Kovalens kötés: közös elektronpár (vagy párok) két atom között. Akkor
          alakul ki, ha az EN-különbség nem túl nagy, és mindkét atomnak van
          párosítatlan elektronja vagy üres pályája. Jellemzői: kötéshossz,
          kötési energia, kötésszög, polaritás, rendűség.
        </p>
        <BondTypes />
        <DataTable
          head={["fajta", "lényege", "példa"]}
          rows={[
            ["egyszeres", "egy σ-kötés (tengelyszimmetrikus átfedés)", "H–H, C–C, C–H"],
            ["kétszeres", "σ + π (síkszimmetrikus átfedés)", "O=O, C=C, CO₂"],
            ["hármas", "σ + 2π", "N≡N, C≡C (etin)"],
            [
              "datív (koordinációs)",
              "mindkét elektront a donor adja; az akceptor üres pályát kínál",
              "H₃N→BF₃, H₃O⁺, [Cu(NH₃)₄]²⁺",
            ],
            [
              "lokalizált",
              "az elektronpár két atomhoz köthető",
              "C–C alkánokban",
            ],
            [
              "delokalizált",
              "a π-elektronok legalább 3 atomon osztoznak",
              "benzol, O₃, CO₃²⁻, grafit",
            ],
          ]}
        />
        <Note>
          A kötési energia nő, a kötéshossz csökken a rendűséggel: C–C (154 pm,
          ~348 kJ/mol), C=C (134 pm, ~614 kJ/mol), C≡C (120 pm, ~839
          kJ/mol). A delokalizáció stabilizál (rezonanciaenergia).
        </Note>
      </Section>

      <Section title="A kötés polaritása">
        <p>
          Ha a két atom EN-ja különbözik, a kötő elektronpár a nagyobb EN-ú
          atom felé tolódik:{" "}
          <strong>
            parciális töltések (δ+, δ−), kötési dipólus
          </strong>
          . ΔEN = 0 → apoláris kovalens; közepes ΔEN → poláris kovalens; nagy ΔEN
          → ionos jelleg.
        </p>
        <EnScale />
        <Example title="HCl, Cl₂, NaCl">
          <p>
            Cl₂: ΔEN = 0, apoláris. HCl: ΔEN(Cl−H) = 3,16 − 2,20 = 0,96 → poláris
            kovalens, H<sup>δ+</sup>–Cl<sup>δ−</sup>. NaCl: ΔEN ≈ 2,2, a vegyület
            ionrácsot alkot, nem molekulát.
          </p>
        </Example>
      </Section>

      <Section title="A molekulák térszerkezete és polaritása">
        <p>
          A <strong>VSEPR</strong>-modell: a központi atom körül a
          vegyértékelektronpárok (kötő + nemkötő) taszítják egymást, és a
          lehető legnagyobb térállást veszik fel. A nemkötő pár erősebben
          taszít, mint a kötő — ezért az NH₃ kötésszöge 107°, a H₂O-é 104,5°,
          nem 109,5°.
        </p>
        <VseprExplorer />
        <p>
          A <strong>molekula polaritása</strong> a kötési dipólusok vektoriális
          összege. Szimmetrikus elrendezés (CO₂ lineáris, CCl₄ tetraéder, BF₃
          síkháromszög) → apoláris molekula polaris kötésekkel is. Aszimmetria
          (H₂O, NH₃, CHCl₃) → poláris molekula.
        </p>
        <Example title="Miért oldódik a HCl vízben, a CCl₄ miért nem?">
          <p>
            HCl poláris molekula, a víz is — dipól–dipól + H-kötés, jó oldódás,
            ráadásul protolízis (HCl + H₂O → H₃O⁺ + Cl⁻). CCl₄ tetraéderes,
            kötési dipólusok kiejtik egymást: apoláris, vízben nem oldódik,
            apoláris oldószerekben (hexán) igen. „Hasonló a hasonlóban.”
          </p>
        </Example>
        <BuildOn>
          <p>
            Egyetemen a VSEPR-t a hibridizáció (sp, sp², sp³, sp³d, sp³d²) és a
            molekulapálya-elmélet (MO) egészíti ki. A O₂ MO-képe magyarázza a
            diradikalitást és a paramágnesességet — Lewis-képlettel ez nem
            látszik. A dipólusmomentum (μ, Debye) mérhető; μ = 0 a szimmetria
            bizonyítéka.
          </p>
        </BuildOn>
        <Formula caption="Lewis-oktett: a 2. periódus elemei 8 vegyértékelektronra törekednek. Kivételek: H (2), Be/B (elektronhiányos), P/S (kiterjesztett oktett), gyökök (NO).">
          H₂O: kötésszög 104,5° · μ ≠ 0 · poláris
          <br />
          CO₂: 180° · μ = 0 · apoláris
        </Formula>
      </Section>

      <Quiz
        slug="molekulak"
        items={[
          {
            q: "A datív kötés lényege:",
            options: [
              "az elektronpár három atomon delokalizálódik",
              "mindkét elektront az egyik atom adja",
              "csak ionok között jön létre",
              "mindig π-kötés",
            ],
            answer: 1,
            why: "A donor nemkötő párt ad, az akceptor üres pályát. Koordinációs vegyületek, oxóniumion.",
          },
          {
            q: "Melyik molekula poláris?",
            options: ["CO₂", "BF₃", "CCl₄", "NH₃"],
            answer: 3,
            why: "NH₃ piramisos, a nemkötő pár miatt a dipólusok nem ejtik ki egymást. A többi szimmetrikus.",
          },
          {
            q: "A benzolban a C–C kötések:",
            options: [
              "váltakozó egyszeres és kétszeres",
              "mind egyszeres",
              "egyenértékű, delokalizált π-rendszer",
              "ionosak",
            ],
            answer: 2,
            why: "Hat C, hat delokalizált π-elektron. Kötéshossz 139 pm, a C–C és C=C között. A Kekulé-kép csak rezonanciahatár.",
          },
        ]}
      />
    </div>
  );
}
