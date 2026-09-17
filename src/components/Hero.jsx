import { Link } from "react-router-dom";
<Link
  to="/register"
  className="flex items-center gap-3 rounded-lg bg-gradient-to-r from-violet-600 to-indigo-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-violet-900/30 transition hover:-translate-y-1"
>
  Explore Optiora
  <ArrowRight size={17} />
</Link>
import {
  ArrowRight,
  Play,
} from "lucide-react";

import IntelligenceVisual from "./IntelligenceVisual";

function Hero() {
  return (
    <section className="hero-grid relative overflow-hidden bg-[#030712] pt-28">

      {/* Background Glow */}
      <div className="absolute left-0 top-40 h-96 w-96 rounded-full bg-violet-700/10 blur-[130px]" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 pb-20 pt-12 lg:grid-cols-2 lg:px-8 lg:pb-24">

        {/* Left Side */}
        <div className="relative z-10">

          <h1 className="max-w-xl text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[52px]">
            Your Business Data
            <br />
            Has a Story.
            <br />

            <span className="gradient-text">
              Optiora Helps You
              <br />
              Understand It.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
            Optiora is an AI-powered platform that turns
            your sales, customers, products and inventory
            data into predictions and actionable insights.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">

            <a
              href="/register"
              className="flex items-center gap-3 rounded-lg bg-gradient-to-r from-violet-600 to-indigo-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-violet-900/30 transition hover:-translate-y-1"
            >
              Explore Optiora
              <ArrowRight size={17} />
            </a>

            <a
              href="#how-it-works"
              className="flex items-center gap-3 rounded-lg border border-slate-600 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-violet-500"
            >
              See How It Works
              <Play size={15} fill="currentColor" />
            </a>

          </div>

          {/* Technologies */}
          <div className="mt-10 flex flex-wrap items-center gap-5 text-sm text-slate-400">

            <span>Built with</span>

            <span className="font-semibold text-cyan-400">
              ⚛ React
            </span>

            <span className="font-semibold text-emerald-400">
              ◇ Node
            </span>

            <span className="font-semibold text-green-500">
              ● MongoDB
            </span>

            <span className="text-slate-400">
              Express
            </span>

            <span className="font-semibold text-yellow-400">
              🐍 Python
            </span>

          </div>
        </div>

        {/* Right Side */}
        <div className="relative">
          <IntelligenceVisual />
        </div>

      </div>
    </section>
  );
}

export default Hero;