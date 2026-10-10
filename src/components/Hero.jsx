
import { Link } from "react-router-dom";
import {
  FaReact,
  FaNodeJs,
  FaPython,
} from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import {
  ArrowRight,
  Play,
  Sparkles,
  TrendingUp,
  Users,
  Package,
  Boxes,
  Brain,
  Bell,
  LayoutDashboard,
  ShoppingCart,
  BarChart3,
  Settings,
  Search,
  Lightbulb,
  AlertTriangle,
  CheckCircle2,
} from "lucide-react";

const metrics = [
  {
    title: "Sales",
    value: "₹2.84L",
    change: "+18.4%",
    icon: BarChart3,
    color: "bg-cyan-100 text-cyan-600",
  },
  {
    title: "Customers",
    value: "3,260",
    change: "+12.6%",
    icon: Users,
    color: "bg-violet-100 text-violet-600",
  },
  {
    title: "Products",
    value: "158",
    change: "+8.7%",
    icon: Package,
    color: "bg-sky-100 text-sky-600",
  },
  {
    title: "Inventory",
    value: "92%",
    change: "Healthy",
    icon: Boxes,
    color: "bg-emerald-100 text-emerald-600",
  },
];

function DashboardPreview() {
  const bars = [30, 42, 35, 52, 44, 62, 49, 75, 59, 83, 70, 95];

  return (
    <div className="relative mx-auto w-full max-w-[650px]">
      {/* Background glow */}
      <div className="absolute inset-8 rounded-full bg-gradient-to-br from-cyan-200/70 via-sky-100 to-violet-200/70 blur-3xl" />

      {/* Dashboard */}
      <div className="relative rounded-2xl border border-white bg-white/95 p-3 shadow-[0_25px_80px_-25px_rgba(56,189,248,0.35)] sm:p-5">
        {/* Dashboard top bar */}
        <div className="flex items-center justify-between gap-3 border-b border-slate-100 pb-4">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-violet-500 text-white">
              <Brain size={18} />
            </div>
            <span className="font-bold tracking-tight text-slate-900">
              Optiora<span className="text-cyan-500">.</span>
            </span>
          </div>

          <div className="hidden max-w-[220px] flex-1 items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 sm:flex">
            <Search size={14} className="text-slate-400" />
            <span className="text-xs text-slate-400">
              Search your business...
            </span>
          </div>

          <div className="flex items-center gap-3">
            <Bell size={17} className="text-slate-500" />
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-cyan-100 to-violet-100 text-xs font-bold text-slate-700">
              S
            </div>
          </div>
        </div>

        <div className="grid grid-cols-[38px_1fr] gap-3 pt-4 sm:grid-cols-[115px_1fr] sm:gap-5">
          {/* Sidebar */}
          <aside className="space-y-4 border-r border-slate-100 pr-2 sm:pr-3">
            {[
              { icon: LayoutDashboard, label: "Dashboard" },
              { icon: ShoppingCart, label: "Sales" },
              { icon: Users, label: "Customers" },
              { icon: Package, label: "Products" },
              { icon: Boxes, label: "Inventory" },
              { icon: Settings, label: "Settings" },
            ].map(({ icon: Icon, label }, index) => (
              <div
                key={label}
                className={`flex items-center justify-center gap-2 rounded-lg p-2 sm:justify-start ${
                  index === 0
                    ? "bg-cyan-50 text-cyan-700"
                    : "text-slate-400"
                }`}
              >
                <Icon size={15} />
                <span className="hidden text-[11px] sm:inline">
                  {label}
                </span>
              </div>
            ))}
          </aside>

          {/* Main dashboard content */}
          <div className="min-w-0">
            <div className="mb-4">
              <p className="text-base font-bold text-slate-900 sm:text-lg">
                Good morning! 👋
              </p>
              <p className="mt-1 text-[11px] text-slate-500 sm:text-xs">
                Here's what's happening with your business.
              </p>
            </div>

            {/* Metric cards */}
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-3">
              {metrics.map((metric) => {
                const Icon = metric.icon;

                return (
                  <div
                    key={metric.title}
                    className="rounded-xl border border-slate-100 bg-white p-2.5 shadow-sm sm:p-3"
                  >
                    <div
                      className={`mb-2 flex h-7 w-7 items-center justify-center rounded-lg ${metric.color}`}
                    >
                      <Icon size={15} />
                    </div>
                    <p className="text-[10px] text-slate-500">
                      {metric.title}
                    </p>
                    <p className="mt-1 text-base font-bold text-slate-900 sm:text-lg">
                      {metric.value}
                    </p>
                    <p className="mt-1 text-[10px] font-semibold text-emerald-600">
                      {metric.change}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Chart and insight */}
            <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-[1.45fr_1fr]">
              <div className="rounded-xl border border-slate-100 p-3">
                <div className="flex items-center justify-between gap-2">
                  <p className="text-xs font-semibold text-slate-800">
                    Sales Performance
                  </p>
                  <span className="text-[9px] text-cyan-600">
                    This year
                  </span>
                </div>

                <div className="mt-4 flex h-[115px] items-end gap-1.5 border-b border-l border-slate-100 px-2">
                  {bars.map((height, index) => (
                    <div
                      key={index}
                      className="flex flex-1 items-end"
                      style={{ height: "100%" }}
                    >
                      <div
                        className={`w-full rounded-t-sm ${
                          index > 8
                            ? "bg-gradient-to-t from-violet-400 to-violet-300"
                            : "bg-gradient-to-t from-cyan-500 to-sky-300"
                        }`}
                        style={{ height: `${height}%` }}
                      />
                    </div>
                  ))}
                </div>

                <div className="mt-2 flex justify-between text-[9px] text-slate-400">
                  <span>Jan</span>
                  <span>Mar</span>
                  <span>May</span>
                  <span>Jul</span>
                  <span>Sep</span>
                  <span>Dec</span>
                </div>
              </div>

              <div className="rounded-xl border border-violet-100 bg-gradient-to-br from-violet-50 to-cyan-50 p-3">
                <div className="flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-white text-violet-600 shadow-sm">
                    <Sparkles size={15} />
                  </div>
                  <p className="text-xs font-semibold text-slate-800">
                    AI Insight
                  </p>
                </div>

                <p className="mt-3 text-xs font-semibold leading-5 text-slate-800">
                  Demand for Product A may increase by 18%.
                </p>

                <p className="mt-2 text-[10px] leading-4 text-slate-500">
                  Consider checking inventory before your next restock.
                </p>

                <div className="mt-3 flex items-center gap-1.5 text-[10px] font-semibold text-violet-700">
                  <Lightbulb size={13} />
                  Smart recommendation
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating sales card */}
      <div className="absolute -left-3 top-8 hidden items-center gap-3 rounded-2xl border border-white bg-white/95 p-3 shadow-xl sm:flex md:-left-8">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-100 text-cyan-600">
          <TrendingUp size={20} />
        </div>
        <div>
          <p className="text-[10px] text-slate-500">Sales growth</p>
          <p className="text-lg font-bold text-slate-900">+18.4%</p>
        </div>
      </div>

      {/* Floating forecast card */}
      <div className="absolute -right-2 top-28 hidden rounded-2xl border border-white bg-white/95 p-4 shadow-xl sm:block md:-right-7">
        <div className="flex items-center gap-2 text-violet-600">
          <TrendingUp size={18} />
          <span className="text-xs font-semibold">Forecast</span>
        </div>
        <p className="mt-2 text-2xl font-bold text-slate-900">+18%</p>
        <p className="mt-1 text-[10px] text-slate-500">Expected next month</p>
      </div>

      {/* Floating inventory card */}
      <div className="absolute -bottom-5 right-2 flex items-center gap-2 rounded-xl border border-amber-100 bg-white p-3 shadow-xl sm:right-5">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-50 text-amber-600">
          <AlertTriangle size={17} />
        </div>
        <div>
          <p className="text-[10px] font-semibold text-slate-800">
            Inventory alert
          </p>
          <p className="text-[10px] text-slate-500">3 products need attention</p>
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-[#F8FAFC] pt-28 sm:pt-32"
    >
      {/* Soft background gradients */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -right-20 top-10 h-[480px] w-[480px] rounded-full bg-cyan-200/30 blur-[110px]" />
        <div className="absolute right-1/4 top-20 h-[400px] w-[400px] rounded-full bg-violet-200/30 blur-[120px]" />
        <div className="absolute -left-40 bottom-10 h-[350px] w-[350px] rounded-full bg-sky-100/70 blur-[100px]" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 pb-16 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-10 lg:px-8 lg:pb-24">
        {/* Left: Hero text */}
        <div className="relative z-10 max-w-2xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-100 bg-white/80 px-4 py-2 shadow-sm">
            <Sparkles size={15} className="text-cyan-600" />
            <span className="text-xs font-semibold tracking-wide text-sky-700 sm:text-sm">
              AI-Powered Business Analytics
            </span>
          </div>

          <h1 className="text-4xl font-extrabold leading-[1.12] tracking-tight text-[#0F172A] sm:text-5xl md:text-6xl lg:text-[58px]">
            Smarter Insights.
            <br />
            Stronger Decisions.
            <br />
            <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-600 bg-clip-text text-transparent">
              Greater Growth.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            Turn your business data into predictions and actionable insights
            with Optiora. Understand what happened, anticipate what's next,
            and make smarter decisions for a stronger tomorrow.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/register"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-cyan-600 to-teal-500 px-7 py-4 text-sm font-bold text-white shadow-lg shadow-cyan-600/20 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-600/25"
            >
              Explore Optiora
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>

            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-slate-200 bg-white/80 px-7 py-4 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-cyan-300 hover:text-cyan-700"
            >
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-100">
                <Play size={12} fill="currentColor" />
              </span>
              See How It Works
            </a>
          </div>

<div className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-4 text-sm text-slate-500">
  <span className="font-medium text-slate-400">
    Built with
  </span>

  <span className="flex items-center gap-2 font-semibold text-sky-600">
    <FaReact size={20} />
    React
  </span>

  <span className="flex items-center gap-2 font-semibold text-emerald-600">
    <FaNodeJs size={20} />
    Node.js
  </span>

  <span className="flex items-center gap-2 font-semibold text-green-700">
    <SiMongodb size={19} />
    MongoDB
  </span>

  <span className="flex items-center gap-2 font-semibold text-violet-600">
    <FaPython size={20} />
    Python ML
  </span>
</div>
        </div>

        {/* Right: Dashboard illustration */}
        <div className="relative z-10 py-5 sm:py-8 lg:py-12">
          <DashboardPreview />
        </div>
      </div>

      {/* Bottom metrics strip */}
      <div className="mx-auto max-w-6xl px-5 pb-12 sm:px-8 lg:px-8">
        <div className="grid grid-cols-2 gap-3 rounded-3xl border border-white bg-white/90 p-4 shadow-[0_15px_50px_-25px_rgba(15,23,42,0.15)] backdrop-blur-xl sm:grid-cols-3 sm:p-5 lg:grid-cols-5">
          {[
            {
              title: "Sales",
              value: "+18.4%",
              icon: BarChart3,
              color: "bg-cyan-100 text-cyan-600",
            },
            {
              title: "Customers",
              value: "+12.6%",
              icon: Users,
              color: "bg-violet-100 text-violet-600",
            },
            {
              title: "Products",
              value: "+8.7%",
              icon: Package,
              color: "bg-sky-100 text-sky-600",
            },
            {
              title: "Inventory",
              value: "Healthy",
              icon: Boxes,
              color: "bg-emerald-100 text-emerald-600",
            },
            {
              title: "AI Insights",
              value: "3 New",
              icon: Sparkles,
              color: "bg-purple-100 text-purple-600",
            },
          ].map(({ title, value, icon: Icon, color }) => (
            <div
              key={title}
              className="flex items-center gap-3 rounded-2xl p-2 sm:p-3"
            >
              <div
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${color}`}
              >
                <Icon size={19} />
              </div>
              <div>
                <p className="text-xs text-slate-500">{title}</p>
                <p className="mt-1 text-sm font-bold text-slate-800">
                  {value}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom wave */}
      <div className="pointer-events-none absolute bottom-0 left-0 -z-10 h-16 w-full bg-gradient-to-r from-cyan-100/50 via-white to-violet-100/60" />
    </section>
  );
}

export default Hero;
