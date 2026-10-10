
import {
  TrendingUp,
  Package,
  Users,
  ArrowUpRight,
  Sparkles,
  Activity,
} from "lucide-react";

const predictionTypes = [
  {
    title: "Sales Forecasting",
    subtitle: "Explore possible future sales trends.",
    icon: TrendingUp,
    tag: "SALES",
    color: "text-cyan-700 bg-cyan-100",
    bars: [25, 35, 31, 47, 43, 57, 52, 69, 75, 88],
    summary: "Understand possible changes in sales performance.",
  },
  {
    title: "Product Demand",
    subtitle: "Estimate which products may need attention.",
    icon: Package,
    tag: "INVENTORY",
    color: "text-violet-700 bg-violet-100",
    bars: [35, 30, 43, 42, 56, 50, 67, 62, 82, 91],
    summary: "Use demand estimates to support inventory planning.",
  },
  {
    title: "Customer Churn",
    subtitle: "Identify customers who may need attention.",
    icon: Users,
    tag: "CUSTOMERS",
    color: "text-emerald-700 bg-emerald-100",
    bars: [85, 74, 78, 61, 65, 52, 45, 42, 34, 28],
    summary: "Explore customer activity and potential retention risks.",
  },
];

function Predictions() {
  return (
    <section
      id="predictions"
      className="relative overflow-hidden bg-[#F8FAFC] px-5 py-20 sm:px-8 sm:py-28"
    >
      <div className="absolute left-0 top-20 h-80 w-80 rounded-full bg-cyan-100/70 blur-[110px]" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-violet-100/70 blur-[110px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-violet-100 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-wider text-violet-700">
              <Activity size={14} />
              Predictive Analytics
            </span>

            <h2 className="mt-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Don't Just Look Back.
              <span className="block text-violet-700">Explore What's Next.</span>
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              Machine learning can help uncover patterns in historical data and
              estimate possible future outcomes, giving you a better starting
              point for planning.
            </p>
          </div>

          <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-100 text-violet-700">
              <Sparkles size={22} />
            </div>
            <div>
              <p className="font-semibold text-slate-900">Machine Learning</p>
              <p className="mt-1 text-xs text-slate-500">
                Forecasts and pattern analysis
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {predictionTypes.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-violet-200 hover:shadow-xl hover:shadow-violet-100/40 sm:p-7"
              >
                <div className="flex items-start justify-between">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl ${item.color}`}
                  >
                    <Icon size={23} />
                  </div>

                  <span className="rounded-full bg-slate-50 px-3 py-1.5 text-[10px] font-bold tracking-wider text-slate-500">
                    {item.tag}
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-2 min-h-12 text-sm leading-6 text-slate-500">
                  {item.subtitle}
                </p>

                {/* Illustrative chart */}
                <div className="mt-6 rounded-2xl bg-slate-50 p-4">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-600">
                      Trend preview
                    </span>
                    <ArrowUpRight size={16} className="text-violet-600" />
                  </div>

                  <div className="flex h-24 items-end gap-2">
                    {item.bars.map((height, index) => (
                      <div
                        key={index}
                        className="flex h-full flex-1 items-end"
                      >
                        <div
                          className={`w-full rounded-t-md ${
                            item.tag === "SALES"
                              ? "bg-gradient-to-t from-cyan-600 to-cyan-300"
                              : item.tag === "INVENTORY"
                              ? "bg-gradient-to-t from-violet-600 to-violet-300"
                              : "bg-gradient-to-t from-emerald-600 to-emerald-300"
                          }`}
                          style={{ height: `${height}%` }}
                        />
                      </div>
                    ))}
                  </div>

                  <div className="mt-2 flex justify-between text-[10px] text-slate-400">
                    <span>Earlier</span>
                    <span>Recent</span>
                    <span>Estimated trend</span>
                  </div>
                </div>

                <div className="mt-5 border-t border-slate-100 pt-4">
                  <p className="text-sm leading-6 text-slate-600">
                    {item.summary}
                  </p>
                </div>
              </article>
            );
          })}
        </div>

        <p className="mt-8 text-center text-xs leading-5 text-slate-500">
          Illustrative visualizations. Actual forecasts depend on the available
          data and trained models; predictions are estimates, not guarantees.
        </p>
      </div>
    </section>
  );
}

export default Predictions;
