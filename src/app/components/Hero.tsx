import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import leadingItVideo from "../../assets/LeadingIT trimmed.mp4";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-end overflow-hidden bg-black"
    >
      {/* Background Media */}
      <div className="absolute inset-0">
        <video
          src={leadingItVideo}
          className="h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          aria-label="LeadingIT showcase video"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/25 to-black/45" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black via-black/75 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-8 py-20 lg:px-16 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <h1 className="mb-9 max-w-4xl text-[36px] font-medium leading-[1.05] tracking-tight text-white sm:text-[48px] lg:text-[64px]">
            Luxury Home Automation
            <br />
            Design-led smart living,
            <br />
            quietly integrated.
          </h1>

          {/* CTAs */}
          <div className="flex flex-col gap-3 sm:flex-row">
            <motion.div
              whileHover={{ x: 4 }}
              transition={{ duration: 0.3 }}
            >
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-2 bg-white px-6 py-3.5 text-[14px] font-medium tracking-[0.08em] text-black transition-all duration-300 hover:bg-white/90"
              >
                Book a private consultation
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ x: 4 }}
              transition={{ duration: 0.3 }}
            >
              <Link
                to="/solutions"
                className="group inline-flex items-center justify-center gap-2 border border-white/15 bg-white/[0.02] px-6 py-3.5 text-[14px] font-medium tracking-[0.08em] text-white transition-all duration-300 hover:border-white/35 hover:bg-white/5"
              >
                Explore smart home solutions
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 right-8 lg:right-16"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-16 bg-gradient-to-b from-white/0 via-white/40 to-white/0"
        />
      </motion.div>
    </section>
  );
}
