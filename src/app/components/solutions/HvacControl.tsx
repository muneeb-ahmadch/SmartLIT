import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

export function HvacControl() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    "Zoned temperature control",
    "Day and night comfort modes",
    "Occupancy-based automation",
    "Energy-efficient scheduling",
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
              HVAC Control
            </h2>
            <div className="space-y-6 text-white/78 text-[17px] lg:text-[18px] font-normal leading-[1.8] mb-10">
              <p className="text-white/85">
                Climate should feel stable, quiet, and intuitively managed.
              </p>
              <p>
                Our HVAC control systems coordinate temperature, airflow, and
                efficiency across the home so each space remains comfortable
                without constant adjustment.
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
                  <p className="text-[17px] font-normal text-white/80">
                    {feature}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="space-y-6 text-white/78 text-[17px] lg:text-[18px] font-normal leading-[1.8]">
              <p className="text-white/85">
                The result is consistent comfort with intelligent efficiency.
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
              src="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
              alt="Calm luxury interior with a cool, comfortable atmosphere"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/55 via-transparent to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
