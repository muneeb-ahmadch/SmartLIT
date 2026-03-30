import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

interface ValueProps {
  title: string;
  description: string;
  index: number;
}

function ValueCard({ title, description, index }: ValueProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      className="group"
    >
      <div className="mb-4">
        <span className="text-[10px] tracking-[0.2em] uppercase text-white/30 font-light">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
      <h3 className="text-[22px] font-light tracking-tight text-white mb-4 group-hover:text-white/90 transition-colors duration-300">
        {title}
      </h3>
      <div className="w-12 h-[1px] bg-white/20 mb-6 group-hover:w-16 group-hover:bg-white/40 transition-all duration-500" />
      <p className="text-[14px] font-light leading-[1.8] text-white/60 group-hover:text-white/70 transition-colors duration-300">
        {description}
      </p>
    </motion.div>
  );
}

export function BrandValues() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const values = [
    {
      title: "Precision",
      description:
        "Control logic, hardware placement, and commissioning are refined carefully rather than rushed into place.",
    },
    {
      title: "Restraint",
      description:
        "The visual language stays calm. Technology should not compete with architecture for attention.",
    },
    {
      title: "Reliability",
      description:
        "Robust infrastructure and carefully selected platforms support daily trust, not just first impressions.",
    },
    {
      title: "Design Sensitivity",
      description:
        "Interfaces, lighting scenes, and visible hardware are chosen with the same care as other interior details.",
    },
    {
      title: "Technical Depth",
      description:
        "We resolve complexity behind the scenes so the finished home feels easy to control.",
    },
    {
      title: "Continuity",
      description:
        "The relationship continues after handover through support, adjustment, and thoughtful future expansion.",
    },
  ];

  return (
    <section ref={ref} className="relative bg-black py-32 lg:py-40">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-20 max-w-2xl"
        >
          <div className="mb-6">
            <span className="text-[11px] tracking-[0.2em] uppercase text-white/40 font-light">
              Our Values
            </span>
          </div>
          <h2 className="text-[42px] lg:text-[56px] font-extralight leading-[1.15] tracking-tight text-white">
            What defines Smart Lit
          </h2>
        </motion.div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {values.map((value, index) => (
            <ValueCard key={value.title} {...value} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
