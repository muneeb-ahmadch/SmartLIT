import { motion } from "motion/react";

const highlights = [
  { label: "Control", value: "Crestron" },
  { label: "Architectural Interfaces", value: "Basalte, Black Nova" },
  { label: "Cinema & AV", value: "JVC, Marantz, Denon" },
];

export function BrandsHero() {
  return (
    <section className="relative flex min-h-screen items-end overflow-hidden bg-black">
      <div className="absolute inset-0">
        <img
          src="https://www.basalte.be/assets/front/images/about/about-hero-2024-big@2x.jpg"
          alt="Modern luxury villa interior with panoramic glazing and integrated smart lighting"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/45 to-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/88 via-black/48 to-black/40" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_24%,rgba(184,148,89,0.18),transparent_24%),radial-gradient(circle_at_84%_78%,rgba(255,255,255,0.1),transparent_20%)]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-8 pb-14 pt-32 lg:px-16 lg:pb-20 lg:pt-40">
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
          className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end"
        >
          <div className="max-w-5xl">
            <div className="mb-8 flex flex-wrap items-center gap-4">
              <span className="text-[12px] font-medium uppercase tracking-[0.22em] text-white/60">
                Brands & Technology
              </span>
              <span className="hidden h-px w-16 bg-white/15 sm:block" />
              <span className="text-[12px] font-medium uppercase tracking-[0.2em] text-white/32">
                Curated For Villas, Media Rooms, Design-Led Living
              </span>
            </div>

            <h1 className="max-w-4xl text-[46px] font-medium leading-[1.02] tracking-tight text-white sm:text-[58px] lg:text-[82px]">
              Premium smart home brands, specified with purpose.
            </h1>

            <p className="mt-8 max-w-2xl text-[17px] font-normal leading-[1.8] text-white/80 lg:text-[17px]">
              Smart Lit works with a tightly edited partner ecosystem so each
              layer of the home, from control to cinema performance, feels
              coherent and dependable in Abu Dhabi and across the UAE.
            </p>
          </div>

          <div className="rounded-[30px] border border-white/10 bg-black/30 p-6 backdrop-blur-md sm:p-8">
            <p className="mb-8 text-[12px] uppercase tracking-[0.22em] text-white/52">
              Selected Brand Layers
            </p>
            <div className="space-y-5">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.55,
                    delay: 0.3 + index * 0.08,
                    ease: "easeOut",
                  }}
                  className="border-b border-white/10 pb-5 last:border-b-0 last:pb-0"
                >
                  <p className="text-[12px] uppercase tracking-[0.18em] text-white/52">
                    {item.label}
                  </p>
                  <p className="mt-2 text-[22px] font-medium leading-[1.25] text-white sm:text-[26px]">
                    {item.value}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 lg:block"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          className="h-16 w-px bg-gradient-to-b from-white/0 via-white/35 to-white/0"
        />
      </motion.div>
    </section>
  );
}
