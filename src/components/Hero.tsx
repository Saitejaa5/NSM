import { motion, useReducedMotion } from "framer-motion";
import { FiArrowRight, FiMapPin, FiPhone, FiStar } from "react-icons/fi";
import { PHONE_HREF, PHONE_DISPLAY } from "../data/locations";
import { ChiliIcon, LeafIcon, SteamLines } from "./illustrations";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};
const line = {
  hidden: { opacity: 0, y: 44 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function Hero() {
  const reduce = useReducedMotion();
  return (
    <section id="home" className="relative overflow-hidden bg-cream-100 pt-16 md:pt-20">
      {/* soft blobs */}
      <div aria-hidden className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-gold-400/20 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute top-40 -right-24 h-[28rem] w-[28rem] rounded-full bg-chili-600/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 pt-10 pb-14 sm:px-6 md:grid-cols-2 md:items-center md:gap-6 md:pt-16 md:pb-20">
        {/* Left */}
        <motion.div variants={container} initial="hidden" animate="show" className="relative z-10">
          <motion.p
            variants={line}
            className="inline-flex items-center gap-2 rounded-full border border-ink-950/10 bg-cream-50 px-4 py-2 text-[11px] font-extrabold tracking-[0.26em] text-ink-800 uppercase"
          >
            <span className="h-2 w-2 rounded-full bg-chili-600" aria-hidden />
            North East Momos
          </motion.p>

          <h1 className="mt-5 font-display text-[2.6rem] leading-[1.02] font-extrabold text-ink-950 sm:text-6xl md:text-[4.2rem]">
            <motion.span variants={line} className="block">
              Little pockets
            </motion.span>
            <motion.span variants={line} className="block">
              of <span className="relative inline-block text-chili-600">
                happiness,
                <svg viewBox="0 0 220 14" className="absolute -bottom-1 left-0 w-full" aria-hidden="true">
                  <path d="M4 10C60 3 150 3 216 8" stroke="#E9A319" strokeWidth="5" strokeLinecap="round" fill="none" />
                </svg>
              </span>
            </motion.span>
            <motion.span variants={line} className="block">
              made fresh.
            </motion.span>
          </h1>

          <motion.p variants={line} className="mt-5 max-w-md text-base leading-relaxed text-ink-600 md:text-lg">
            Authentic, freshly prepared momos and North-Eastern favourites, served with
            homemade flavour in Mallampet.
          </motion.p>

          <motion.div variants={line} className="mt-7 flex flex-wrap items-center gap-3">
            <a
              href="#menu"
              className="group inline-flex items-center gap-2 rounded-full bg-ink-950 px-6 py-3.5 text-sm font-bold text-cream-50 shadow-xl transition hover:-translate-y-0.5 hover:bg-ink-800"
            >
              Explore Menu
              <FiArrowRight aria-hidden className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#locations"
              className="inline-flex items-center gap-2 rounded-full border-2 border-ink-950/10 bg-cream-50 px-6 py-3 text-sm font-bold text-ink-950 transition hover:border-ink-950"
            >
              <FiMapPin aria-hidden className="text-chili-600" /> Find Us
            </a>
          </motion.div>

          <motion.div variants={line} className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
            <a href={PHONE_HREF} className="inline-flex items-center gap-2 font-bold text-ink-950 underline decoration-gold-500 decoration-2 underline-offset-4">
              <FiPhone aria-hidden className="text-chili-600" /> Call Now · {PHONE_DISPLAY}
            </a>
            <span className="inline-flex items-center gap-1.5 font-semibold text-ink-600">
              <FiStar aria-hidden className="fill-gold-500 text-gold-500" />
              5.0 ★ on Google · loved locally
            </span>
          </motion.div>
        </motion.div>

        {/* Right — food visual */}
        <motion.div
          initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.94, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-[520px]"
        >
          <div className="texture-dots absolute -top-6 -right-4 h-28 w-40 opacity-60" aria-hidden />
          <LeafIcon className="absolute -left-3 top-10 h-12 w-12 -rotate-12 text-leaf-600/50" />
          <ChiliIcon className="absolute -right-2 bottom-24 h-14 w-14 rotate-12 text-chili-600/60" />

          <motion.div
            animate={reduce ? undefined : { y: [0, -10, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="relative overflow-hidden rounded-[2rem] border-8 border-white bg-white shadow-[0_30px_80px_-20px_rgba(20,17,14,0.4)]"
          >
            <img
              src="https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=1000&q=80"
              alt="Freshly steamed momos served in a bamboo steamer with chutney"
              className="aspect-[4/4.4] w-full object-cover sm:aspect-[4/3.4] md:aspect-[4/4.2]"
              loading="eager"
              // @ts-expect-error - fetchpriority for LCP image
              fetchpriority="high"
            />
            <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-ink-950/35 via-transparent to-transparent" />

            {/* steam */}
            {!reduce && (
              <div aria-hidden className="absolute top-6 left-1/2 flex -translate-x-1/2 gap-2 text-white/90">
                <SteamLines className="h-16 w-8 animate-steam" />
                <SteamLines className="h-20 w-8 animate-steam [animation-delay:0.7s]" />
                <SteamLines className="h-16 w-8 animate-steam [animation-delay:1.4s]" />
              </div>
            )}

            {/* floating badge */}
            <div className="absolute bottom-4 left-4 flex items-center gap-3 rounded-2xl bg-cream-50/95 py-2.5 pr-5 pl-2.5 shadow-lg backdrop-blur">
              <img
                src="https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=200&q=80"
                alt=""
                className="h-12 w-12 rounded-xl object-cover"
                loading="lazy"
              />
              <div>
                <p className="font-display text-sm font-extrabold text-ink-950">Veg Kurkuri Momos</p>
                <p className="text-xs font-semibold text-chili-600">Crispy · Golden · House favourite</p>
              </div>
            </div>

            <div className="absolute top-4 right-4 rounded-full bg-ink-950/85 px-4 py-2 text-xs font-bold text-cream-50 backdrop-blur">
              Served hot · Made to order
            </div>
          </motion.div>

          <p className="mt-3 text-center font-hand text-2xl text-ink-600">
            steamed fresh, all day →
          </p>
        </motion.div>
      </div>

      {/* marquee strip */}
      <div className="relative border-t border-ink-950/10 bg-ink-950 py-3 text-cream-50">
        <div className="mx-auto flex max-w-6xl items-center gap-6 overflow-x-auto no-scrollbar px-4 text-[13px] font-bold tracking-[0.18em] uppercase whitespace-nowrap sm:px-6">
          {["Steamed Momos", "Kurkuri Momos", "Soya Specials", "Homemade Chutney", "Made Fresh Daily"].map((t, i) => (
            <span key={t} className="flex items-center gap-6">
              <span>{t}</span>
              <span aria-hidden className="text-gold-400">✦ {i !== 4 ? "" : ""}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
