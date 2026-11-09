export default function Marquee({ items }) {
  return (
    <div
      className="relative overflow-hidden border-y border-line bg-panel/40 py-5"
      data-testid="marquee-strip"
    >
      <div className="flex w-max animate-marquee items-center">
        {[0, 1].map((dup) => (
          <div key={dup} aria-hidden={dup === 1} className="flex items-center">
            {items.map((item) => (
              <span
                key={`${dup}-${item}`}
                className="flex items-center gap-8 pr-8 font-mono text-sm uppercase tracking-[0.3em] text-slate-400"
              >
                <span className="whitespace-nowrap">{item}</span>
                <span className="text-neon">{"//"}</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
