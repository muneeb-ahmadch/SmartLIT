import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Link } from "react-router";

const selectionPoints = [
  {
    title: "Climate Endurance",
    detail: "Specified for heat, load, and long-term stability in Gulf conditions.",
  },
  {
    title: "Architectural Discipline",
    detail: "Chosen to disappear into refined interiors or contribute materially.",
  },
  {
    title: "Integration Depth",
    detail: "Control, AV, lighting, and user interface layers engineered to behave as one.",
  },
  {
    title: "Service Continuity",
    detail: "Brands with dependable support paths, documentation, and lifecycle confidence.",
  },
];

export function BrandSelectionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative overflow-hidden bg-black py-24 lg:py-32">
      <div className="absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-px bg-white/8" />
        <div className="absolute right-[10%] top-12 h-72 w-72 rounded-full bg-[#9a7a4f]/[0.08] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-[1440px] px-8 lg:px-16">
        <div className="mb-14 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 34 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="text-[12px] font-medium uppercase tracking-[0.22em] text-white/52">
              Selection Standard
            </span>
            <h2 className="mt-5 text-[36px] font-medium leading-[1.12] tracking-tight text-white sm:text-[44px] lg:text-[58px]">
              Every product must justify its place in the home.
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 34 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="max-w-3xl text-[17px] font-normal leading-[1.8] text-white/76 lg:justify-self-end lg:text-[18px]"
          >
            A premium system is not built by collecting logos. It is built by
            specifying the right products, in the right hierarchy, for the right
            environment and the right design language.
          </motion.p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {selectionPoints.map((point, index) => (
            <motion.article
              key={point.title}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.55,
                delay: 0.16 + index * 0.06,
                ease: "easeOut",
              }}
              className="rounded-[28px] border border-white/10 bg-white/[0.025] p-6 sm:p-7"
            >
              <div className="mb-8 h-px w-14 bg-white/18" />
              <h3 className="text-[26px] font-medium leading-[1.15] tracking-tight text-white">
                {point.title}
              </h3>
              <p className="mt-5 text-[16px] font-normal leading-[1.75] text-white/76 sm:text-[17px]">
                {point.detail}
              </p>
            </motion.article>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-center gap-4 text-center sm:flex-row">
          <Link
            to="/solutions"
            className="border border-white/15 px-6 py-3 text-[16px] tracking-[0.12em] text-white/85 transition-all duration-300 hover:border-white/35 hover:bg-white/5"
          >
            Explore Smart Home Solutions
          </Link>
          <Link
            to="/contact"
            className="border border-white/15 px-6 py-3 text-[16px] tracking-[0.12em] text-white/85 transition-all duration-300 hover:border-white/35 hover:bg-white/5"
          >
            Contact Smart Lit
          </Link>
        </div>
      </div>
    </section>
  );
}
