import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router";

export function SolutionsHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1664607069803-96e9d885050e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB2aWxsYSUyMGludGVyaW9yJTIwZHVzayUyMER1YmFpfGVufDF8fHx8MTc3MzQzNDMwM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Luxury villa interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/70 to-black/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-8 lg:px-16 py-32 lg:py-40">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="max-w-3xl"
        >
          {/* Eyebrow */}
          <div className="mb-8">
            <span className="text-[11px] tracking-[0.2em] uppercase text-white/40 font-light">
              Solutions
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-[56px] lg:text-[72px] font-extralight leading-[1.1] tracking-tight text-white mb-12">
            Smart home solutions for refined villas.
          </h1>

          {/* Body Copy */}
          <div className="space-y-6 text-white/70 text-[15px] lg:text-[16px] font-light leading-[1.8] max-w-2xl mb-12">
            <p>
              Smart Lit designs connected systems that feel coherent from room
              to room, from first arrival to late evening use.
            </p>
            <p>
              Lighting, climate, cinema, audio, security, and control are
              planned as one experience for luxury homes in Abu Dhabi and across
              the UAE.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.div
              whileHover={{ x: 4 }}
              transition={{ duration: 0.3 }}
            >
              <Link
                to="/brands-technology"
                className="group px-8 py-4 bg-white text-black text-[13px] tracking-wide font-light hover:bg-white/90 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Explore technology partners
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ x: 4 }}
              transition={{ duration: 0.3 }}
            >
              <Link
                to="/contact"
                className="group px-8 py-4 border border-white/20 text-white text-[13px] tracking-wide font-light hover:border-white/40 hover:bg-white/5 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Book a consultation
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
