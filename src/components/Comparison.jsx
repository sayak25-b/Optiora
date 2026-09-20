import {
  ArrowRight,
  BarChart3,
  FileText,
  Search,
  Clock3,
  TrendingUp,
  Sparkles,
  Users,
  Lightbulb,
  Target,
  Package,
} from "lucide-react";

function Comparison() {
  return (
    <section
      className="relative overflow-hidden bg-cover bg-center py-24"
      style={{
        backgroundImage: "url('/images/gg.jpg')",
      }}
    >
      {/* ================= OVERLAY ================= */}
      <div className="absolute inset-0 bg-white/85" />

      {/* ================= SOFT GLOW ================= */}
      <div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-violet-300/20 blur-[120px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-cyan-300/20 blur-[120px]" />

      {/* ================= BACKGROUND DESIGN ================= */}

      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-violet-200/30 blur-[120px]" />

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

        {/* ================= LEFT INTRO ================= */}

        <div className="mx-auto max-w-3xl text-center">

          <p className="mb-5 text-sm font-bold uppercase tracking-[0.18em] text-violet-600">
            Your Business Has Answers
          </p>

          <h2 className="text-4xl font-bold leading-[1.1] tracking-tight text-slate-950 sm:text-5xl lg:text-[52px]">
            Stop Guessing.
            <br />
            Start Knowing{" "}
            <span className="text-violet-600">
              What's Next.
            </span>
          </h2>

          {/* Human Touch Line */}
          <p className="mx-auto mt-5 max-w-2xl text-lg font-medium leading-7 text-slate-700 sm:text-xl">
            From understanding your past to planning your next move.
          </p>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            Imagine you run a local clothing store. Sales were strong last
            month, but now they're falling. Which products are slowing down?
            What should you reorder? Which customers haven't returned?
          </p>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            Instead of searching through spreadsheets and records, Optiora
            brings the answers together.
          </p>

        </div>

        {/* ================= 3 STEP JOURNEY ================= */}

        <div className="mt-14 grid items-stretch gap-5 lg:grid-cols-[1fr_auto_1fr_auto_1fr]">

          {/* ================= PAST ================= */}

          <div className="rounded-3xl border border-amber-200 bg-amber-50/90 p-7 shadow-[0_15px_50px_rgba(15,23,42,0.06)] backdrop-blur-xl">

            {/* Number */}
            <div className="mb-5 flex items-center justify-between">
              <span className="text-xs font-bold tracking-[0.2em] text-amber-600">
                01
              </span>

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-amber-600 shadow-sm">
                <BarChart3 size={20} />
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-slate-950">
              Past
            </h3>

            <p className="mt-2 text-lg text-slate-500">
              What happened?
            </p>

            {/* Graph */}
            <div className="my-7 h-20">
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

            <div className="space-y-4">

              <div className="flex items-center gap-3">
                <BarChart3 size={18} className="text-amber-600" />
                <span className="text-sm text-slate-700">
                  Looking at past sales
                </span>
              </div>

              <div className="flex items-center gap-3">
                <FileText size={18} className="text-amber-600" />
                <span className="text-sm text-slate-700">
                  Manual reports
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Search size={18} className="text-amber-600" />
                <span className="text-sm text-slate-700">
                  Searching through data
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Clock3 size={18} className="text-amber-600" />
                <span className="text-sm text-slate-700">
                  Time-consuming analysis
                </span>
              </div>

            </div>
          </div>

          {/* ================= ARROW 1 ================= */}

          <div className="hidden items-center justify-center lg:flex">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-violet-600 text-white shadow-lg shadow-violet-200">
              <ArrowRight size={22} />
            </div>
          </div>

          {/* Mobile Arrow */}
          <div className="flex items-center justify-center lg:hidden">
            <div className="flex h-10 w-10 rotate-90 items-center justify-center rounded-full bg-violet-600 text-white shadow-lg shadow-violet-200">
              <ArrowRight size={20} />
            </div>
          </div>

          {/* ================= OPTIORA ================= */}

          <div className="relative overflow-hidden rounded-3xl border border-cyan-200 bg-cyan-50/90 p-7 shadow-[0_15px_50px_rgba(15,23,42,0.08)] backdrop-blur-xl">

            {/* Glow */}
            <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-cyan-300/30 blur-3xl" />

            <div className="relative">

              {/* Number + Icon */}
              <div className="mb-5 flex items-center justify-between">
                <span className="text-xs font-bold tracking-[0.2em] text-cyan-600">
                  02
                </span>

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-cyan-600 shadow-sm">
                  <Sparkles size={20} />
                </div>
              </div>

              <div className="flex items-center gap-3">
                <img
                  src="/logo.png"
                  alt="Optiora"
                  className="h-8 w-8 object-contain"
                />

                <h3 className="text-2xl font-semibold text-slate-950">
                  Optiora
                </h3>
              </div>

              <p className="mt-2 text-lg text-slate-500">
                What happens next?
              </p>

              {/* Graph */}
              <div className="my-7 h-20">
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

              <div className="space-y-4">

                <div className="flex items-center gap-3">
                  <TrendingUp size={18} className="text-cyan-600" />
                  <span className="text-sm font-medium text-slate-700">
                    Sales forecasting
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <Sparkles size={18} className="text-cyan-600" />
                  <span className="text-sm font-medium text-slate-700">
                    Demand prediction
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <Users size={18} className="text-cyan-600" />
                  <span className="text-sm font-medium text-slate-700">
                    Customer insights
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <Lightbulb size={18} className="text-cyan-600" />
                  <span className="text-sm font-medium text-slate-700">
                    Smart recommendations
                  </span>
                </div>

              </div>

            </div>
          </div>

          {/* ================= ARROW 2 ================= */}

          <div className="hidden items-center justify-center lg:flex">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-violet-600 text-white shadow-lg shadow-violet-200">
              <ArrowRight size={22} />
            </div>
          </div>

          {/* Mobile Arrow */}
          <div className="flex items-center justify-center lg:hidden">
            <div className="flex h-10 w-10 rotate-90 items-center justify-center rounded-full bg-violet-600 text-white shadow-lg shadow-violet-200">
              <ArrowRight size={20} />
            </div>
          </div>

          {/* ================= ACTION ================= */}

          <div className="rounded-3xl border border-violet-200 bg-violet-50/90 p-7 shadow-[0_15px_50px_rgba(15,23,42,0.06)] backdrop-blur-xl">

            {/* Number */}
            <div className="mb-5 flex items-center justify-between">
              <span className="text-xs font-bold tracking-[0.2em] text-violet-600">
                03
              </span>

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-violet-600 shadow-sm">
                <Target size={20} />
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-slate-950">
              Action
            </h3>

            <p className="mt-2 text-lg text-slate-500">
              What should I do?
            </p>

            {/* Action Visual */}
            <div className="my-7 flex h-20 items-center justify-center">
              <div className="flex items-center gap-3 rounded-2xl border border-violet-200 bg-white/70 px-5 py-4 shadow-sm">
                <Target size={28} className="text-violet-600" />

                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    Make a clearer decision
                  </p>

                  <p className="text-xs text-slate-500">
                    Based on your business data
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">

              <div className="flex items-center gap-3">
                <Package size={18} className="text-violet-600" />
                <span className="text-sm text-slate-700">
                  Know what to reorder
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Target size={18} className="text-violet-600" />
                <span className="text-sm text-slate-700">
                  Focus on what needs attention
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Users size={18} className="text-violet-600" />
                <span className="text-sm text-slate-700">
                  Engage the right customers
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Lightbulb size={18} className="text-violet-600" />
                <span className="text-sm text-slate-700">
                  Plan your next move
                </span>
              </div>

            </div>
          </div>

        </div>

        {/* ================= BOTTOM MESSAGE ================= */}

        <div className="mx-auto mt-12 max-w-2xl text-center">

          <p className="text-base font-medium leading-7 text-slate-700 sm:text-lg">
            Your data tells you what happened.
            <span className="text-violet-600"> Optiora helps you understand
            what may happen next.</span>
          </p>

        </div>

      </div>
    </section>
  );
}

export default Comparison;