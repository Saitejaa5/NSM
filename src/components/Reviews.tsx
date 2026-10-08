import { motion } from "framer-motion";
import { FiStar } from "react-icons/fi";
import { reviews } from "../data/reviews";
import { Eyebrow, Reveal } from "./Reveal";

function Stars() {
  return (
    <p className="flex gap-1 text-gold-500" aria-label="Rated 5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <FiStar key={i} aria-hidden className="fill-gold-500" />
      ))}
    </p>
  );
}

export default function Reviews() {
  return (
    <section id="reviews" className="bg-cream-50 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Reveal><Eyebrow>Reviews</Eyebrow></Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-4 font-display text-3xl font-extrabold text-ink-950 sm:text-4xl md:text-5xl">
                Loved by locals
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <div className="flex items-center gap-4 rounded-3xl border border-ink-950/8 bg-white px-5 py-4 shadow-sm">
              <p className="font-display text-4xl font-extrabold text-ink-950">5.0</p>
              <div>
                <Stars />
                <p className="mt-1 text-xs font-semibold text-ink-600">
                  Google rating · based on 4 reviews
                  <br />
                  across both locations
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {reviews.map((r, i) => (
            <motion.blockquote
              key={r.text}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="flex flex-col rounded-[1.6rem] border border-ink-950/8 bg-white p-6 shadow-[0_14px_36px_-20px_rgba(20,17,14,0.3)]"
            >
              <Stars />
              <p className="mt-4 flex-1 font-display text-lg leading-snug font-bold text-ink-950">
                &ldquo;{r.text}&rdquo;
              </p>
              <footer className="mt-5 border-t border-ink-950/8 pt-4">
                <p className="text-sm font-extrabold text-ink-950">{r.author}</p>
                <p className="text-xs font-semibold text-ink-500">Google review · {r.branch}</p>
              </footer>
            </motion.blockquote>
          ))}
        </div>
        <Reveal delay={0.1}>
          <p className="mt-6 text-center text-xs text-ink-500">
            Showing all current Google reviews verbatim — no edits, no additions.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
