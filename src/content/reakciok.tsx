import {
  BuildOn,
  DataTable,
  Example,
  Formula,
  Note,
  Section,
} from "@/components/content/primitives";
import { Quiz } from "@/components/content/quiz";
import { EnergyProfile } from "@/components/diagrams/diagrams";

export function ReakciokChapter() {
  return (
    <div className="space-y-12">
      <Section title="Reakciósebesség">
        <p>
          A reakciósebesség az egységnyi idő alatt bekövetkező
          koncentrációváltozás. Homogén gáz/oldatreakcióknál:
        </p>
        <Formula caption="A k sebességi állandó T-függő. Az exponensek (reakciórend) kísérleti adat, nem a sztöchiometriai együttható.">
          v = k · [A]<sup>α</sup> [B]<sup>β</sup>
        </Formula>
        <p>A sebességet növeli:</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>koncentráció / nyomás (több ütközés),</li>
          <li>hőmérséklet (több molekula éri el az E<sub>a</sub>-t — Arrhenius),</li>
          <li>katalizátor (más út, kisebb E<sub>a</sub>, ΔH változatlan),</li>
          <li>heterogén reakciónál a felület (porítás).</li>
        </ul>
        <Formula caption="Arrhenius: k meredeken nő T-vel. R = 8,314 J/(mol·K).">
          k = A · e<sup>−E<sub>a</sub>/RT</sup>
        </Formula>
      </Section>

      <Section title="Hőszínezet">
        <EnergyProfile />
        <p>
          <strong>Exoterm</strong> (Δ<sub>r</sub>H negatív): a rendszer hőt ad le,
          a termékek kötései összességében erősebbek (égés, semlegesítés).{" "}
          <strong>Endoterm</strong> (Δ<sub>r</sub>H pozitív): hőt vesz fel
          (mészkő bontása, fotoszintézis bruttó). Hess tétele: ΔH útfüggetlen,
          a képződési enthalpiákból számolható.
        </p>
        <Formula>
          Δ<sub>r</sub>H° = Σ ν Δ<sub>f</sub>H°(termék) − Σ ν Δ<sub>f</sub>H°(reaktáns)
        </Formula>
      </Section>

      <Section title="Reakciótípusok">
        <DataTable
          head={["típus", "mi történik", "példa"]}
          rows={[
            ["egyesülés", "A + B → C", "2 H₂ + O₂ → 2 H₂O"],
            ["bomlás", "C → A + B", "2 HgO → 2 Hg + O₂"],
            ["helyettesítés", "elem + vegyület", "Zn + 2 HCl → ZnCl₂ + H₂"],
            ["kettős helyettesítés", "ioncsere", "AgNO₃ + NaCl → AgCl↓ + NaNO₃"],
            ["sav–bázis", "protonátadás (Brønsted)", "HCl + NH₃ → NH₄⁺ + Cl⁻"],
            ["redoxi", "elektronátadás, oxidációs szám változik", "2 Fe + 3 Cl₂ → 2 FeCl₃"],
            ["csapadék", "oldhatatlan só", "Ba²⁺ + SO₄²⁻ → BaSO₄↓"],
            ["komplexképződés", "datív kötésű összetett ion", "Cu²⁺ + 4 NH₃ → [Cu(NH₃)₄]²⁺"],
          ]}
        />
      </Section>

      <Section title="Dinamikus egyensúly">
        <p>
          Zárt rendszerben az oda- és visszaalakulás sebessége kiegyenlítődik:
          a koncentrációk állandók, de a folyamat nem áll le. Az{" "}
          <strong>egyensúlyi állandó</strong> csak T függvénye.
        </p>
        <Formula caption="Tiszta szilárd/folyadék aktivitása ≈ 1, ezért kimarad K-ból (heterogén egyensúly).">
          a A + b B ⇌ c C + d D
          <br />
          K = [C]<sup>c</sup>[D]<sup>d</sup> / [A]<sup>a</sup>[B]<sup>b</sup>
        </Formula>
        <p>
          <strong>Le Chatelier:</strong> az egyensúlyi rendszer a zavarás hatását
          csökkentő irányba tolódik.
        </p>
        <DataTable
          head={["zavarás", "eltolódás"]}
          rows={[
            ["termék elvétele / reaktáns adása", "termékképződés felé"],
            ["nyomásnővés (gáz, Δn ≠ 0)", "kisebb mólszámú oldal felé"],
            ["T-emelés", "endoterm irányba (K változik)"],
            ["katalizátor", "K nem változik, csak gyorsabban áll be"],
          ]}
        />
        <Example title="Haber–Bosch: N₂ + 3 H₂ ⇌ 2 NH₃, ΔH < 0">
          <p>
            Termékképződés: alacsony T (de akkor lassú) + magas p (4 mol gáz → 2
            mol). Ipari kompromisszum: ~400–500 °C, 150–300 bar, Fe-katalizátor,
            NH₃ folyamatos elvétele.
          </p>
        </Example>
        <BuildOn>
          <p>
            ΔG° = −RT ln K. Ha ΔG° negatív, K nagyobb 1-nél (termékoldali egyensúly). A
            van ’t Hoff-egyenlet adja K(T)-t. Vizes közegben külön egyensúlyok:
            savi K<sub>a</sub>, bázis K<sub>b</sub>, víz K<sub>w</sub>, oldhatósági
            K<sub>sp</sub>, komplex K<sub>st</sub> — mind K speciális esete.
          </p>
        </BuildOn>
        <Note>
          Egyetemi gyakorlat: mindig írd fel a K kifejezését, ellenőrizd a
          fázisokat, és Le Chatelierrel csak kvalitatívan jósolj — a szám K-ból
          jön.
        </Note>
      </Section>

      <Quiz
        slug="reakciok"
        items={[
          {
            q: "A katalizátor…",
            options: [
              "megnöveli ΔH-t",
              "csökkenti Ea-t, K-t nem változtatja",
              "az egyensúlyt mindig a termék felé tolja",
              "csak heterogén reakcióban hat",
            ],
            answer: 1,
            why: "Más mechanizmus, kisebb aktiválási energia mindkét irányban. K = k_oda/k_vissza változatlan.",
          },
          {
            q: "Exoterm egyensúlyi reakciónál a T emelése…",
            options: [
              "növeli K-t",
              "csökkenti K-t (reaktánsok felé)",
              "nem hat K-ra",
              "mindig megállítja a reakciót",
            ],
            answer: 1,
            why: "Le Chatelier: a rendszer a hőelnyelő (endoterm, visszaalakuló) irányba megy. K csökken.",
          },
          {
            q: "A 2 SO₂ + O₂ ⇌ 2 SO₃ egyensúlynál a nyomás növelése…",
            options: [
              "SO₃ felé visz (3 mol gáz → 2)",
              "SO₂ felé visz",
              "nincs hatása, mert K csak T-függő, a helyzet sem változik",
              "csak katalizátorral hat",
            ],
            answer: 0,
            why: "K valóban csak T-függő, de a parciális nyomások aránya eltolódik a kisebb mólszám felé. Az ipari kénsavgyártás ezt használja.",
          },
        ]}
      />
    </div>
  );
}
