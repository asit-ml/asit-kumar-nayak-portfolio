export default function Logo({ size = 34 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <rect width="64" height="64" rx="14" fill="#111726" stroke="#1F2B42" strokeWidth="2" />
      <path d="M20 46L32 18L44 46" stroke="#00E5FF" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M25.5 36.5H38.5" stroke="#F59E0B" strokeWidth="4.5" strokeLinecap="round" />
    </svg>
  );
}
