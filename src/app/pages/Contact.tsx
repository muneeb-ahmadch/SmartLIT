import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Seo } from "../components/Seo";
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
      "Plan a private consultation for luxury home automation in Abu Dhabi and across the UAE.",
    path: "/contact",
  }),
  buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Contact", path: "/contact" },
  ]),
  buildLocalBusinessSchema(),
];

const enquiryPoints = [
  "New villa builds and major renovations",
  "Lighting, shading, and climate control design",
  "Home cinema, multi-room audio, and media distribution",
  "Security, access, and whole-home control",
  "Architect and interior designer collaboration",
];

export function Contact() {
  return (
    <div className="min-h-screen bg-black">
      <Seo
        title="Contact Smart Lit Abu Dhabi"
        description="Contact Smart Lit to discuss luxury home automation, lighting control, shading, cinema, and integrated smart home design in Abu Dhabi and the UAE."
        path="/contact"
        schema={contactSchema}
      />
      <Header />
      <main id="main-content">
        <section className="relative overflow-hidden bg-black pt-32 pb-24 lg:pt-40 lg:pb-32">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_30%),radial-gradient(circle_at_20%_80%,rgba(154,122,79,0.16),transparent_28%)]" />

          <div className="relative mx-auto max-w-[1440px] px-8 lg:px-16">
            <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div className="max-w-2xl">
                <p className="text-[12px] uppercase tracking-[0.22em] text-white/56">
                  Contact
                </p>
                <h1 className="mt-6 text-[46px] font-medium leading-[1.08] tracking-tight text-white sm:text-[58px] lg:text-[76px]">
                  Begin your smart home project in Abu Dhabi.
                </h1>
                <p className="mt-8 max-w-xl text-[16px] font-normal leading-[1.8] text-white/80">
                  Smart Lit designs refined automation for villas and high-end
                  residences across Abu Dhabi and the UAE. Share your project,
                  timeline, and priorities, and we will shape the right next
                  conversation.
                </p>

                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <a
                    href={`mailto:${SITE_EMAIL}?subject=Smart%20Lit%20Consultation`}
                    className="group inline-flex items-center justify-center gap-3 bg-white px-8 py-4 text-[16px] tracking-[0.08em] text-black transition-all duration-300 hover:bg-white/90"
                  >
                    Email Smart Lit
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                  <Link
                    to="/projects"
                    className="group inline-flex items-center justify-center gap-3 border border-white/15 bg-white/[0.03] px-8 py-4 text-[16px] tracking-[0.08em] text-white transition-all duration-300 hover:border-white/35 hover:bg-white/5"
                  >
                    View project references
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>

              <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-8 sm:p-10">
                <h2 className="text-[28px] font-medium tracking-tight text-white sm:text-[34px]">
                  What to share
                </h2>
                <p className="mt-5 max-w-2xl text-[17px] font-normal leading-[1.8] text-white/78">
                  A useful first brief can be short. Project type, location,
                  build stage, and the spaces you want to elevate are enough to
                  begin.
                </p>
                <div className="mt-8 grid gap-4">
                  {enquiryPoints.map((point) => (
                    <div
                      key={point}
                      className="rounded-[22px] border border-white/10 bg-black/20 px-5 py-4"
                    >
                      <p className="text-[17px] font-normal leading-[1.6] text-white/82">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="mt-10 border-t border-white/10 pt-8">
                  <p className="text-[12px] uppercase tracking-[0.22em] text-white/52">
                    Service area
                  </p>
                  <p className="mt-3 text-[18px] font-medium text-white">
                    Abu Dhabi, Dubai, and selected UAE residential projects
                  </p>
                  <p className="mt-6 text-[12px] uppercase tracking-[0.22em] text-white/52">
                    Email
                  </p>
                  <a
                    href={`mailto:${SITE_EMAIL}`}
                    className="mt-3 inline-block text-[18px] font-medium text-white hover:text-white/80"
                  >
                    {SITE_EMAIL}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#0a0a0a] py-24 lg:py-32">
          <div className="mx-auto grid max-w-[1440px] gap-8 px-8 lg:grid-cols-3 lg:px-16">
            <article className="rounded-[28px] border border-white/10 bg-white/[0.02] p-7">
              <p className="text-[12px] uppercase tracking-[0.2em] text-white/52">
                For Homeowners
              </p>
              <h2 className="mt-5 text-[28px] font-medium leading-[1.15] text-white">
                Calm, clear guidance from concept to handover.
              </h2>
              <p className="mt-5 text-[17px] font-normal leading-[1.8] text-white/76">
                We help translate lifestyle goals into practical control,
                comfort, and entertainment decisions without overwhelming the
                design process.
              </p>
            </article>
            <article className="rounded-[28px] border border-white/10 bg-white/[0.02] p-7">
              <p className="text-[12px] uppercase tracking-[0.2em] text-white/52">
                For Design Teams
              </p>
              <h2 className="mt-5 text-[28px] font-medium leading-[1.15] text-white">
                Technology planned with architectural discipline.
              </h2>
              <p className="mt-5 text-[17px] font-normal leading-[1.8] text-white/76">
                Smart Lit collaborates with architects, consultants, and
                interior designers to protect finish quality, interface
                placement, and spatial clarity.
              </p>
            </article>
            <article className="rounded-[28px] border border-white/10 bg-white/[0.02] p-7">
              <p className="text-[12px] uppercase tracking-[0.2em] text-white/52">
                Next Steps
              </p>
              <h2 className="mt-5 text-[28px] font-medium leading-[1.15] text-white">
                Explore the systems and partners before you enquire.
              </h2>
              <p className="mt-5 text-[17px] font-normal leading-[1.8] text-white/76">
                If you are still shaping the brief, review our{" "}
                <Link to="/solutions" className="text-white hover:text-white/75">
                  home automation solutions
                </Link>{" "}
                and{" "}
                <Link
                  to="/brands-technology"
                  className="text-white hover:text-white/75"
                >
                  premium technology partners
                </Link>
                .
              </p>
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
