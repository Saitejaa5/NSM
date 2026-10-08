import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { menu } from "../data/menu";
import { Eyebrow, Reveal } from "./Reveal";

export default function MenuPreview() {
  return (
    <section id="menu" className="relative bg-cream-100 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <Reveal><Eyebrow>Signature & categories</Eyebrow></Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-4 font-display text-3xl font-extrabold text-ink-950 sm:text-4xl md:text-5xl">
                What&apos;s cooking
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-3 max-w-xl text-ink-600">
                One confirmed house favourite — plus the categories we serve. Prices and
                full dishes can be added by the owner anytime.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-chili-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-chili-600/25 transition hover:-translate-y-0.5"
            >
              View Full Menu <FiArrowRight aria-hidden />
            </a>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {menu.slice(0, 3).map((cat, ci) => {
            const item = cat.items[0];
            const featured = ci === 0;
            return (
              <motion.article
                key={cat.category}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: ci * 0.1 }}
                className={`group relative overflow-hidden rounded-[1.6rem] bg-white shadow-[0_16px_40px_-18px_rgba(20,17,14,0.3)] ${
                  featured ? "sm:col-span-2 lg:col-span-1 ring-2 ring-chili-600/20" : ""
                }`}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 flex gap-2">
                    {item.tag && (
                      <span className="rounded-full bg-gold-400 px-3 py-1 text-[11px] font-extrabold tracking-wider text-ink-950 uppercase">
                        {item.tag}
                      </span>
                    )}
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1 text-[11px] font-bold text-ink-900">
                      <span aria-hidden className={`h-2.5 w-2.5 rounded-sm border ${item.veg ? "border-green-700" : "border-red-700"} grid place-items-center`}>
                        <span className={`h-1.5 w-1.5 rounded-full ${item.veg ? "bg-green-700" : "bg-red-700"}`} />
                      </span>
                      Veg
                    </span>
                  </div>
                  {!item.confirmed && (
                    <span className="absolute right-3 bottom-3 rounded-full bg-ink-950/85 px-3 py-1 text-[11px] font-bold text-cream-50">
                      Category preview
                    </span>
                  )}
                </div>
                <div className="p-5">
                  <p className="text-[11px] font-extrabold tracking-[0.2em] text-ember-600 uppercase">{cat.category}</p>
                  <h3 className="mt-1 font-display text-xl font-extrabold text-ink-950">{item.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-600">{item.description}</p>
                  <p className="mt-3 text-xs font-semibold text-ink-500">
                    {item.price === null ? "Price to be confirmed · ask in-store" : `₹${item.price}`}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* category chips row */}
        <Reveal delay={0.05}>
          <div className="mt-6 flex gap-3 overflow-x-auto pb-2 no-scrollbar">
            {menu.map((c) => (
              <span
                key={c.category}
                className="shrink-0 rounded-full border border-ink-950/10 bg-cream-50 px-5 py-2.5 text-sm font-bold text-ink-800"
              >
                {c.category}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
