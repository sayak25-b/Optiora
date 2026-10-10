
import { useState } from "react";
import {
  ShoppingBag,
  Coffee,
  Package,
  Store,
  TrendingUp,
  Users,
  Boxes,
  ArrowUpRight,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

const businesses = [
  {
    id: "retail",
    title: "Retail Stores",
    subtitle: "Know what sells and what needs restocking.",
    icon: ShoppingBag,
    metrics: [
      ["Sales growth", "+18.4%"],
      ["Top products", "12"],
      ["Low-stock items", "3"],
    ],
    insight: "Understand product performance and prepare for changing demand.",
    tint: "bg-cyan-50 text-cyan-700 border-cyan-100",
  },
  {
    id: "restaurant",
    title: "Restaurants & Cafés",
    subtitle: "Understand demand and popular menu items.",
    icon: Coffee,
    metrics: [
      ["Sales growth", "+12.2%"],
      ["Popular items", "8"],
      ["Demand status", "Rising"],
    ],
    insight: "Explore sales patterns to plan ingredients and popular items.",
    tint: "bg-amber-50 text-amber-700 border-amber-100",
  },
  {
    id: "wholesale",
    title: "Wholesalers",
    subtitle: "Keep track of inventory and sales movement.",
    icon: Package,
    metrics: [
      ["Sales growth", "+15.6%"],
      ["Products tracked", "158"],
      ["Stock status", "Review"],
    ],
    insight: "Review stock levels and monitor product movement across orders.",
    tint: "bg-violet-50 text-violet-700 border-violet-100",
  },
  {
    id: "local",
    title: "Local Businesses",
    subtitle: "Make everyday business data more useful.",
    icon: Store,
    metrics: [
      ["Sales growth", "+9.8%"],
      ["Customers", "326"],
      ["Insights", "3 new"],
    ],
    insight: "Turn everyday transactions into a clearer picture of performance.",
    tint: "bg-emerald-50 text-emerald-700 border-emerald-100",
  },
];

function BusinessSection() {
  const [activeBusiness, setActiveBusiness] = useState("retail");

  const selected =
    businesses.find((business) => business.id === activeBusiness) ??
    businesses[0];

  const SelectedIcon = selected.icon;

  return (
    <section
      id="businesses"
      className="relative overflow-hidden bg-white px-5 py-20 sm:px-8 sm:py-28"
    >
      <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-violet-100/60 blur-[100px]" />
      <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-cyan-100/60 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-violet-100 bg-violet-50 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-violet-700">
            <Sparkles size={14} />
            Built for Growing Businesses
          </span>

          <h2 className="mt-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Every Business Is Different.
            <span className="block text-violet-700">
              Insights Should Be Relevant.
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            From local shops to growing retail businesses, Optiora helps you
            explore the information that matters to your operations.
          </p>
        </div>

        <div className="mt-12 grid items-start gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Select a business */}
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {businesses.map((business) => {
              const Icon = business.icon;
              const active = business.id === activeBusiness;

              return (
                <button
                  key={business.id}
                  type="button"
                  onClick={() => setActiveBusiness(business.id)}
                  aria-pressed={active}
                  className={`group flex w-full items-start gap-4 rounded-2xl border p-5 text-left transition duration-300 ${
                    active
                      ? "border-cyan-300 bg-cyan-50/80 shadow-lg shadow-cyan-100/50"
                      : "border-slate-200 bg-white hover:border-cyan-200 hover:bg-slate-50"
                  }`}
                >
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border ${business.tint}`}
                  >
                    <Icon size={22} />
                  </div>

                  <div className="flex-1">
                    <h3 className="font-bold text-slate-900">
                      {business.title}
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-slate-500">
                      {business.subtitle}
                    </p>
                  </div>

                  <ArrowUpRight
                    size={18}
                    className={`mt-1 shrink-0 transition ${
                      active
                        ? "text-cyan-700"
                        : "text-slate-300 group-hover:text-cyan-600"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Dynamic preview */}
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 shadow-xl shadow-slate-200/50">
            <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6 text-white sm:p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-cyan-300">
                    Business Preview
                  </p>
                  <h3 className="mt-3 text-2xl font-bold">
                    {selected.title}
                  </h3>
                  <p className="mt-2 max-w-sm text-sm leading-6 text-slate-300">
                    {selected.insight}
                  </p>
                </div>

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-cyan-300 ring-1 ring-white/10">
                  <SelectedIcon size={25} />
                </div>
              </div>

              <div className="mt-7 flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 p-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-400/10 text-emerald-300">
                  <TrendingUp size={19} />
                </div>
                <div>
                  <p className="text-xs text-slate-300">
                    Business performance
                  </p>
                  <p className="mt-1 text-sm font-semibold text-white">
                    Explore your latest trends
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 sm:p-7">
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                {selected.metrics.map(([label, value], index) => (
                  <div
                    key={label}
                    className="rounded-xl border border-slate-200 bg-white p-4"
                  >
                    <p className="text-xs text-slate-500">{label}</p>
                    <p
                      className={`mt-2 text-xl font-bold ${
                        index === 0 ? "text-cyan-700" : "text-slate-900"
                      }`}
                    >
                      {value}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-4 rounded-xl border border-cyan-100 bg-cyan-50/70 p-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2
                    size={19}
                    className="mt-0.5 shrink-0 text-cyan-700"
                  />
                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      A clearer view of your business
                    </p>
                    <p className="mt-1 text-xs leading-5 text-slate-600">
                      Select another business type to explore its sample
                      metrics and insight.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="mt-10 text-center text-sm text-slate-500">
          Different businesses. Different needs. One clearer way to understand
          your data.
        </p>
      </div>
    </section>
  );
}

export default BusinessSection;
