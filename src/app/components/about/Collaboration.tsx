import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

export function Collaboration() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative bg-black overflow-hidden">
      <div className="relative min-h-[80vh] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1760067537639-0fb475c87657?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmFsJTIwYmx1ZXByaW50cyUyMGx1eHVyeSUyMG1hdGVyaWFsc3xlbnwxfHx8fDE3NzMxMzgzNzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Architectural planning"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/80 to-black/90" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-[1440px] mx-auto px-8 lg:px-16 py-32 lg:py-40">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <div className="mb-6">
              <span className="text-[12px] tracking-[0.2em] uppercase text-white/56 font-normal">
                Collaboration
              </span>
            </div>
            <h2 className="text-[42px] lg:text-[56px] font-medium leading-[1.15] tracking-tight text-white mb-10">
              Planned with the wider design team.
            </h2>
            <div className="space-y-6 text-white/78 text-[17px] lg:text-[18px] font-normal leading-[1.8]">
              <p>
                Smart home integration works best when it is part of the project
                conversation early, not added once finishes are already fixed.
              </p>
              <p>
                We work with architects, interior designers, MEP teams, and
                contractors to align hardware placement, equipment planning,
                control points, and user experience with the overall vision.
              </p>
              <p className="text-white/85 italic">
                Better coordination creates quieter outcomes.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
