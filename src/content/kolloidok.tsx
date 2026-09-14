import {
  DataTable,
  Example,
  KeyGrid,
  Note,
  Section,
} from "@/components/content/primitives";
import { Quiz } from "@/components/content/quiz";

export function KolloidokChapter() {
  return (
    <div className="space-y-12">
      <Section title="A kolloid állapot">
        <p>
          Az anyagi rendszerek a diszpergált részecske mérete szerint:{" "}
          <strong>homogén oldat</strong> (1 nm alatt, ionok/molekulák),{" "}
          <strong>kolloid</strong> (~1–500 nm), <strong>durva diszperzió</strong>{" "}
          (500 nm felett, ülepedik). A kolloid nem külön halmazállapot, hanem
          diszperzitásfok: a határfelület óriási, ezért a felületi jelenségek
          (adszorpció, töltés, stabilitás) döntők.
        </p>
        <KeyGrid
          items={[
            {
              k: "Tyndall-effektus",
              v: "A fénysugár a kolloid részecskéken szóródik, az oldatban „útja látszik”. Valódi oldatban nem.",
            },
            {
              k: "Brown-mozgás",
              v: "A közeg molekuláinak ütközései miatt a kolloid részecskék rendezetlenül mozognak — ez gátolja az ülepedést.",
            },
            {
              k: "Adszorpció",
              v: "A nagy fajlagos felület ionokat, molekulákat köt meg. Innen a töltés és a stabilitás.",
            },
            {
              k: "Koaguláció",
              v: "A védő töltés/szolvátburok megszűnik (sók, pH, hő) → a részecskék összetapadnak, kicsapódnak.",
            },
          ]}
        />
      </Section>

      <Section title="Típusok">
        <p>
          A kolloidokat a diszpergált fázis és a diszperziós közeg halmazállapota
          szerint osztályozzuk:
        </p>
        <DataTable
          head={["név", "diszpergált", "közeg", "példa"]}
          rows={[
            ["köd", "folyadék", "gáz", "köd, spray"],
            ["füst", "szilárd", "gáz", "füst, por a levegőben"],
            ["hab", "gáz", "folyadék", "tejszínhab, szappanhab"],
            ["szilárd hab", "gáz", "szilárd", "habkő, hungarocell"],
            ["emulzió", "folyadék", "folyadék", "tej, majonéz, nyersolaj–víz"],
            ["szol", "szilárd", "folyadék", "Ag-szol, keményítőcsiriz, tojásfehérje"],
            ["gél", "folyadék", "szilárd háló", "kocsonya, zselatin, szilika-gél"],
            ["szilárd szol", "szilárd", "szilárd", "színes üveg, rubinüveg"],
          ]}
        />
        <Note>
          Liofil (oldószerkedvelő, pl. fehérje vízben): spontán kolloid, szolvátburok
          véd. Liofób (pl. fém-szol): csak stabilizátorral (töltés) marad kolloid,
          könnyen koagulál.
        </Note>
        <Example title="Tej, köd, tojásfehérje">
          <p>
            A tej emulzió (zsírcseppek vízben) + fehérjekolloid; sav/oltóanyag
            koaguláltatja (túró). A köd folyadékcseppek levegőben — Tyndall-szórás
            miatt fehér. A tojásfehérje liofil kolloid: hőre denaturálódik, a
            hálózat gél (főtt tojás).
          </p>
        </Example>
      </Section>

      <Quiz
        slug="kolloidok"
        items={[
          {
            q: "A Tyndall-effektus azért jellemző a kolloidokra, mert…",
            options: [
              "a részecskék ionosak",
              "a részecskeméret a látható fény hullámhosszának nagyságrendje, szóródik a fény",
              "mindig színesek",
              "vezetik az áramot",
            ],
            answer: 1,
            why: "1–500 nm: a látható fény (400–800 nm) szóródik. Az oldott ionok (~0,1 nm) nem adnak Tyndall-képet.",
          },
          {
            q: "A majonéz kolloid típusa:",
            options: ["szol", "hab", "emulzió", "köd"],
            answer: 2,
            why: "Olajcseppek vizes közegben (emulzió), lecitin/tojássárgája mint emulgeálószer.",
          },
          {
            q: "A liofób szolokat sóval kicsaphatjuk, mert…",
            options: [
              "a só H-kötést bont",
              "az ellenionok semlegesítik a védő töltést",
              "a só növeli a Brown-mozgást",
              "mindig endoterm",
            ],
            answer: 1,
            why: "A részecskék azonos töltése taszít. Elektrolit → a kettős réteg összenyomódik, koaguláció.",
          },
        ]}
      />
    </div>
  );
}
