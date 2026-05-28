const cols = [
  {
    title: "Produto",
    links: ["Funcionalidades", "Avicena IA", "Integrações", "Planos"],
  },
  { title: "Empresa", links: ["Sobre", "Blog", "Parcerias", "Contato"] },
  { title: "Legal", links: ["Termos de uso", "Privacidade", "LGPD", "Segurança"] },
];

export function Footer() {
  return (
    <footer style={{ background: "#0A1628" }} className="pt-16 pb-8 text-white/45">
      <div className="container-inner">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2.5">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <rect width="32" height="32" rx="8" fill="#2C70DD" />
                <path
                  d="M8 23V9h2.5l5.5 8 5.5-8H24v14h-2.5v-9.5L16 21l-5.5-7.5V23H8z"
                  fill="#fff"
                />
              </svg>
              <span className="text-[18px] font-extrabold text-white">
                MindMed
              </span>
            </div>
            <p className="mt-4 text-[14px] leading-[1.65] max-w-[280px]">
              Inteligência clínica para médicos brasileiros. IA, telemedicina e
              documentação automática em uma só plataforma.
            </p>
          </div>

          {cols.map((c) => (
            <div key={c.title}>
              <div className="text-white text-[14px] font-bold mb-4">
                {c.title}
              </div>
              <ul className="space-y-2.5">
                {c.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-[14px] hover:text-white/80 transition-colors"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          className="mt-14 pt-7 flex flex-wrap items-center justify-between gap-4 text-[13px]"
          style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
        >
          <div>© 2025 MindMed. Todos os direitos reservados.</div>
          <div className="flex gap-5">
            <a href="#" className="hover:text-white/80">
              Política de Privacidade
            </a>
            <a href="#" className="hover:text-white/80">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
