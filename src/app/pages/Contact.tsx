import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Seo } from "../components/Seo";
import { InquiryForm } from "../components/contact/InquiryForm";
import {
  buildBreadcrumbSchema,
  buildCollectionPageSchema,
  buildLocalBusinessSchema,
} from "../lib/site";

const contactSchema = [
  buildCollectionPageSchema({
    name: "Contact Smart Lit",
    description:
      "Submit a private enquiry for luxury smart home integration, lighting control, cinema, and discreet technology design in Abu Dhabi and across the UAE.",
    path: "/contact",
  }),
  buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Contact", path: "/contact" },
  ]),
  buildLocalBusinessSchema(),
];

export function Contact() {
  return (
    <div className="min-h-screen bg-black">
      <Seo
        title="Private Smart Home Enquiries Abu Dhabi"
        description="Submit a private enquiry to Smart Lit for luxury home automation, lighting control, cinema, shading, and integrated system design in Abu Dhabi and across the UAE."
        path="/contact"
        schema={contactSchema}
      />
      <Header />
      <main id="main-content">
        <section className="relative overflow-hidden bg-black pt-32 pb-24 lg:pt-40 lg:pb-28">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_30%),radial-gradient(circle_at_20%_78%,rgba(178,138,82,0.18),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.02),rgba(0,0,0,0))]" />

          <div className="relative mx-auto max-w-[1320px] px-8 lg:px-16">
            <div className="mx-auto">
              <InquiryForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
