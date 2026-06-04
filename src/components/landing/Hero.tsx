import { TrendingUp, Activity, ShieldCheck, FileCheck2 } from "lucide-react";

function Sparkline() {
  // Smooth ascending sparkline
  const points = [
    [0, 38], [12, 34], [24, 36], [36, 28], [48, 30],
    [60, 22], [72, 24], [84, 16], [96, 18], [108, 10], [120, 12],
  ];
  const path = points
    .map((p, i) => (i === 0 ? `M${p[0]},${p[1]}` : `L${p[0]},${p[1]}`))
    .join(" ");
  const area = `${path} L120,48 L0,48 Z`;
  return (
    <svg viewBox="0 0 120 48" className="w-full h-12">
      <defs>
        <linearGradient id="spark" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#2C70DD" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#2C70DD" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={area} fill="url(#spark)" />
      <path d={path} stroke="#2C70DD" strokeWidth="1.6" fill="none" strokeLinecap="round" />
    </svg>
  );
}

function VolumeBars() {
  const bars = [42, 58, 36, 64, 48, 72, 56, 78, 62, 84, 70, 92];
  return (
    <div className="flex items-end gap-1.5 h-[88px]">
      {bars.map((h, i) => (
        <div key={i} className="flex-1 flex flex-col gap-[2px]">
          <div
            className="w-full rounded-[2px]"
            style={{
              height: `${h}%`,
              background:
                "linear-gradient(180deg, #2C70DD 0%, #1A56C4 100%)",
            }}
          />
          <div
            className="w-full rounded-[2px] opacity-30"
            style={{
              height: `${h * 0.35}%`,
              background: "#2C70DD",
            }}
          />
        </div>
      ))}
    </div>
  );
}

function Donut({ value = 96 }: { value?: number }) {
  const r = 34;
  const c = 2 * Math.PI * r;
  const dash = (value / 100) * c;
  return (
    <div className="relative w-[96px] h-[96px]">
      <svg viewBox="0 0 80 80" className="w-full h-full -rotate-90">
        <circle cx="40" cy="40" r={r} stroke="#E6EAF0" strokeWidth="8" fill="none" />
        <circle
          cx="40"
          cy="40"
          r={r}
          stroke="#2C70DD"
          strokeWidth="8"
          fill="none"
          strokeDasharray={`${dash} ${c}`}
          strokeLinecap="round"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="text-[20px] font-semibold tracking-tight text-ink leading-none">
          {value}<span className="text-[12px] text-muted-foreground">%</span>
        </div>
        <div className="font-mono text-[9px] tracking-[0.14em] uppercase text-muted-foreground mt-1">
          SLA
        </div>
      </div>
    </div>
  );
}

