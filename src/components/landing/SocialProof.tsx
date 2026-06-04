import { useEffect, useRef, useState } from "react";
import { Users, FileText, Clock, Activity } from "lucide-react";

type Stat = {
  icon: typeof Users;
  target: number;
  suffix?: string;
  prefix?: string;
  display?: string; // override for non-numeric like "Milhares" or "24/7"
  label: string;
  caption: string;
};

const stats: Stat[] = [
  {
    icon: Users,
    target: 6000,
    suffix: "+",
    label: "Médicos cadastrados",
    caption: "Profissionais ativos em toda a rede MindMed",
  },
  {
    icon: FileText,
    target: 200000,
    suffix: "+",
    label: "Laudos e documentos clínicos gerados",
    caption: "Documentação estruturada com governança ponta a ponta",
  },
  {
    icon: Clock,
    target: 0,
    display: "Milhares",
    label: "Horas administrativas economizadas",
    caption: "Tempo devolvido ao cuidado direto ao paciente",
  },
  {
    icon: Activity,
    target: 0,
    display: "24/7",
    label: "Disponibilidade da plataforma",
    caption: "Operação multi-região com SLA institucional",
  },
];

function formatNumber(n: number) {
  return n.toLocaleString("pt-BR");
}

function useCountUp(target: number, active: boolean, duration = 1800) {
  const [value, setValue] = useState(0);
  const started = useRef(false);
  useEffect(() => {
    if (!active || started.current || target === 0) return;
    started.current = true;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(Math.round(target * eased));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, target, duration]);
  return value;
}

function StatCard({ stat, active }: { stat: Stat; active: boolean }) {
  const value = useCountUp(stat.target, active);
  const Icon = stat.icon;
  const display =
    stat.display ??
    `${stat.prefix ?? ""}${formatNumber(value)}${stat.suffix ?? ""}`;

  return (
    <div
      className="relative bg-white p-8 overflow-hidden group"
      style={{
        border: "1px solid var(--border)",
      }}
    >
      {/* top accent */}
      <div
        aria-hidden
        className="absolute top-0 left-0 right-0 h-[3px]"
        style={{
          background:
            "linear-gradient(90deg, #2C70DD 0%, #1A56C4 100%)",
        }}
      />
      <div className="flex items-center justify-between">
        <div
          className="w-9 h-9 rounded-md flex items-center justify-center"
          style={{
            background: "rgba(44,112,221,0.08)",
            color: "var(--primary)",
          }}
        >
          <Icon size={18} strokeWidth={1.75} />
        </div>
        <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground">
          MindMed · 2026
        </span>
      </div>

      <div
        className="mt-6 font-semibold text-ink tabular-nums leading-none"
        style={{
          fontSize: "clamp(40px, 4.4vw, 56px)",
          letterSpacing: "-0.035em",
        }}
      >
        {display}
      </div>

      <div className="mt-4 text-[14.5px] font-medium text-ink">
        {stat.label}
      </div>
      <div className="mt-1.5 text-[13px] text-muted-foreground leading-[1.55]">
        {stat.caption}
      </div>
    </div>
  );
}

export function SocialProof() {
  const [active, setActive] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setActive(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.25 },
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);

  return (
    <section
      id="prova-social"
      className="py-[64px] md:py-[110px]"
      style={{
        background:
          "linear-gradient(180deg, #FFFFFF 0%, var(--surface) 100%)",
      }}
    >
      <div className="container-inner" ref={ref}>
        <div className="max-w-[820px]">
          <div className="eyebrow">Prova social · Indicadores institucionais</div>
          <h2 className="h2 mt-5 text-ink">
            A inteligência clínica por trás de{" "}
            <em>milhares de atendimentos</em>.
          </h2>
          <p className="lede mt-5 max-w-[680px]">
            A MindMed ajuda médicos, clínicas e instituições de saúde a reduzir
            burocracia, acelerar documentação clínica e recuperar tempo para o
            atendimento.
          </p>
        </div>

        <div
          className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px rounded-xl overflow-hidden"
          style={{
            border: "1px solid var(--border)",
            background: "var(--border)",
          }}
        >
          {stats.map((s) => (
            <StatCard key={s.label} stat={s} active={active} />
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
          <span>· Dados consolidados da plataforma MindMed</span>
          <span>· Atualizado em 2026</span>
        </div>
      </div>
    </section>
  );
}
