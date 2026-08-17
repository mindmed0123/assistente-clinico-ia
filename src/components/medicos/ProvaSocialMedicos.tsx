const items = [
  "+6.000 médicos cadastrados",
  "+200.000 documentos gerados",
  "Parceria SBACV",
];

export function ProvaSocialMedicos() {
  return (
    <section className="border-y border-border bg-white py-5 md:py-7">
      <div className="container-inner">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 sm:gap-8 text-center">
          {items.map((t, i) => (
            <div
              key={t}
              className={`font-mono text-[11px] md:text-[12px] tracking-[0.12em] uppercase text-ink-3 py-2.5 sm:py-0 ${
                i === 0 ? "" : "border-t border-border sm:border-t-0"
              }`}
            >
              {t}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
