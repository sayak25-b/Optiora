import {
  ArrowRight,
  Brain,
  Database,
  Lightbulb,
  TrendingUp,
  Zap,
  MessageCircle,
  CheckCircle2,
} from "lucide-react";

function IntelligenceEngine() {
  const steps = [
    {
      number: "01",
      title: "Bring Your Business Data",
      question: "What is happening?",
      description:
        "Connect your sales, products, customers and inventory data in one place.",
      icon: Database,
      color: "cyan",
    },
    {
      number: "02",
      title: "Understand Your Business",
      question: "Why is it happening?",
      description:
        "Optiora organizes your data and finds patterns that are easy to understand.",
      icon: Brain,
      color: "violet",
    },
    {
      number: "03",
      title: "See What Comes Next",
      question: "What could happen next?",
      description:
        "Predict sales, product demand and customer behavior using your business history.",
      icon: TrendingUp,
      color: "cyan",
    },
    {
      number: "04",
      title: "Know What to Focus On",
      question: "What should I do?",
      description:
        "Turn insights into practical actions so you can make your next business decision with confidence.",
      icon: Lightbulb,
      color: "violet",
    },
  ];

  return (
    <section
  id="intelligence"
  className="relative overflow-hidden bg-[#07111f] py-20 sm:py-24"
>
      {/* Background glow */}
<div className="pointer-events-none absolute left-0 top-1/4 h-96 w-96 rounded-full bg-cyan-400/10 blur-[140px]" />

<div className="pointer-events-none absolute right-0 bottom-0 h-96 w-96 rounded-full bg-violet-500/10 blur-[140px]" />

      {/* Background grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.025]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">

          <div className="mx-auto mb-5 flex w-fit items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2">
            <Brain size={15} className="text-cyan-400" />

            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
              The Optiora Intelligence Engine
            </p>
          </div>

          <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            Your Data Has Answers.
            <br />

            <span className="gradient-text">
              Optiora Helps You Find Them.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            Running a business means making decisions every day.
            Optiora turns your business data into clear insights,
            predictions and practical next steps.
          </p>
        </div>

        {/* Human story */}
        <div className="mx-auto mt-12 max-w-4xl">

          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#080d18]/80 p-6 shadow-2xl backdrop-blur-xl sm:p-8">

            {/* Small glow */}
            <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-violet-500/10 blur-3xl" />

            <div className="relative z-10 grid gap-8 md:grid-cols-[1fr_auto_1fr] md:items-center">

              {/* Business owner side */}
              <div>
                <div className="flex items-center gap-3">

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5">
                    <MessageCircle
                      size={20}
                      className="text-cyan-400"
                    />
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-wider text-slate-500">
                      You
                    </p>

                    <p className="text-sm font-semibold text-white">
                      A business question
                    </p>
                  </div>
                </div>

                <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                  <p className="text-sm leading-6 text-slate-300">
                    "My sales increased this month, but which products
                    should I focus on next?"
                  </p>
                </div>
              </div>

              {/* Center */}
              <div className="flex justify-center">

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-violet-400/40 bg-gradient-to-br from-violet-600 to-indigo-600 shadow-lg shadow-violet-900/30">
                  <Brain size={28} className="text-white" />
                </div>

              </div>

              {/* Optiora side */}
              <div>
                <div className="flex items-center gap-3">

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400/10">
                    <Zap
                      size={20}
                      className="text-cyan-400"
                    />
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-wider text-slate-500">
                      Optiora
                    </p>

                    <p className="text-sm font-semibold text-white">
                      A clearer direction
                    </p>
                  </div>
                </div>

                <div className="mt-5 rounded-2xl border border-cyan-400/10 bg-cyan-400/[0.03] p-5">
                  <p className="text-sm leading-6 text-slate-300">
                    "Product A is showing strong demand. Consider
                    monitoring its inventory and upcoming sales trend."
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Flow title */}
        <div className="mt-16 text-center">

          <p className="text-sm font-medium text-slate-400">
            From your business data to your next decision
          </p>

        </div>

        {/* Steps */}
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">

          {steps.map((step, index) => {
            const Icon = step.icon;

            const isCyan = step.color === "cyan";

            return (
              <div
                key={step.number}
                className="group relative"
              >

                <div
                  className={`relative h-full overflow-hidden rounded-2xl border p-6 transition duration-300 hover:-translate-y-2 ${
                    isCyan
                      ? "border-cyan-400/15 bg-cyan-400/[0.025] hover:border-cyan-400/40"
                      : "border-violet-400/15 bg-violet-400/[0.025] hover:border-violet-400/40"
                  }`}
                >

                  {/* Step number */}
                  <div className="flex items-center justify-between">

                    <span className="text-xs font-semibold tracking-widest text-slate-600">
                      {step.number}
                    </span>

                    <div
                      className={`flex h-11 w-11 items-center justify-center rounded-xl border ${
                        isCyan
                          ? "border-cyan-400/20 bg-cyan-400/10 text-cyan-400"
                          : "border-violet-400/20 bg-violet-400/10 text-violet-400"
                      }`}
                    >
                      <Icon size={21} />
                    </div>

                  </div>

                  {/* Content */}
                  <h3 className="mt-6 text-lg font-semibold text-white">
                    {step.title}
                  </h3>

                  <p
                    className={`mt-2 text-sm font-medium ${
                      isCyan
                        ? "text-cyan-400"
                        : "text-violet-400"
                    }`}
                  >
                    {step.question}
                  </p>

                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    {step.description}
                  </p>

                  {/* Human action indicator */}
                  <div className="mt-5 flex items-center gap-2 border-t border-white/5 pt-4">

                    <CheckCircle2
                      size={15}
                      className={
                        isCyan
                          ? "text-cyan-400"
                          : "text-violet-400"
                      }
                    />

                    <span className="text-xs text-slate-500">
                      Clearer business understanding
                    </span>

                  </div>
                </div>

                {/* Desktop arrow */}
                {index < steps.length - 1 && (
                  <div className="absolute -right-4 top-1/2 z-20 hidden -translate-y-1/2 xl:block">

                    <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-[#030712]">

                      <ArrowRight
                        size={15}
                        className="text-slate-500"
                      />

                    </div>

                  </div>
                )}

              </div>
            );
          })}

        </div>

        {/* Bottom human message */}
        <div className="mx-auto mt-12 max-w-3xl text-center">

          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-3">

            <TrendingUp
              size={16}
              className="text-cyan-400"
            />

            <span className="text-sm text-slate-300">
              Less time searching through numbers.
              <span className="ml-1 font-semibold text-white">
                More time making decisions.
              </span>
            </span>

          </div>

        </div>

      </div>
    </section>
  );
}

export default IntelligenceEngine;