function Dashboard() {
  return (
    <div
      className="relative rounded-2xl overflow-hidden bg-white"
      style={{
        border: "1px solid var(--border)",
        boxShadow:
          "0 1px 0 rgba(255,255,255,0.6) inset, 0 30px 80px -20px rgba(44,112,221,0.25), 0 12px 30px -10px rgba(11,18,32,0.10)",
      }}
    >
      {/* Top bar */}
      <div
        className="flex items-center justify-between px-5 py-3"
        style={{ borderBottom: "1px solid var(--border)", background: "var(--surface)" }}
      >
        <div className="flex items-center gap-2.5">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-border" />
            <div className="w-2.5 h-2.5 rounded-full bg-border" />
            <div className="w-2.5 h-2.5 rounded-full bg-border" />
          </div>
          <div className="ml-2 font-mono text-[11px] tracking-[0.12em] uppercase text-muted-foreground">
            MindMed Console · /platform/overview
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 font-mono text-[10.5px] tracking-[0.12em] uppercase text-success">
            <span className="w-1.5 h-1.5 rounded-full bg-success pulse-dot" />
            Operacional
          </span>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-px bg-border">
        {/* KPI strip */}
        {[
          { k: "Atendimentos / 24h", v: "12.482", trend: "+8.4%" },
          { k: "Tempo médio doc.", v: "3m 12s", trend: "−68%" },
          { k: "Completude clínica", v: "98.4%", trend: "+1.1pp" },
          { k: "Eventos auditados", v: "1.2M", trend: "Hoje" },
        ].map((kpi) => (
          <div key={kpi.k} className="col-span-6 md:col-span-3 bg-white p-5">
            <div className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground">
              {kpi.k}
            </div>
            <div className="mt-2 flex items-baseline justify-between">
              <div className="text-[22px] font-semibold tracking-[-0.02em] text-ink tabular-nums">
                {kpi.v}
              </div>
              <div className="font-mono text-[10.5px] text-primary">{kpi.trend}</div>
            </div>
          </div>
        ))}

        {/* Main chart */}
        <div className="col-span-12 lg:col-span-8 bg-white p-6">
          <div className="flex items-center justify-between">
            <div>
              <div className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground">
                Produtividade assistencial — últimos 12 ciclos
              </div>
              <div className="mt-1 text-[15px] font-medium text-ink">
                Throughput documental por turno
              </div>
            </div>
            <div className="flex items-center gap-3 font-mono text-[10.5px] tracking-[0.1em] uppercase text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-sm bg-primary" /> Documentado
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-sm bg-primary/30" /> Pendente
              </span>
            </div>
          </div>
          <div className="mt-5">
            <VolumeBars />
          </div>
          <div className="mt-3 grid grid-cols-12 font-mono text-[9.5px] text-muted-foreground tracking-[0.1em]">
            {["T1","T2","T3","T4","T5","T6","T7","T8","T9","T10","T11","T12"].map((t) => (
              <div key={t} className="text-center">{t}</div>
            ))}
          </div>
        </div>

        {/* Side donut */}
        <div className="col-span-12 lg:col-span-4 bg-white p-6 flex flex-col">
          <div className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground">
            Disponibilidade
          </div>
          <div className="mt-1 text-[15px] font-medium text-ink">Plataforma multi-região</div>
          <div className="mt-5 flex items-center gap-5">
            <Donut value={99} />
            <div className="space-y-2">
              {[
                { l: "São Paulo", v: "operacional" },
                { l: "Rio de Janeiro", v: "operacional" },
                { l: "Brasília", v: "operacional" },
              ].map((r) => (
                <div key={r.l} className="flex items-center gap-2 text-[12.5px] text-ink">
                  <span className="w-1.5 h-1.5 rounded-full bg-success" />
                  {r.l}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="col-span-12 md:col-span-7 bg-white p-6">
          <div className="flex items-center justify-between">
            <div>
              <div className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground">
                Inteligência clínica · consultas / hora
              </div>
              <div className="mt-1 text-[15px] font-medium text-ink">
                Avicena · throughput em tempo real
              </div>
            </div>
            <div className="font-mono text-[10.5px] text-primary">+24% vs ciclo anterior</div>
          </div>
          <div className="mt-4">
            <Sparkline />
          </div>
        </div>

        <div className="col-span-12 md:col-span-5 bg-white p-6">
          <div className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground">
            Governança
          </div>
          <ul className="mt-3 space-y-2.5">
            {[
              { i: ShieldCheck, l: "LGPD · trilha íntegra", v: "OK" },
              { i: FileCheck2, l: "CFM 2.314/2022", v: "OK" },
              { i: Activity, l: "ISO 27001 · em adequação", v: "92%" },
              { i: TrendingUp, l: "Auditoria contínua", v: "Ativa" },
            ].map((row) => (
              <li key={row.l} className="flex items-center justify-between text-[13px]">
                <span className="flex items-center gap-2 text-ink">
                  <row.i size={14} className="text-primary" />
                  {row.l}
                </span>
                <span className="font-mono text-[10.5px] text-muted-foreground">{row.v}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="top"
      className="relative pt-[100px] md:pt-[140px] pb-[72px] md:pb-[120px] overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse 90% 70% at 50% -10%, rgba(44,112,221,0.10), transparent 60%), #FFFFFF",
      }}
    >
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--border) 1px, transparent 1px), linear-gradient(to bottom, var(--border) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 20%, #000 30%, transparent 80%)",
        }}
      />

      <div className="container-inner relative">
        <div className="max-w-[960px]">
          <div className="eyebrow fade-up">
            MindMed Platform · Edição Institucional 2026
          </div>

          <h1 className="display mt-7 text-ink fade-up" style={{ animationDelay: ".05s" }}>
            A infraestrutura de <em>inteligência clínica</em> para a próxima geração da medicina.
          </h1>

          <p
            className="lede mt-7 max-w-[680px] fade-up"
            style={{ animationDelay: ".12s" }}
          >
            Uma plataforma unificada de documentação, raciocínio clínico e
            governança de dados — desenhada para consultórios, clínicas e
            redes hospitalares, com conformidade regulatória e auditabilidade
            ponta a ponta.
          </p>

          <div
            className="mt-10 flex flex-wrap items-center gap-3 fade-up"
            style={{ animationDelay: ".18s" }}
          >
            <a href="mailto:mindmedcontato@gmail.com" className="btn-primary">
              Falar com a equipe institucional
            </a>
            <a href="#plataforma" className="btn-outline">
              Explorar a plataforma →
            </a>
          </div>

          <div
            className="mt-8 flex flex-col sm:flex-row sm:items-center gap-3 fade-up"
            style={{ animationDelay: ".22s" }}
          >
            <div className="flex -space-x-2 shrink-0">
              {[12, 47, 33, 5, 22].map((id) => (
                <img
                  key={id}
                  src={`https://i.pravatar.cc/64?img=${id}`}
                  alt=""
                  loading="lazy"
                  className="w-7 h-7 rounded-full object-cover ring-2 ring-white"
                />
              ))}
            </div>
            <p className="text-[13px] sm:text-[13.5px] text-muted-foreground leading-[1.5] max-w-[480px]">
              Mais de <span className="font-semibold text-ink">6.000 médicos</span>{" "}
              já utilizaram a MindMed para gerar mais de{" "}
              <span className="font-semibold text-ink">200.000 documentos clínicos</span>.
            </p>
          </div>
        </div>

        {/* Premium dashboard - hidden on small screens, shown md+ */}
        <div className="hidden md:block mt-10 md:mt-20 fade-up" style={{ animationDelay: ".28s" }}>
          <Dashboard />
        </div>

        {/* Status strip */}
        <div
          className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-px bg-border rounded-xl overflow-hidden fade-up"
          style={{ animationDelay: ".34s", border: "1px solid var(--border)" }}
        >
          {[
            { k: "Uptime SLA", v: "99.95%" },
            { k: "Conformidade", v: "LGPD · CFM 2.314" },
            { k: "Criptografia", v: "AES-256 / TLS 1.3" },
            { k: "Residência", v: "Multi-região BR" },
          ].map((s) => (
            <div key={s.k} className="bg-white px-6 py-5">
              <div className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground">
                {s.k}
              </div>
              <div className="mt-1.5 text-[15px] font-medium text-ink">
                {s.v}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
