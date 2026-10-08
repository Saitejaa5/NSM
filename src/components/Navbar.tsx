import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiMenu, FiPhone, FiX } from "react-icons/fi";
import { PHONE_HREF, PHONE_DISPLAY } from "../data/locations";

const links = [
  { label: "Home", href: "#home" },
  { label: "Menu", href: "#menu" },
  { label: "Our Story", href: "#story" },
  { label: "Locations", href: "#locations" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open ]);

  return (
    <>
      <motion.header
        initial={{ y: -70, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-cream-50/85 shadow-[0_8px_30px_rgba(20,17,14,0.08)] backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <nav
          aria-label="Primary"
          className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 md:h-20"
        >
          <a href="#home" className="flex items-center gap-3" aria-label="North East Momos — home">
            <span className="grid h-10 w-10 place-items-center rounded-2xl bg-ink-950 text-cream-50">
              <svg viewBox="0 0 48 48" className="h-6 w-6" fill="none" aria-hidden="true">
                <path
                  d="M8 30c2-9 10-16 16-16s14 7 16 16c-3 3-9 5-16 5S11 33 8 30Z"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinejoin="round"
                />
                <path d="M17 27c1-4 4-7 7-7s6 3 7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </span>
            <span className="leading-tight">
              <span className="block font-display text-[15px] font-extrabold tracking-tight text-ink-950">
                North East Momos
              </span>
              <span className="block text-[10px] font-bold tracking-[0.24em] text-chili-600 uppercase">
                Mallampet · Hyderabad
              </span>
            </span>
          </a>

          <ul className="hidden items-center gap-7 lg:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-sm font-semibold text-ink-800 transition-colors hover:text-chili-600"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-2 rounded-full border border-ink-950/15 px-4 py-2 text-sm font-bold text-ink-950 transition hover:border-ink-950"
            >
              <FiPhone aria-hidden /> {PHONE_DISPLAY}
            </a>
            <a
              href="#locations"
              className="inline-flex items-center gap-2 rounded-full bg-chili-600 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-chili-600/25 transition hover:-translate-y-0.5 hover:bg-chili-700"
            >
              Find Us
            </a>
          </div>

          <button
            className="grid h-11 w-11 place-items-center rounded-full border border-ink-950/10 bg-cream-50/70 lg:hidden"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
          >
            <FiMenu className="text-xl" />
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-ink-950/60 backdrop-blur-sm lg:hidden"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="absolute top-0 right-0 flex h-full w-[84%] max-w-sm flex-col bg-cream-50 p-6"
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-label="Menu"
            >
              <div className="flex items-center justify-between">
                <p className="font-display text-lg font-extrabold">North East Momos</p>
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="grid h-11 w-11 place-items-center rounded-full border border-ink-950/10"
                >
                  <FiX className="text-xl" />
                </button>
              </div>
              <ul className="mt-8 space-y-1">
                {links.map((l, i) => (
                  <motion.li
                    key={l.href}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i }}
                  >
                    <a
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-2xl px-4 py-3 font-display text-2xl font-bold text-ink-950 hover:bg-cream-200"
                    >
                      {l.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
              <div className="mt-auto space-y-3">
                <a
                  href={PHONE_HREF}
                  className="flex items-center justify-center gap-2 rounded-full bg-ink-950 px-5 py-4 font-bold text-cream-50"
                >
                  <FiPhone aria-hidden /> Call {PHONE_DISPLAY}
                </a>
                <a
                  href="#locations"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-full bg-chili-600 px-5 py-4 font-bold text-white"
                >
                  Find a Location
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
