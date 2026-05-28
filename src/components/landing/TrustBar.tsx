import { Stethoscope } from "lucide-react";

const partners = [
  { name: "SBACV", icon: <Stethoscope size={16} /> },
  { name: "iClinic", icon: <span>◆</span> },
  { name: "Tasy", icon: <span>▣</span> },
  { name: "MV Sistemas", icon: <span>◈</span> },
  { name: "Pixeon", icon: <span>●</span> },
];

export function TrustBar() {
  return (
    <section className="bg-white border-b border-border py-6">
      <div className="container-inner flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
        <span className="text-[12px] font-bold uppercase tracking-[1px] text-muted-foreground">
          Parceiros e Integrações
        </span>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
          {partners.map((p) => (
            <div
              key={p.name}
              className="flex items-center gap-2 text-[14px] font-bold text-foreground/60 hover:text-foreground transition-colors"
            >
              {p.icon}
              {p.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
