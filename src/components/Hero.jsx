import { Link } from "react-router-dom";
import {
  FaReact,
  FaNodeJs,
  FaPython,
} from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";
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
    <section className="hero-grid relative overflow-hidden bg-[#030712] pt-28"
    style={{
    backgroundImage: `
      radial-gradient(circle at 75% 50%, rgba(124, 58, 237, 0.12), transparent 35%),
      radial-gradient(circle at 20% 20%, rgba(6, 182, 212, 0.08), transparent 30%)
    `,
  }}>

      {/* Background Glow */}
      <div className="absolute left-0 top-40 h-96 w-96 rounded-full bg-violet-700/10 blur-[130px]" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 pb-20 pt-12 lg:grid-cols-2 lg:px-8 lg:pb-24">

        {/* Left Side */}
        <div className="relative z-10">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
          Intelligent Business Growth Platform
        </p>
          <h1 className="max-w-xl text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[52px]">
            Your Business Data
            <br />
            Has a Story.
            <br />

            <span className="gradient-text">
              We Help You
              <br />
              Understand It.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
            Running a business means making decisions every day.
            Optiora brings your sales, customers, products and inventory
            data together to help you understand what is happening
            and plan what comes next.
          </p>
         {/*Description Tags*/ }
          <div className="mt-5 flex flex-wrap gap-2">
  <span className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-3 py-1.5 text-xs text-cyan-300">
    Sales Forecasting
  </span>

  <span className="rounded-full border border-violet-400/20 bg-violet-400/5 px-3 py-1.5 text-xs text-violet-300">
    Demand Prediction
  </span>

  <span className="rounded-full border border-violet-400/20 bg-cyan-400/5 px-3 py-1.5 text-xs text-cyan-300">
    Customer Churn Analysis
  </span>

  <span className="rounded-full border border-violet-400/20 bg-violet-400/5 px-3 py-1.5 text-xs text-violet-300">
    AI Insights
  </span>
</div>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">

            <a
              href="/register"
              className="flex items-center gap-3 rounded-lg bg-gradient-to-r from-violet-600 to-indigo-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-violet-900/30 transition hover:-translate-y-1"
            >
              Start Exploring
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

             <span className="flex items-center gap-2 text-cyan-400">
              <FaReact />
                 React
              </span>

            <span className="flex items-center gap-2 text-green-400">
             <FaNodeJs />
               Node.js
              </span>

               <span className="flex items-center gap-2 font-semibold text-green-500">
              <SiMongodb size={18} />
                MongoDB
              </span>

              <span className="flex items-center gap-2 font-semibold text-gray-300">
               <SiExpress size={18} />
               Express
              </span>

            <span className="flex items-center gap-2 text-yellow-400">
              <FaPython />
              Python
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