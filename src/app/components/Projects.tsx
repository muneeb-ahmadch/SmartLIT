import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  location: string;
  category: string;
  image: string;
  index: number;
}

function ProjectCard({
  title,
  location,
  category,
  image,
  index,
}: ProjectCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
      className="group relative h-[600px] overflow-hidden cursor-pointer"
    >
      {/* Image */}
      <div className="absolute inset-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/90 group-hover:from-black/30 group-hover:via-black/50 group-hover:to-black/95 transition-all duration-700" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-between p-10">
        <div className="flex justify-between items-start">
          <span className="text-[10px] tracking-[0.2em] uppercase text-white/40 font-light">
            {category}
          </span>
          <span className="text-[10px] tracking-[0.2em] uppercase text-white/40 font-light">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        <div>
          <h3 className="text-[32px] lg:text-[36px] font-light tracking-tight text-white mb-3">
            {title}
          </h3>
          <p className="text-[14px] font-light text-white/60 mb-6">{location}</p>
          <div className="flex items-center gap-2 text-white/50 group-hover:text-white transition-colors duration-300">
            <span className="text-[12px] tracking-wide font-light">
              View Project
            </span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "Palm Jumeirah Beachfront Villa",
      location: "Dubai, UAE",
      category: "Smart Villa",
      image:
        "https://images.unsplash.com/photo-1664607069803-96e9d885050e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB2aWxsYSUyMHBvb2wlMjBEdWJhaSUyMG5pZ2h0fGVufDF8fHx8MTc3MzEzNjcwMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "Emirates Hills Private Cinema",
      location: "Dubai, UAE",
      category: "Private Cinema",
      image:
        "https://images.unsplash.com/photo-1701989634922-de9ec2cdebd6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwaG9tZSUyMGNpbmVtYSUyMHRoZWF0ZXJ8ZW58MXx8fHwxNzczMTM2Njk2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "Arabian Gulf Yacht Integration",
      location: "UAE Waters",
      category: "Yacht Automation",
      image:
        "https://images.unsplash.com/photo-1580422666359-7160890d8c0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB5YWNodCUyMGRlY2slMjBzdW5zZXR8ZW58MXx8fHwxNzczMTM2Njk2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "Abu Dhabi Waterfront Residence",
      location: "Abu Dhabi, UAE",
      category: "Case Study",
      image:
        "https://images.unsplash.com/photo-1745750327932-7fb1d6f60b9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBwZW50aG91c2UlMjBEdWJhaSUyMHZpZXd8ZW58MXx8fHwxNzczMTM2NzA0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

  return (
    <section ref={ref} className="relative bg-black py-32 lg:py-40">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-20"
        >
          <div className="mb-6">
            <span className="text-[11px] tracking-[0.2em] uppercase text-white/40 font-light">
              Portfolio
            </span>
          </div>
          <h2 className="text-[42px] lg:text-[56px] font-extralight leading-[1.1] tracking-tight text-white">
            Selected Projects
          </h2>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
