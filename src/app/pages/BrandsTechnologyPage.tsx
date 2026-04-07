import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ConsultationCTA } from "../components/ConsultationCTA";
import { BrandsHero } from "../components/brands/BrandsHero";
import { BrandsIntro } from "../components/brands/BrandsIntro";
import { BrandStories } from "../components/brands/BrandStories";
import { BrandSelectionSection } from "../components/brands/BrandSelectionSection";
import { Seo } from "../components/Seo";
import {
  buildBreadcrumbSchema,
  buildCollectionPageSchema,
} from "../lib/site";

const brandsSchema = [
  buildCollectionPageSchema({
    name: "Brands & Technology",
    description:
      "Discover the design-led technology partners Smart Lit specifies for luxury villas, including Crestron, Blustream, Basalte, BlackNova, Marantz, Denon, Uandksound, Polk Audio, and JVC.",
    path: "/brands-technology",
  }),
  buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Brands & Tech", path: "/brands-technology" },
  ]),
];

export function BrandsTechnologyPage() {
  return (
    <div className="min-h-screen bg-black">
      <Seo
        title="Basalte, Crestron & Luxury Smart Home Brands Abu Dhabi"
        description="Smart Lit specifies Crestron, Blustream, Basalte, BlackNova, Marantz, Denon, Uandksound, Polk Audio, and JVC for design-led smart homes in Abu Dhabi and the UAE."
        path="/brands-technology"
        schema={brandsSchema}
      />
      <Header />
      <main id="main-content">
        <BrandsHero />
        <BrandsIntro />
        <BrandStories />
        <BrandSelectionSection />
        <ConsultationCTA />
      </main>
      <Footer />
    </div>
  );
}
