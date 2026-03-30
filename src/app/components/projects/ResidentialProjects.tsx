import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

export function ResidentialProjects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "Waterfront Smart Villa",
      location: "Abu Dhabi, UAE",
      image:
        "https://images.unsplash.com/photo-1759177715489-74112089de1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB2aWxsYSUyMFBhbG0lMjBKdW1laXJhaCUyMER1YmFpJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzczNDM1NTk1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "Private Cinema Suite",
      location: "UAE",
      image:
        "https://images.unsplash.com/photo-1710131459450-7c384b8be18f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob21lJTIwY2luZW1hJTIwZGFyayUyMHRoZWF0ZXJ8ZW58MXx8fHwxNzczNDM1NTk3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "Contemporary Family Residence",
      location: "UAE",
      image:
        "https://images.unsplash.com/photo-1758448755952-42b404bc6f39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsdXh1cnklMjByZXNpZGVuY2UlMjBsaXZpbmclMjByb29tfGVufDF8fHx8MTc3MzQzNTU5OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "Seafront Design-Led Villa",
      location: "Abu Dhabi, UAE",
      image:
        "https://images.unsplash.com/photo-1771247144264-b9b59b0e2432?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlcmZyb250JTIwdmlsbGElMjBhcmNoaXRlY3R1cmUlMjBtb2Rlcm58ZW58MXx8fHwxNzczNDM1NTk5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

  return (
    <section
      id="residential-projects"
      ref={ref}
      className="relative bg-[#0a0a0a] py-32 lg:py-40 scroll-mt-24"
    >
      <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16"
        >
          <div className="mb-6">
            <span className="text-[11px] tracking-[0.2em] uppercase text-white/40 font-light">
              Residential
            </span>
          </div>
          <h2 className="text-[42px] lg:text-[56px] font-extralight leading-[1.15] tracking-tight text-white mb-6">
            Residential project profiles
          </h2>
          <p className="text-[15px] lg:text-[16px] font-light text-white/50 mb-8 max-w-xl">
            Smart Villas • Cinema Rooms • Integrated Living
          </p>
          <div className="max-w-2xl space-y-6 text-white/65 text-[15px] lg:text-[16px] font-light leading-[1.8]">
            <p>
              These profiles reflect the kinds of luxury homes Smart Lit is
              built to support: architecturally clean, highly usable, and ready
              for everyday living.
            </p>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: 0.3 + index * 0.1,
                ease: "easeOut",
              }}
              className="group relative h-[450px] lg:h-[550px] overflow-hidden cursor-pointer"
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-70 group-hover:opacity-85 transition-opacity duration-500" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <h3 className="text-[24px] lg:text-[28px] font-extralight leading-[1.2] tracking-tight text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-[13px] font-light text-white/60 mb-4">
                  {project.location}
                </p>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-[12px] tracking-wide font-light text-white/80 border-b border-white/20 pb-1">
                    Project profile
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
