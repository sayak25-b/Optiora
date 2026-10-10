
import {
  Search,
  FileSpreadsheet,
  Clock3,
  Brain,
  TrendingUp,
  Target,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const stages = [
  {
    number: "01",
    label: "UNDERSTAND",
    title: "What happened?",
    description: "Make sense of your business history.",
    icon: Search,
    color: "cyan",
    items: ["Sales performance", "Customer activity", "Product trends"],
  },
  {
    number: "02",
    label: "PREDICT",
    title: "What happens next?",
    description: "Discover patterns and possible outcomes.",
    icon: Brain,
    color: "violet",
    items: ["Sales forecasting", "Demand prediction", "Customer churn"],
  },
  {
    number: "03",
    label: "DECIDE",
    title: "What should I do?",
    description: "Turn insights into informed actions.",
    icon: Target,
    color: "emerald",
    items: ["Plan your inventory", "Focus on key products", "Prepare for changes"],
  },
];

function Comparison() {
  return (
    <section className="relative overflow-hidden bg-white px-5 py-20 sm:px-8 sm:py-28">
      <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-cyan-100/60 blur-[100px]" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-violet-100/60 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-cyan-100 bg-cyan-50 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-cyan-700">
            From Data to Direction
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Numbers Don't Tell the
            <span className="block bg-gradient-to-r from-cyan-600 to-violet-600 bg-clip-text text-transparent">
              Whole Story.
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
            Your business already generates valuable data. Optiora helps you
            understand the past, explore what's next, and decide where to focus.
          </p>
        </div>

        {/* Problem versus solution */}
        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-200 text-slate-600">
                <FileSpreadsheet size={22} />
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-800">
                  The traditional way
                </p>
                <p className="text-xs text-slate-500">
                  Reports without clear direction
                </p>
              </div>
            </div>

            <div className="mt-7 space-y-4">
              {[
                ["Too many numbers", "Finding useful information takes time."],
                ["Manual analysis", "Patterns can be difficult to spot."],
                ["Uncertain decisions", "Planning becomes more challenging."],
              ].map(([title, description]) => (
                <div key={title} className="flex gap-3">
                  <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white text-slate-500">
                    <Clock3 size={15} />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800">{title}</p>
                    <p className="mt-1 text-sm leading-6 text-slate-500">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-cyan-100 bg-gradient-to-br from-cyan-50 via-white to-violet-50 p-6 sm:p-8">
            <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-violet-200/40 blur-3xl" />

            <div className="relative flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-violet-500 text-white shadow-lg shadow-cyan-500/20">
                <Brain size={22} />
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900">
                  The Optiora approach
                </p>
                <p className="text-xs text-slate-500">
                  Insights with a clearer direction
                </p>
              </div>
            </div>

            <div className="relative mt-7 space-y-4">
              {[
                "Understand business performance",
                "Explore forecasts and predictions",
                "Identify areas needing attention",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 size={19} className="shrink-0 text-cyan-600" />
                  <span className="text-sm font-medium text-slate-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="relative mt-7 rounded-2xl border border-white bg-white/80 p-4 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wider text-cyan-700">
                The goal
              </p>
              <p className="mt-2 text-lg font-bold text-slate-900">
                Less guesswork. More informed decisions.
              </p>
            </div>
          </div>
        </div>

        {/* Connected journey */}
        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {stages.map((stage, index) => {
            const Icon = stage.icon;

            const colors = {
              cyan: "bg-cyan-100 text-cyan-700 border-cyan-200",
              violet: "bg-violet-100 text-violet-700 border-violet-200",
              emerald: "bg-emerald-100 text-emerald-700 border-emerald-200",
            };

            return (
              <div key={stage.number} className="relative">
                <div className="h-full rounded-2xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-xl hover:shadow-slate-200/50">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-slate-400">
                      {stage.number}
                    </span>
                    <div className={`rounded-xl border p-3 ${colors[stage.color]}`}>
                      <Icon size={22} />
                    </div>
                  </div>

                  <p className="mt-6 text-xs font-bold tracking-[0.18em] text-cyan-700">
                    {stage.label}
                  </p>
                  <h3 className="mt-2 text-xl font-bold text-slate-900">
                    {stage.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {stage.description}
                  </p>

                  <div className="mt-5 space-y-3 border-t border-slate-100 pt-5">
                    {stage.items.map((item) => (
                      <div key={item} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-cyan-500" />
                        <span className="text-sm text-slate-600">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {index < 2 && (
                  <ArrowRight
                    size={20}
                    className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 text-cyan-500 md:block"
                  />
                )}
              </div>
            );
          })}
        </div>

        <p className="mt-10 text-center text-sm font-medium text-slate-500">
          Understand your data. Explore what's next. Make your next move.
        </p>
      </div>
    </section>
  );
}

export default Comparison;
