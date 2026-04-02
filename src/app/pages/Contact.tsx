import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Seo } from "../components/Seo";
import { InquiryForm } from "../components/contact/InquiryForm";
import {
  SITE_EMAIL,
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

const trustPoints = [
  {
    label: "For homeowners",
    title: "A concise brief is enough to begin well.",
    body:
      "Whether the project is at concept stage or nearing handover, we can advise on the right sequence for control, lighting, shading, cinema, and security decisions.",
  },
  {
    label: "For design teams",
    title: "Technology planned with restraint and precision.",
    body:
      "Smart Lit works alongside architects, consultants, and interior designers to protect finish quality, sightlines, and spatial clarity from first fix onwards.",
  },
  {
    label: "For existing systems",
    title: "Refinement, upgrades, and discreet system recovery.",
    body:
      "We also review legacy installations, performance issues, and interface upgrades where the ambition is to make the system quieter, clearer, and easier to live with.",
  },
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

          <div className="relative mx-auto max-w-[1440px] px-8 lg:px-16">
            <div className="grid gap-14 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
              <div className="max-w-2xl">
                <div className="flex flex-wrap items-center gap-4">
                  <p className="text-[12px] uppercase tracking-[0.22em] text-white/56">
                    Contact
                  </p>
                  <span className="hidden h-px w-14 bg-white/14 sm:block" />
                  <p className="text-[12px] uppercase tracking-[0.18em] text-white/34">
                    Abu Dhabi | Villas | Yachts | Private Residences
                  </p>
                </div>

                <h1 className="mt-7 text-[46px] font-medium leading-[1.04] tracking-tight text-white sm:text-[58px] lg:text-[78px]">
                  Private smart home enquiries, handled with clarity.
                </h1>

                <div className="mt-8 max-w-xl space-y-5 text-[16px] leading-[1.85] text-white/80">
                  <p>
                    Smart Lit specifies and integrates premium residential
                    technology for luxury villas, penthouses, and yachts across
                    Abu Dhabi and the UAE.
                  </p>
                  <p>
                    Share the project stage, property type, and the systems you
                    want resolved. We will respond with the right next
                    conversation, whether that means an initial review, a site
                    visit, or coordination with your design team.
                  </p>
                </div>

                <div className="mt-10 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-6">
                    <p className="text-[12px] uppercase tracking-[0.2em] text-white/46">
                      Project fit
                    </p>
                    <p className="mt-3 text-[22px] font-medium leading-[1.25] text-white">
                      New builds, major renovations, and discreet upgrades
                    </p>
                  </div>
                  <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-6">
                    <p className="text-[12px] uppercase tracking-[0.2em] text-white/46">
                      Typical scope
                    </p>
                    <p className="mt-3 text-[22px] font-medium leading-[1.25] text-white">
                      Lighting, climate, cinema, audio, shading, security
                    </p>
                  </div>
                </div>

                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <a
                    href={`mailto:${SITE_EMAIL}?subject=Smart%20Lit%20Project%20Enquiry`}
                    className="group inline-flex items-center justify-center gap-3 rounded-full border border-white/12 bg-white/[0.03] px-7 py-4 text-[15px] tracking-[0.08em] text-white transition-all duration-300 hover:border-white/28 hover:bg-white/[0.06]"
                  >
                    Email Smart Lit
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                  <Link
                    to="/projects"
                    className="group inline-flex items-center justify-center gap-3 rounded-full bg-white px-7 py-4 text-[15px] tracking-[0.08em] text-black transition-all duration-300 hover:bg-white/90"
                  >
                    View project references
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>

              <InquiryForm />
            </div>
          </div>
        </section>

        <section className="bg-[#0a0a0a] py-24 lg:py-32">
          <div className="mx-auto max-w-[1440px] px-8 lg:px-16">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
              <div className="max-w-lg">
                <p className="text-[12px] uppercase tracking-[0.22em] text-white/48">
                  How we engage
                </p>
                <h2 className="mt-5 text-[36px] font-medium leading-[1.08] tracking-tight text-white sm:text-[46px]">
                  A quieter, better-informed start to specification.
                </h2>
                <p className="mt-6 text-[17px] leading-[1.82] text-white/74">
                  The first enquiry is usually about fit, priorities, and
                  timing. If you are still shaping the brief, reviewing our{" "}
                  <Link to="/solutions" className="text-white hover:text-white/76">
                    solutions
                  </Link>{" "}
                  and{" "}
                  <Link
                    to="/brands-technology"
                    className="text-white hover:text-white/76"
                  >
                    technology partners
                  </Link>{" "}
                  can help frame the discussion.
                </p>
              </div>

              <div className="grid gap-6 lg:grid-cols-3">
                {trustPoints.map((item) => (
                  <article
                    key={item.title}
                    className="rounded-[28px] border border-white/10 bg-white/[0.02] p-7"
                  >
                    <p className="text-[12px] uppercase tracking-[0.2em] text-white/46">
                      {item.label}
                    </p>
                    <h3 className="mt-5 text-[28px] font-medium leading-[1.16] text-white">
                      {item.title}
                    </h3>
                    <p className="mt-5 text-[16px] leading-[1.8] text-white/72">
                      {item.body}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
