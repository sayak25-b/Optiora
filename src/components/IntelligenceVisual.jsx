import {
  BarChart3,
  Boxes,
  Brain,
  Package,
  Users,
} from "lucide-react";

import DataCard from "./DataCard";

function IntelligenceVisual() {
  return (
    <div className="relative mx-auto h-[510px] w-full max-w-[580px]">

      {/* Main Glow */}
      <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/20 blur-[90px]" />

      {/* Outer Orbit */}
      <div className="orbit absolute left-1/2 top-1/2 h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full sm:h-[390px] sm:w-[390px]" />

      {/* Inner Orbit */}
      <div className="orbit absolute left-1/2 top-1/2 h-[270px] w-[270px] -translate-x-1/2 -translate-y-1/2 rounded-full sm:h-[315px] sm:w-[315px]" />

      {/* Orbit Dots */}
      <div className="absolute left-[19%] top-[35%] h-3 w-3 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/60" />

      <div className="absolute right-[20%] top-[35%] h-3 w-3 rounded-full bg-violet-500 shadow-lg shadow-violet-500/60" />

      <div className="absolute bottom-[27%] left-[27%] h-3 w-3 rounded-full bg-blue-400" />

      <div className="absolute bottom-[27%] right-[27%] h-3 w-3 rounded-full bg-violet-400" />

      {/* Sales */}
      <DataCard
        type="Sales"
        value="₹2,84,500"
        change="↑ 18.4%"
        icon={BarChart3}
        position="left-1/2 top-0 -translate-x-1/2"
      />

      {/* Customers */}
      <DataCard
        type="Customers"
        value="326"
        change="↑ 12.6%"
        icon={Users}
        position="left-0 top-[150px]"
      />

      {/* Products */}
      <DataCard
        type="Products"
        value="158"
        change="↑ 8.7%"
        icon={Package}
        position="right-0 top-[150px]"
      />

      {/* Inventory */}
      <DataCard
        type="Inventory"
        value="2,340"
        change="↓ 4.3%"
        icon={Boxes}
        position="bottom-0 left-1/2 -translate-x-1/2"
      />

      {/* Center AI */}
      <div className="absolute left-1/2 top-1/2 flex h-40 w-40 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[30px] border-2 border-indigo-400 bg-slate-950 shadow-[0_0_60px_rgba(99,102,241,0.3)]">

        <div className="text-center">
          <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-indigo-500">
            <Brain size={27} className="text-white" />
          </div>

          <div className="text-lg font-bold text-white">
            OPTIORA
          </div>

          <div className="text-[9px] tracking-widest text-slate-400">
            AI INTELLIGENCE
          </div>
        </div>

      </div>
    </div>
  );
}

export default IntelligenceVisual;