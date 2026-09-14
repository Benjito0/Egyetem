import {
  BuildOn,
  DataTable,
  Example,
  Formula,
  Note,
  Section,
} from "@/components/content/primitives";
import { Quiz } from "@/components/content/quiz";
import { HBond, LatticeGrid } from "@/components/diagrams/diagrams";

export function HalmazokChapter() {
  return (
    <div className="space-y-12">
      <Section title="Másodrendű kötések">
        <p>
          Elsőrendű kötés (kovalens, ionos, fémes) a molekulán/rácson belül;
          másodrendű a molekulák, illetve a rácsépítő egységek között. Energia:
          ~1–40 kJ/mol, az elsőrendű ~100–1000 kJ/mol-lal szemben — ezért
          olvadnak/forrnak a molekularácsos anyagok alacsony hőmérsékleten.
        </p>
        <DataTable
          head={["kölcsönhatás", "mikor", "erősség", "példa"]}
          rows={[
            [
              "diszperziós (London)",
              "minden molekulánál; apolárisoknál ez az egyetlen",
              "gyenge, nő a polarizálhatósággal (méret)",
              "I₂ > Br₂ > Cl₂; nemesgázok",
            ],
            [
              "dipól–dipól",
              "állandó dipólusú molekulák",
              "közepes",
              "HCl, CH₃Cl, aceton",
            ],
            [
              "hidrogénkötés",
              "H kötve F, O vagy N-hez + másik F/O/N nemkötő párja",
              "legerősebb másodrendű",
              "víz, HF, NH₃, alkoholok, DNS-bázispárok",
            ],
          ]}
        />
        <HBond />
        <Example title="Miért magas a víz forráspontja?">
          <p>
            Az H₂S, H₂Se, H₂Te fp.-ja a moláris tömeggel nő. Az H₂O „kilóg”: 100
            °C, nem ~−80 °C. Ok: molekulaanként két H-donor és két akceptor —
            3D hidrogénkötés-háló. Ugyanez magyarázza a víz nagy fajhőjét, a
            jég rácsát és a sűrűséganomáliát.
          </p>
        </Example>
      </Section>

      <Section title="Gázok">
        <p>
          Ideális gáz: a részecskék pontszerűek, nincs kölcsönhatás, a
          ütközések rugalmasak. Jó közelítés alacsony nyomáson, magas T-n.
        </p>
        <Formula caption="R = 8,314 J/(mol·K). Standard: 1 bar, 25 °C-on Vm ≈ 24,8 dm³/mol. (Régi STP: 22,4 dm³/mol, 0 °C, 1 atm.)">
          pV = nRT
        </Formula>
        <p>
          Dalton: p<sub>össz</sub> = Σ p<sub>i</sub>. A gázok kitöltik a teret,
          összenyomhatók, keverednek. Reális gázoknál van der Waals-korrekció
          (saját térfogat + vonzás).
        </p>
      </Section>

      <Section title="Folyadékok">
        <p>
          Közeli rend, távoli rendezetlenség. Állandó térfogat, változó alak.
          A viszkozitás, felületi feszültség, gőznyomás a másodrendű kötésektől
          függ. Forráspont: a gőznyomás eléri a külső nyomást.
        </p>
        <Note>
          Polaritás és H-kötés → magas fp., jó oldószer poláris anyagokra. Apoláris
          folyadék (hexán) apoláris oldottakra. A „hasonló a hasonlóban” az
          oldáshő és az entrópia kompromisszuma.
        </Note>
      </Section>

      <Section title="Szilárd anyagok — rácstípusok">
        <p>
          Kristályos szilárd: hosszú távú rend. Amorf (üveg): csak közeli rend,
          nincs éles op. Négy ideális rácstípus — a makroszkópos tulajdonságok
          ebből olvashatók ki.
        </p>
        <LatticeGrid />
        <DataTable
          head={["rács", "rácsépítő", "op./keménység", "vezetés", "oldódás"]}
          rows={[
            ["ionrács", "ionok", "magas / kemény, rideg", "szilárdan nem, olvadék/oldat igen", "poláris oldószer"],
            ["atomrács", "atomok, kovalens", "nagyon magas / nagyon kemény", "szigetelő (grafit kivétel)", "nem oldódik"],
            ["molekularács", "molekulák", "alacsony / lágy", "szigetelő", "hasonló oldószer"],
            ["fémrács", "atomtörzsek + e⁻", "változó", "jól (hő + elektromosság)", "nem (kémiai oldódás savban)"],
          ]}
        />
        <Example title="Gyémánt vs. grafit vs. I₂ vs. NaCl vs. Fe">
          <p>
            Gyémánt: sp³ atomrács, szigetelő, legkeményebb. Grafit: réteges, sp²,
            delokalizált e⁻ → vezet, puha. I₂: molekularács, szublimál, lila gőz.
            NaCl: ionrács, vizes oldata vezet. Fe: fémrács, kovácsolható, vezet —
            ezért kábel helyett inkább szerkezeti fém, a Cu jobb vezető.
          </p>
        </Example>
        <BuildOn>
          <p>
            Bragg-diffraction, rácsenergia (Born–Haber-ciklus), sávmodell
            (vezető / félvezető / szigetelő: a tiltott sáv szélessége). A grafit
            és a fémek vezetése a delokalizált elektronok sávjából jön, nem
            ionmozgásból.
          </p>
        </BuildOn>
      </Section>

      <Quiz
        slug="halmazok"
        items={[
          {
            q: "Melyik rácstípusra jellemző a magas olvadáspont és a szilárd fázisban szigetelő viselkedés, olvadékként viszont vezetés?",
            options: ["atomrács", "ionrács", "molekularács", "fémrács"],
            answer: 1,
            why: "Ionrács: a szilárdban az ionok rögzítettek, olvadékban/oldatban mozognak → elektrolit.",
          },
          {
            q: "A hidrogénkötés feltétele:",
            options: [
              "bármely polaris molekula",
              "H kötve C-hez",
              "H kötve F, O vagy N-hez, és másik F/O/N nemkötő párja",
              "csak vízben",
            ],
            answer: 2,
            why: "A nagy EN és a kis méret kell: F, O, N. A CH-kötés nem ad klasszikus H-kötést.",
          },
          {
            q: "Az I₂ magasabb hőmérsékleten olvad, mint a Cl₂, mert…",
            options: [
              "ionrácsos",
              "hidrogénkötése van",
              "nagyobb a polarizálhatósága, erősebb a diszperziós kölcsönhatás",
              "hármas kötést tartalmaz",
            ],
            answer: 2,
            why: "Mindkettő apoláris molekularács. A nagyobb elektronfelhő erősebben polarizálható → erősebb London-erő.",
          },
        ]}
      />
    </div>
  );
}
