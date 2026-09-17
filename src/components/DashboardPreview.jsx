import {
  ArrowRight,
  BarChart3,
  Bell,
  Boxes,
  Brain,
  LineChart,
  Package,
  Settings,
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
    ["Total Customers", "326", "12.6%"],
    ["Profit", "₹54,230", "20.1%"],
  ];

  return (
    <section
      id="how-it-works"
      className="bg-[#030712] pb-24 pt-8"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.6fr] lg:items-center">

          {/* Text */}
          <div>

            <p className="text-xs font-semibold uppercase tracking-widest text-violet-400">
              Real time. Real insights.
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl">
              Your Business,
              <br />
              All in One Place.
            </h2>

            <p className="mt-5 max-w-md leading-7 text-slate-400">
              A powerful dashboard that gives you a
              360° view of your business with AI insights
              that drive growth.
            </p>

            <button className="mt-8 flex items-center gap-2 rounded-lg bg-violet-600 px-6 py-3 font-semibold text-white transition hover:bg-violet-500">
              View Live Demo
              <ArrowRight size={17} />
            </button>

          </div>

          {/* Dashboard */}
          <div className="overflow-hidden rounded-2xl border border-indigo-400/30 bg-slate-950 shadow-[0_0_70px_rgba(79,70,229,0.15)]">

            {/* Top bar */}
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">

              <div className="flex items-center gap-4">
                <Logo />

                <div className="hidden text-sm text-slate-300 sm:block">
                  Overview
                </div>
              </div>

              <div className="flex items-center gap-3 text-xs text-slate-400">

                <span className="hidden rounded-md border border-white/10 px-3 py-2 sm:block">
                  This Month⌄
                </span>

                <Bell size={15} />

              </div>

            </div>

            <div className="grid md:grid-cols-[140px_1fr]">

              {/* Sidebar */}
              <aside className="hidden border-r border-white/10 p-3 md:block">

                <div className="space-y-1">

                  {menu.map(([name, Icon], index) => (
                    <div
                      key={name}
                      className={`flex items-center gap-2 rounded-md px-3 py-2 text-[10px] ${
                        index === 0
                          ? "bg-violet-600/30 text-white"
                          : "text-slate-400"
                      }`}
                    >
                      <Icon size={13} />
                      {name}
                    </div>
                  ))}

                </div>

              </aside>

              {/* Dashboard Main */}
              <main className="p-4">

                {/* Stats */}
                <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">

                  {stats.map(([title, value, growth]) => (
                    <div
                      key={title}
                      className="rounded-lg border border-white/5 bg-slate-900 p-3"
                    >

                      <div className="text-[9px] text-slate-500">
                        {title}
                      </div>

                      <div className="mt-2 text-sm font-semibold text-white">
                        {value}
                      </div>

                      <div className="mt-1 text-[8px] text-emerald-400">
                        ↑ {growth}
                      </div>

                    </div>
                  ))}

                </div>

                {/* Graph */}
                <div className="mt-4 grid gap-3 lg:grid-cols-[1fr_180px]">

                  <div className="rounded-lg border border-white/5 bg-slate-900 p-4">

                    <div className="text-xs font-medium text-white">
                      Sales Performance
                    </div>

                    <div className="mt-4 h-40">

                      <svg
                        viewBox="0 0 500 150"
                        className="h-full w-full"
                        preserveAspectRatio="none"
                      >
                        <defs>
                          <linearGradient
                            id="chartGradient"
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
                          fill="url(#chartGradient)"
                        />

                        <path
                          d="M0 120 L50 90 L100 105 L150 75 L200 70 L250 80 L300 48 L350 65 L400 40 L450 52 L500 20"
                          fill="none"
                          stroke="#8b5cf6"
                          strokeWidth="3"
                        />
                      </svg>

                    </div>

                  </div>

                  {/* AI Insight */}
                  <div className="rounded-lg border border-emerald-500/10 bg-slate-900 p-4">

                    <div className="text-xs font-semibold text-white">
                      AI Insight
                    </div>

                    <div className="mt-5">

                      <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400">
                        <Brain size={16} />
                      </div>

                      <p className="text-[11px] leading-5 text-slate-300">
                        Product A demand is expected to increase
                        by 18% next month.
                      </p>

                    </div>

                    <button className="mt-4 text-[10px] text-violet-400">
                      View Details →
                    </button>

                  </div>

                </div>
              </main>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default DashboardPreview;