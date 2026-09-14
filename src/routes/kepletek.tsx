import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/layout/app-shell";
import { Formula, Section } from "@/components/content/primitives";

export const Route = createFileRoute("/kepletek")({ component: KepletekPage });

function KepletekPage() {
  return (
    <AppShell>
      <main className="mx-auto max-w-2xl px-4 py-8 sm:px-8 sm:py-10">
        <p className="text-xs font-medium tracking-[0.16em] text-accent uppercase">
          Egy lapra
        </p>
        <h1 className="mt-2 font-display text-3xl font-medium tracking-tight sm:text-4xl">
          Képlettár
        </h1>
        <p className="mt-3 text-muted">
          A jegyzetben előforduló összefüggések egy helyen. Értékek 25 °C-ra,
          hacsak mást nem írunk.
        </p>

        <div className="mt-10 space-y-12">
          <Section title="Anyagmennyiség">
            <Formula caption="NA = 6,022·10²³ mol⁻¹ · R = 8,314 J/(mol·K) · Vm(25 °C, 1 bar) ≈ 24,8 dm³/mol">
              n = m / M = N / N<sub>A</sub> = V / V<sub>m</sub>
              <br />
              pV = nRT
            </Formula>
          </Section>

          <Section title="Szerkezet">
            <Formula>
              A = Z + N<sub>neutron</sub>
              <br />
              Ar = Σ (w<sub>i</sub> · A<sub>i</sub>)
              <br />
              ΔEN → kötéspolaritás · VSEPR → alak · Σμ → molekulapolaritás
            </Formula>
          </Section>

          <Section title="Termokémia és kinetika">
            <Formula>
              Δ<sub>r</sub>H° = Σ ν Δ<sub>f</sub>H°(termékek) − Σ ν Δ<sub>f</sub>H°(reaktánsok)
              <br />
              v = k [A]<sup>α</sup>[B]<sup>β</sup>
              <br />
              k = A e<sup>−E<sub>a</sub>/RT</sup>
            </Formula>
          </Section>

          <Section title="Egyensúly">
            <Formula caption="ΔG° = −RT ln K · Le Chatelier: a zavarás ellen dolgozik a rendszer.">
              aA + bB ⇌ cC + dD
              <br />
              K = [C]<sup>c</sup>[D]<sup>d</sup> / [A]<sup>a</sup>[B]<sup>b</sup>
            </Formula>
          </Section>

          <Section title="Sav–bázis">
            <Formula caption="25 °C. Konjugált párra pKa + pKb = 14.">
              K<sub>w</sub> = [H<sub>3</sub>O⁺][OH⁻] = 1,0·10⁻¹⁴
              <br />
              pH = −lg [H<sub>3</sub>O⁺] · pH + pOH = 14
              <br />
              K<sub>a</sub> = [H<sub>3</sub>O⁺][A⁻]/[HA]
              <br />
              pH = pK<sub>a</sub> + lg ([A⁻]/[HA])
            </Formula>
          </Section>

          <Section title="Elektrokémia">
            <Formula caption="F = 96485 C/mol · Q = I·t">
              E = ε<sub>katód</sub> − ε<sub>anód</sub>
              <br />
              ε = ε° − (0,059 V / n) lg Q
              <br />
              m = (M · I · t) / (z · F)
            </Formula>
          </Section>
        </div>
      </main>
    </AppShell>
  );
}
