import {
  BuildOn,
  DataTable,
  Example,
  Formula,
  Note,
  Section,
} from "@/components/content/primitives";
import { Quiz } from "@/components/content/quiz";
import { GalvanicCell } from "@/components/diagrams/diagrams";

export function ElektroChapter() {
  return (
    <div className="space-y-12">
      <Section title="Elektródpotenciál">
        <p>
          Az elektródpotenciál az elektród és az elektrolit közti
          potenciálkülönbség. A standard elektródpotenciál (ε°) a standard
          hidrogénelektródhoz (pH₂ = 1 bar, [H⁺] = 1 M, 25 °C, ε° = 0) viszonyított
          érték. Minél pozitívabb ε°, annál jobb oxidálószer a oxidált forma.
        </p>
        <DataTable
          head={["elektród", "ε° (V)", "jelentés"]}
          rows={[
            ["Li⁺/Li", "−3,04", "legerősebb redukálószer (a fém)"],
            ["Zn²⁺/Zn", "−0,76", "Zn redukál, maga oxidálódik"],
            ["H⁺/H₂", "0,00", "vonatkoztatási elektród"],
            ["Cu²⁺/Cu", "+0,34", "Cu²⁺ oxidálószer Zn-hez képest"],
            ["O₂/H₂O (savas)", "+1,23", "erős oxidálószer"],
            ["F₂/F⁻", "+2,87", "legerősebb oxidálószer"],
          ]}
        />
        <Formula caption="Nernst-egyenlet 25 °C-on, n = átadott e⁻ száma. Q a reakcióhányados.">
          ε = ε° − (0,059 V / n) · lg Q
        </Formula>
      </Section>

      <Section title="Galvánelemek">
        <p>
          Spontán redoxi: a két elektród szétválasztva, az elektron a külső
          áramkörön folyik. Anód: oxidáció (−), katód: redukció (+). A cella
          elektromotoros ereje:
        </p>
        <Formula>
          E<sub>MF</sub> = ε<sub>katód</sub> − ε<sub>anód</sub> = ε<sub>jobb</sub> − ε<sub>bal</sub>
        </Formula>
        <GalvanicCell />
        <Example title="Daniell-elem számolva">
          <p>
            Zn | Zn²⁺ (1 M) || Cu²⁺ (1 M) | Cu
            <br />
            E° = 0,34 − (−0,76) = 1,10 V. Bruttó: Zn + Cu²⁺ → Zn²⁺ + Cu.
            Ha [Cu²⁺] csökken, Nernst szerint E csökken; az elem „kimerül”.
          </p>
        </Example>
        <Note>
          Celladiagram: balra az anód. Sóhíd: ionvándorlás, töltéskiegyenlítés,
          a két oldat nem keveredik el.
        </Note>
      </Section>

      <Section title="Elektrolízis">
        <p>
          Külső feszültséggel nemspontán redoxit kényszerítünk. Itt az anód a
          (+) (oxidáció), a katód a (−) (redukció) — a polaritás a
          galvánelemhez képest felcserélődik a külső forrás miatt.
        </p>
        <DataTable
          head={["rendszer", "katód (−)", "anód (+)"]}
          rows={[
            ["olvadék NaCl", "Na⁺ + e⁻ → Na", "2 Cl⁻ → Cl₂ + 2 e⁻"],
            ["vizes NaCl (cc.)", "2 H₂O + 2 e⁻ → H₂ + 2 OH⁻", "2 Cl⁻ → Cl₂ + 2 e⁻"],
            ["vizes CuSO₄, Cu-anód", "Cu²⁺ + 2 e⁻ → Cu", "Cu → Cu²⁺ + 2 e⁻ (finomítás)"],
            ["víz (savanyított)", "2 H⁺ + 2 e⁻ → H₂", "2 H₂O → O₂ + 4 H⁺ + 4 e⁻"],
          ]}
        />
        <p>
          <strong>Faraday-törvények:</strong> a kivált anyag mennyisége az
          áthaladt töltéssel arányos.
        </p>
        <Formula caption="F = 96485 C/mol. n(e⁻) = Q/F = I·t/F. 1 mol e⁻ 1 mol Na-t, ½ mol Cu-t, ¼ mol O₂-t redukál/oxidál a sztöchiometria szerint.">
          m = (M · I · t) / (z · F)
        </Formula>
        <BuildOn>
          <p>
            A bomlásfeszültség ≈ |E°| + túlfeszültség (kinetikai extra a gázfejlődésnél:
            H₂/O₂ a Hg-n, grafiton másképp viselkedik — ezért vizes NaCl-ból Cl₂
            fejlődik, nem O₂). Akkumulátor: tölthető galvánelem (PbO₂/Pb, Li-ion).
          </p>
        </BuildOn>
      </Section>

      <Quiz
        slug="elektro"
        items={[
          {
            q: "A Daniell-elem anódján…",
            options: [
              "Cu²⁺ redukálódik",
              "Zn oxidálódik",
              "a sóhíd elektronokat vezet",
              "O₂ fejlődik",
            ],
            answer: 1,
            why: "Zn a negatívabb ε°-ú fém: oxidálódik, oldódik. A sóhíd ionokat vezet, nem elektronokat.",
          },
          {
            q: "Az ε°(F₂/F⁻) nagyon pozitív, ezért a F₂…",
            options: [
              "erős redukálószer",
              "erős oxidálószer",
              "nem reagál",
              "csak anódon válik ki vízből mindig",
            ],
            answer: 1,
            why: "Pozitív ε° = az oxidált forma (F₂) szívesen vesz fel e⁻-t. A fluor soha nem állítható elő vizes elektrolízissel (vizet oxidál).",
          },
          {
            q: "2,00 A, 965 s alatt elméletileg hány mol e⁻ halad át?",
            options: ["0,010 mol", "0,020 mol", "1,00 mol", "2,00 mol"],
            answer: 1,
            why: "Q = I·t = 1930 C. n(e⁻) = Q/F ≈ 1930/96485 ≈ 0,020 mol.",
          },
        ]}
      />
    </div>
  );
}
