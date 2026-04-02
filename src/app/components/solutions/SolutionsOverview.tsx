import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

export function SolutionsOverview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative bg-black py-32 lg:py-40">
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
                Our Approach
              </span>
            </div>
            <h2 className="text-[42px] lg:text-[56px] font-medium leading-[1.15] tracking-tight text-white mb-10">
              A connected home should behave as one system.
            </h2>
            <div className="space-y-6 text-white/78 text-[17px] lg:text-[18px] font-normal leading-[1.8]">
              <p>
                Premium automation is not a stack of disconnected apps and
                remotes. It is a carefully planned infrastructure that makes the
                home easier to live in every day.
              </p>
              <p className="text-white/85">
                Each Smart Lit solution is specified to integrate quietly into
                architecture while keeping performance, flexibility, and future
                support in view.
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
              src="https://images.unsplash.com/photo-1513694203232-719a280e022f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
              alt="Refined smart home interior with integrated lighting"
              className="w-full h-full object-cover grayscale-[20%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
