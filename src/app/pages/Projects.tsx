import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ProjectsHero } from "../components/projects/ProjectsHero";
import { ProjectCategories } from "../components/projects/ProjectCategories";
import { ResidentialProjects } from "../components/projects/ResidentialProjects";
import { FeaturedResidential } from "../components/projects/FeaturedResidential";
import { YachtProjects } from "../components/projects/YachtProjects";
import { FeaturedYacht } from "../components/projects/FeaturedYacht";
import { TechnologyPreview } from "../components/projects/TechnologyPreview";
import { ConsultationCTA } from "../components/ConsultationCTA";
import { Seo } from "../components/Seo";
import {
  buildBreadcrumbSchema,
  buildCollectionPageSchema,
} from "../lib/site";

const projectsSchema = [
  buildCollectionPageSchema({
    name: "Smart Lit Projects",
    description:
      "See how Smart Lit approaches luxury smart home projects, private cinema environments, and integrated living experiences across Abu Dhabi and the UAE.",
    path: "/projects",
  }),
  buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
  ]),
];

export function Projects() {
  return (
    <div className="min-h-screen bg-black">
      <Seo
        title="Luxury Smart Home Projects UAE"
        description="Selected residential automation environments from Smart Lit, showing how lighting, cinema, control, and integrated technology support premium homes in the UAE."
        path="/projects"
        schema={projectsSchema}
      />
      <Header />
      <main id="main-content">
        <ProjectsHero />
        <ProjectCategories />
        <ResidentialProjects />
        <FeaturedResidential />
        <YachtProjects />
        <FeaturedYacht />
        <TechnologyPreview />
        <ConsultationCTA
          tertiaryCta={{ label: "Explore our solutions", to: "/solutions" }}
        />
      </main>
      <Footer />
    </div>
  );
}
