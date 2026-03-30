import { motion, useInView } from "motion/react";
import { useRef } from "react";

type FeaturedBrand = {
  name: string;
  category: string;
  statement: string;
  notes: string[];
  image: string;
  alt: string;
};

const featuredBrands: FeaturedBrand[] = [
  {
    name: "Crestron",
    category: "Whole-Home Control",
    statement:
      "A robust control platform for lighting, climate, shading, security, and entertainment across larger residences.",
    notes: ["Whole-home logic", "Fast scene recall", "Scalable villa control"],
    image:
      "https://kenticoprod.azureedge.net/kenticoblob/crestron/media/crestron/generalsiteimages/residential_enduser_new/home-security.png",
    alt: "Luxury interior showing a connected living environment",
  },
  {
    name: "Basalte",
    category: "Architectural Interface",
    statement:
      "Design-led switches, remotes, and interfaces that sit comfortably within refined interiors.",
    notes: ["Lifestyle-led control", "Architectural finishes", "Quiet tactile presence"],
    image:
      "https://www.basalte.be/assets/front/images/about/about-inspire1-big@2x.jpg",
    alt: "Sleek luxury interior with a lifestyle-focused smart home atmosphere",
  },
  {
    name: "Marantz",
    category: "Statement Audio",
    statement:
      "High-performance audio chosen for emotionally engaging listening and strong cinema support.",
    notes: ["Premium amplification", "Cinema support", "Warm, detailed sound"],
    image:
      "https://www.marantz.com/dw/image/v2/BGJH_PRD/on/demandware.static/-/Library-Sites-marantz_northamerica_shared/default/dw73c5a180/PLP/multiple-plp_3-col-carousel_discover-more_av-receivers.jpg?sw=2160",
    alt: "Official Marantz Grand Horizon speaker visual",
  },
];

const brandMatrix = [
  {
    category: "Amplification & Processing",
    brands: ["Marantz", "Denon"],
  },
  {
    category: "Architectural Audio",
    brands: ["Polk Audio", "Definitive Technology"],
  },
  {
    category: "Projection",
    brands: ["JVC Projectors"],
  },
  {
    category: "Minimal Interfaces",
    brands: ["Basalte"],
  },
];

function FeaturedBrandPanel({
  brand,
  index,
}: {
  brand: FeaturedBrand;
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative bg-black py-16 lg:py-20">
      <div className="mx-auto max-w-[1440px] px-8 lg:px-16">
        <div className="overflow-hidden rounded-[34px] border border-white/10 bg-[#0b0b0b]">
          <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className={index % 2 === 1 ? "lg:order-2" : ""}
            >
              <div className="relative h-[360px] sm:h-[460px] lg:h-full lg:min-h-[560px]">
                <img
                  src={brand.image}
                  alt={brand.alt}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/15" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.08, ease: "easeOut" }}
              className={`flex flex-col justify-between p-8 sm:p-10 lg:p-12 ${index % 2 === 1 ? "lg:order-1" : ""}`}
            >
              <div>
                <span className="text-[11px] uppercase tracking-[0.22em] text-white/35">
                  {brand.category}
                </span>
                <h2 className="mt-5 text-[38px] font-extralight leading-[1.05] tracking-tight text-white sm:text-[48px] lg:text-[60px]">
                  {brand.name}
                </h2>
                <p className="mt-6 max-w-xl text-[18px] font-light leading-[1.65] text-white/72 sm:text-[20px]">
                  {brand.statement}
                </p>
                <p className="mt-5 max-w-xl text-[15px] font-light leading-[1.8] text-white/60">
                  Smart Lit specifies {brand.name} where its strengths clearly
                  support the brief, rather than treating the brand list as a
                  showroom in itself.
                </p>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {brand.notes.map((note) => (
                  <div
                    key={note}
                    className="rounded-[22px] border border-white/10 bg-white/[0.03] p-5"
                  >
                    <p className="text-[13px] uppercase tracking-[0.16em] text-white/38">
                      Focus
                    </p>
                    <p className="mt-3 text-[17px] font-extralight leading-[1.45] text-white/88">
                      {note}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function BrandStories() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <>
      {featuredBrands.map((brand, index) => (
        <FeaturedBrandPanel key={brand.name} brand={brand} index={index} />
      ))}

      <section ref={ref} className="relative bg-[#080808] py-24 lg:py-32">
        <div className="absolute inset-0">
          <div className="absolute inset-x-0 top-0 h-px bg-white/8" />
          <div className="absolute left-[12%] top-16 h-64 w-64 rounded-full bg-white/[0.035] blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-[1440px] px-8 lg:px-16">
          <div className="mb-14 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <span className="text-[11px] uppercase tracking-[0.22em] text-white/35">
                Extended Brand Matrix
              </span>
              <h2 className="mt-5 text-[34px] font-extralight leading-[1.12] tracking-tight text-white sm:text-[42px] lg:text-[54px]">
                Additional brands with specific technical roles.
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 28 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="max-w-3xl text-[15px] font-light leading-[1.8] text-white/64 lg:justify-self-end lg:text-[16px]"
          >
            Every additional brand is chosen for a defined function inside the
            system. That discipline is what keeps the final experience clean,
            dependable, and easy to support.
          </motion.p>
          </div>

          <div className="grid gap-4 lg:grid-cols-4">
            {brandMatrix.map((group, index) => (
              <motion.article
                key={group.category}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.55,
                  delay: 0.16 + index * 0.06,
                  ease: "easeOut",
                }}
                className="rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.015))] p-6 sm:p-7"
              >
                <p className="text-[11px] uppercase tracking-[0.18em] text-white/35">
                  {group.category}
                </p>
                <div className="mt-8 space-y-4">
                  {group.brands.map((brand) => (
                    <div
                      key={brand}
                      className="border-b border-white/8 pb-4 last:border-b-0 last:pb-0"
                    >
                      <p className="text-[24px] font-extralight leading-[1.2] text-white">
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
    </>
  );
}
