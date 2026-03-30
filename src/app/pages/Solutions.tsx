import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { SolutionsHero } from "../components/solutions/SolutionsHero";
import { SolutionsOverview } from "../components/solutions/SolutionsOverview";
import { HomeAutomation } from "../components/solutions/HomeAutomation";
import { HomeCinema } from "../components/solutions/HomeCinema";
import { MultiroomAudio } from "../components/solutions/MultiroomAudio";
import { VideoDistribution } from "../components/solutions/VideoDistribution";
import { LightingControl } from "../components/solutions/LightingControl";
import { SecurityIntegration } from "../components/solutions/SecurityIntegration";
import { YachtAutomation } from "../components/solutions/YachtAutomation";
import { SolutionsCTA } from "../components/solutions/SolutionsCTA";
import { Seo } from "../components/Seo";
import {
  buildBreadcrumbSchema,
  buildCollectionPageSchema,
  buildServiceSchema,
} from "../lib/site";

const solutionsSchema = [
  buildCollectionPageSchema({
    name: "Smart Home Solutions",
    description:
      "Explore Smart Lit solutions for luxury home automation, lighting control, home cinema, security, and intelligent living in Abu Dhabi and the UAE.",
    path: "/solutions",
  }),
  buildServiceSchema({
    name: "Luxury Home Automation",
    description:
      "Design-led smart home systems integrating lighting, climate, shading, security, and entertainment for refined villas in Abu Dhabi.",
    path: "/solutions",
  }),
  buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Solutions", path: "/solutions" },
  ]),
];

export function Solutions() {
  return (
    <div className="min-h-screen bg-black">
      <Seo
        title="Smart Home Solutions Abu Dhabi"
        description="Lighting control, home cinema, multi-room audio, security integration, and whole-home automation for luxury villas in Abu Dhabi and across the UAE."
        path="/solutions"
        schema={solutionsSchema}
      />
      <Header />
      <main id="main-content">
        <SolutionsHero />
        <SolutionsOverview />
        <HomeAutomation />
        <HomeCinema />
        <MultiroomAudio />
        <VideoDistribution />
        <LightingControl />
        <SecurityIntegration />
        <YachtAutomation />
        <SolutionsCTA />
      </main>
      <Footer />
    </div>
  );
}
