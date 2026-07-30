export default function FloralDecoration({ className = "" }: { className?: string }) {
  return (
    <svg className={`floral-decoration ${className}`} viewBox="0 0 130 180" aria-hidden="true">
      <path d="M65 178C68 128 59 73 90 18M69 128C44 116 30 96 24 72M75 91C96 80 108 61 111 41" />
      <path d="M25 73c21-3 32 8 35 28-20 1-32-9-35-28ZM90 19c-3 20-15 31-34 32 1-19 12-30 34-32ZM111 41c3 19-5 32-24 39-5-18 3-31 24-39Z" />
      <circle cx="70" cy="126" r="4" />
    </svg>
  );
}
