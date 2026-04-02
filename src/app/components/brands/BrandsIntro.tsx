import { motion, useInView } from "motion/react";
import { useRef } from "react";

const brandGroups = [
  {
    title: "Automation Core",
    brands: ["Crestron", "Blustream"],
  },
  {
    title: "Cinema Performance",
    brands: ["Marantz", "Denon", "JVC Projectors"],
  },
  {
    title: "Architectural Interfaces",
    brands: ["Black Nova", "Basalte"],
  },
  {
    title: "Distributed Audio",
    brands: ["Polk Audio", "Definitive Technology"],
  },
];

export function BrandsIntro() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative overflow-hidden bg-[#070707] py-24 lg:py-32">
      <div className="absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-px bg-white/8" />
        <div className="absolute right-[12%] top-12 h-72 w-72 rounded-full bg-[#97774b]/[0.08] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-[1440px] px-8 lg:px-16">
        <div className="mb-14 grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="text-[12px] font-medium uppercase tracking-[0.2em] text-white/38">
              Brand Edit
            </span>
            <h2 className="mt-5 text-[34px] font-medium leading-[1.12] tracking-tight text-white sm:text-[42px] lg:text-[54px]">
              Fewer brands. Better decisions.
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="max-w-3xl text-[17px] font-normal leading-[1.8] text-white/76 lg:justify-self-end lg:text-[18px]"
          >
            The lineup is intentionally narrow: control, signal flow, audio,
            projection, and tactile interfaces selected to operate as one
            residential system rather than a loose collection of products.
          </motion.p>
        </div>

        <div className="grid gap-4 lg:grid-cols-4">
          {brandGroups.map((group, index) => (
            <motion.article
              key={group.title}
              initial={{ opacity: 0, y: 26 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.55,
                delay: 0.16 + index * 0.06,
                ease: "easeOut",
              }}
              className="rounded-[26px] border border-white/10 bg-white/[0.025] p-6 sm:p-7"
            >
              <p className="text-[12px] uppercase tracking-[0.18em] text-white/52">
                {group.title}
              </p>
              <div className="mt-8 space-y-3">
                {group.brands.map((brand) => (
                  <div
                    key={brand}
                    className="border-b border-white/8 pb-3 last:border-b-0 last:pb-0"
                  >
                    <p className="text-[22px] font-medium leading-[1.2] text-white">
                      {brand}
                    </p>
                  </div>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
