import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

interface BrandCardProps {
  name: string;
  description: string;
  index: number;
}

function BrandCard({ name, description, index }: BrandCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
      className="group border border-white/10 p-8 hover:border-white/20 hover:bg-white/[0.02] transition-all duration-500"
    >
      <div className="mb-4">
        <h3 className="text-[20px] font-normal tracking-wide text-white">
          {name}
        </h3>
      </div>
      <p className="text-[16px] font-normal leading-[1.7] text-white/68 group-hover:text-white/78 transition-colors duration-500">
        {description}
      </p>
    </motion.div>
  );
}

export function BrandsTechnology() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const brands = [
    {
      name: "Crestron",
      description:
        "Industry-leading automation and control systems for residential and marine environments.",
    },
    {
      name: "Blustream",
      description:
        "Premium HDMI and AV distribution solutions with cutting-edge video performance.",
    },
    {
      name: "Denon",
      description:
        "Exceptional audio engineering with audiophile-grade amplification and processing.",
    },
    {
      name: "Marantz",
      description:
        "Legendary sound quality and refined design for discerning music lovers.",
    },
    {
      name: "Polk Audio",
      description:
        "High-performance speakers designed for natural, immersive sound experiences.",
    },
    {
      name: "Definitive Technology",
      description:
        "Powerful, elegant loudspeakers with architectural integration and acoustic precision.",
    },
    {
      name: "JVC",
      description:
        "Advanced projection technology delivering cinematic visual experiences at home.",
    },
    {
      name: "Black Nova",
      description:
        "Bespoke marine entertainment systems engineered for luxury yachts.",
    },
    {
      name: "Basalte",
      description:
        "Exquisitely designed control interfaces that elevate smart home aesthetics.",
    },
  ];

  return (
    <section ref={ref} className="relative bg-[#0a0a0a] py-32 lg:py-40">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-20 max-w-3xl"
        >
          <div className="mb-6">
            <span className="text-[12px] tracking-[0.2em] uppercase text-white/56 font-normal">
              Partners in Excellence
            </span>
          </div>
          <h2 className="text-[42px] lg:text-[56px] font-medium leading-[1.15] tracking-tight text-white mb-8">
            The Art of Engineering
            <br />
            Excellence
          </h2>
          <p className="text-[17px] lg:text-[18px] font-normal leading-[1.8] text-white/78">
            At Smart LIT, we partner only with brands whose engineering integrity
            matches the architectural elegance of the villas and yachts we serve
            across the UAE.
          </p>
        </motion.div>

        {/* Brands Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {brands.map((brand, index) => (
            <BrandCard key={brand.name} {...brand} index={index} />
          ))}
        </div>

        {/* Closing Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="mt-20 text-center"
        >
          <p className="text-[16px] font-normal italic text-white/68 max-w-2xl mx-auto">
            Each brand is selected not for marketing appeal, but for proven
            reliability, sonic or visual excellence, and architectural
            compatibility.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
