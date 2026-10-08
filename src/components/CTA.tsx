import { FiMapPin, FiPhone } from "react-icons/fi";
import { PHONE_DISPLAY, PHONE_HREF } from "../data/locations";
import { Reveal } from "./Reveal";

export default function CTA() {
  return (
    <section id="contact" className="relative overflow-hidden bg-ink-950 py-20 md:py-28">
      <img
        src="https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=1600&q=80"
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover opacity-30"
      />
      <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-ink-950 via-ink-950/70 to-ink-950" />
      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
        <Reveal>
          <p className="text-[11px] font-extrabold tracking-[0.3em] text-gold-400 uppercase">
            Visit · Call · Crave
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-4 font-display text-4xl font-extrabold text-cream-50 sm:text-5xl md:text-6xl">
            Craving momos?
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-3 font-hand text-3xl text-gold-400">Come hungry. Leave happy.</p>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={PHONE_HREF}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-chili-600 px-8 py-4 text-base font-bold text-white shadow-2xl shadow-chili-600/30 transition hover:-translate-y-0.5 hover:bg-chili-700 sm:w-auto"
            >
              <FiPhone aria-hidden /> Call {PHONE_DISPLAY}
            </a>
            <a
              href="#locations"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-cream-50/25 bg-cream-50/10 px-8 py-4 text-base font-bold text-cream-50 backdrop-blur transition hover:bg-cream-50/20 sm:w-auto"
            >
              <FiMapPin aria-hidden /> Find Nearest Location
            </a>
          </div>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-6 text-sm text-cream-50/60">
            KVR Valley · Saibalaji Enclave — both in Mallampet, Hyderabad
          </p>
        </Reveal>
      </div>
    </section>
  );
}
