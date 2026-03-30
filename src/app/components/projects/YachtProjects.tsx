import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

export function YachtProjects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "Marine Entertainment Suite",
      location: "Dubai Marina, UAE",
      image:
        "https://images.unsplash.com/photo-1697124510322-27ef594f67fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5YWNodCUyMGludGVyaW9yJTIwbHV4dXJ5JTIwbG91bmdlJTIwZW50ZXJ0YWlubWVudHxlbnwxfHx8fDE3NzM0MzU1OTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "Private Yacht Lounge",
      location: "Arabian Gulf",
      image:
        "https://images.unsplash.com/photo-1658412938736-84b7134375d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXBlcnlhY2h0JTIwZGVjayUyMGxvdW5nZSUyMGV2ZW5pbmd8ZW58MXx8fHwxNzczNDM1NTk5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "Onboard Media Environment",
      location: "Dubai, UAE",
      image:
        "https://images.unsplash.com/photo-1580422666359-7160890d8c0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB5YWNodCUyMGRlY2slMjBzdW5zZXQlMjBvY2VhbnxlbnwxfHx8fDE3NzM0MzU1OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

  return (
    <section
      id="yacht-projects"
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
              Marine
            </span>
          </div>
          <h2 className="text-[42px] lg:text-[56px] font-extralight leading-[1.15] tracking-tight text-white mb-6">
            Yacht Projects
          </h2>
          <p className="text-[15px] lg:text-[16px] font-light text-white/50 mb-8 max-w-xl">
            Marine Automation • AV at Sea • Reference Profiles
          </p>
          <div className="max-w-2xl space-y-6 text-white/65 text-[15px] lg:text-[16px] font-light leading-[1.8]">
            <p>
              Technology at sea must perform flawlessly under demanding
              conditions.
            </p>
            <p>
              Our yacht automation systems integrate entertainment, lighting,
              climate control, and security into compact, marine-grade
              architectures engineered for reliability and elegance.
            </p>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-3 gap-8">
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
              className="group relative h-[500px] overflow-hidden cursor-pointer"
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
                <h3 className="text-[22px] lg:text-[24px] font-extralight leading-[1.2] tracking-tight text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-[13px] font-light text-white/60 mb-4">
                  {project.location}
                </p>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-[12px] tracking-wide font-light text-white/80 border-b border-white/20 pb-1">
                    Reference profile
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
