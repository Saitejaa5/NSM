import { FiArrowUpRight, FiPhone } from "react-icons/fi";
import { PHONE_DISPLAY, PHONE_HREF, locations } from "../data/locations";

export default function Footer() {
  return (
    <footer className="bg-ink-950 pt-14 pb-28 text-cream-50 md:pb-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr_1fr]">
          <div>
            <p className="font-display text-2xl font-extrabold">North East Momos</p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-cream-50/65">
              Fresh momos, homemade flavours and North-Eastern favourites in Mallampet,
              Hyderabad.
            </p>
            <p className="mt-4 inline-flex items-center gap-2 rounded-full border border-cream-50/15 px-4 py-2 text-xs font-bold tracking-wider uppercase">
              <span aria-hidden className="text-gold-400">♥</span> Proudly women-owned
            </p>
          </div>

          <nav aria-label="Footer">
            <p className="text-[11px] font-extrabold tracking-[0.24em] text-cream-50/50 uppercase">Explore</p>
            <ul className="mt-4 space-y-2.5 text-sm font-semibold">
              {[
                ["Home", "#home"],
                ["Menu", "#menu"],
                ["Our Story", "#story"],
                ["Locations", "#locations"],
                ["Reviews", "#reviews"],
                ["Contact", "#contact"],
              ].map(([label, href]) => (
                <li key={href}>
                  <a href={href} className="text-cream-50/80 transition hover:text-gold-400">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-[11px] font-extrabold tracking-[0.24em] text-cream-50/50 uppercase">Visit us</p>
            <div className="mt-4 space-y-4">
              {locations.map((l) => (
                <div key={l.id} className="rounded-2xl border border-cream-50/10 p-4">
                  <p className="text-sm font-extrabold">{l.shortName}</p>
                  <p className="mt-1 text-xs leading-relaxed text-cream-50/60">Mallampet, Hyderabad</p>
                  <a
                    href={l.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-1 text-xs font-bold text-gold-400 hover:underline"
                  >
                    Directions <FiArrowUpRight aria-hidden />
                  </a>
                </div>
              ))}
              <a href={PHONE_HREF} className="inline-flex items-center gap-2 text-sm font-extrabold text-cream-50">
                <FiPhone aria-hidden className="text-gold-400" /> {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-cream-50/10 pt-6 text-xs text-cream-50/50 sm:flex-row">
          <p>© {new Date().getFullYear()} North East Momos · Mallampet, Hyderabad</p>
          <p>Made fresh daily · 5.0 ★ on Google</p>
        </div>
      </div>
    </footer>
  );
}
