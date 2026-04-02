import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

export function SecurityIntegration() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    "Surveillance and perimeter awareness",
    "Smart door access and visitor control",
    "Motion and occupancy triggers",
    "Remote status checks",
    "Integrated security scenes",
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
            src="https://images.unsplash.com/photo-1708180582928-5f26d3ccda7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB2aWxsYSUyMGVudHJhbmNlJTIwc2VjdXJpdHklMjBnYXRlfGVufDF8fHx8MTc3MzQzNDk0MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Luxury villa entrance with security"
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
                Solution 08
              </span>
            </div>
            <h2 className="text-[42px] lg:text-[56px] font-medium leading-[1.15] tracking-tight text-white mb-10">
              Security Integration
            </h2>
            <div className="space-y-6 text-white/78 text-[17px] lg:text-[18px] font-normal leading-[1.8] mb-10">
              <p className="text-white/85">
                Protection should feel dependable, discreet, and easy to
                understand.
              </p>
              <p>We integrate security and access into the wider smart home:</p>
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
                Security becomes more valuable when it sits inside a coherent
                control system instead of another isolated app.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
