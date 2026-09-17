function DataCard({
  type,
  value,
  change,
  icon: Icon,
  position,
}) {
  const isDown = change.startsWith("↓");

  return (
    <div
      className={`absolute z-20 w-40 rounded-xl border border-indigo-400/20 bg-slate-900/90 p-4 shadow-2xl backdrop-blur-xl sm:w-44 ${position}`}
    >
      <div className="mb-2 flex items-center gap-2">
        <div className="rounded-md bg-indigo-500/10 p-2">
          <Icon
            size={20}
            className="text-cyan-400"
          />
        </div>

        <span className="text-xs text-slate-300">
          {type}
        </span>
      </div>

      <div className="text-lg font-semibold text-white">
        {value}
      </div>

      <div
        className={`mt-1 text-xs ${
          isDown
            ? "text-red-400"
            : "text-emerald-400"
        }`}
      >
        {change}
      </div>

      <div className="mt-3 h-8">
        <svg
          viewBox="0 0 100 30"
          className="h-full w-full"
        >
          <path
            d="M0 23 L12 20 L22 24 L34 13 L45 17 L57 11 L68 18 L80 7 L90 12 L100 3"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className={
              isDown
                ? "text-orange-300"
                : "text-cyan-400"
            }
          />
        </svg>
      </div>
    </div>
  );
}

export default DataCard;