import { Stethoscope, ShieldCheck, BadgeCheck, Lock } from "lucide-react";

const items = [
  { name: "SBACV", icon: <Stethoscope size={16} /> },
  { name: "LGPD", icon: <ShieldCheck size={16} /> },
  { name: "CFM 2.314/2022", icon: <BadgeCheck size={16} /> },
  { name: "Criptografia ponta a ponta", icon: <Lock size={16} /> },
];

export function TrustBar() {
  return (
    <section className="bg-white border-b border-border py-6">
      <div className="container-inner flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
        <span className="text-[12px] font-bold uppercase tracking-[1px] text-muted-foreground">
          Confiança e conformidade
        </span>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
          {items.map((p) => (
            <div
              key={p.name}
              className="flex items-center gap-2 text-[14px] font-bold text-foreground/60"
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
