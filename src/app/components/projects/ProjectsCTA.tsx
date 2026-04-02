import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router";

export function ProjectsCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative bg-black py-32 lg:py-40">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
        <div className="max-w-3xl mx-auto text-center">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-12"
          >
            <div className="mb-6">
              <span className="text-[12px] tracking-[0.2em] uppercase text-white/56 font-normal">
                Private Consultation
              </span>
            </div>
            <h2 className="text-[42px] lg:text-[56px] font-medium leading-[1.15] tracking-tight text-white mb-8">
              Let&apos;s shape the brief around the way you want to live.
            </h2>
            <p className="text-[17px] lg:text-[18px] font-normal leading-[1.8] text-white/78 max-w-2xl mx-auto">
              Whether you are building, renovating, or refining a media space,
              Smart Lit can define the right balance of control, comfort, and
              technical depth for the project.
            </p>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.div
              whileHover={{ x: 4 }}
              transition={{ duration: 0.3 }}
            >
              <Link
                to="/contact"
                className="group px-10 py-5 bg-white text-black text-[16px] tracking-wide font-medium hover:bg-white/90 transition-all duration-300 inline-flex items-center justify-center gap-3"
              >
                Schedule a consultation
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ x: 4 }}
              transition={{ duration: 0.3 }}
            >
              <Link
                to="/solutions"
                className="group px-10 py-5 border border-white/20 text-white text-[16px] tracking-wide font-medium hover:border-white/40 hover:bg-white/5 transition-all duration-300 inline-flex items-center justify-center gap-3"
              >
                Explore our solutions
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Supporting Text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="mt-12"
          >
            <p className="text-[16px] font-normal italic text-white/56">
              All consultations are private and complimentary.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
