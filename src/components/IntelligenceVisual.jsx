import {
  BarChart3,
  Users,
  Package,
  Boxes,
  Brain,
  TrendingUp,
  TrendingDown,
} from "lucide-react";

function MetricCard({
  icon: Icon,
  title,
  value,
  change,
  positive = true,
  position,
}) {
  return (
    <div
      className={`absolute ${position} w-44 rounded-2xl border border-white/10 bg-[#0c1426]/95 p-4 shadow-2xl backdrop-blur-xl`}
    >
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-400/10 text-cyan-400">
          <Icon size={19} />
        </div>

        <span className="text-xs font-medium text-slate-400">
          {title}
        </span>
      </div>

      {/* Value */}
      <div className="mt-3 text-xl font-bold text-white">
        {value}
      </div>

      {/* Change */}
      <div
        className={`mt-1 flex items-center gap-1 text-xs font-medium ${
          positive ? "text-emerald-400" : "text-red-400"
        }`}
      >
        {positive ? (
          <TrendingUp size={13} />
        ) : (
          <TrendingDown size={13} />
        )}

        {change}
      </div>

      {/* Mini Chart */}
      <div className="mt-4 flex h-8 items-end gap-1">
        {[25, 40, 30, 55, 45, 65, 52, 75, 60, 85].map(
          (height, index) => (
            <div
              key={index}
              className="w-1.5 rounded-full bg-cyan-400/70"
              style={{ height: `${height}%` }}
            />
          )
        )}
      </div>
    </div>
  );
}

function IntelligenceVisual() {
  return (
    <div className="relative mx-auto h-[520px] w-full max-w-[560px]">

      {/* Main Intelligence Glow */}
      <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/20 blur-[100px]" />

      {/* Cyan Secondary Glow */}
      <div className="absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-[90px]" />

      {/* Outer Data Ring */}
      <div className="absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet-500/20" />

      {/* Inner Data Ring */}
      <div className="absolute left-1/2 top-1/2 h-[290px] w-[290px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/20" />

      {/* Center Intelligence Card */}
      <div className="absolute left-1/2 top-1/2 flex h-44 w-44 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-3xl border border-violet-400/60 bg-[#0a1020]/95 shadow-[0_0_60px_rgba(124,58,237,0.25)] backdrop-blur-xl">

        {/* Brain Icon */}
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-indigo-600 shadow-lg shadow-violet-900/40">
          <Brain size={30} className="text-white" />
        </div>

        {/* Brand */}
        <h3 className="mt-4 text-lg font-bold tracking-wide text-white">
          OPTIORA
        </h3>

        <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-cyan-400">
          AI Intelligence
        </p>
      </div>

      {/* Sales */}
      <MetricCard
        icon={BarChart3}
        title="Sales"
        value="₹2,84,500"
        change="18.4%"
        positive={true}
        position="left-1/2 top-0 -translate-x-1/2"
      />

      {/* Customers */}
      <MetricCard
        icon={Users}
        title="Customers"
        value="3,260"
        change="12.6%"
        positive={true}
        position="left-0 top-1/2 -translate-y-1/2"
      />

      {/* Products */}
      <MetricCard
        icon={Package}
        title="Products"
        value="158"
        change="8.7%"
        positive={true}
        position="right-0 top-1/2 -translate-y-1/2"
      />

      {/* Inventory */}
      <MetricCard
        icon={Boxes}
        title="Inventory"
        value="2,340"
        change="4.3%"
        positive={false}
        position="bottom-0 left-1/2 -translate-x-1/2"
      />

      {/* Floating Data Points */}
      <div className="absolute left-[17%] top-[25%] h-3 w-3 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/50" />

      <div className="absolute right-[18%] top-[30%] h-3 w-3 rounded-full bg-violet-400 shadow-lg shadow-violet-400/50" />

      <div className="absolute bottom-[22%] left-[25%] h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-lg shadow-cyan-300/40" />

      <div className="absolute bottom-[27%] right-[24%] h-2 w-2 rounded-full bg-violet-300 shadow-lg shadow-violet-300/40" />
    </div>
  );
}

export default IntelligenceVisual;