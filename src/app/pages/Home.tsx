import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { LithomeShowcase } from "../components/LithomeShowcase";
import { ConsultationCTA } from "../components/ConsultationCTA";
import { Footer } from "../components/Footer";
import { Seo } from "../components/Seo";
import {
  buildBreadcrumbSchema,
  buildLocalBusinessSchema,
  buildWebSiteSchema,
} from "../lib/site";

const homeSchema = [
  buildWebSiteSchema(),
  buildLocalBusinessSchema(),
  buildBreadcrumbSchema([{ name: "Home", path: "/" }]),
];

export function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Seo
        title="Luxury Home Automation Abu Dhabi"
        description="Smart Lit designs luxury home automation in Abu Dhabi and across the UAE, integrating lighting, shading, climate, security, cinema, and elegant whole-home control."
        path="/"
        schema={homeSchema}
      />
      <Header />
      <main id="main-content">
        <Hero />
        <LithomeShowcase />
        <ConsultationCTA />
      </main>
      <Footer />
    </div>
  );
}
