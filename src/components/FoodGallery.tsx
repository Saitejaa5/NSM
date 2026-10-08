import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Eyebrow } from "./Reveal";

const shots = [
  {
    src: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=800&q=80",
    alt: "Bamboo steamer with fresh momos",
    note: "Served hot",
    rotate: "-rotate-2",
  },
  {
    src: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80",
    alt: "Golden crispy fried snacks",
    note: "Crispy",
    rotate: "rotate-2",
  },
  {
    src: "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=800&q=80",
    alt: "North-Eastern style noodle bowl",
    note: "Comforting",
    rotate: "-rotate-1",
  },
  {
    src: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80",
    alt: "Rich homely curry and soya preparations",
    note: "Homely",
    rotate: "rotate-1",
  },
];

export default function FoodGallery() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [30, -30]);

  return (
    <section ref={ref} className="grain relative overflow-hidden bg-ink-950 py-16 text-cream-50 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Eyebrow>
          <span className="text-gold-400">Fresh from the steamer</span>
        </Eyebrow>
        <h2 className="mt-4 font-display text-4xl font-extrabold sm:text-5xl md:text-6xl">
          Hot. Fresh. <span className="text-gold-400">Handmade.</span>
        </h2>
        <p className="mt-4 max-w-xl text-cream-50/70">
          A glimpse of what comes off our counters — steam, crunch, chutney and
          everything in between. Photos are placeholders the owner can swap for real shots.
        </p>
      </div>

      <motion.div style={{ x }} className="mt-10 flex gap-5 overflow-x-auto px-4 pb-4 no-scrollbar sm:px-6 md:justify-center">
        {shots.map((s, i) => (
          <motion.figure
            key={s.src}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            className={`relative w-64 shrink-0 overflow-hidden rounded-[1.6rem] border border-white/10 bg-ink-800 shadow-2xl ${s.rotate} md:w-72`}
          >
            <img src={s.src} alt={s.alt} loading="lazy" className="aspect-[3/3.8] w-full object-cover" />
            <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-ink-950/60 via-transparent to-transparent" />
            <figcaption className="absolute bottom-3 left-3 font-hand text-3xl text-gold-400 drop-shadow">
              {s.note}
            </figcaption>
          </motion.figure>
        ))}
      </motion.div>
    </section>
  );
}
