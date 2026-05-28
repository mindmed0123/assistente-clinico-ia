import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { TrustBar } from "@/components/landing/TrustBar";
import { StatsBar } from "@/components/landing/StatsBar";
import { Features } from "@/components/landing/Features";
import { Science } from "@/components/landing/Science";
import { Security } from "@/components/landing/Security";
import { Integrations } from "@/components/landing/Integrations";
import { Testimonials } from "@/components/landing/Testimonials";
import { Pricing } from "@/components/landing/Pricing";
import { FAQ } from "@/components/landing/FAQ";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Footer } from "@/components/landing/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MindMed — Inteligência Clínica para Médicos" },
      {
        name: "description",
        content:
          "IA clínica com raciocínio médico real, telemedicina integrada e documentação automática. Avicena, seu assistente clínico com IA.",
      },
      { property: "og:title", content: "MindMed — Inteligência Clínica para Médicos" },
      {
        property: "og:description",
        content:
          "IA clínica, telemedicina e documentação automática em uma plataforma feita para médicos brasileiros.",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <TrustBar />
      <StatsBar />
      <Features />
      <Science />
      <Security />
      <Integrations />
      <Testimonials />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
