import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

export function HomeAutomation() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    "Whole-home control for lighting, climate, shading, and security",
    "Elegant keypads, touch panels, and mobile access",
    "Scene-based living for arrival, evening, entertaining, and away modes",
    "Central logic designed for reliability and expansion",
  ];

  return (
    <section ref={ref} className="relative bg-[#0a0a0a] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-16 py-24 lg:py-32">
        <div className="grid items-center gap-14 lg:min-h-screen lg:grid-cols-2 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-xl"
          >
            <div className="mb-6">
              <span className="text-[11px] tracking-[0.2em] uppercase text-white/40 font-light">
                Solution 01
              </span>
            </div>
            <h2 className="text-[42px] lg:text-[56px] font-extralight leading-[1.15] tracking-tight text-white mb-10">
              Home Automation
            </h2>
            <div className="space-y-6 text-white/65 text-[15px] lg:text-[16px] font-light leading-[1.8] mb-10">
              <p>
                Our luxury home automation systems unify the core experiences of
                the villa so the home responds clearly and consistently.
              </p>
              <p className="text-white/85">
                This is the foundation for smart living in Abu Dhabi:
              </p>
            </div>

            <div className="space-y-4 mb-10">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{
                    duration: 0.5,
                    delay: 0.3 + index * 0.08,
                    ease: "easeOut",
                  }}
                  className="flex items-center gap-3"
                >
                  <div className="w-1 h-1 bg-white/40 rounded-full" />
                  <p className="text-[15px] font-light text-white/80">
                    {feature}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="space-y-6 text-white/65 text-[15px] lg:text-[16px] font-light leading-[1.8]">
              <p>
                Smart Lit designs these systems for villas that need daily ease,
                strong technical structure, and clean integration with the
                interior language.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="relative h-[420px] overflow-hidden rounded-[28px] lg:h-[640px]"
          >
          <img
            src="https://images.unsplash.com/photo-1636651437348-f70236d050cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzbWFydCUyMGhvbWUlMjBlbGVnYW50JTIwbWluaW1hbHxlbnwxfHx8fDE3NzM0MzQzMDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Luxury smart home interior"
            className="w-full h-full object-cover"
          />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/55 via-transparent to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
