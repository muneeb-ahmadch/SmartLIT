import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

export function LifestyleStory() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative bg-[#0a0a0a] overflow-hidden">
      {/* Full-bleed Background Image */}
      <div className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1598448056086-307e98ef5c4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5YWNodCUyMGx1eHVyeSUyMGludGVyaW9yJTIwd29vZHxlbnwxfHx8fDE3NzMxMzY3MDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Luxury yacht interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/80 via-black/70 to-[#0a0a0a]/90" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-[1440px] mx-auto px-8 lg:px-16 py-32 lg:py-40">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <div className="mb-8">
              <span className="text-[11px] tracking-[0.2em] uppercase text-white/40 font-light">
                Our Philosophy
              </span>
            </div>

            <h2 className="text-[42px] lg:text-[56px] font-extralight leading-[1.15] tracking-tight text-white mb-12">
              Designed Around Architecture.
              <br />
              Engineered Around Life.
            </h2>

            <div className="space-y-8 text-white/70 text-[15px] lg:text-[16px] font-light leading-[1.8]">
              <p>
                No two villas are identical. No two yachts share the same
                personality.
              </p>
              <p className="text-white/85 text-[17px]">
                Why should their technology?
              </p>
              <p>
                Our approach begins with listening. How do you entertain? How do
                you relax? How do you move through your space?
              </p>
              <p>
                From there, we design an intelligent system that integrates
                seamlessly with your interiors, architectural flow, and daily
                rhythm.
              </p>
              <p>
                The technology we install is never an afterthought. It is woven
                into the fabric of your environment — invisible in operation,
                profound in impact.
              </p>
              <p className="text-white/90">
                This is bespoke automation. Tailored to you, refined for how you
                live.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Secondary Image Grid */}
      <div className="relative bg-black py-20">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative h-[400px] overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1713192705328-66dc7c972953?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwdmlsbGElMjBjb3JyaWRvciUyMGxpZ2h0aW5nJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc3MzEzNjcwMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Villa corridor lighting"
                className="w-full h-full object-cover grayscale-[30%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative h-[400px] overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1765767056681-9583b29007cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsdXh1cnklMjBsaXZpbmclMjByb29tJTIwZGFyayUyMG1vb2R5fGVufDF8fHx8MTc3MzEzNjY5NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Sophisticated living room"
                className="w-full h-full object-cover grayscale-[30%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative h-[400px] overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1580422666359-7160890d8c0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB5YWNodCUyMGRlY2slMjBzdW5zZXR8ZW58MXx8fHwxNzczMTM2Njk2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Yacht at sunset"
                className="w-full h-full object-cover grayscale-[30%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
