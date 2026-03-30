import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { AboutHero } from "../components/about/AboutHero";
import { BrandPhilosophy } from "../components/about/BrandPhilosophy";
import { BespokeApproach } from "../components/about/BespokeApproach";
import { EngineeringExpertise } from "../components/about/EngineeringExpertise";
import { Collaboration } from "../components/about/Collaboration";
import { FounderStory } from "../components/about/FounderStory";
import { BrandValues } from "../components/about/BrandValues";
import { AboutCTA } from "../components/about/AboutCTA";
import { Seo } from "../components/Seo";
import {
  buildBreadcrumbSchema,
  buildCollectionPageSchema,
  buildOrganizationSchema,
} from "../lib/site";

const aboutSchema = [
  buildCollectionPageSchema({
    name: "About Smart Lit",
    description:
      "Learn how Smart Lit approaches luxury home automation in Abu Dhabi with design sensitivity, technical precision, and close project collaboration.",
    path: "/about",
  }),
  buildOrganizationSchema(),
  buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
  ]),
];

export function About() {
  return (
    <div className="min-h-screen bg-black">
      <Seo
        title="About Smart Lit Abu Dhabi"
        description="Smart Lit is a design-led smart home company serving Abu Dhabi and the UAE with refined automation planning, integration, and long-term project support."
        path="/about"
        schema={aboutSchema}
      />
      <Header />
      <main id="main-content">
        <AboutHero />
        <BrandPhilosophy />
        <BespokeApproach />
        <EngineeringExpertise />
        <Collaboration />
        <FounderStory />
        <BrandValues />
        <AboutCTA />
      </main>
      <Footer />
    </div>
  );
}
