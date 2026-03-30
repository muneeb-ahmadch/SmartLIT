import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router";

export function AboutHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://www.basalte.be/assets/front/images/about/about-slider3-big@2x.jpg"
          alt="Luxury villa interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-8 lg:px-16 py-32 lg:py-40">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="max-w-3xl"
        >
          {/* Eyebrow */}
          <div className="mb-8">
            <span className="text-[11px] tracking-[0.2em] uppercase text-white/40 font-light">
              About Smart Lit
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-[56px] lg:text-[68px] font-extralight leading-[1.1] tracking-tight text-white mb-12">
            Luxury automation,
            <br />
            designed with restraint.
          </h1>

          {/* Body Copy */}
          <div className="space-y-6 text-white/70 text-[15px] lg:text-[16px] font-light leading-[1.8] max-w-2xl mb-12">
            <p className="text-white/85">
              Smart Lit was built for clients who want advanced technology to
              feel composed, useful, and visually disciplined.
            </p>
            <p>
              We plan and integrate luxury home automation, lighting control,
              cinema, media, and security systems for design-led residences in
              Abu Dhabi and across the UAE.
            </p>
            <p>
              The work is technical, but the outcome should never feel
              technical. It should feel calm, natural, and completely resolved.
            </p>
          </div>

          <motion.div
            whileHover={{ x: 4 }}
            transition={{ duration: 0.3 }}
          >
            <Link
              to="/solutions"
              className="group px-8 py-4 border border-white/20 text-white text-[13px] tracking-wide font-light hover:border-white/40 hover:bg-white/5 transition-all duration-300 flex items-center gap-2"
            >
              Explore our solutions
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
