import { ArrowRight, Check, X } from "lucide-react";

function Comparison() {
  return (
    <section
      className="relative overflow-hidden bg-cover bg-center py-24"
      style={{
        backgroundImage: "url('/images/gg.jpg')",
      }}
    >
      {/* ================= DARK/LIGHT OVERLAY ================= */}
      <div className="absolute inset-0 bg-white/85" />

      {/* ================= SOFT GLOW ================= */}
      <div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-violet-300/20 blur-[120px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-cyan-300/20 blur-[120px]" />
      {/* ================= BACKGROUND DESIGN ================= */}

      {/* Soft purple glow */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-violet-200/30 blur-[120px]" />

      {/* Soft cyan glow */}
      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-cyan-200/30 blur-[120px]" />

      {/* Logo watermark */}
      <img
        src="/logo.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute right-[8%] top-10 h-40 w-40 object-contain opacity-[0.035]"
      />

      {/* Second logo watermark */}
      <img
        src="/logo.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute bottom-10 left-[8%] h-32 w-32 object-contain opacity-[0.025]"
      />

      {/* Small decorative dots */}
      <div className="pointer-events-none absolute left-8 top-20 grid grid-cols-4 gap-2 opacity-30">
        {Array.from({ length: 16 }).map((_, i) => (
          <span
            key={i}
            className="h-1 w-1 rounded-full bg-violet-400"
          />
        ))}
      </div>

      <div className="pointer-events-none absolute bottom-16 right-10 grid grid-cols-4 gap-2 opacity-30">
        {Array.from({ length: 16 }).map((_, i) => (
          <span
            key={i}
            className="h-1 w-1 rounded-full bg-cyan-400"
          />
        ))}
      </div>

      {/* Curved decorative line */}
      <svg
        className="pointer-events-none absolute left-0 top-0 h-40 w-full opacity-20"
        viewBox="0 0 1200 160"
        fill="none"
        preserveAspectRatio="none"
      >
        <path
          d="M-50 100 C120 20 200 150 350 60 C500 -30 600 130 760 55 C900 -10 1020 120 1250 35"
          stroke="#8b5cf6"
          strokeWidth="1.5"
        />
      </svg>

      {/* ================= CONTENT ================= */}

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        <div className="grid items-center gap-14 lg:grid-cols-[0.85fr_1.5fr]">

          {/* LEFT CONTENT */}
          <div className="relative z-10">

            <p className="mb-5 text-sm font-bold tracking-[0.18em] text-violet-600">
              DON'T JUST SEE DATA
            </p>

            <h2 className="max-w-xl text-4xl font-bold leading-[1.1] tracking-tight text-slate-950 sm:text-5xl lg:text-[52px]">
              Understand What
              <br />
              Comes{" "}
              <span className="text-violet-600">
                Next.
              </span>
            </h2>

            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600">
              Traditional reports tell you what happened.
              Optiora tells you what's next and what to do
              about it.
            </p>

            {/* Small brand element */}
            <div className="mt-8 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-violet-100 bg-violet-50">
                <img
                  src="/logo.png"
                  alt="Optiora"
                  className="h-6 w-6 object-contain"
                />
              </div>

              <div>
                <p className="text-sm font-semibold text-slate-900">
                  Optiora Intelligence
                </p>
                <p className="text-xs text-slate-500">
                  From data to decisions
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT COMPARISON */}
          <div className="relative">

            <div className="grid items-center gap-5 md:grid-cols-[1fr_auto_1fr]">

              {/* TRADITIONAL */}
              <div className="rounded-3xl border border-slate-200 bg-yellow-100/80 p-7 shadow-[0_15px_50px_rgba(15,23,42,0.06)] backdrop-blur-xl">

                <h3 className="text-2xl font-semibold text-slate-950">
                  Traditional Analytics
                </h3>

                <p className="mt-2 text-lg text-slate-500">
                  What happened?
                </p>

                {/* Graph */}
                <div className="my-8 h-24">
                  <svg
                    viewBox="0 0 400 100"
                    className="h-full w-full"
                    fill="none"
                  >
                    <path
                      d="M0 80 C50 60 70 70 110 45 C150 20 170 65 220 50 C260 40 280 65 315 30 C350 10 370 30 400 5"
                      stroke="#8b5cf6"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>

                <div className="space-y-5">

                  <div className="flex items-center gap-4">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-slate-400">
                      <X size={13} className="text-slate-500" />
                    </div>

                    <span className="text-base text-slate-700">
                      No predictions
                    </span>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-slate-400">
                      <X size={13} className="text-slate-500" />
                    </div>

                    <span className="text-base text-slate-700">
                      Manual analysis
                    </span>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-slate-400">
                      <X size={13} className="text-slate-500" />
                    </div>

                    <span className="text-base text-slate-700">
                      Reactive decisions
                    </span>
                  </div>

                </div>
              </div>

              {/* ARROW */}
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-violet-600 text-white shadow-lg shadow-violet-200">
                <ArrowRight size={25} />
              </div>

              {/* OPTIORA */}
              <div className="relative overflow-hidden rounded-3xl border border-cyan-100 bg-green-100/90 p-7 shadow-[0_15px_50px_rgba(15,23,42,0.08)] backdrop-blur-xl">

                {/* Card logo glow */}
                <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-cyan-200/30 blur-3xl" />

                <div className="relative">

                  <div className="flex items-center gap-3">
                    <img
                      src="/logo.png"
                      alt="Optiora"
                      className="h-8 w-8 object-contain"
                    />

                    <h3 className="text-2xl font-semibold text-slate-950">
                      Optiora Intelligence
                    </h3>
                  </div>

                  <p className="mt-2 text-lg text-slate-500">
                    What's next?
                  </p>

                  {/* Graph */}
                  <div className="my-8 h-24">
                    <svg
                      viewBox="0 0 400 100"
                      className="h-full w-full"
                      fill="none"
                    >
                      <path
                        d="M0 80 C50 65 80 70 120 40 C160 15 180 55 220 35 C260 20 280 45 320 18 C350 5 375 20 400 0"
                        stroke="#10b981"
                        strokeWidth="4"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>

                  <div className="space-y-5">

                    <div className="flex items-center gap-4">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500 text-white">
                        <Check size={14} />
                      </div>

                      <span className="text-base font-medium text-slate-700">
                        AI predictions
                      </span>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500 text-white">
                        <Check size={14} />
                      </div>

                      <span className="text-base font-medium text-slate-700">
                        Smart recommendations
                      </span>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500 text-white">
                        <Check size={14} />
                      </div>

                      <span className="text-base font-medium text-slate-700">
                        Proactive decisions
                      </span>
                    </div>

                  </div>

                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Comparison;