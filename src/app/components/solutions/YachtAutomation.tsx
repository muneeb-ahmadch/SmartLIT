import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

export function YachtAutomation() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const systems = [
    "Lighting systems",
    "Climate control",
    "Entertainment systems",
    "Audio distribution",
    "Surveillance and security",
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
              <span className="text-[12px] tracking-[0.2em] uppercase text-white/56 font-normal">
                Solution 07
              </span>
            </div>
            <h2 className="text-[42px] lg:text-[56px] font-medium leading-[1.15] tracking-tight text-white mb-10">
              Yacht Automation
            </h2>
            <div className="space-y-6 text-white/78 text-[17px] lg:text-[18px] font-normal leading-[1.8] mb-10">
              <p className="text-white/85">
                Technology at sea requires a different engineering discipline.
              </p>
              <p>
                Where marine projects apply, Smart Lit designs control systems
                that manage key onboard experiences with resilience and clarity:
              </p>
            </div>

            <div className="space-y-4 mb-10">
              {systems.map((system, index) => (
                <motion.div
                  key={system}
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
                  <p className="text-[17px] font-normal text-white/80">
                    {system}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="space-y-6 text-white/78 text-[17px] lg:text-[18px] font-normal leading-[1.8]">
              <p>
                Compact architecture, marine-grade components, and thoughtful
                user experience remain essential whenever the brief extends
                beyond land-based living.
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
            src="https://images.unsplash.com/photo-1697124510322-27ef594f67fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5YWNodCUyMGludGVyaW9yJTIwbHV4dXJ5JTIwbG91bmdlfGVufDF8fHx8MTc3MzQzNDMwNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Luxury yacht interior"
            className="w-full h-full object-cover"
          />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/55 via-transparent to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
