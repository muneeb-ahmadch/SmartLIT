import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Quote } from "lucide-react";
import jonathanImage from "../../../assets/jonathan.jpeg";
import hiteshImage from "../../../assets/Hitesh.jpg";

interface LeadershipStoryProps {
  image: string;
  imageAlt: string;
  eyebrow: string;
  name: string;
  role: string;
  title: string;
  paragraphs: string[];
  quote?: string;
  reverse?: boolean;
  imageClassName?: string;
}

function LeadershipStory({
  image,
  imageAlt,
  eyebrow,
  name,
  role,
  title,
  paragraphs,
  quote,
  reverse = false,
  imageClassName = "grayscale-[12%]",
}: LeadershipStoryProps) {
  const imageOrder = reverse ? "lg:order-2" : "lg:order-1";
  const contentOrder = reverse ? "lg:order-1" : "lg:order-2";

  return (
    <div className="grid items-start gap-16 lg:grid-cols-12 lg:gap-24">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
        className={`lg:col-span-5 ${imageOrder}`}
      >
        <div className="relative h-[600px] overflow-hidden rounded-[28px] border border-white/10 bg-[#111] lg:h-[700px]">
          <img
            src={image}
            alt={imageAlt}
            className={`h-full w-full object-cover ${imageClassName}`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60" />
        </div>
        <div className="mt-6">
          <p className="text-[14px] font-light text-white/50">{name}</p>
          <p className="mt-1 text-[12px] font-light text-white/40">{role}</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
        className={`lg:col-span-7 ${contentOrder}`}
      >
        <div className="mb-6">
          <span className="text-[11px] tracking-[0.2em] uppercase text-white/40 font-light">
            {eyebrow}
          </span>
        </div>
        <h3 className="mb-10 text-[36px] font-extralight leading-[1.15] tracking-tight text-white lg:text-[48px]">
          {title}
        </h3>
        <div className="space-y-6 text-[15px] font-light leading-[1.8] text-white/65 lg:text-[16px]">
          {paragraphs.map((paragraph, index) => (
            <p
              key={`${name}-${index}`}
              className={index === 0 ? "text-white/85" : undefined}
            >
              {paragraph}
            </p>
          ))}
        </div>

        {quote ? (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
            className="mt-16 border-l-2 border-white/20 py-6 pl-8"
          >
            <Quote className="mb-4 h-8 w-8 text-white/20" />
            <p className="text-[20px] font-light italic leading-[1.5] text-white/90 lg:text-[24px]">
              "{quote}"
            </p>
            <p className="mt-4 text-[13px] font-light text-white/40">
              — {name}
            </p>
          </motion.div>
        ) : null}
      </motion.div>
    </div>
  );
}

export function FounderStory() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative bg-[#0a0a0a] py-32 lg:py-40">
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
              Leadership
            </span>
          </div>
          <h2 className="text-[42px] lg:text-[56px] font-extralight leading-[1.15] tracking-tight text-white">
            A founder-led standard of detail.
          </h2>
        </motion.div>

        <div className="space-y-32">
          <LeadershipStory
            image={jonathanImage}
            imageAlt="Jonathan Sinasac"
            eyebrow="Founder & Principal"
            name="Jonathan Sinasac"
            role="Founder & Principal Designer"
            title="The Vision of Jonathan Sinasac"
            imageClassName="grayscale"
            paragraphs={[
              "For Jonathan Sinasac, premium technology was never the goal by itself.",
              "The goal was clarity.",
              "The UAE market offers exceptional homes, but many systems still feel overcomplicated, visually intrusive, or disconnected from the interior experience.",
              "Smart Lit was shaped as an alternative: design-aware automation that behaves calmly, performs reliably, and respects the architecture it serves.",
              "That founder-led approach still informs every major project, from early concept conversations to the final user experience.",
              "The result is a studio positioned for homeowners, architects, and interior designers who want technology to feel resolved, not merely installed.",
            ]}
            quote="Technology should support the home quietly and completely."
          />

          <LeadershipStory
            image={hiteshImage}
            imageAlt="Hitesh Ojha"
            eyebrow="Regional Leadership"
            name="Hitesh Ojha"
            role="Regional Business Leadership"
            title="Hitesh Ojha on trust-led growth"
            reverse
            paragraphs={[
              "For Hitesh Ojha, strong technology businesses are built on trust before anything else.",
              "His leadership focus is simple: connect the right partners, define the commercial path clearly, and make sure every client experience feels dependable from the first conversation onward.",
              "That matters in luxury home automation across Abu Dhabi and the UAE, where clients expect discretion, clarity, and long-term confidence, not just hardware recommendations.",
              "His role helps keep Smart Lit relationship-led, commercially sharp, and easy to work with across the region.",
            ]}
            quote="The best partnerships are clear, dependable, and built to last."
          />
        </div>
      </div>
    </section>
  );
}
