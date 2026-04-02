import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

interface SolutionProps {
  title: string;
  description: string;
  image: string;
  index: number;
}

function SolutionCard({ title, description, image, index }: SolutionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      className="group relative h-[500px] overflow-hidden cursor-pointer"
    >
      {/* Image */}
      <div className="absolute inset-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 grayscale-[40%] group-hover:grayscale-0"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/80 group-hover:from-black/40 group-hover:via-black/60 group-hover:to-black/90 transition-all duration-700" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end p-8 lg:p-10">
        <div className="mb-4">
          <span className="text-[12px] tracking-[0.2em] uppercase text-white/68 font-normal">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
        <h3 className="text-[28px] lg:text-[32px] font-normal tracking-tight text-white mb-4">
          {title}
        </h3>
        <p className="text-[16px] font-normal leading-[1.7] text-white/78 mb-6 max-w-md">
          {description}
        </p>
        <div className="flex items-center gap-2 text-white/72 group-hover:text-white transition-colors duration-300">
          <span className="text-[12px] tracking-wide font-normal">Discover more</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
        </div>
      </div>
    </motion.div>
  );
}

export function Solutions() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const solutions = [
    {
      title: "Home Automation",
      description:
        "Our luxury home automation systems bring together lighting, climate, shading, security, and entertainment into a single intuitive platform.",
      image:
        "https://images.unsplash.com/photo-1565596259320-f1a4ade7043a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMGhvbWUlMjBsaWdodGluZyUyMGNvbnRyb2wlMjBtaW5pbWFsfGVufDF8fHx8MTc3MzEzNjcwMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "Home Cinema Design",
      description:
        "A private cinema is more than a screen and speakers. It is an immersive architectural experience.",
      image:
        "https://images.unsplash.com/photo-1701989634922-de9ec2cdebd6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwaG9tZSUyMGNpbmVtYSUyMHRoZWF0ZXJ8ZW58MXx8fHwxNzczMTM2Njk2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "Multiroom Audio",
      description:
        "Music should move with you. Seamlessly distributed audio throughout your villa or yacht.",
      image:
        "https://images.unsplash.com/photo-1713192705328-66dc7c972953?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwdmlsbGElMjBjb3JyaWRvciUyMGxpZ2h0aW5nJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc3MzEzNjcwMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "Video Distribution",
      description:
        "Centralized video systems with clean installations and future-ready performance.",
      image:
        "https://images.unsplash.com/photo-1677798183185-582b96c421bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB2aWxsYSUyMGludGVyaW9yJTIwRHViYWklMjBhbWJpZW50JTIwbGlnaHRpbmd8ZW58MXx8fHwxNzczMTM2Njk0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "Lighting Control",
      description:
        "Lighting defines atmosphere. Our systems deliver precision control with architectural elegance.",
      image:
        "https://images.unsplash.com/photo-1664607069803-96e9d885050e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB2aWxsYSUyMHBvb2wlMjBEdWJhaSUyMG5pZ2h0fGVufDF8fHx8MTc3MzEzNjcwMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "Security Integration",
      description:
        "Protection should be powerful — yet unobtrusive. Integrated security designed for peace of mind.",
      image:
        "https://images.unsplash.com/photo-1578096241494-6cc439ab21ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwc2VjdXJpdHklMjBjYW1lcmElMjBlbGVnYW50fGVufDF8fHx8MTc3MzEzNjcwNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "Yacht Automation",
      description:
        "Advanced marine AV and automation systems designed for elegance and resilience at sea.",
      image:
        "https://images.unsplash.com/photo-1580422666359-7160890d8c0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB5YWNodCUyMGRlY2slMjBzdW5zZXR8ZW58MXx8fHwxNzczMTM2Njk2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
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
            <span className="text-[12px] tracking-[0.2em] uppercase text-white/56 font-normal">
              Our Solutions
            </span>
          </div>
          <h2 className="text-[42px] lg:text-[56px] font-medium leading-[1.12] tracking-tight text-white max-w-3xl">
            Intelligent Systems for
            <br />
            Luxury Living
          </h2>
        </motion.div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {solutions.map((solution, index) => (
            <SolutionCard key={solution.title} {...solution} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
