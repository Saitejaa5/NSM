import { motion } from "framer-motion";
import { FiArrowUpRight, FiMapPin, FiNavigation, FiPhone, FiStar } from "react-icons/fi";
import { locations } from "../data/locations";
import { Eyebrow, Reveal } from "./Reveal";
import { PinLine } from "./illustrations";

export default function Locations() {
  return (
    <section id="locations" className="relative bg-cream-100 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal><Eyebrow>Two branches · same love</Eyebrow></Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-4 font-display text-3xl font-extrabold text-ink-950 sm:text-4xl md:text-5xl">
            Find us in Mallampet
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-3 max-w-xl text-ink-600">
            Two nearby kitchens serving the same fresh, homemade flavour. Pick whichever
            is closer — call ahead and we&apos;ll keep it hot.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {locations.map((loc, i) => (
            <motion.article
              key={loc.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="relative overflow-hidden rounded-[2rem] border border-ink-950/8 bg-white p-6 shadow-[0_20px_50px_-20px_rgba(20,17,14,0.3)] sm:p-8"
              aria-labelledby={`${loc.id}-title`}
            >
              <div aria-hidden className="pointer-events-none absolute -top-10 -right-6 font-display text-[7rem] leading-none font-extrabold text-cream-200 select-none">
                {loc.branchNo}
              </div>
              <div className="relative">
                <p className="inline-flex items-center gap-2 rounded-full bg-ink-950 px-4 py-1.5 text-[11px] font-extrabold tracking-[0.2em] text-cream-50 uppercase">
                  <FiMapPin aria-hidden className="text-gold-400" /> Location {loc.branchNo} · {loc.shortName}
                </p>
                <h3 id={`${loc.id}-title`} className="mt-4 font-display text-2xl font-extrabold text-ink-950">
                  {loc.name}
                </h3>
                <address className="mt-2 text-[15px] leading-relaxed text-ink-600 not-italic">
                  {loc.addressLines.map((l) => (
                    <span key={l} className="block">{l}</span>
                  ))}
                </address>
                <p className="mt-2 text-xs font-bold tracking-wide text-ink-500 uppercase">
                  Landmark: {loc.landmark}
                </p>

                <div className="mt-4 flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-cream-100 px-4 py-2 text-sm font-extrabold text-ink-950">
                    <FiStar aria-hidden className="fill-gold-500 text-gold-500" />
                    {loc.rating.toFixed(1)} ★
                    <span className="font-semibold text-ink-500">
                      · {loc.reviewCount} review{loc.reviewCount === 1 ? "" : "s"}
                    </span>
                  </span>
                  <a href={loc.phoneHref} className="inline-flex items-center gap-2 text-sm font-extrabold text-ink-950 underline decoration-chili-600 decoration-2 underline-offset-4">
                    <FiPhone aria-hidden /> {loc.phone}
                  </a>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  <a
                    href={loc.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-chili-600 px-4 py-3.5 text-sm font-bold text-white shadow-lg shadow-chili-600/25 transition hover:-translate-y-0.5 hover:bg-chili-700"
                  >
                    <FiNavigation aria-hidden /> Get Directions
                  </a>
                  <a
                    href={loc.phoneHref}
                    className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-ink-950/10 bg-cream-50 px-4 py-3 text-sm font-bold text-ink-950 transition hover:border-ink-950"
                  >
                    <FiPhone aria-hidden /> Call Now
                  </a>
                </div>

                <a
                  href={loc.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 flex items-center justify-between rounded-2xl bg-cream-100 px-4 py-3 text-xs font-bold text-ink-600 transition hover:bg-cream-200"
                >
                  <span className="inline-flex items-center gap-2">
                    <PinLine className="h-5 w-5 text-chili-600" />
                    Open in Google Maps
                  </span>
                  <FiArrowUpRight aria-hidden className="text-base" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
