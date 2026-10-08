import { FiCheck } from "react-icons/fi";
import { Eyebrow, Reveal } from "./Reveal";
import { SteamLines } from "./illustrations";

const points = ["Freshly Made", "Homemade Taste", "North-Eastern Inspired", "Made to Order"];

export default function BrandStory() {
  return (
    <section id="story" className="relative bg-cream-50 py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 md:grid-cols-2 md:gap-14">
        <div>
          <Reveal>
            <Eyebrow>Our story</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 font-display text-3xl font-extrabold text-ink-950 sm:text-4xl md:text-5xl md:leading-[1.05]">
              Made with heart.
              <br />
              Served with flavour.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 max-w-lg leading-relaxed text-ink-600 md:text-lg">
              North East Momos brings comforting, freshly prepared momos and snacks to
              Mallampet. Every plate is made to be enjoyed hot, fresh and full of flavour —
              a small neighbourhood kitchen with a homemade touch.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {points.map((p) => (
                <li
                  key={p}
                  className="flex items-center gap-3 rounded-2xl border border-ink-950/8 bg-cream-100 px-4 py-3 text-sm font-bold text-ink-900"
                >
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-leaf-600 text-white">
                    <FiCheck aria-hidden />
                  </span>
                  {p}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="relative">
          <div className="relative overflow-hidden rounded-[2rem] shadow-[0_24px_60px_-20px_rgba(20,17,14,0.35)]">
            <img
              src="https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&w=1000&q=80"
              alt="Close-up of handmade momos on a plate"
              className="aspect-[4/4.5] w-full object-cover transition-transform duration-700 hover:scale-105 sm:aspect-[4/3] md:aspect-[4/4.4]"
              loading="lazy"
            />
            <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-ink-950/30 via-transparent to-transparent" />
            <div className="absolute top-5 left-1/2 -translate-x-1/2 text-white/90" aria-hidden>
              <SteamLines className="h-14 w-10 animate-steam" />
            </div>
            <div className="absolute bottom-4 left-4 rounded-2xl bg-ink-950/85 px-4 py-3 text-cream-50 backdrop-blur">
              <p className="font-hand text-2xl leading-none text-gold-400">freshly made</p>
              <p className="mt-1 text-xs font-semibold tracking-wide opacity-80">pleated by hand · served hot</p>
            </div>
          </div>
          <div aria-hidden className="absolute -bottom-5 -right-3 rounded-3xl bg-chili-600 px-5 py-4 text-white shadow-xl rotate-3">
            <p className="font-display text-2xl font-extrabold leading-none">100%</p>
            <p className="text-xs font-bold tracking-widest uppercase opacity-90">fresh & hot</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
