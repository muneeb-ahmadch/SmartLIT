import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

export function BrandPhilosophy() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative bg-[#0a0a0a] py-32 lg:py-40">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="mb-6">
              <span className="text-[12px] tracking-[0.2em] uppercase text-white/56 font-normal">
                Design Philosophy
              </span>
            </div>
            <h2 className="text-[42px] lg:text-[52px] font-medium leading-[1.15] tracking-tight text-white mb-10">
              Technology should serve the atmosphere.
            </h2>
            <div className="space-y-6 text-white/78 text-[17px] lg:text-[18px] font-normal leading-[1.8]">
              <p>
                Every residence carries its own rhythm. Entertaining,
                unwinding, hosting family, and arriving home all ask different
                things from the environment.
              </p>
              <p>
                Our work begins with those routines, then translates them into
                lighting scenes, climate behaviour, media access, privacy, and
                control points that fit the architecture.
              </p>
              <p>
                Interfaces should feel intentional. Wiring should stay hidden.
                Speakers and control surfaces should either disappear into the
                design or contribute to it materially.
              </p>
              <p className="text-white/90 italic">Less clutter. Better living.</p>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative h-[600px] lg:h-[700px] overflow-hidden"
          >
            <img
              src="https://www.basalte.be/assets/front/images/about/about-inspire2-big@2x.jpg"
              alt="Minimal smart home technology"
              className="w-full h-full object-cover grayscale-[20%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
