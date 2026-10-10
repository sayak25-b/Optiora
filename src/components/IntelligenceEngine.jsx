
import {
  Database,
  BrainCircuit,
  TrendingUp,
  Lightbulb,
  ArrowDown,
  Sparkles,
  MessageCircle,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Bring Your Data",
    description: "Collect sales, product, customer and inventory information.",
    icon: Database,
    color: "text-cyan-700 bg-cyan-100",
  },
  {
    number: "02",
    title: "Find the Patterns",
    description: "Analyze business activity and identify meaningful trends.",
    icon: BrainCircuit,
    color: "text-violet-700 bg-violet-100",
  },
  {
    number: "03",
    title: "Predict What's Next",
    description: "Use forecasting models to estimate possible future outcomes.",
    icon: TrendingUp,
    color: "text-blue-700 bg-blue-100",
  },
  {
    number: "04",
    title: "Discover What Matters",
    description: "Present useful insights to support your business decisions.",
    icon: Lightbulb,
    color: "text-emerald-700 bg-emerald-100",
  },
];

function IntelligenceEngine() {
  return (
    <section
      id="intelligence"
      className="relative overflow-hidden bg-[#ECFEFF] px-5 py-20 sm:px-8 sm:py-28"
    >
      <div className="absolute left-1/3 top-0 h-72 w-72 rounded-full bg-cyan-200/40 blur-[100px]" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-violet-200/40 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-cyan-800">
              <Sparkles size={14} />
              Inside Optiora
            </span>

            <h2 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Turn Raw Data Into
              <span className="block text-cyan-700">Meaningful Insight.</span>
            </h2>

            <p className="mt-5 max-w-xl text-base leading-7 text-slate-600">
              Business intelligence shouldn't feel complicated. Optiora brings
              your information together and helps you explore the patterns
              behind your business performance.
            </p>

            <div className="mt-8 rounded-2xl border border-white bg-white/80 p-5 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-100 text-cyan-700">
                  <MessageCircle size={20} />
                </div>
                <div>
                  <p className="font-semibold text-slate-900">
                    A clearer way to think
                  </p>
                  <p className="text-xs text-slate-500">
                    From business questions to useful insights
                  </p>
                </div>
              </div>
              <p className="mt-4 text-sm italic leading-6 text-slate-600">
                "Which products should I focus on next month?"
              </p>
              <div className="mt-3 rounded-xl bg-gradient-to-r from-cyan-50 to-violet-50 p-4">
                <p className="text-sm font-semibold text-slate-800">
                  Start with the data. Look for patterns. Plan your next step.
                </p>
              </div>
            </div>
          </div>

          {/* Workflow */}
          <div className="relative">
            <div className="absolute bottom-10 left-8 top-10 w-px bg-gradient-to-b from-cyan-300 via-violet-300 to-emerald-300 sm:left-10" />

            <div className="space-y-4">
              {steps.map((step) => {
                const Icon = step.icon;

                return (
                  <div
                    key={step.number}
                    className="relative flex gap-4 rounded-2xl border border-white bg-white/90 p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg sm:gap-5 sm:p-5"
                  >
                    <div className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm ring-1 ring-slate-100 sm:h-14 sm:w-14">
                      <div className={`flex h-9 w-9 items-center justify-center rounded-lg sm:h-11 sm:w-11 ${step.color}`}>
                        <Icon size={21} />
                      </div>
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-[10px] font-bold tracking-wider text-cyan-700">
                          STEP {step.number}
                        </span>
                      </div>
                      <h3 className="mt-1 text-lg font-bold text-slate-900">
                        {step.title}
                      </h3>
                      <p className="mt-1 text-sm leading-6 text-slate-500">
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-5 flex items-center gap-3 rounded-2xl bg-slate-900 p-5 text-white">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-cyan-300">
                <Sparkles size={22} />
              </div>
              <div>
                <p className="font-semibold">Your next decision starts here.</p>
                <p className="mt-1 text-sm text-slate-300">
                  Insights to help you plan with greater clarity.
                </p>
              </div>
              <ArrowDown className="ml-auto hidden text-cyan-300 sm:block" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default IntelligenceEngine;
