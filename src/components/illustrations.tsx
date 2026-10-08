// Thin-line, hand-drawn style decorative SVGs — minimal, premium, organic.
export function SteamLines({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 80" fill="none" className={className} aria-hidden="true">
      <path
        d="M18 72c-4-8 4-12 2-20s-6-10-2-20 6-10 3-20"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M32 74c-4-8 4-12 2-20s-6-10-2-20 6-10 3-20"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        opacity="0.7"
      />
      <path
        d="M46 72c-4-8 4-12 2-20s-6-10-2-20 6-10 3-20"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        opacity="0.45"
      />
    </svg>
  );
}

export function MomoIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <path
        d="M8 30c2-9 10-16 16-16s14 7 16 16c-3 3-9 5-16 5S11 33 8 30Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M17 27c1-4 4-7 7-7s6 3 7 7M16 31c3 1.6 6.5 2.4 8 2.4s5-.8 8-2.4"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path d="M24 14v-4M21 15l-2-3M27 15l2-3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

export function ChiliIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 34c8 6 20 2 26-10 1.5-3 2-6 1.5-9"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M39.5 15c-1-3-4-5-7-4.5M12 34c-2-1-3-3-2.5-5.5C15 24 24 20 34 19"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path d="M32 12c1-2 3-3 5-3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function SteamerIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <ellipse cx="24" cy="32" rx="14" ry="5" stroke="currentColor" strokeWidth="1.8" />
      <path d="M10 32v-6c0-2 6-4 14-4s14 2 14 4v6" stroke="currentColor" strokeWidth="1.8" />
      <path d="M10 26c4 1.6 8 2.4 14 2.4s10-.8 14-2.4" stroke="currentColor" strokeWidth="1.3" />
      <path d="M18 15c-1-2 1-3 0-5s-1-3 0-5M25 16c-1-2 1-3 0-5s-1-3 0-5M32 15c-1-2 1-3 0-5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

export function LeafIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <path d="M10 38C10 22 22 10 40 10c0 18-12 28-30 28Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M10 38C16 30 24 22 34 16" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

export function BowlIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <path d="M8 24h32c0 7-7 12-16 12S8 31 8 24Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M20 18c-1-2 1-3 0-5M26 18c-1-2 1-3 0-5M32 18c-1-2 1-3 0-5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M18 40h12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function PinLine({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 21s7-6.1 7-11a7 7 0 1 0-14 0c0 4.9 7 11 7 11Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <circle cx="12" cy="10" r="2.6" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}
