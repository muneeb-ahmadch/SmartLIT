import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

export function VideoDistribution() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    "Centralized source management",
    "Minimal visible hardware in living spaces",
    "Scalable infrastructure for larger villas",
    "Consistent high-resolution performance",
  ];

  return (
    <section ref={ref} className="relative bg-black overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-16 py-24 lg:py-32">
        <div className="grid items-center gap-14 lg:min-h-screen lg:grid-cols-2 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="order-2 relative h-[420px] overflow-hidden rounded-[28px] lg:order-1 lg:h-[640px]"
          >
          <img
            src="https://images.unsplash.com/photo-1769108407009-98ef84a606dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwbHV4dXJ5JTIwaW50ZXJpb3IlMjBkaXNwbGF5fGVufDF8fHx8MTc3MzQzNDkzOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Minimalist luxury interior with video display"
            className="w-full h-full object-cover"
          />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-1 max-w-xl lg:order-2 lg:justify-self-end"
          >
            <div className="mb-6">
              <span className="text-[12px] tracking-[0.2em] uppercase text-white/56 font-normal">
                Solution 04
              </span>
            </div>
            <h2 className="text-[42px] lg:text-[56px] font-medium leading-[1.15] tracking-tight text-white mb-10">
              Media & Video Distribution
            </h2>
            <div className="space-y-6 text-white/78 text-[17px] lg:text-[18px] font-normal leading-[1.8] mb-10">
              <p className="text-white/85">Eliminate clutter and simplify access.</p>
              <p>
                Our media infrastructure allows multiple displays throughout
                the property to access shared sources from a single, organised
                technical hub.
              </p>
              <p>This supports:</p>
            </div>

            <div className="space-y-4 mb-10">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{
                    duration: 0.5,
                    delay: 0.3 + index * 0.08,
                    ease: "easeOut",
                  }}
                  className="flex items-center gap-3"
                >
                  <div className="w-1 h-1 bg-white/40 rounded-full" />
                  <p className="text-[17px] font-normal text-white/80">
                    {feature}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="space-y-6 text-white/78 text-[17px] lg:text-[18px] font-normal leading-[1.8]">
              <p>
                It is especially valuable in larger homes where clear
                equipment-room planning and dependable networking matter as
                much as the visible screens.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
