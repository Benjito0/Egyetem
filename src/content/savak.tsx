import {
  BuildOn,
  DataTable,
  Example,
  Formula,
  Note,
  Section,
} from "@/components/content/primitives";
import { Quiz } from "@/components/content/quiz";
import { PhScale } from "@/components/diagrams/diagrams";

export function SavakChapter() {
  return (
    <div className="space-y-12">
      <Section title="Fogalmak">
        <DataTable
          head={["elmélet", "sav", "bázis"]}
          rows={[
            ["Arrhenius", "H⁺-t ad vízben", "OH⁻-t ad vízben"],
            ["Brønsted–Lowry", "protonleadó", "protonfelvevő"],
            ["Lewis", "elektronpár-akceptor", "elektronpár-donor"],
          ]}
        />
        <p>
          Minden Brønsted-sav–bázis pár konjugált: HA / A⁻, B / BH⁺. A víz
          amfoter: sav is, bázis is.
        </p>
        <Formula>
          H<sub>2</sub>O + H<sub>2</sub>O ⇌ H<sub>3</sub>O⁺ + OH⁻
          <br />
          K<sub>w</sub> = [H<sub>3</sub>O⁺][OH⁻] = 1,0·10⁻¹⁴ (25 °C)
        </Formula>
      </Section>

      <Section title="pH, erőség">
        <PhScale />
        <Formula>
          pH = −lg [H<sub>3</sub>O⁺] · pOH = −lg [OH⁻] · pH + pOH = 14 (25 °C)
        </Formula>
        <DataTable
          head={["", "erős", "gyenge"]}
          rows={[
            [
              "sav",
              "teljesen disszociál: HCl, HBr, HI, HNO₃, H₂SO₄ (1.), HClO₄",
              "részlegesen: CH₃COOH, H₂CO₃, H₂SO₃, H₃PO₄, HF",
            ],
            [
              "bázis",
              "NaOH, KOH, Ba(OH)₂, Ca(OH)₂",
              "NH₃, aminok, CO₃²⁻, CH₃COO⁻",
            ],
          ]}
        />
        <Formula caption="Minél kisebb a pKa, annál erősebb a sav. pKa + pKb = 14 konjugált párra.">
          K<sub>a</sub> = [H₃O⁺][A⁻]/[HA] · pK<sub>a</sub> = −lg K<sub>a</sub>
        </Formula>
        <Example title="0,10 M HCl és 0,10 M ecetsav">
          <p>
            HCl: [H₃O⁺] = 0,10 → pH = 1,00. Ecetsav (K<sub>a</sub> = 1,8·10⁻⁵):
            [H₃O⁺] ≈ √(K<sub>a</sub>·c) = √(1,8·10⁻⁶) ≈ 1,3·10⁻³ → pH ≈ 2,9.
            Azonos koncentráció, három nagyságrendnyi különbség a [H₃O⁺]-ben.
          </p>
        </Example>
      </Section>

      <Section title="Vizes egyensúlyok, sók, puffer">
        <p>
          Semlegesítés: sav + bázis → só + víz. A só oldatának kémhatása a
          ionok hidrolízisétől függ.
        </p>
        <DataTable
          head={["só", "oldat"]}
          rows={[
            ["erős sav + erős bázis (NaCl, KNO₃)", "semleges"],
            ["erős sav + gyenge bázis (NH₄Cl)", "savas (NH₄⁺ hidrolizál)"],
            ["gyenge sav + erős bázis (CH₃COONa, Na₂CO₃)", "lúgos (anion hidrolizál)"],
            ["gyenge + gyenge", "a két K versenye"],
          ]}
        />
        <p>
          <strong>Puffer:</strong> gyenge sav + konjugált bázisa (vagy gyenge
          bázis + konjugált sav). Kis mennyiségű H⁺/OH⁻-t elnyel, a pH kevéssé
          változik.
        </p>
        <Formula caption="Henderson–Hasselbalch — a vér pH-ja (~7,4) a H₂CO₃/HCO₃⁻ pufferen áll.">
          pH = pK<sub>a</sub> + lg ([A⁻]/[HA])
        </Formula>
        <BuildOn>
          <p>
            Többértékű savak lépcsős K<sub>a1</sub> nagyobb, mint K<sub>a2</sub>, az
            pedig K<sub>a3</sub>-nál. Titrálási görbe, ekvivalenciapont, indikátor (pK<sub>in</sub>
            az átcsapási tartományban). Az oldhatósági szorzat: K<sub>sp</sub>(AgCl)
            = [Ag⁺][Cl⁻]; közös ion elnyomja az oldódást.
          </p>
        </BuildOn>
        <Note>
          Savmaradék: Cl⁻ klorid, SO₄²⁻ szulfát, SO₃²⁻ szulfit, NO₃⁻ nitrát,
          NO₂⁻ nitrit, CO₃²⁻ karbonát, HCO₃⁻ hidrogén-karbonát, CH₃COO⁻ acetát.
        </Note>
      </Section>

      <Quiz
        slug="savak"
        items={[
          {
            q: "A Brønsted szerint a NH₃…",
            options: [
              "sav, mert van H-je",
              "bázis, mert protont vesz fel (NH₄⁺)",
              "sem sav, sem bázis",
              "csak Lewis-bázis, Brønsted szerint nem",
            ],
            answer: 1,
            why: "NH₃ + H⁺ → NH₄⁺. (Egyben Lewis-bázis is a nemkötő pár miatt.)",
          },
          {
            q: "Na₂CO₃ vizes oldata lúgos, mert…",
            options: [
              "a Na⁺ hidrolizál",
              "a CO₃²⁻ protonokat vesz fel a vízből, OH⁻ marad",
              "erős sav sója",
              "mindig pH = 7 a sóknál",
            ],
            answer: 1,
            why: "CO₃²⁻ + H₂O ⇌ HCO₃⁻ + OH⁻. Gyenge sav (H₂CO₃) erős bázissal alkotott sója.",
          },
          {
            q: "Egy HA/A⁻ puffer pH-ja akkor egyenlő pKa-val, ha…",
            options: ["[HA] ≫ [A⁻]", "[HA] = [A⁻]", "a puffer savas", "K_w = Ka"],
            answer: 1,
            why: "Henderson–Hasselbalch: lg(1) = 0 → pH = pKa. Ez a puffer kapacitásának maximuma is.",
          },
        ]}
      />
    </div>
  );
}
