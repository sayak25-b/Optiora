import {
  ArrowRight,
  Brain,
  Database,
  TrendingUp,
  Zap,
} from "lucide-react";

function IntelligenceEngine() {

  const steps = [
    {
      number: "01",
      title: "Connect Your Data",
      description:
        "Bring all your business data into one secure platform.",
      icon: Database,
    },
    {
      number: "02",
      title: "Analyze & Understand",
      description:
        "We clean, organize and analyze your data.",
      icon: Brain,
    },
    {
      number: "03",
      title: "Predict the Future",
      description:
        "AI models predict sales, demand, churn and more.",
      icon: TrendingUp,
    },
    {
      number: "04",
      title: "Take Action & Grow",
      description:
        "Get smart recommendations and grow your business.",
      icon: Zap,
    },
  ];

  return (
    <section
      id="intelligence"
      className="section-grid bg-[#030712] py-20"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="text-center">

          <p className="text-xs font-semibold uppercase tracking-widest text-violet-400">
            The Optiora Intelligence Engine
          </p>

          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            From Data to Decisions.
            <br />

            <span className="gradient-text">
              Automatically.
            </span>
          </h2>

        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="group relative rounded-2xl border border-indigo-400/20 bg-slate-950/70 p-6 transition duration-300 hover:-translate-y-2 hover:border-violet-500/50 card-glow"
              >

                <div className="mb-5 flex items-center justify-between">

                  <span className="text-sm text-slate-500">
                    {step.number}
                  </span>

                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-violet-500/50 text-violet-400">
                    <Icon size={21} />
                  </div>

                </div>

                <h3 className="font-semibold text-white">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {step.description}
                </p>

                {index < steps.length - 1 && (
                  <div className="absolute -right-4 top-1/2 z-10 hidden text-violet-500 xl:block">
                    <ArrowRight size={22} />
                  </div>
                )}

              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}

export default IntelligenceEngine;