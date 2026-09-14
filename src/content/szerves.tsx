import {
  BuildOn,
  DataTable,
  Example,
  Formula,
  Note,
  Section,
} from "@/components/content/primitives";
import { Quiz } from "@/components/content/quiz";
import { FunctionalGroups } from "@/components/diagrams/diagrams";

export function SzervesChapter() {
  return (
    <div className="space-y-12">
      <Section title="Alapfogalmak">
        <p>
          Szerves kémia: a szénvegyületek kémiája (kivéve a CO, CO₂, karbonátok,
          karbidok — ezeket a szervetlenhez soroljuk). A szén négy kovalens
          kötést létesít, láncokat, gyűrűket, többszörös kötéseket alkot — ezért
          a vegyületek száma óriási.
        </p>
        <DataTable
          head={["fogalom", "jelentés", "példa"]}
          rows={[
            ["konstitúció", "atomok kapcsolódási sorrendje", "etanol vs. dimetil-éter"],
            ["izoméria", "azonos összegképlet, eltérő szerkezet", "C₄H₁₀: bután / 2-metilpropán"],
            ["homológ sor", "CH₂-vel bővülő sor, hasonló kémia", "alkánok CₙH₂ₙ₊₂"],
            ["funkciós csoport", "a reakciókért felelős atomcsoport", "–OH, –COOH, –CHO"],
            ["telített / telítetlen", "csak egyszeres / van C=C vagy C≡C", "etán / etén, etin"],
            ["aromás", "delokalizált gyűrűs π-rendszer", "benzol, C₆H₆"],
          ]}
        />
        <FunctionalGroups />
        <Note>
          Konstitúciós izomerek: ugyanaz az összegképlet, más kapcsolódás.
          Konformerek: kötés körüli elfordulás. Sztereoizomerek (egyetem):
          geometriai (cisz–transz) és optikai (királis C, enantiomerek).
        </Note>
      </Section>

      <Section title="Szénhidrogének">
        <DataTable
          head={["sor", "képlet", "kötés", "jellemző reakció"]}
          rows={[
            ["alkánok", "CₙH₂ₙ₊₂", "csak σ, tetraéderes C", "gyökös szubsztitúció (X₂, fény), égés"],
            ["alkének", "CₙH₂ₙ", "C=C (σ+π)", "addíció (H₂, HX, X₂, H₂O), polimerizáció"],
            ["alkinek", "CₙH₂ₙ₋₂", "C≡C", "addíció (két lépésben), gyenge sav (etin + Na)"],
            ["aromás", "CₙHₙ (benzol C₆H₆)", "delokalizált π", "elektrofil szubsztitúció (nitrálás, Br₂/Fe), nem addíció"],
          ]}
        />
        <Example title="Etén vs. etán vs. benzol">
          <p>
            Etán: inert, Br₂-vel csak UV-fényre (HBr + brómetán). Etén: Br₂-vizet
            azonnal elszíntelenít (addíció, telítetlenség próbája). Benzol: Br₂-t
            csak katalizátorral (FeBr₃) szubsztituál, a delokalizáció megmarad —
            ezért nem „ciklohexatrién”.
          </p>
        </Example>
        <Formula>
          CH<sub>2</sub>=CH<sub>2</sub> + H<sub>2</sub>O → CH<sub>3</sub>CH<sub>2</sub>OH (kénsav, ipari etanol)
          <br />
          n CH<sub>2</sub>=CH<sub>2</sub> → (–CH<sub>2</sub>–CH<sub>2</sub>–)<sub>n</sub> polietilén
        </Formula>
      </Section>

      <Section title="Alkoholok, éterek, észterek">
        <DataTable
          head={["csoport", "funkció", "tulajdonság", "példa"]}
          rows={[
            [
              "alkoholok",
              "R–OH",
              "H-kötés: magas fp., vízoldhatóság a rövid láncúaknál. Primer/szekunder/tercier.",
              "metanol (mérgező), etanol, glicerin",
            ],
            [
              "éterek",
              "R–O–R′",
              "Nincs H-donor: alacsonyabb fp., gyengén poláris, jó oldószerek.",
              "dietil-éter, MTBE",
            ],
            [
              "észterek",
              "R–COOR′",
              "Karbonsav + alkohol − víz. Gyümölcsillat, zsír/olaj = glicerin-észterek.",
              "etil-acetát, trigliceridek",
            ],
          ]}
        />
        <p>
          Az etanol oxidációja: primer alkohol → aldehid → karbonsav (ecetsav,
          borecet). A tercier alkohol nem oxidálódik a C–OH mentén (nincs
          leszakítható H a C-n). Éterek viszonylag inertsek, gyúlékonyak.
        </p>
        <Formula caption="Észterképzés (egyensúly, savkatalízis). A visszaalakulás: hidrolízis; lúgosan: elszappanosítás.">
          CH<sub>3</sub>COOH + CH<sub>3</sub>CH<sub>2</sub>OH ⇌ CH<sub>3</sub>COOCH<sub>2</sub>CH<sub>3</sub> + H<sub>2</sub>O
        </Formula>
        <Example title="Etanol és dimetil-éter: C₂H₆O">
          <p>
            Konstitúciós izomerek. Etanol: H-kötés, fp. 78 °C, Na-mal H₂, oxidálható.
            Dimetil-éter: nincs OH, fp. −25 °C, Na-mal nem reagál. Az OH tehát nem
            „csak oxigén”, hanem H-donor funkciós csoport.
          </p>
        </Example>
        <BuildOn>
          <p>
            Egyetemen: nomenklatúra (IUPAC), reakciómechanizmusok (S<sub>N</sub>1/S<sub>N</sub>2,
            E1/E2, elektrofil aromás szubsztitúció), spektroszkópia (IR: OH, C=O;
            NMR). A biomolekulák mind funkciós csoportok kombinációi: cukrok
            (poli-alkohol + oxo), zsírok (észter), fehérjék (amid), DNS (észter +
            aromás bázisok).
          </p>
        </BuildOn>
      </Section>

      <Quiz
        slug="szerves"
        items={[
          {
            q: "Az etén Br₂-vizet elszíntelenít, mert…",
            options: [
              "gyökös szubsztitúció",
              "a π-kötésre addíció történik",
              "sav-bázis reakció",
              "aromás szubsztitúció",
            ],
            answer: 1,
            why: "A C=C π-kötése felhasad, 1,2-dibrómetán keletkezik. Az alkánok és a benzol ezt nem adják (utóbbi csak katalizátorral szubsztituál).",
          },
          {
            q: "Az etanol és a dimetil-éter viszonya:",
            options: ["izotópok", "homológok", "konstitúciós izomerek", "azonos funkciós csoport"],
            answer: 2,
            why: "C₂H₆O mindkettő, más kapcsolódás: CH₃CH₂OH vs. CH₃OCH₃.",
          },
          {
            q: "Az észterképzés fordítottja lúgos közegben:",
            options: ["polimerizáció", "elszappanosítás", "addíció", "aromatizáció"],
            answer: 1,
            why: "Zsírok + NaOH → glicerin + zsírsav-nátriumsók (szappan). Savas hidrolízis egyensúly, a lúgos irreverzibilis (a karboxilát nem észteresedik vissza).",
          },
        ]}
      />
    </div>
  );
}
