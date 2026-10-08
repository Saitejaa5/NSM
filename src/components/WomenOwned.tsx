import { Eyebrow, Reveal } from "./Reveal";

export default function WomenOwned() {
  return (
    <section className="relative overflow-hidden bg-cream-200/60 py-16 md:py-24">
      <div aria-hidden className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-gold-400/20 blur-3xl" />
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 md:grid-cols-[1.1fr_0.9fr]">
        <div>
          <Reveal><Eyebrow>A neighbourhood kitchen</Eyebrow></Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 font-display text-3xl font-extrabold text-ink-950 sm:text-4xl md:text-5xl md:leading-tight">
              A local kitchen with a lot of heart.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 leading-relaxed text-ink-600 md:text-lg">
              Built on passion, fresh preparation and a personal touch — North East
              Momos is about bringing people together over hot, homely plates and
              building a small food community in Mallampet, one steamer at a time.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-6 inline-flex items-center gap-3 rounded-full bg-ink-950 px-5 py-3 text-sm font-bold text-cream-50">
              <span aria-hidden className="grid h-8 w-8 place-items-center rounded-full bg-gold-400 text-ink-950">♥</span>
              Proudly women-owned
            </p>
          </Reveal>
        </div>
        <Reveal delay={0.1}>
          <div className="relative overflow-hidden rounded-[2rem] shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=900&q=80"
              alt="Hands preparing fresh food in a home-style kitchen"
              loading="lazy"
              className="aspect-[4/4.2] w-full object-cover"
            />
            <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-ink-950/40 via-transparent to-transparent" />
            <p className="absolute bottom-4 left-4 right-4 rounded-2xl bg-cream-50/95 p-4 text-sm font-semibold text-ink-800 backdrop-blur">
              Freshly pleated, freshly steamed — the homemade taste reviewers mention in
              every review.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
