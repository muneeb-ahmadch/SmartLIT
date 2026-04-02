import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router";

export function FeaturedResidential() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative bg-black overflow-hidden">
      <div className="relative min-h-screen flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 lg:inset-y-0 lg:left-0 lg:w-3/5">
          <img
            src="https://images.unsplash.com/photo-1681194189961-e2aa414f9c7f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxEdWJhaSUyMGx1eHVyeSUyMHBlbnRob3VzZSUyMGludGVyaW9yfGVufDF8fHx8MTc3MzQzNTU5OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Luxury villa living space with integrated smart home atmosphere"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-black via-black/80 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-[1440px] mx-auto px-8 lg:px-16 py-32 lg:py-40 w-full">
          <div className="flex justify-end">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-xl"
            >
              <div className="mb-6">
                <span className="text-[12px] tracking-[0.2em] uppercase text-white/56 font-normal">
                  Featured Project
                </span>
              </div>
              <h2 className="text-[42px] lg:text-[56px] font-medium leading-[1.15] tracking-tight text-white mb-10">
                Abu Dhabi waterfront residence
              </h2>
              <div className="space-y-6 text-white/78 text-[17px] lg:text-[18px] font-normal leading-[1.8] mb-10">
                <p>
                  A waterfront residence demands atmosphere, privacy, and easy
                  control across indoor living, guest entertaining, and evening
                  routines.
                </p>
                <p>
                  In this type of brief, Smart Lit combines lighting control,
                  climate automation, distributed audio, security integration, and
                  centralized media planning into one residential system.
                </p>
                <p className="text-white/85">
                  The outcome is a villa that feels composed from arrival through
                  to late-night living.
                </p>
              </div>

              <motion.div
                whileHover={{ x: 4 }}
                transition={{ duration: 0.3 }}
              >
                <Link
                  to="/solutions"
                  className="group px-8 py-4 border border-white/20 text-white text-[16px] tracking-wide font-medium hover:border-white/40 hover:bg-white/5 transition-all duration-300 inline-flex items-center gap-2"
                >
                  View residential solutions
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
