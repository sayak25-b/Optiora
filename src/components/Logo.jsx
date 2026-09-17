function Logo({ dark = false }) {
  return (
    <div className="flex items-center gap-3">
      <div className="relative flex h-9 w-9 items-center justify-center">
        <div className="absolute inset-0 rotate-45 rounded-lg border-2 border-violet-500" />

        <div className="absolute h-5 w-5 rotate-45 rounded-md border-2 border-indigo-500" />

        <div className="relative h-3 w-3 rotate-45 bg-gradient-to-br from-violet-500 to-blue-500" />
      </div>

      <span
        className={`text-xl font-bold tracking-wide ${
          dark ? "text-slate-900" : "text-white"
        }`}
      >
        OPTIORA
      </span>
    </div>
  );
}

export default Logo;