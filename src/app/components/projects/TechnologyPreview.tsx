import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router";

export function TechnologyPreview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const brands = [
    "Crestron",
    "Blustream",
    "Denon",
    "Marantz",
    "Polk Audio",
    "Uandksound",
    "JVC",
    "Black Nova",
    "Basalte",
  ];

  return (
    <section ref={ref} className="relative bg-[#0a0a0a] py-32 lg:py-40">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <div className="mb-6">
            <span className="text-[12px] tracking-[0.2em] uppercase text-white/56 font-normal">
              Brand Layer
            </span>
          </div>
          <h2 className="text-[42px] lg:text-[56px] font-medium leading-[1.15] tracking-tight text-white mb-8">
            Selected partners behind the system.
          </h2>
          <div className="max-w-2xl mx-auto space-y-6 text-white/78 text-[17px] lg:text-[18px] font-normal leading-[1.8]">
            <p>
              Smart Lit specifies brands with clear roles: core control,
              architectural interfaces, cinematic performance, and dependable
              media distribution.
            </p>
          </div>
        </motion.div>

        {/* Brand Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-16"
        >
          {brands.map((brand, index) => (
            <motion.div
              key={brand}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: 0.3 + index * 0.05,
                ease: "easeOut",
              }}
              className="flex items-center justify-center h-24 border border-white/10 hover:border-white/20 hover:bg-white/[0.02] transition-all duration-300"
            >
              <span className="text-[17px] font-normal tracking-wide text-white/72">
                {brand}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-center"
        >
          <motion.div
            whileHover={{ x: 4 }}
            transition={{ duration: 0.3 }}
          >
            <Link
              to="/brands-technology"
              className="group px-8 py-4 border border-white/20 text-white text-[16px] tracking-wide font-medium hover:border-white/40 hover:bg-white/5 transition-all duration-300 inline-flex items-center gap-2"
            >
              Explore brands & tech
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
