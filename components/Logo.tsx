export default function Logo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 240 80"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Cherry Magic Apartment logo"
    >
      <g>
        <circle cx="30" cy="46" r="12" fill="#B3273D" />
        <circle cx="52" cy="52" r="12" fill="#8A1D2E" />
        <path
          d="M30 34 C 28 20, 40 12, 46 8"
          stroke="#4E7A51"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M52 40 C 54 26, 44 14, 46 8"
          stroke="#4E7A51"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
        />
        <circle cx="24" cy="40" r="1.6" fill="#C79A56" />
        <circle cx="58" cy="46" r="1.6" fill="#C79A56" />
        <circle cx="40" cy="28" r="1.4" fill="#C79A56" />
      </g>
      <text
        x="76"
        y="52"
        fontFamily="var(--font-script, 'Great Vibes', cursive)"
        fontSize="34"
        fill="#2B2320"
      >
        Cherry Magic
      </text>
    </svg>
  );
}
