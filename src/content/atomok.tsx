import {
  BuildOn,
  DataTable,
  Example,
  Formula,
  KeyGrid,
  Note,
  Section,
} from "@/components/content/primitives";
import { Quiz } from "@/components/content/quiz";
import { AtomModel, ParticleChart } from "@/components/diagrams/diagrams";

export function AtomokChapter() {
  return (
    <div className="space-y-12">
      <Section title="Az atom alkotói">
        <p>
          Az atom pozitív magból és körülötte mozgó elektronokból áll. A mag
          protonokat (p⁺) és neutronokat (n⁰) tartalmaz; az elektronok (e⁻) a
          maghoz képest ~10⁴-szer nagyobb térrészt töltenek ki. Az atom mérete
          ~10⁻¹⁰ m (100 pm), a magé ~10⁻¹⁵ m.
        </p>
        <ParticleChart />
        <DataTable
          head={["részecske", "töltés", "tömeg", "hely"]}
          rows={[
            ["proton, p⁺", "+1,602·10⁻¹⁹ C  (+1 e)", "1,673·10⁻²⁷ kg  ≈ 1,007 u", "mag"],
            ["neutron, n⁰", "0", "1,675·10⁻²⁷ kg  ≈ 1,009 u", "mag"],
            [
              "elektron, e⁻",
              "−1,602·10⁻¹⁹ C  (−1 e)",
              "9,109·10⁻³¹ kg  ≈ 1/1836 u",
              "elektronburok",
            ],
          ]}
          caption="u = atomi tömegegység = 1,661·10⁻²⁷ kg = ¹²C tömegének 1/12-e."
        />
        <Note>
          Semleges atomban a protonok száma megegyezik az elektronok számával. A
          kémiai viselkedést szinte kizárólag az elektronburok határozza meg; a
          mag a tömeget és a magreakciókat.
        </Note>
      </Section>

      <Section title="Rendszám, tömegszám, izotóp">
        <KeyGrid
          items={[
            {
              k: "Rendszám, Z",
              v: "A protonok száma. Meghatározza, melyik elemről van szó. A periódusos rendszer sorszáma.",
            },
            {
              k: "Tömegszám, A",
              v: "Protonok + neutronok száma a magban. Egész szám, nukleonok száma.",
            },
            {
              k: "Izotóp",
              v: "Azonos Z, különböző A (tehát különböző neutronszám). Kémiailag majdnem azonosak, tömegük és magtulajdonságaik eltérnek.",
            },
            {
              k: "Jelölés",
              v: (
                <>
                  <span className="font-mono">
                    <sup>A</sup>E vagy <sup>A</sup>
                    <sub>Z</sub>E
                  </span>
                  , pl. <span className="font-mono">
                    <sup>12</sup>C, <sup>14</sup>C, <sup>35</sup>Cl
                  </span>
                  .
                </>
              ),
            },
          ]}
        />
        <AtomModel />
        <Example title="Klór izotópjai">
          <p>
            A természetes klór ~75,8% <span className="font-mono">³⁵Cl</span> (18 n)
            és ~24,2% <span className="font-mono">³⁷Cl</span> (20 n). Mindkettő Z = 17,
            tehát ugyanaz az elem, de a relatív atomtömeg a keverék súlyozott
            átlaga:
          </p>
          <Formula caption="Ezért Ar(Cl) ≈ 35,45, nem egész szám.">
            Ar(Cl) = 0,758·35 + 0,242·37 ≈ 35,45
          </Formula>
        </Example>
      </Section>

      <Section title="Mól és atomtömeg">
        <p>
          A <strong>mól</strong> az anyagmennyiség SI-egysége: 1 mol pontosan{" "}
          <span className="font-mono">N<sub>A</sub> = 6,02214076·10<sup>23</sup></span>{" "}
          darab részecskét tartalmaz (Avogadro-állandó). A{" "}
          <strong>moláris tömeg</strong> (M) 1 mol anyag tömege, mértékegysége
          g/mol; számértéke megegyezik a relatív atom- vagy molekulatömeggel.
        </p>
        <Formula>
          n = m / M = N / N<sub>A</sub> = V / V<sub>m</sub>
        </Formula>
        <p>
          A <strong>relatív atomtömeg</strong> (A<sub>r</sub>) dimenziótlan: az
          atom átlagos tömegének és az atomi tömegegységnek a hányadosa. A
          természetes izotópelegy súlyozott átlaga — ezért C-re 12,01, nem 12.
        </p>
        <Example title="Hány atom van 2,00 g vízben?">
          <p>
            M(H<sub>2</sub>O) = 18,02 g/mol, tehát n = 2,00 / 18,02 = 0,111 mol.
            N = n · N<sub>A</sub> = 0,111 · 6,022·10<sup>23</sup> = 6,68·10<sup>22</sup>{" "}
            molekulá, és molekulánként 3 atom → 2,00·10<sup>23</sup> atom.
          </p>
        </Example>
        <BuildOn>
          <p>
            Egyetemen a moláris mennyiségek (moláris hőkapacitás, moláris
            belsőenergia, kémiai potenciál μ = (∂G/∂n)) végig ezt a
            anyagmennyiség-fogalmat használják. A sztöchiometria mindig mólarány:
            2 H<sub>2</sub> + O<sub>2</sub> → 2 H<sub>2</sub>O azt jelenti, hogy 2
            mol H<sub>2</sub> 1 mol O<sub>2</sub>-vel 2 mol vizet ad.
          </p>
        </BuildOn>
      </Section>

      <Section title="Elektronszerkezet">
        <p>
          Az elektronok nem „bolygók a mag körül”, hanem stacionárius
          állapotokban, <strong>atompályákon (orbitálokon)</strong> írhatók le. Egy
          pályát négy kvantumszám jellemez:
        </p>
        <DataTable
          head={["kvantumszám", "jele", "értékek", "jelentés"]}
          rows={[
            ["fő", "n", "1, 2, 3, …", "héj, energia, méret"],
            ["mellék", "ℓ", "0 … n−1 (s,p,d,f)", "pálya alakja"],
            ["mágneses", "mℓ", "−ℓ … +ℓ", "térbeli orientáció"],
            ["spin", "ms", "+½ vagy −½", "saját impulzusmomentum"],
          ]}
        />
        <p>Feltöltődés három szabállyal:</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>
            <strong>Energiaminimum (Aufbau):</strong> először a kisebb energiájú
            pályák telnek (1s → 2s → 2p → 3s → 3p → 4s → 3d …).
          </li>
          <li>
            <strong>Pauli-elv:</strong> egy atomban nincs két elektron azonos
            mind a négy kvantumszámmal — pályánként max. 2 e⁻, ellentétes spinnel.
          </li>
          <li>
            <strong>Hund-szabály:</strong> degenerált pályákon (pl. a három 2p)
            először párhuzamos spinű, külön pályán álló elektronok épülnek be.
          </li>
        </ul>
        <Example title="Oxigén, nátrium, vas">
          <Formula>
            O (Z=8): 1s² 2s² 2p⁴ · vegyérték: 2s² 2p⁴
            <br />
            Na (Z=11): [Ne] 3s¹ · könnyen ad le 1 e⁻ → Na⁺
            <br />
            Fe (Z=26): [Ar] 4s² 3d⁶ · jellemző oxidációs számok +2, +3
          </Formula>
        </Example>
        <BuildOn>
          <p>
            A kvantummechanikai modell a Schrödinger-egyenlet stacionárius
            megoldásain alapul. A főhéjak energiája hidrogénszerű atomokban csak
            n-től függ (E ∝ −1/n²); többelektronos atomokban a pályák
            felhasadnak (2s energiája a 2p alatt van), mert a belső elektronok árnyékolnak. A
            vegyértékhéj szerkezete magyarázza a csoportok hasonlóságát.
          </p>
        </BuildOn>
      </Section>

      <Quiz
        slug="atomok"
        items={[
          {
            q: "Mi különbözteti meg a ¹⁴C-t a ¹²C-től?",
            options: [
              "A protonok száma (rendszám)",
              "A neutronok száma (tömegszám)",
              "Az elektronok száma a semleges atomban",
              "A vegyértékhéj szerkezete",
            ],
            answer: 1,
            why: "Izotópok: azonos Z (6), különböző A. ¹⁴C-ben 8 neutron, ¹²C-ben 6. A kémiai viselkedés közel azonos.",
          },
          {
            q: "Hány mol atom van 12,0 g ¹²C-ben?",
            options: ["0,5 mol", "1,0 mol", "2,0 mol", "12 mol"],
            answer: 1,
            why: "Definíció szerint 12 g ¹²C pontosan 1 mol. (A természetes szén Ar-ja 12,01, ezért 12,0 g természetes C kicsit kevesebb, mint 1 mol.)",
          },
          {
            q: "A nitrogén (Z = 7) alapállapotú elektronszerkezete:",
            options: ["1s² 2s² 2p²", "1s² 2s² 2p³", "1s² 2s² 2p⁵", "1s² 2p⁵"],
            answer: 1,
            why: "7 elektron: 1s² 2s² 2p³. Hund szerint a 2p-n három párosítatlan e⁻ — ezért a N₂ hármas kötése és a N atom három vegyértéke.",
          },
        ]}
      />
    </div>
  );
}
