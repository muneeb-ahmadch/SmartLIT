import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router";

export function FeaturedYacht() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative bg-black overflow-hidden">
      <div className="relative min-h-screen flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 lg:inset-y-0 lg:left-0 lg:w-3/5">
          <img
            src="https://images.unsplash.com/photo-1658412938736-84b7134375d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXBlcnlhY2h0JTIwZGVjayUyMGxvdW5nZSUyMGV2ZW5pbmd8ZW58MXx8fHwxNzczNDM1NTk5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Superyacht deck lounge"
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
                <span className="text-[11px] tracking-[0.2em] uppercase text-white/40 font-light">
                  Featured Yacht Project
                </span>
              </div>
            <h2 className="text-[42px] lg:text-[56px] font-extralight leading-[1.15] tracking-tight text-white mb-10">
              Marine-grade guest experience
            </h2>
            <div className="space-y-6 text-white/65 text-[15px] lg:text-[16px] font-light leading-[1.8] mb-10">
              <p>
                Multi-zone yacht environments require lighting, climate, media,
                and security to remain dependable despite space constraints and
                harsher operating conditions.
              </p>
              <p>
                Where Smart Lit is engaged on marine work, the design priority
                stays the same: simplify control, preserve elegance, and support
                a smooth guest experience.
              </p>
              <p className="text-white/85">
                That same systems thinking also informs our residential media and
                entertainment spaces on land.
              </p>
            </div>

              <motion.div
                whileHover={{ x: 4 }}
                transition={{ duration: 0.3 }}
              >
                <Link
                  to="/contact"
                  className="group px-8 py-4 border border-white/20 text-white text-[13px] tracking-wide font-light hover:border-white/40 hover:bg-white/5 transition-all duration-300 inline-flex items-center gap-2"
                >
                  Discuss a specialist brief
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
