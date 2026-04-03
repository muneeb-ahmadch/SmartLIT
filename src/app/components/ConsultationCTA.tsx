import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { SITE_EMAIL } from "../lib/site";

type ConsultationCTAProps = {
  tertiaryCta?: {
    label: string;
    to: string;
  };
};

const defaultTertiaryCta = {
  label: "Explore brands & tech",
  to: "/brands-technology",
};

export function ConsultationCTA({
  tertiaryCta = defaultTertiaryCta,
}: ConsultationCTAProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="consultation"
      ref={ref}
      className="relative overflow-hidden bg-[#0a0a0a] py-28 lg:py-40"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-px bg-white/10" />
        <div className="absolute left-1/2 top-1/2 h-[420px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.025] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-[1440px] px-8 lg:px-16">
        <div className="mx-auto max-w-5xl rounded-[32px] border border-white/10 bg-white/[0.03] px-6 py-14 text-center shadow-[0_24px_80px_rgba(0,0,0,0.42)] sm:px-10 lg:px-16 lg:py-18">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-16"
          >
            <div className="mb-6">
              <span className="text-[12px] font-medium uppercase tracking-[0.2em] text-white/56">
                Smart Lit Consultation
              </span>
            </div>
            <h2 className="mb-8 text-[38px] font-medium leading-[1.12] tracking-tight text-white sm:text-[44px] lg:text-[56px]">
              Start with a private conversation.
            </h2>
            <p className="mx-auto max-w-2xl text-[17px] font-normal leading-[1.8] text-white/78 lg:text-[18px]">
              Whether you are planning a new villa, refining a renovation, or
              coordinating with your architect, we can define the right level of
              technology before complexity sets in.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap"
          >
            <motion.a
              whileHover={{ x: 4 }}
              transition={{ duration: 0.3 }}
              href={`mailto:${SITE_EMAIL}?subject=Private%20Consultation`}
              className="group inline-flex min-w-[220px] items-center justify-center gap-3 bg-white px-8 py-4 text-[16px] font-medium tracking-[0.08em] text-black transition-all duration-300 hover:bg-white/90"
            >
              Email us
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.div
              whileHover={{ x: 4 }}
              transition={{ duration: 0.3 }}
            >
              <Link
                to="/contact"
                className="group inline-flex min-w-[220px] items-center justify-center gap-3 border border-white/15 bg-white/[0.03] px-8 py-4 text-[16px] font-medium tracking-[0.08em] text-white transition-all duration-300 hover:border-white/35 hover:bg-white/5"
              >
                Contact Smart Lit
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ x: 4 }}
              transition={{ duration: 0.3 }}
            >
              <Link
                to={tertiaryCta.to}
                className="group inline-flex min-w-[220px] items-center justify-center gap-3 border border-white/15 bg-transparent px-8 py-4 text-[16px] font-medium tracking-[0.08em] text-white/88 transition-all duration-300 hover:border-white/35 hover:bg-white/5 hover:text-white"
              >
                {tertiaryCta.label}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Supporting Text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="mt-10"
          >
            <p className="text-[16px] font-normal italic text-white/56">
              Design-sensitive integration for Abu Dhabi and the UAE.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
