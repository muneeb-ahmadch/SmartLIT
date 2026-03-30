import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

export function Intro() {
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
              <span className="text-[11px] tracking-[0.2em] uppercase text-white/40 font-light">
                Welcome to Smart LIT
              </span>
            </div>
            <h2 className="text-[42px] lg:text-[52px] font-extralight leading-[1.15] tracking-tight text-white mb-8">
              Technology,
              <br />
              Quietly Perfected
            </h2>
            <div className="space-y-6 text-white/65 text-[15px] lg:text-[16px] font-light leading-[1.8]">
              <p>
                We specialize in intelligent ecosystems where lighting, climate,
                entertainment, shading, security, and control work in complete
                harmony.
              </p>
              <p>
                Every detail is designed to disappear into architecture while
                enhancing everyday life.
              </p>
              <p>
                The result is a living environment that anticipates your needs
                before you articulate them — technology that serves without
                announcing itself.
              </p>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative h-[500px] lg:h-[600px] overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1765767056681-9583b29007cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsdXh1cnklMjBsaXZpbmclMjByb29tJTIwZGFyayUyMG1vb2R5fGVufDF8fHx8MTc3MzEzNjY5NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Luxury modern interior"
              className="w-full h-full object-cover grayscale-[30%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
