import { motion } from "motion/react";

const homeValueBackground =
  "https://images.unsplash.com/photo-1681194189961-e2aa414f9c7f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxEdWJhaSUyMGx1eHVyeSUyMHBlbnRob3VzZSUyMGludGVyaW9yfGVufDF8fHx8MTc3MzQzNTU5OHww&ixlib=rb-4.1.0&q=80&w=1600&utm_source=figma&utm_medium=referral";

export function HomeValueProposition() {
  return (
    <section className="relative overflow-hidden bg-[#060708] py-24 lg:py-32">
      <div className="absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-px bg-white/10" />
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-80"
          style={{
            backgroundImage: `url(${homeValueBackground})`,
            backgroundPosition: "center 42%",
          }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.9)_0%,rgba(0,0,0,0.56)_20%,rgba(0,0,0,0.36)_50%,rgba(0,0,0,0.7)_82%,rgba(0,0,0,0.92)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.88)_0%,rgba(0,0,0,0.64)_36%,rgba(0,0,0,0.38)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_24%,rgba(190,154,88,0.2),transparent_26%),radial-gradient(circle_at_82%_72%,rgba(255,255,255,0.08),transparent_22%)]" />
      </div>

      <div className="relative mx-auto max-w-[1440px] px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="grid gap-10 py-6 lg:grid-cols-[0.34fr_0.66fr] lg:items-end lg:py-10"
        >
          <div className="max-w-sm">
            <span className="text-[12px] font-medium uppercase tracking-[0.22em] text-white/62">
              Smart Home Design
            </span>
            <h2 className="mt-5 text-[26px] font-medium leading-[1.12] tracking-tight text-white sm:text-[30px] lg:text-[36px]">
              Intelligent systems, composed around the home.
            </h2>
          </div>

          <div className="max-w-3xl border-l border-white/14 pl-0 text-[17px] leading-[1.85] text-white/80 sm:pl-6 lg:pl-10 lg:text-[18px]">
            <p>
              Smart Lit delivers luxury home automation in Abu Dhabi and across
              the UAE, integrating lighting, climate, motorised shading,
              security, audio, and home cinema into one refined system tailored
              to the architecture.
            </p>
            <p className="mt-5">
              We design every control experience to feel discreet, intuitive,
              and calm, so the technology supports the way you live without
              adding visual noise.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
