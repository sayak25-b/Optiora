import {
  ArrowRight,
  BarChart3,
  Bell,
  Boxes,
  Brain,
  CheckCircle2,
  LineChart,
  Package,
  Settings,
  Sparkles,
  Users,
} from "lucide-react";

import Logo from "./Logo";

function DashboardPreview() {
  const menu = [
    ["Overview", BarChart3],
    ["Sales", LineChart],
    ["Products", Package],
    ["Customers", Users],
    ["Inventory", Boxes],
    ["AI Insights", Brain],
    ["Reports", BarChart3],
    ["Settings", Settings],
  ];

  const stats = [
    ["Total Revenue", "₹2,84,500", "18.4%"],
    ["Total Sales", "1,284", "16.2%"],
    ["Customers", "326", "12.6%"],
    ["Profit", "₹54,230", "20.1%"],
  ];

  return (
    <section
  id="how-it-works"
  className="relative overflow-hidden bg-[#030712] py-20 sm:py-24"
>
      {/* Background glow */}
<div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/5 blur-[140px]" />

<div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-violet-500/5 blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">

        {/* Section heading */}
        <div className="mx-auto max-w-3xl text-center">

          <div className="mx-auto mb-5 flex w-fit items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2">
            <BarChart3 size={15} className="text-cyan-400" />

            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
              Your Business at a Glance
            </span>
          </div>

          <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            See Your Business Clearly.
            <br />

            <span className="gradient-text">
              Know What Needs Your Attention.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            Instead of searching through spreadsheets and reports,
            get a simple view of your sales, customers, products,
            inventory and the insights that matter most.
          </p>

        </div>

        {/* Human question */}
        <div className="mx-auto mt-10 max-w-2xl text-center">

          <div className="inline-flex flex-wrap items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-3">

            <span className="text-sm text-slate-500">
              Start your day with one question:
            </span>

            <span className="text-sm font-semibold text-white">
              "What needs my attention today?"
            </span>

          </div>

        </div>

        {/* Dashboard */}
        <div className="relative mt-12">

          {/* Glow behind dashboard */}
          <div className="absolute left-1/2 top-1/2 h-80 w-4/5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/10 blur-[100px]" />

          <div className="relative overflow-hidden rounded-2xl border border-indigo-400/20 bg-[#080d18] shadow-[0_0_80px_rgba(79,70,229,0.15)]">

            {/* Top bar */}
            <div className="flex items-center justify-between border-b border-white/10 bg-[#0a1020]/90 px-4 py-3">

              <div className="flex items-center gap-4">

                <Logo />

                <div className="hidden h-5 w-px bg-white/10 sm:block" />

                <div className="hidden text-sm text-slate-300 sm:block">
                  Overview
                </div>

              </div>

              <div className="flex items-center gap-3 text-xs text-slate-400">

                <span className="hidden rounded-md border border-white/10 bg-white/[0.02] px-3 py-2 sm:block">
                  This Month⌄
                </span>

                <div className="relative">
                  <Bell size={16} />

                  <span className="absolute -right-1 -top-1 h-1.5 w-1.5 rounded-full bg-cyan-400" />
                </div>

              </div>

            </div>

            <div className="grid md:grid-cols-[150px_1fr]">

              {/* Sidebar */}
              <aside className="hidden border-r border-white/10 bg-[#070c17] p-3 md:block">

                <div className="mb-4 px-3 pt-2 text-[9px] font-semibold uppercase tracking-widest text-slate-600">
                  Workspace
                </div>

                <div className="space-y-1">

                  {menu.map(([name, Icon], index) => (
                    <div
                      key={name}
                      className={`flex items-center gap-2 rounded-lg px-3 py-2.5 text-[10px] transition ${
                        index === 0
                          ? "bg-violet-600/20 text-white"
                          : "text-slate-500"
                      }`}
                    >
                      <Icon size={13} />
                      {name}
                    </div>
                  ))}

                </div>

              </aside>

              {/* Dashboard Main */}
              <main className="p-4 sm:p-5">

                {/* Welcome */}
                <div className="mb-5 flex flex-col justify-between gap-3 sm:flex-row sm:items-center">

                  <div>
                    <p className="text-[10px] text-slate-500">
                      Today
                    </p>

                    <h3 className="mt-1 text-sm font-semibold text-white sm:text-base">
                      Good morning 👋
                    </h3>
                  </div>

                  <div className="flex items-center gap-2 text-[10px] text-emerald-400">

                    <CheckCircle2 size={13} />

                    Business is performing well

                  </div>

                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">

                  {stats.map(([title, value, growth]) => (
                    <div
                      key={title}
                      className="rounded-xl border border-white/5 bg-[#0c1426] p-3.5 transition hover:border-white/10"
                    >

                      <div className="text-[9px] text-slate-500">
                        {title}
                      </div>

                      <div className="mt-2 text-sm font-semibold text-white sm:text-base">
                        {value}
                      </div>

                      <div className="mt-1 text-[8px] font-medium text-emerald-400">
                        ↑ {growth} this month
                      </div>

                    </div>
                  ))}

                </div>

                {/* Main dashboard area */}
                <div className="mt-4 grid gap-3 lg:grid-cols-[1fr_220px]">

                  {/* Sales chart */}
                  <div className="rounded-xl border border-white/5 bg-[#0c1426] p-4">

                    <div className="flex items-center justify-between">

                      <div>
                        <div className="text-xs font-semibold text-white">
                          Sales Performance
                        </div>

                        <div className="mt-1 text-[9px] text-slate-500">
                          Your sales are trending upward
                        </div>
                      </div>

                      <div className="flex items-center gap-1 text-[9px] text-emerald-400">
                        <TrendingUpIcon />
                        18.4%
                      </div>

                    </div>

                    <div className="mt-4 h-40">

                      <svg
                        viewBox="0 0 500 150"
                        className="h-full w-full"
                        preserveAspectRatio="none"
                      >
                        <defs>
                          <linearGradient
                            id="dashboardChartGradient"
                            x1="0"
                            x2="0"
                            y1="0"
                            y2="1"
                          >
                            <stop
                              offset="0%"
                              stopColor="#8b5cf6"
                              stopOpacity="0.35"
                            />

                            <stop
                              offset="100%"
                              stopColor="#8b5cf6"
                              stopOpacity="0"
                            />
                          </linearGradient>
                        </defs>

                        <path
                          d="M0 120 L50 90 L100 105 L150 75 L200 70 L250 80 L300 48 L350 65 L400 40 L450 52 L500 20 L500 150 L0 150 Z"
                          fill="url(#dashboardChartGradient)"
                        />

                        <path
                          d="M0 120 L50 90 L100 105 L150 75 L200 70 L250 80 L300 48 L350 65 L400 40 L450 52 L500 20"
                          fill="none"
                          stroke="#8b5cf6"
                          strokeWidth="3"
                        />
                      </svg>

                    </div>

                    <div className="mt-2 flex justify-between text-[8px] text-slate-600">
                      <span>Week 1</span>
                      <span>Week 2</span>
                      <span>Week 3</span>
                      <span>Week 4</span>
                    </div>

                  </div>

                  {/* AI Insight */}
                  <div className="rounded-xl border border-cyan-400/10 bg-[#0c1426] p-4">

                    <div className="flex items-center gap-2">

                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-400/10 text-cyan-400">
                        <Sparkles size={15} />
                      </div>

                      <div>
                        <div className="text-xs font-semibold text-white">
                          Optiora Insight
                        </div>

                        <div className="text-[8px] text-slate-500">
                          Something worth knowing
                        </div>
                      </div>

                    </div>

                    <div className="mt-5 rounded-lg border border-white/5 bg-white/[0.02] p-3">

                      <p className="text-[10px] leading-5 text-slate-300">
                        Product A demand is expected to increase
                        by <span className="font-semibold text-cyan-400">18%</span>{" "}
                        next month.
                      </p>

                    </div>

                    <div className="mt-4 flex items-start gap-2">

                      <CheckCircle2
                        size={13}
                        className="mt-0.5 shrink-0 text-emerald-400"
                      />

                      <p className="text-[9px] leading-4 text-slate-500">
                        Consider checking its inventory before
                        your next restock.
                      </p>

                    </div>

                    <button className="mt-4 flex items-center gap-1 text-[10px] font-medium text-cyan-400">
                      View Insight
                      <ArrowRight size={11} />
                    </button>

                  </div>

                </div>

                {/* What needs attention */}
                <div className="mt-3 rounded-xl border border-white/5 bg-[#0c1426] p-4">

                  <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">

                    <div>
                      <div className="text-xs font-semibold text-white">
                        What needs your attention?
                      </div>

                      <p className="mt-1 text-[9px] text-slate-500">
                        A quick look at areas that may need action.
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2">

                      <AttentionBadge
                        label="3 Low Stock"
                        type="warning"
                      />

                      <AttentionBadge
                        label="12 Returning Customers"
                        type="normal"
                      />

                      <AttentionBadge
                        label="2 New Opportunities"
                        type="success"
                      />

                    </div>

                  </div>

                </div>

              </main>

            </div>
          </div>
        </div>

        {/* Bottom message */}
        <div className="mx-auto mt-10 max-w-2xl text-center">

          <p className="text-sm leading-6 text-slate-400">
            You don't need to understand every number.
            <span className="font-medium text-white">
              {" "}Optiora helps you understand what matters.
            </span>
          </p>

        </div>

      </div>
    </section>
  );
}

/* Small trend icon */
function TrendingUpIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
      <polyline points="17 6 23 6 23 12" />
    </svg>
  );
}

/* Attention badge */
function AttentionBadge({ label, type }) {
  const styles = {
    warning:
      "border-amber-400/10 bg-amber-400/5 text-amber-300",
    normal:
      "border-cyan-400/10 bg-cyan-400/5 text-cyan-300",
    success:
      "border-emerald-400/10 bg-emerald-400/5 text-emerald-300",
  };

  return (
    <div
      className={`rounded-lg border px-3 py-2 text-[9px] font-medium ${styles[type]}`}
    >
      {label}
    </div>
  );
}

export default DashboardPreview;