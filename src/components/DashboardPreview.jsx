
import {
  LayoutDashboard,
  ShoppingCart,
  Users,
  Package,
  Boxes,
  Settings,
  Bell,
  Search,
  TrendingUp,
  TrendingDown,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

const stats = [
  { title: "Total Sales", value: "₹2.84L", change: "+18.4%", up: true },
  { title: "Customers", value: "3,260", change: "+12.6%", up: true },
  { title: "Products", value: "158", change: "+8.7%", up: true },
];

const chartBars = [32, 44, 39, 57, 46, 68, 53, 75, 61, 86, 70, 96];

function DashboardPreview() {
  return (
    <section
      id="how-it-works"
      className="overflow-hidden bg-[#F1F5F9] px-5 py-20 sm:px-8 sm:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-wider text-cyan-700">
            Your Business, Clearly
          </span>

          <h2 className="mt-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            See What Matters.
            <span className="block text-cyan-700">Know Where to Focus.</span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
            Bring essential business metrics, performance trends and AI-powered
            insights together in one organized view.
          </p>
        </div>

        {/* Dashboard frame */}
        <div className="relative mt-14">
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-r from-cyan-200/60 via-white to-violet-200/60 blur-2xl" />

          <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl shadow-slate-300/40 sm:rounded-3xl">
            {/* Top bar */}
            <div className="flex items-center justify-between border-b border-slate-100 px-4 py-4 sm:px-6">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500 to-violet-500 text-white">
                  <Sparkles size={17} />
                </div>
                <span className="font-bold text-slate-900">
                  Optiora<span className="text-cyan-500">.</span>
                </span>
                <span className="ml-2 hidden rounded-md bg-cyan-50 px-2 py-1 text-[10px] font-semibold text-cyan-700 sm:inline">
                  BUSINESS OVERVIEW
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="hidden items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 md:flex">
                  <Search size={14} className="text-slate-400" />
                  <span className="text-xs text-slate-400">
                    Search dashboard
                  </span>
                </div>
                <Bell size={18} className="text-slate-500" />
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-violet-100 text-xs font-bold text-violet-700">
                  S
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-[180px_1fr]">
              {/* Sidebar */}
              <aside className="hidden border-r border-slate-100 bg-slate-50/70 p-4 md:block">
                <p className="mb-4 px-3 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                  Workspace
                </p>

                {[
                  { icon: LayoutDashboard, label: "Overview", active: true },
                  { icon: ShoppingCart, label: "Sales" },
                  { icon: Users, label: "Customers" },
                  { icon: Package, label: "Products" },
                  { icon: Boxes, label: "Inventory" },
                  { icon: Settings, label: "Settings" },
                ].map(({ icon: Icon, label, active }) => (
                  <div
                    key={label}
                    className={`mb-1 flex items-center gap-3 rounded-lg px-3 py-3 text-xs font-medium ${
                      active
                        ? "bg-cyan-50 text-cyan-800"
                        : "text-slate-500"
                    }`}
                  >
                    <Icon size={16} />
                    {label}
                  </div>
                ))}
              </aside>

              {/* Dashboard main area */}
              <div className="min-w-0 p-4 sm:p-6 lg:p-8">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 sm:text-2xl">
                      Good morning 👋
                    </h3>
                    <p className="mt-1 text-sm text-slate-500">
                      Here's an overview of your business performance.
                    </p>
                  </div>
                  <button
                    type="button"
                    className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-600"
                  >
                    Last 30 days
                  </button>
                </div>

                {/* Stats */}
                <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
                  {stats.map((stat) => (
                    <div
                      key={stat.title}
                      className="rounded-xl border border-slate-100 bg-white p-4"
                    >
                      <p className="text-xs text-slate-500">{stat.title}</p>
                      <div className="mt-2 flex flex-wrap items-center justify-between gap-2">
                        <p className="text-2xl font-bold text-slate-900">
                          {stat.value}
                        </p>
                        <span className="flex items-center gap-1 rounded-md bg-emerald-50 px-2 py-1 text-[10px] font-semibold text-emerald-700">
                          <TrendingUp size={12} />
                          {stat.change}
                        </span>
                      </div>
                      <p className="mt-2 text-[10px] text-slate-400">
                        Compared with the previous period
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-5 grid gap-5 lg:grid-cols-[1.5fr_1fr]">
                  {/* Chart */}
                  <div className="rounded-xl border border-slate-100 p-4 sm:p-5">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-bold text-slate-800">
                          Sales Performance
                        </h4>
                        <p className="mt-1 text-xs text-slate-400">
                          Monthly sales overview
                        </p>
                      </div>
                      <ArrowUpRight size={18} className="text-cyan-600" />
                    </div>

                    <div className="mt-6 flex h-40 items-end gap-2 border-b border-l border-slate-100 px-2">
                      {chartBars.map((height, index) => (
                        <div
                          key={index}
                          className="flex h-full flex-1 items-end"
                        >
                          <div
                            className={`w-full rounded-t-md ${
                              index > 8
                                ? "bg-gradient-to-t from-violet-500 to-violet-300"
                                : "bg-gradient-to-t from-cyan-600 to-cyan-300"
                            }`}
                            style={{ height: `${height}%` }}
                          />
                        </div>
                      ))}
                    </div>

                    <div className="mt-2 flex justify-between text-[10px] text-slate-400">
                      <span>Jan</span>
                      <span>Mar</span>
                      <span>May</span>
                      <span>Jul</span>
                      <span>Sep</span>
                      <span>Dec</span>
                    </div>
                  </div>

                  {/* Insight */}
                  <div className="rounded-xl border border-violet-100 bg-gradient-to-br from-violet-50 via-white to-cyan-50 p-4 sm:p-5">
                    <div className="flex items-center gap-2">
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-violet-600 shadow-sm">
                        <Sparkles size={19} />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900">
                          Optiora Insight
                        </h4>
                        <p className="text-[10px] text-slate-500">
                          Example recommendation
                        </p>
                      </div>
                    </div>

                    <p className="mt-5 text-sm font-semibold leading-6 text-slate-800">
                      Product A demand may increase by 18% next month.
                    </p>

                    <p className="mt-3 text-xs leading-5 text-slate-500">
                      Consider reviewing its inventory before your next
                      restocking cycle.
                    </p>

                    <div className="mt-5 rounded-xl border border-white bg-white/80 p-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-slate-500">
                          Inventory alerts
                        </span>
                        <TrendingDown size={16} className="text-amber-600" />
                      </div>
                      <p className="mt-1 text-lg font-bold text-slate-900">
                        3 products
                      </p>
                      <p className="text-[10px] text-slate-500">
                        Need an inventory review
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="mt-8 text-center text-sm text-slate-500">
          One view of your data. A clearer starting point for your next decision.
        </p>
      </div>
    </section>
  );
}

export default DashboardPreview;
