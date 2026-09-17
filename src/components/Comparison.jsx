import {
  Check,
  XCircle,
  ArrowRight,
} from "lucide-react";

function Comparison() {
  const traditional = [
    "No predictions",
    "Manual analysis",
    "Reactive decisions",
  ];

  const optiora = [
    "AI predictions",
    "Smart recommendations",
    "Proactive decisions",
  ];

  return (
    <section
      id="product"
      className="bg-white py-20 text-slate-950"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.5fr] lg:items-center">

          {/* Left */}
          <div>

            <p className="text-xs font-semibold uppercase tracking-widest text-violet-600">
              Don't just see data
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
              Understand What
              <br />
              Comes{" "}
              <span className="text-violet-600">
                Next.
              </span>
            </h2>

            <p className="mt-5 max-w-md leading-7 text-slate-600">
              Traditional reports tell you what happened.
              Optiora tells you what's next and what to do
              about it.
            </p>

          </div>

          {/* Cards */}
          <div className="grid items-center gap-5 md:grid-cols-[1fr_auto_1fr]">

            {/* Traditional */}
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">

              <h3 className="font-semibold">
                Traditional Analytics
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                What happened?
              </p>

              <div className="my-6 h-16">
                <svg
                  viewBox="0 0 300 70"
                  className="h-full w-full"
                >
                  <path
                    d="M0 55 C30 40 40 48 65 32 C90 20 105 43 130 35 C155 28 165 48 190 28 C215 13 235 35 250 19 C270 8 285 15 300 3"
                    fill="none"
                    stroke="#8b5cf6"
                    strokeWidth="2"
                  />
                </svg>
              </div>

              <div className="space-y-3">
                {traditional.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-sm"
                  >
                    <XCircle
                      size={16}
                      className="text-slate-500"
                    />

                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Arrow */}
            <div className="hidden h-10 w-10 items-center justify-center rounded-full bg-violet-600 text-white md:flex">
              <ArrowRight size={18} />
            </div>

            {/* Optiora */}
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">

              <h3 className="font-semibold">
                Optiora Intelligence
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                What's next?
              </p>

              <div className="my-6 h-16">
                <svg
                  viewBox="0 0 300 70"
                  className="h-full w-full"
                >
                  <path
                    d="M0 54 C30 35 45 48 65 30 C90 15 110 42 130 28 C150 17 165 32 185 20 C205 8 220 28 245 10 C265 2 285 12 300 1"
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="2"
                  />
                </svg>
              </div>

              <div className="space-y-3">
                {optiora.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-sm"
                  >
                    <Check
                      size={16}
                      className="rounded-full bg-emerald-500 p-[2px] text-white"
                    />

                    {item}
                  </div>
                ))}
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Comparison;