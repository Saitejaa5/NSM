import { FiMapPin, FiPhone, FiBookOpen } from "react-icons/fi";
import { PHONE_HREF, locations } from "../data/locations";

export default function MobileCTA() {
  return (
    <nav
      aria-label="Quick actions"
      className="fixed inset-x-3 bottom-3 z-50 md:hidden"
    >
      <div className="grid grid-cols-3 gap-2 rounded-3xl border border-white/10 bg-ink-950/95 p-2 shadow-2xl backdrop-blur-xl">
        <a
          href={PHONE_HREF}
          className="flex items-center justify-center gap-1.5 rounded-2xl bg-chili-600 px-2 py-3.5 text-[13px] font-extrabold text-white"
        >
          <FiPhone aria-hidden /> Call Now
        </a>
        <a
          href={locations[0].mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 rounded-2xl bg-cream-50/10 px-2 py-3.5 text-[13px] font-extrabold text-cream-50"
        >
          <FiMapPin aria-hidden /> Directions
        </a>
        <a
          href="#menu"
          className="flex items-center justify-center gap-1.5 rounded-2xl bg-cream-50/10 px-2 py-3.5 text-[13px] font-extrabold text-cream-50"
        >
          <FiBookOpen aria-hidden /> Menu
        </a>
      </div>
    </nav>
  );
}
