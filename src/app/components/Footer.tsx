import { Link } from "react-router";
import { SITE_EMAIL } from "../lib/site";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-black pt-32 pb-12">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-12 gap-12 lg:gap-16 mb-20">
          {/* Brand Column */}
          <div className="md:col-span-3">
            <div className="mb-8">
              <span className="text-[28px] font-normal tracking-wider text-white">
                Smart Lit
              </span>
              <div className="mt-2">
                <span className="text-[12px] tracking-[0.15em] uppercase text-white/30 font-normal">
                  United Arab Emirates
                </span>
              </div>
            </div>
            <p className="text-[16px] font-normal leading-[1.8] text-white/68 max-w-sm">
              Luxury home automation, lighting control, cinema, and integrated
              smart living for villas in Abu Dhabi and across the UAE.
            </p>
          </div>

          {/* Navigation Column */}
          <div className="md:col-span-2">
            <h3 className="text-[12px] tracking-[0.15em] uppercase text-white/56 font-normal mb-6">
              Navigation
            </h3>
            <nav className="flex flex-col gap-3">
              <Link
                to="/"
                className="text-[16px] font-normal text-white/72 hover:text-white transition-colors duration-300"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-[16px] font-normal text-white/72 hover:text-white transition-colors duration-300"
              >
                About
              </Link>
              <Link
                to="/solutions"
                className="text-[16px] font-normal text-white/72 hover:text-white transition-colors duration-300"
              >
                Solutions
              </Link>
              <Link
                to="/brands-technology"
                className="text-[16px] font-normal text-white/72 hover:text-white transition-colors duration-300"
              >
                Brands & Technology
              </Link>
              <Link
                to="/projects"
                className="text-[16px] font-normal text-white/72 hover:text-white transition-colors duration-300"
              >
                Projects
              </Link>
              <Link
                to="/contact"
                className="text-[16px] font-normal text-white/72 hover:text-white transition-colors duration-300"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Solutions Column */}
          <div className="md:col-span-2">
            <h3 className="text-[12px] tracking-[0.15em] uppercase text-white/56 font-normal mb-6">
              Solutions
            </h3>
            <nav className="flex flex-col gap-3">
              {[
                "Home Automation",
                "Home Cinema Design",
                "Multiroom Audio",
                "Media & Video Distribution",
                "Lighting Control",
                "Curtains Control",
                "HVAC Control",
                "Security Integration",
                "Yacht Automation",
              ].map((solution) => (
                <Link
                  key={solution}
                  to="/solutions"
                  className="text-[16px] font-normal text-white/72 hover:text-white transition-colors duration-300"
                >
                  {solution}
                </Link>
              ))}
            </nav>
          </div>

          {/* Brands & Tech Column */}
          <div className="md:col-span-2">
            <h3 className="text-[12px] tracking-[0.15em] uppercase text-white/56 font-normal mb-6">
              Brands & Tech
            </h3>
            <nav className="flex flex-col gap-3">
              {[
                "Crestron",
                "Blustream",
                "Basalte",
                "BlackNova",
                "Marantz",
                "Denon",
                "Uandksound",
                "Polk Audio",
                "JVC",
              ].map((brand) => (
                <Link
                  key={brand}
                  to="/brands-technology"
                  className="text-[16px] font-normal text-white/72 hover:text-white transition-colors duration-300"
                >
                  {brand}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Column */}
          <div className="md:col-span-3">
            <h3 className="text-[12px] tracking-[0.15em] uppercase text-white/56 font-normal mb-6">
              Contact
            </h3>
            <div className="flex flex-col gap-4">
              <div>
                <p className="text-[16px] font-normal text-white/72">
                  Abu Dhabi, UAE
                </p>
                <p className="text-[16px] font-normal text-white/72">
                  Dubai, UAE
                </p>
              </div>
              <div>
                <a
                  href={`mailto:${SITE_EMAIL}`}
                  className="text-[16px] font-normal text-white/72 hover:text-white transition-colors duration-300"
                >
                  {SITE_EMAIL}
                </a>
              </div>
              <div>
                <p className="text-[16px] font-normal text-white/72">
                  Consultations by appointment
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-[1px] bg-white/10 mb-12" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row items-center gap-6 text-[12px] font-normal text-white/56">
            <span>© {currentYear} Smart Lit. All rights reserved.</span>
            <div className="flex gap-6">
              <a
                href="/"
                className="hover:text-white/72 transition-colors duration-300"
              >
                Home
              </a>
              <a
                href="/contact"
                className="hover:text-white/72 transition-colors duration-300"
              >
                Contact
              </a>
            </div>
          </div>

          <p className="text-[12px] font-normal text-white/52">
            Abu Dhabi smart home design, integration, and private consultation.
          </p>
        </div>
      </div>
    </footer>
  );
}
