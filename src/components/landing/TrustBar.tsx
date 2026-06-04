const institutions = [
  "SBACV",
  "REDE INSTITUCIONAL",
  "HOSPITAIS PARCEIROS",
  "SOCIEDADES MÉDICAS",
  "OPERADORAS",
  "CLÍNICAS DE REFERÊNCIA",
];

export function TrustBar() {
  return (
    <section className="bg-white border-y border-border py-10">
      <div className="container-inner">
        <div className="text-center eyebrow justify-center flex mb-7">
          Em uso e em avaliação por
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-8 gap-y-5 items-center">
          {institutions.map((name) => (
            <div
              key={name}
              className="text-center font-mono text-[11px] tracking-[0.18em] text-muted-foreground/80"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
