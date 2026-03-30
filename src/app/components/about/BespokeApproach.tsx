import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

interface PrincipleProps {
  title: string;
  description: string;
  index: number;
}

function PrincipleCard({ title, description, index }: PrincipleProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
      className="border-l border-white/10 pl-8 py-6"
    >
      <div className="mb-4">
        <span className="text-[10px] tracking-[0.2em] uppercase text-white/30 font-light">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
      <h3 className="text-[24px] font-light tracking-tight text-white mb-4">
        {title}
      </h3>
      <p className="text-[14px] font-light leading-[1.8] text-white/60">
        {description}
      </p>
    </motion.div>
  );
}

export function BespokeApproach() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const principles = [
    {
      title: "Lifestyle First",
      description:
        "We begin with how the home should feel to use, then define the technology that supports that standard quietly.",
    },
    {
      title: "Architecturally Integrated",
      description:
        "We coordinate with architects and interior designers so interfaces, speakers, sensors, and keypads respect the design language.",
    },
    {
      title: "Engineered for Clarity",
      description:
        "Behind a simple user experience sits disciplined engineering, robust infrastructure, and a clear control hierarchy.",
    },
  ];

  return (
    <section ref={ref} className="relative bg-black overflow-hidden">
      {/* Background Image Section */}
      <div className="relative min-h-[70vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1773000857265-419482ddf6b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB2aWxsYSUyMGludGVyaW9yJTIwbW9vZHklMjBlbGVnYW50fGVufDF8fHx8MTc3MzEzODM3MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Luxury corridor"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/60 to-black" />
        </div>

        <div className="relative z-10 max-w-[1440px] mx-auto px-8 lg:px-16 py-32">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <div className="mb-6">
              <span className="text-[11px] tracking-[0.2em] uppercase text-white/40 font-light">
                Our Approach
              </span>
            </div>
            <h2 className="text-[42px] lg:text-[56px] font-extralight leading-[1.15] tracking-tight text-white mb-8">
              Tailored to the home, not forced onto it.
            </h2>
            <div className="space-y-6 text-white/70 text-[15px] lg:text-[16px] font-light leading-[1.8]">
              <p>
                Premium automation only feels premium when it is specific to the
                people living there.
              </p>
              <p>
                Smart Lit defines control around movement, routines, and
                interiors, so each room behaves as expected from the first day
                of use.
              </p>
              <p className="text-white/85 italic">
                A better system feels inevitable once it is in place.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Principles Section */}
      <div className="relative bg-black py-32">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
            {principles.map((principle, index) => (
              <PrincipleCard key={principle.title} {...principle} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
