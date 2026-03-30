import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

export function ProjectCategories() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);

    if (!section) {
      return;
    }

    section.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const categories = [
    {
      title: "Residential Projects",
      sectionId: "residential-projects",
      image:
        "https://images.unsplash.com/photo-1744405901062-d881973bc195?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB2aWxsYSUyMGludGVyaW9yJTIwRHViYWklMjBsdXh1cnl8ZW58MXx8fHwxNzczNDM1NTk2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "Yacht Projects",
      sectionId: "yacht-projects",
      image:
        "https://images.unsplash.com/photo-1580422666359-7160890d8c0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB5YWNodCUyMGRlY2slMjBzdW5zZXQlMjBvY2VhbnxlbnwxfHx8fDE3NzM0MzU1OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

  return (
    <section ref={ref} className="relative bg-black py-32 lg:py-40">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <div className="mb-6">
            <span className="text-[11px] tracking-[0.2em] uppercase text-white/40 font-light">
              Project Focus
            </span>
          </div>
          <h2 className="text-[42px] lg:text-[56px] font-extralight leading-[1.15] tracking-tight text-white mb-8">
            Residential systems with tailored entertainment spaces.
          </h2>
          <div className="max-w-2xl mx-auto space-y-6 text-white/65 text-[15px] lg:text-[16px] font-light leading-[1.8]">
            <p>
              Our strongest relevance is luxury residential automation, with
              dedicated cinema and media environments sitting inside the wider
              home ecosystem.
            </p>
          </div>
        </motion.div>

        {/* Category Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.1, ease: "easeOut" }}
              className="group relative h-[500px] lg:h-[600px] overflow-hidden"
            >
              <button
                type="button"
                onClick={() => scrollToSection(category.sectionId)}
                className="relative h-full w-full cursor-pointer text-left"
                aria-label={`Scroll to ${category.title}`}
              >
                {/* Image */}
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-8 lg:p-12">
                  <h3 className="text-[32px] lg:text-[42px] font-extralight leading-[1.2] tracking-tight text-white mb-4">
                    {category.title}
                  </h3>
                  <div className="flex items-center gap-2 text-white/60 group-hover:text-white transition-colors duration-300">
                    <span className="text-[13px] tracking-wide font-light">
                      Explore Projects
                    </span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
