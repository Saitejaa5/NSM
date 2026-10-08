import { motion } from "framer-motion";
import { Eyebrow, Reveal } from "./Reveal";
import { BowlIcon, ChiliIcon, MomoIcon, SteamerIcon } from "./illustrations";

const cards = [
  {
    icon: <SteamerIcon className="h-10 w-10" />,
    title: "Freshly Prepared",
    text: "Made fresh so every plate reaches you hot and delicious.",
  },
  {
    icon: <BowlIcon className="h-10 w-10" />,
    title: "Homemade Taste",
    text: "A comforting homemade touch in every bite.",
  },
  {
    icon: <ChiliIcon className="h-10 w-10" />,
    title: "Crispy & Comforting",
    text: "From steamed classics to crispy favourites.",
  },
  {
    icon: <MomoIcon className="h-10 w-10" />,
    title: "Local & Personal",
    text: "A neighbourhood food spot serving Mallampet with care.",
  },
];

export default function WhyUs() {
  return (
    <section className="bg-cream-50 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal><Eyebrow>Why North East Momos?</Eyebrow></Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-4 max-w-xl font-display text-3xl font-extrabold text-ink-950 sm:text-4xl md:text-5xl">
            Simple food, done right.
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="group rounded-[1.6rem] border border-ink-950/8 bg-white p-6 shadow-[0_14px_36px_-18px_rgba(20,17,14,0.25)] transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="grid h-16 w-16 place-items-center rounded-2xl bg-chili-50 text-chili-600 transition group-hover:bg-chili-600 group-hover:text-white">
                {c.icon}
              </div>
              <h3 className="mt-4 font-display text-lg font-extrabold text-ink-950">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-600">{c.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
