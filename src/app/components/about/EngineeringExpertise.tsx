import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

export function EngineeringExpertise() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const expertise = [
    "Control system architecture for large residences",
    "Lighting, climate, shading, and scene programming",
    "Private cinema and media room tuning",
    "Robust networking and equipment-room planning",
    "Security and access integration",
    "Specification for UAE environmental conditions",
  ];

  return (
    <section ref={ref} className="relative bg-[#0a0a0a] py-32 lg:py-40">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative h-[600px] lg:h-[700px] overflow-hidden lg:order-1"
          >
            <img
              src="https://images.unsplash.com/photo-1773000857265-419482ddf6b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB2aWxsYSUyMGludGVyaW9yJTIwbW9vZHklMjBlbGVnYW50fGVufDF8fHx8MTc3MzEzODM3MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Architectural detail"
              className="w-full h-full object-cover grayscale-[30%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60" />
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="lg:order-2"
          >
            <div className="mb-6">
              <span className="text-[11px] tracking-[0.2em] uppercase text-white/40 font-light">
                Technical Depth
              </span>
            </div>
            <h2 className="text-[42px] lg:text-[52px] font-extralight leading-[1.15] tracking-tight text-white mb-10">
              Elegant on the surface.
              <br />
              Serious underneath.
            </h2>
            <div className="space-y-6 text-white/65 text-[15px] lg:text-[16px] font-light leading-[1.8] mb-12">
              <p>
                The visual calm of a finished smart home depends on disciplined
                planning behind walls, ceilings, racks, and control logic.
              </p>
            </div>

            {/* Expertise List */}
            <div className="space-y-6 mb-12">
              {expertise.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{
                    duration: 0.5,
                    delay: 0.3 + index * 0.08,
                    ease: "easeOut",
                  }}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-1 h-1 mt-3 bg-white/30 rounded-full group-hover:bg-white/60 transition-colors duration-300" />
                  <p className="text-[15px] font-light text-white/70 group-hover:text-white/90 transition-colors duration-300">
                    {item}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="space-y-6 text-white/65 text-[15px] lg:text-[16px] font-light leading-[1.8]">
              <p>
                We coordinate with architects, interior designers, consultants,
                and contractors so technical decisions are made early and built
                cleanly.
              </p>
              <p className="text-white/90 text-[17px]">
                Technology that feels reliable, resolved, and ready for daily
                living.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
