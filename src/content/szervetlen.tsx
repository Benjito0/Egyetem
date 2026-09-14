import {
  DataTable,
  Example,
  Formula,
  KeyGrid,
  Note,
  Section,
} from "@/components/content/primitives";
import { Quiz } from "@/components/content/quiz";

export function SzervetlenChapter() {
  return (
    <div className="space-y-12">
      <Section title="Hidrogén">
        <KeyGrid
          items={[
            { k: "Szerkezet", v: "H₂, apoláris, egyszeres σ, molekularács (nagyon alacsony op./fp.)." },
            { k: "Előállítás", v: "Labor: Zn + 2 HCl → ZnCl₂ + H₂. Ipar: földgáz + H₂O (reformálás), víz elektrolízise." },
            { k: "Kémia", v: "Ég: 2 H₂ + O₂ → 2 H₂O (durranógáz). Redukálószer (volfrám, margarin hidrogénezés). Nemfémekkel HCl, NH₃, H₂S, H₂O." },
            { k: "Izotópok", v: "¹H protium, ²H deutérium (D₂O), ³H trícium (radioaktív)." },
          ]}
        />
      </Section>

      <Section title="Oxigén és ózon">
        <DataTable
          head={["", "O₂", "O₃ (ózon)"]}
          rows={[
            ["molekula", "apoláris, kettős (MO: diradikál, paramágneses)", "hajlított, poláris, delokalizált"],
            ["szerep", "légzés, égés", "UV-szűrő a sztratoszférában; talajközelben mérgező"],
            ["oxidálás", "közepes (lassú, T-vel nő)", "erős oxidálószer"],
          ]}
        />
        <Formula>
          3 O<sub>2</sub> ⇌ 2 O<sub>3</sub> · ΔH pozitív (UV vagy csendes kisülés)
        </Formula>
        <p>
          Égés: gyors redoxi O₂-vel, lánggal. A nemesgázok és a nemesfémek
          (Au, Pt) nem égnek. A levegő ~21% O₂, ~78% N₂.
        </p>
      </Section>

      <Section title="Kén-oxidok és kénsav">
        <p>
          A kén égésekor SO₂ (szúrós, savas eső, tartósítószer). További
          oxidáció V₂O₅-katalizátorral: SO₃. Mindkettő savanhidrid.
        </p>
        <Formula>
          S + O<sub>2</sub> → SO<sub>2</sub>
          <br />
          2 SO<sub>2</sub> + O<sub>2</sub> ⇌ 2 SO<sub>3</sub>
          <br />
          SO<sub>2</sub> + H<sub>2</sub>O ⇌ H<sub>2</sub>SO<sub>3</sub> (kénessav, gyenge, redoxiaktív)
          <br />
          SO<sub>3</sub> + H<sub>2</sub>O → H<sub>2</sub>SO<sub>4</sub> (ipar: SO₃ oleumba, majd hígítás)
        </Formula>
        <DataTable
          head={["", "H₂SO₃", "H₂SO₄"]}
          rows={[
            ["erőség", "gyenge, kétértékű", "erős (első proton), vízelvonó, oxidáló (cc., forró)"],
            ["sók", "szulfit, hidrogén-szulfit", "szulfát, hidrogén-szulfát"],
            ["jellemző", "redukálószer (I₂-t elszíntelenít)", "akkumulátor, műtrágya, vízelvonás (cukor szenesedik)"],
          ]}
        />
        <Note>
          A cc. kénsav char-olja a szerves anyagot (vízelvonás), a híg savval a
          reaktív fémek H₂-t fejlesztenek. Ólmot passziválja — ezért ólomakku.
        </Note>
      </Section>

      <Section title="Nitrogén-oxidok">
        <p>
          A N₂ apoláris, hármas kötés: kinetikailag inert (levegő 78%-a). Magas
          T-n (villám, motor) oxidok:
        </p>
        <Formula>
          N<sub>2</sub> + O<sub>2</sub> ⇌ 2 NO · ΔH pozitív
          <br />
          2 NO + O<sub>2</sub> → 2 NO<sub>2</sub> (barna, dimerizál N₂O₄-gyé)
        </Formula>
        <p>
          NO: színtelen gyök, élettani hírvivő, levegőn azonnal NO₂. NO₂: barna,
          savas eső, szmog; vízzel HNO₂ + HNO₃. A salétromsav erős sav és
          oxidálószer (cc. + Cu → NO₂, híg + Cu → NO).
        </p>
      </Section>

      <Section title="Szén-oxidok, karbonátok">
        <DataTable
          head={["", "CO", "CO₂"]}
          rows={[
            ["molekula", "poláris, hármas jellegű, mérgező (Hb)", "lineáris, apoláris, nem ég, üvegház"],
            ["előállítás", "C + kevés O₂ (generátorgáz); HCOOH bontás", "C + O₂, karbonát + sav, égés, légzés"],
            ["kémia", "redukálószer (kohászat: Fe₂O₃ + 3 CO → 2 Fe + 3 CO₂)", "CO₂ + H₂O ⇌ H₂CO₃ gyenge sav"],
          ]}
        />
        <Formula>
          CO<sub>2</sub> + H<sub>2</sub>O ⇌ H<sub>2</sub>CO<sub>3</sub> ⇌ H⁺ + HCO<sub>3</sub>⁻ ⇌ 2 H⁺ + CO<sub>3</sub>²⁻
        </Formula>
        <p>
          <strong>Karbonátok</strong> (CO₃²⁻): mészkő, szóda. Savval pezsegnek
          (CO₂). Hőre bontás: CaCO₃ → CaO + CO₂ (mészégetés).{" "}
          <strong>Hidrogén-karbonátok</strong> (HCO₃⁻): NaHCO₃ (szódabikarbóna)
          hőre/ savra CO₂ — sütőpor, gyomorsav. A HCO₃⁻ amfoter: savban CO₂, lúgban
          CO₃²⁻. A barlangok cseppköve a Ca(HCO₃)₂ ⇌ CaCO₃ + CO₂ + H₂O egyensúly.
        </p>
        <Example title="Mészkő + sósav">
          <Formula>
            CaCO<sub>3</sub> + 2 HCl → CaCl<sub>2</sub> + H<sub>2</sub>O + CO<sub>2</sub>↑
          </Formula>
          <p>A pezsgés a karbonátok/ hidrogén-karbonátok gyors azonosítója.</p>
        </Example>
      </Section>

      <Section title="Fémek: vas, alumínium, cink">
        <DataTable
          head={["", "Fe", "Al", "Zn"]}
          rows={[
            ["rács / ion", "fémrács; Fe²⁺, Fe³⁺", "fémrács; Al³⁺", "fémrács; Zn²⁺"],
            ["előfordulás", "hematit Fe₂O₃, magnetit", "bauxit", "szfalerit ZnS"],
            ["előállítás", "kohó: C/CO redukál, nyersvas → acél", "Al₂O₃ olvadékelektrolízis (Hall–Héroult)", "ZnO + C, vagy elektrolízis"],
            ["víz / sav", "nem tiszta vízzel; HCl-ból H₂; cc. HNO₃ passzivál", "passzív oxidréteg; savból H₂; lúgból is ([Al(OH)₄]⁻)", "savból H₂; lúgból is ([Zn(OH)₄]²⁻)"],
            ["használat", "szerkezeti acél, rozsda Fe₂O₃·nH₂O", "könnyűszerkezet, vezeték, Al₂O₃ védőréteg", "horganyzás (katódos védelem), ötvözet"],
          ]}
        />
        <p>
          Az Al és Zn amfoter: savban és lúgban is oldódnak. A Fe nem amfoter. A
          vas rozsdásodása oxigén + víz + elektrolit: helyi galvánelemek a
          felületen. Horganyzás: a Zn-nek negatívabb ε°-ja, ő oldódik, a Fe
          védett.
        </p>
        <Formula>
          4 Al + 3 O<sub>2</sub> → 2 Al<sub>2</sub>O<sub>3</sub> (védő, tömör)
          <br />
          4 Fe + 3 O<sub>2</sub> + n H<sub>2</sub>O → 2 Fe<sub>2</sub>O<sub>3</sub>·nH<sub>2</sub>O (porózus rozsda)
          <br />
          2 Al + 2 NaOH + 6 H<sub>2</sub>O → 2 Na[Al(OH)<sub>4</sub>] + 3 H<sub>2</sub>
        </Formula>
      </Section>

      <Quiz
        slug="szervetlen"
        items={[
          {
            q: "A CO miért mérgező?",
            options: [
              "savas esőt okoz",
              "a hemoglobinhoz a O₂-nél erősebben köt, kiszorítja",
              "ózonkárosító",
              "radioaktív",
            ],
            answer: 1,
            why: "Karboxihemoglobin. A CO₂ nem kötődik így; fulladást a koncentráció/oxigénhiány okoz, nem Hb-méregként.",
          },
          {
            q: "Melyik fém oldódik NaOH-ban is?",
            options: ["Fe", "Cu", "Al", "Ag"],
            answer: 2,
            why: "Al (és Zn) amfoter. A passzív Al₂O₃ lúgban tetrahidroxo-alumináttá oldódik, H₂ fejlődik.",
          },
          {
            q: "A szódabikarbóna (NaHCO₃) savval…",
            options: [
              "H₂-t fejleszt",
              "CO₂-t fejleszt",
              "O₂-t fejleszt",
              "nem reagál",
            ],
            answer: 1,
            why: "HCO₃⁻ + H⁺ → CO₂ + H₂O. Ugyanez a mészbarlang és a sütőpor kémiája.",
          },
        ]}
      />
    </div>
  );
}
