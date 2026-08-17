const items = [
  "+6.000 médicos cadastrados",
  "+200.000 documentos gerados",
  "Parceria SBACV",
];

export function ProvaSocialMedicos() {
  return (
    <section className="border-y border-border bg-white py-6 md:py-7">
      <div className="container-inner">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-8 text-center">
          {items.map((t) => (
            <div
              key={t}
              className="font-mono text-[11.5px] md:text-[12px] tracking-[0.12em] uppercase text-ink-3"
            >
              {t}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
