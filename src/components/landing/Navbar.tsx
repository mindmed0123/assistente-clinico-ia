import { useEffect, useState } from "react";

const Logo = () => (
  <a href="#top" className="flex items-center gap-2.5">
    <svg width="22" height="22" viewBox="0 0 32 32" fill="none">
      <rect width="32" height="32" rx="6" fill="#0B1220" />
      <path
        d="M8 23V9h2.5l5.5 8 5.5-8H24v14h-2.5v-9.5L16 21l-5.5-7.5V23H8z"
        fill="#fff"
      />
    </svg>
    <span className="text-[15px] font-semibold tracking-tight text-ink">
      MindMed
    </span>
  </a>
);

const links = [
  { href: "#plataforma", label: "Plataforma" },
  { href: "#ecossistema", label: "Ecossistema" },
  { href: "#governanca", label: "Governança" },
  { href: "#casos", label: "Casos de uso" },
  { href: "#planos", label: "Planos" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 inset-x-0 z-50 h-[60px] flex items-center transition-all"
      style={{
        background: scrolled ? "rgba(255,255,255,0.85)" : "rgba(255,255,255,0.6)",
        backdropFilter: "blur(18px) saturate(140%)",
        WebkitBackdropFilter: "blur(18px) saturate(140%)",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
      }}
    >
      <div className="container-inner w-full flex items-center justify-between">
        <Logo />
        <div className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-[13.5px] font-medium text-foreground/70 hover:text-ink transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <a href="mailto:mindmedcontato@gmail.com" className="btn-ghost hidden sm:inline-flex">
            Contato comercial
          </a>
          <a href="https://acesso.mindmed.online" className="btn-primary">
            Acessar plataforma
          </a>
        </div>
      </div>
    </nav>
  );
}
