import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Mail, Coffee, Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { SITE_EMAIL } from "../../lib/site";

export function AboutCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactOptions = [
    {
      icon: Calendar,
      label: "Plan Your Brief",
    },
    {
      icon: Mail,
      label: "Email Smart Lit",
    },
    {
      icon: Coffee,
      label: "Review Our Projects",
    },
  ];

  return (
    <section ref={ref} className="relative bg-[#0a0a0a] py-32 lg:py-40">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
        <div className="max-w-3xl mx-auto text-center">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-16"
          >
            <div className="mb-6">
              <span className="text-[11px] tracking-[0.2em] uppercase text-white/40 font-light">
                Next Step
              </span>
            </div>
            <h2 className="text-[42px] lg:text-[56px] font-extralight leading-[1.15] tracking-tight text-white mb-10">
              Ready to shape the brief?
            </h2>
            <div className="space-y-4 text-[15px] lg:text-[16px] font-light leading-[1.8] text-white/65">
              <p>
                If you are planning a new villa, renovation, or dedicated media
                space, we can help define the right level of integration before
                the project moves too far.
              </p>
            </div>
          </motion.div>

          {/* Contact Options */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            {contactOptions.map((option, index) => {
              const Icon = option.icon;
              return (
                <motion.div
                  key={option.label}
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.3 }}
                >
                  {index === 0 ? (
                    <a
                      href={`mailto:${SITE_EMAIL}?subject=Project%20Brief`}
                      className="group px-6 py-4 border border-white/20 text-white hover:border-white/40 hover:bg-white/5 transition-all duration-300 flex items-center justify-center gap-3"
                    >
                      <Icon className="w-4 h-4 text-white/40 group-hover:text-white/70 transition-colors" />
                      <span className="text-[13px] tracking-wide font-light">
                        {option.label}
                      </span>
                    </a>
                  ) : index === 1 ? (
                    <a
                      href={`mailto:${SITE_EMAIL}`}
                      className="group px-6 py-4 border border-white/20 text-white hover:border-white/40 hover:bg-white/5 transition-all duration-300 flex items-center justify-center gap-3"
                    >
                      <Icon className="w-4 h-4 text-white/40 group-hover:text-white/70 transition-colors" />
                      <span className="text-[13px] tracking-wide font-light">
                        {option.label}
                      </span>
                    </a>
                  ) : (
                    <Link
                      to="/projects"
                      className="group px-6 py-4 border border-white/20 text-white hover:border-white/40 hover:bg-white/5 transition-all duration-300 flex items-center justify-center gap-3"
                    >
                      <Icon className="w-4 h-4 text-white/40 group-hover:text-white/70 transition-colors" />
                      <span className="text-[13px] tracking-wide font-light">
                        {option.label}
                      </span>
                    </Link>
                  )}
                </motion.div>
              );
            })}
          </motion.div>

          {/* Primary CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <motion.div
              whileHover={{ x: 4 }}
              transition={{ duration: 0.3 }}
            >
              <Link
                to="/contact"
                className="group px-10 py-5 bg-white text-black text-[13px] tracking-wide font-light hover:bg-white/90 transition-all duration-300 inline-flex items-center gap-3"
              >
                Contact Smart Lit
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
